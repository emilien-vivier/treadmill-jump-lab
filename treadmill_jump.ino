/*
  Treadmill + jumping character, Arduino Uno / Nano (ATmega328P, 16 MHz)

  Treadmill : motor -> bevel gears Z1/Z2 -> driveshaft -> bevel gears Z3/Z4 -> 2 roller axles (4 rubber wheels)
              speed loop = feed-forward from the physics model + PI on the wheel encoder
  Character : servo -> horn -> bielle -> pinion crank -> pinion / crémaillère (rack)
  Collision : liaison pivot on the arm, read by a potentiometer (or a microswitch)

  Pins
    D2  encoder (slotted disc or hall sensor on a roller axle)   INT0
    D3  motor PWM  (BTS7960 RPWM, or 0-10 V filter for a VFD)     Timer2, 3.9 kHz
    D11 BTS7960 LPWM, held LOW (one direction only)
    D8  BTS7960 R_EN + L_EN  /  VFD RUN relay (through an optocoupler)
    D4  jump / start button to GND (INPUT_PULLUP)
    D9  servo signal                                              Timer1 (Servo lib)
    A0  pivot potentiometer wiper (10 kΩ linear)
    D7  pivot microswitch to GND (if USE_POT = 0)
    D13 game-over LED

  Do not use tone() (Timer2) or analogWrite() on D9/D10 (Timer1, taken by Servo).
  Power the servo from its own 5-6 V supply (>= 3 A, 1000 µF cap). Common GND with the Arduino.
*/

#include <Servo.h>

// ===== CONFIG BEGIN (paste the block exported by the simulator here) =====
#define MOTOR_DC 1            // 1 = DC motor + H-bridge, 0 = AC motor + VFD (0-10 V input)
#define USE_POT  1            // 1 = potentiometer on the pivot, 0 = microswitch
const float WHEEL_D          = 0.060;   // m, roller wheel diameter
const int   ENC_SLOTS        = 20;      // pulses per roller revolution
const unsigned long ENC_TIMEOUT_US = 150000UL;
const float V_TARGET         = 0.40;    // m/s, belt speed
const float A_MAX            = 0.50;    // m/s², start ramp (keep below the traction limit)
const float A_BRAKE          = 2.00;    // m/s², stop ramp after a collision
const float KP               = 0.910;   // command per m/s
const float KI               = 4.550;   // command per m (integral)
const float FF_U0            = 0.095;   // feed-forward: u = FF_U0 + FF_U1 * v
const float FF_U1            = 1.517;
const unsigned int CTRL_MS   = 20;      // 50 Hz control loop
const int   SERVO_DOWN_DEG   = 30;
const int   SERVO_UP_DEG     = 150;
const unsigned int RISE_MS   = 323;     // from the jump simulation
const unsigned int HOLD_MS   = 250;
const unsigned int FALL_MS   = 393;
const unsigned int COOLDOWN_MS = 150;
const int   THR_COUNTS       = 15;      // ADC counts = threshold angle × 1023 / pot range
const int   DEBOUNCE_N       = 3;       // consecutive samples over threshold
const unsigned long SAMPLE_US = 1000UL; // 1000 Hz collision sampling
// ===== CONFIG END =====

const int PIN_ENC = 2, PIN_PWM = 3, PIN_PWM_REV = 11, PIN_EN = 8;
const int PIN_BTN = 4, PIN_SERVO = 9, PIN_POT = A0, PIN_SW = 7, PIN_LED = 13;
const int SERVO_US_MIN = 500, SERVO_US_MAX = 2500;   // MG996R / DS3218 range

const float ENC_STEP = PI * WHEEL_D / ENC_SLOTS;      // m of belt per pulse

enum GameState { READY, RUNNING, GAME_OVER };
enum JumpState { J_IDLE, J_UP, J_HOLD, J_DOWN, J_COOLDOWN };

Servo servo;
GameState game = READY;
JumpState jump = J_IDLE;

volatile unsigned long encLastUs = 0, encPeriodUs = 0;

float vTarget = 0, vRef = 0, vMeas = 0, integ = 0, u = 0;
unsigned long jumpT0 = 0, lastCtrlMs = 0, lastSampleUs = 0, lastTeleMs = 0;
int adcBase = 512, adcNow = 512, overCount = 0;
bool btnStable = HIGH, btnLast = HIGH;
unsigned long btnChangeMs = 0;

void encoderISR() {
  unsigned long now = micros();
  unsigned long dt = now - encLastUs;
  if (dt > 200) {            // glitch filter
    encPeriodUs = dt;
    encLastUs = now;
  }
}

// Period measurement: much better than counting pulses in a 20 ms window
// (20 slots on a 60 mm wheel = 9.4 mm per pulse = 0.47 m/s resolution when counting).
float measuredSpeed(unsigned long nowUs) {
  noInterrupts();
  unsigned long last = encLastUs, period = encPeriodUs;
  interrupts();
  if (period == 0 || nowUs - last > ENC_TIMEOUT_US) return 0;
  return ENC_STEP / (period * 1e-6);
}

void writeServoDeg(int deg) {
  servo.writeMicroseconds(map(deg, 0, 180, SERVO_US_MIN, SERVO_US_MAX));
}

void writeMotor(float cmd) {
  int duty = (int)(constrain(cmd, 0.0, 1.0) * 255.0 + 0.5);
  analogWrite(PIN_PWM, duty);
#if MOTOR_DC
  digitalWrite(PIN_EN, HIGH);          // PWM off-time = both low sides on = dynamic brake
#else
  digitalWrite(PIN_EN, (game == RUNNING || vRef > 0) ? HIGH : LOW);  // VFD RUN
#endif
}

int readCollisionRaw() {
#if USE_POT
  return analogRead(PIN_POT);
#else
  return digitalRead(PIN_SW) == LOW ? 1023 : adcBase;   // pressed = "full deflection"
#endif
}

void calibratePivot() {
#if USE_POT
  long sum = 0;
  for (int i = 0; i < 64; i++) { sum += analogRead(PIN_POT); delay(1); }
  adcBase = sum / 64;
#else
  adcBase = 0;
#endif
  overCount = 0;
}

void onPress(unsigned long nowMs) {
  if (game == READY) {
    game = RUNNING;
    vTarget = V_TARGET;
    Serial.println(F("# start"));
    return;
  }
  if (game == GAME_OVER) {
    if (vRef == 0) {
      calibratePivot();
      digitalWrite(PIN_LED, LOW);
      game = READY;
      Serial.println(F("# reset, press to start"));
    }
    return;
  }
  if (jump == J_IDLE) {
    jump = J_UP;
    jumpT0 = nowMs;
    writeServoDeg(SERVO_UP_DEG);
  }
}

void handleButton(unsigned long nowMs) {
  bool r = digitalRead(PIN_BTN);
  if (r != btnLast) { btnLast = r; btnChangeMs = nowMs; }
  if (nowMs - btnChangeMs > 20 && r != btnStable) {
    btnStable = r;
    if (btnStable == LOW) onPress(nowMs);
  }
}

void sampleCollision(unsigned long nowMs) {
  adcNow = readCollisionRaw();
  // The arm shakes a little while the rack accelerates: raise the threshold during motion
  bool moving = (jump == J_UP || jump == J_DOWN);
  int thr = moving ? (THR_COUNTS * 3) / 2 : THR_COUNTS;
  if (abs(adcNow - adcBase) > thr) overCount++; else overCount = 0;
  if (overCount >= DEBOUNCE_N && game == RUNNING) {
    game = GAME_OVER;
    vTarget = 0;
    digitalWrite(PIN_LED, HIGH);
    Serial.print(F("# collision adc=")); Serial.print(adcNow);
    Serial.print(F(" base=")); Serial.println(adcBase);
  }
}

void controlStep(unsigned long nowMs, unsigned long nowUs) {
  const float dt = CTRL_MS / 1000.0;
  float aLim = (vTarget < vRef) ? A_BRAKE : A_MAX;
  vRef += constrain(vTarget - vRef, -aLim * dt, aLim * dt);
  if (vRef < 1e-4) vRef = 0;

  vMeas = measuredSpeed(nowUs);
  if (vRef == 0 && vTarget == 0) {
    integ = 0;
    u = 0;
  } else {
    float e = vRef - vMeas;
    integ = constrain(integ + KI * e * dt, -0.5, 0.5);
    float ff = (vRef > 0) ? FF_U0 + FF_U1 * vRef : 0;
    u = constrain(ff + KP * e + integ, 0.0, 1.0);
  }
  writeMotor(u);

  unsigned long tj = nowMs - jumpT0;
  switch (jump) {
    case J_UP:       if (tj >= RISE_MS) jump = J_HOLD; break;
    case J_HOLD:     if (tj >= RISE_MS + HOLD_MS) { jump = J_DOWN; writeServoDeg(SERVO_DOWN_DEG); } break;
    case J_DOWN:     if (tj >= RISE_MS + HOLD_MS + FALL_MS) jump = J_COOLDOWN; break;
    case J_COOLDOWN: if (tj >= RISE_MS + HOLD_MS + FALL_MS + COOLDOWN_MS) jump = J_IDLE; break;
    default: break;
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(PIN_ENC, INPUT_PULLUP);
  pinMode(PIN_BTN, INPUT_PULLUP);
  pinMode(PIN_SW, INPUT_PULLUP);
  pinMode(PIN_LED, OUTPUT);
  pinMode(PIN_EN, OUTPUT);
  pinMode(PIN_PWM_REV, OUTPUT);
  digitalWrite(PIN_PWM_REV, LOW);

  // Timer2 prescaler 8, phase-correct: 16 MHz / (8 × 510) = 3.92 kHz on D3 (default is 490 Hz).
  TCCR2B = (TCCR2B & 0xF8) | 0x02;
  writeMotor(0);

  servo.attach(PIN_SERVO, SERVO_US_MIN, SERVO_US_MAX);
  writeServoDeg(SERVO_DOWN_DEG);
  delay(500);                 // let the character settle before reading the pivot
  calibratePivot();

  attachInterrupt(digitalPinToInterrupt(PIN_ENC), encoderISR, RISING);
  Serial.println(F("# ready: press the button to start"));
}

void loop() {
  unsigned long nowUs = micros();
  unsigned long nowMs = millis();

  handleButton(nowMs);

  if (nowUs - lastSampleUs >= SAMPLE_US) {
    lastSampleUs += SAMPLE_US;
    sampleCollision(nowMs);
  }
  if (nowMs - lastCtrlMs >= CTRL_MS) {
    lastCtrlMs += CTRL_MS;
    controlStep(nowMs, nowUs);
  }
  if (nowMs - lastTeleMs >= 100) {          // Serial Plotter telemetry, 10 Hz
    lastTeleMs = nowMs;
    Serial.print(F("vRef:"));  Serial.print(vRef, 3);
    Serial.print(F(" vMeas:")); Serial.print(vMeas, 3);
    Serial.print(F(" u:"));     Serial.print(u, 3);
    Serial.print(F(" pivot:")); Serial.println((adcNow - adcBase) / 100.0, 2);
  }
}
