// Treadmill + jumping character: physics model and Arduino-port controller.
// SI units everywhere (m, kg, s, N, N·m, rad, V, A). Same equations as treadmill_jump.ino.
import { tr } from './i18n.js';

const g = 9.81;
const DEG = Math.PI / 180;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const sgn = (x) => (x > 0 ? 1 : x < 0 ? -1 : 0);

// ---------- Component libraries (typical datasheet-class values; check your own part) ----------
const MOTORS = {
  dc37: {
    label: tr('DC gearmotor 12 V, Ø37 mm, 1:30 gearbox (~200 rpm out)', 'Motoréducteur CC 12 V, Ø37 mm, réducteur 1:30 (~200 tr/min en sortie)'),
    type: 'dc', V: 12, R: 2.4, Kt: 0.0182, I0: 0.25, Irated: 1.5, Jrotor: 3e-6, gh: 30, etaGh: 0.75,
  },
  my1016: {
    label: tr('DC 24 V 250 W scooter motor (MY1016 class, 2750 rpm, no gearbox)', 'Moteur CC de trottinette 24 V 250 W (type MY1016, 2750 tr/min, sans réducteur)'),
    type: 'dc', V: 24, R: 0.28, Kt: 0.070, I0: 1.0, Irated: 13.4, Jrotor: 2.5e-4, gh: 1, etaGh: 1,
  },
  ac90: {
    label: tr('AC induction 230 V 3~, 4-pole, 90 W, 1350 rpm (on a VFD)', 'Asynchrone 230 V 3~, 4 pôles, 90 W, 1350 tr/min (sur variateur)'),
    type: 'ac', P: 90, nRated: 1350, poles: 4, fBase: 50, kb: 2.2, In: 0.55, Jrotor: 1.5e-4, gh: 1, etaGh: 1,
  },
  ac25g: {
    label: tr('AC induction gearmotor 230 V 3~, 25 W, 1:30 gearbox (~43 rpm out, on a VFD)', 'Motoréducteur asynchrone 230 V 3~, 25 W, réducteur 1:30 (~43 tr/min en sortie, sur variateur)'),
    type: 'ac', P: 25, nRated: 1300, poles: 4, fBase: 50, kb: 2.0, In: 0.2, Jrotor: 3e-5, gh: 30, etaGh: 0.8,
  },
};

const DRIVERS = {
  bts7960: { label: tr('BTS7960 (IBT-2) H-bridge, 43 A', 'Pont en H BTS7960 (IBT-2), 43 A'), Vdrop: 0, Rdrv: 0.016, Ilim: 43 },
  md10c: { label: 'Cytron MD10C, 13 A', Vdrop: 0, Rdrv: 0.02, Ilim: 13 },
  l298n: { label: tr('L298N, 2 A (bipolar, ~2 V drop)', 'L298N, 2 A (bipolaire, ~2 V de chute)'), Vdrop: 1.8, Rdrv: 0.4, Ilim: 2 },
};

// Bevel gear mesh efficiency per stage (straight 93–97 %, spiral 95–99 %, hypoid 85–95 %).
const GEARS = {
  straight: { label: tr('Straight bevel (rouage conique droit)', 'Conique droit'), eta: 0.96 },
  miter: { label: tr('Miter 1:1 (engrenage à onglet)', 'Renvoi d’angle 1:1 (engrenage à onglet)'), eta: 0.96 },
  spiral: { label: tr('Spiral bevel (conique en spirale)', 'Conique à denture spirale'), eta: 0.98 },
  hypoid: { label: tr('Hypoid (hypoïde)', 'Hypoïde'), eta: 0.9 },
};

const BEARINGS = {
  ball: { label: tr('Ball bearing 608 (Ø8 mm)', 'Roulement à billes 608 (Ø8 mm)'), mu: 0.0015 },
  bronze: { label: tr('Bronze bushing, greased', 'Coussinet bronze, graissé'), mu: 0.1 },
  wood: { label: tr('Steel shaft in a wooden hole', 'Axe acier dans un trou dans le bois'), mu: 0.35 },
};

const WOODS = {
  mdf: { label: tr('MDF (fibres pressées)', 'MDF (fibres pressées)'), rho: 750 },
  particle: { label: tr('Particleboard (copeaux pressés / aggloméré)', 'Aggloméré (copeaux pressés)'), rho: 650 },
  hdf: { label: 'HDF', rho: 900 },
  poplar: { label: tr('Poplar plywood', 'Contreplaqué peuplier'), rho: 450 },
  birch: { label: tr('Birch plywood', 'Contreplaqué bouleau'), rho: 680 },
};

// Hobby servos. Ts = stall torque, w0 = no-load speed (from the s/60° spec).
const SERVOS = {
  mg996r6: { label: 'MG996R @ 6 V (11 kg·cm, 0.14 s/60°)', Ts: 11 * 0.0981, w0: (60 * DEG) / 0.14, Istall: 2.5, Iidle: 0.01 },
  mg996r48: { label: 'MG996R @ 4.8 V (9.4 kg·cm, 0.17 s/60°)', Ts: 9.4 * 0.0981, w0: (60 * DEG) / 0.17, Istall: 2.0, Iidle: 0.01 },
  ds3218: { label: 'DS3218 @ 6.8 V (21.5 kg·cm, 0.14 s/60°)', Ts: 21.5 * 0.0981, w0: (60 * DEG) / 0.14, Istall: 3.0, Iidle: 0.01 },
  sg90: { label: 'SG90 @ 4.8 V (1.8 kg·cm, 0.10 s/60°)', Ts: 1.8 * 0.0981, w0: (60 * DEG) / 0.1, Istall: 0.65, Iidle: 0.006 },
};

const DEFAULTS = {
  // motor
  motorPreset: 'dc37', ...MOTORS.dc37, driver: 'bts7960', fMax: 60, vfdAccel: 0.5,
  // transmission: stage A = motor bevel (Z1 drives Z2), stage B = corner bevels (Z3 drives Z4)
  Z1: 20, Z2: 20, Z3: 20, Z4: 20, gearType: 'straight',
  // rollers / wheels
  D: 0.06, mWheel: 0.05, muS: 0.6, muK: 0.5, wrapDeg: 180, T0: 40,
  bearing: 'ball', dShaft: 0.008, Crr: 0.008,
  // belt (tablier)
  loopLength: 1.0, width: 0.3, thick: 0.006, wood: 'mdf', kerfFrac: 0.05,
  pitch: 0.01, kHinge: 0.01, hyst: 0.3, deck: true, muDeckK: 0.3, muDeckS: 0.4,
  // obstacles
  mObs: 0.1, lObs: 0.04, hObs: 0.025, muObsK: 0.35, muObsS: 0.45, gapMin: 0.35, gapMax: 0.8,
  // control (Arduino)
  vTarget: 0.4, aMax: 0.5, aBrake: 2.0, ctrlHz: 50, encSlots: 20, encTimeoutMs: 150,
  // character: servo + bielle + pinion/crémaillère
  servo: 'mg996r6', tauMech: 0.025,
  r1: 0.025, L: 0.07, r2: 0.02, dx: 0.06, dy: 0.01, hornOffsetDeg: -30, branch: 1,
  servoDownDeg: 30, servoUpDeg: 150, module: 1, Zp: 40,
  mChar: 0.25, Fguide: 0.5, holdMs: 250, cooldownMs: 150, footW: 0.04, footGap: 0.005,
  // collision pivot (liaison pivot) + potentiometer
  Larm: 0.12, mLower: 0.08, Tpre: 0.02, kSpring: 0.05, thetaMaxDeg: 30,
  potRangeDeg: 270, thrDeg: 4, debounceN: 3, sampleHz: 1000,
};

// ---------- Derived quantities ----------
function derive(p) {
  const d = {};
  d.R = p.D / 2;
  d.gear = GEARS[p.gearType] || GEARS.straight;
  d.iA = p.Z2 / p.Z1;
  d.iB = p.Z4 / p.Z3;
  d.iTot = p.gh * d.iA * d.iB; // motor rad/s per wheel rad/s
  d.eta = p.etaGh * d.gear.eta * d.gear.eta;
  d.rho = (WOODS[p.wood] || WOODS.mdf).rho;
  d.mBelt = p.loopLength * p.width * p.thick * d.rho * (1 - p.kerfFrac);
  d.nRollers = 2;
  d.nWheels = 4;
  d.span = (p.loopLength - 2 * Math.PI * d.R) / 2;
  d.wrap = p.wrapDeg * DEG;
  // Euler–Eytelwein (capstan) per driven roller: F = 2·T0·tanh(μθ/2)
  d.FtracS = d.nRollers * 2 * p.T0 * Math.tanh((p.muS * d.wrap) / 2);
  d.FtracK = d.nRollers * 2 * p.T0 * Math.tanh((p.muK * d.wrap) / 2);
  // Bearing friction: radial load ≈ 2·T0 per axle, torque μ·N·d/2, reflected to belt
  d.bearingMu = (BEARINGS[p.bearing] || BEARINGS.ball).mu;
  d.Fbearing = (d.nRollers * d.bearingMu * 2 * p.T0 * (p.dShaft / 2)) / d.R;
  // Rolling resistance of rubber wheels under the wrap load
  d.Frr = p.Crr * d.nRollers * 2 * p.T0;
  // Living-hinge bending loss: each hinge bends θ = pitch/R at entry and exit of each roller
  d.hingeAngle = p.pitch / d.R;
  d.Fbend = (d.nRollers * 2 * p.hyst * 0.5 * p.kHinge * d.hingeAngle * d.hingeAngle) / p.pitch;
  // Chordal (polygon) speed ripple of a slatted belt on a round roller
  d.nChord = (2 * Math.PI * d.R) / p.pitch;
  d.chordRipple = 1 - Math.cos(Math.PI / d.nChord);
  // Equivalent masses seen at the belt surface
  d.mWheelSide = (p.Jrotor * d.iTot * d.iTot) / (d.R * d.R) + d.nWheels * 0.5 * p.mWheel;
  d.mRotorRefl = (p.Jrotor * d.iTot * d.iTot) / (d.R * d.R);
  d.driver = DRIVERS[p.driver] || DRIVERS.bts7960;
  if (p.type === 'ac') {
    d.pp = p.poles / 2;
    d.wn = (p.nRated * 2 * Math.PI) / 60;
    d.ns = (60 * p.fBase) / d.pp;
    d.sn = (d.ns - p.nRated) / d.ns;
    d.Tn = p.P / d.wn;
    d.Tb = p.kb * d.Tn;
    d.sb = d.sn * (p.kb + Math.sqrt(p.kb * p.kb - 1));
    d.Im = 0.55 * p.In;
    d.It = Math.sqrt(Math.max(0, p.In * p.In - d.Im * d.Im));
    // speed per unit command (u = f/fMax) at the belt
    d.G = ((2 * Math.PI * p.fMax) / d.pp / d.iTot) * d.R;
    d.Trated = d.Tn;
  } else {
    d.Rt = p.R + d.driver.Rdrv;
    d.Istall = Math.min((p.V - d.driver.Vdrop) / d.Rt, d.driver.Ilim);
    d.Tstall = p.Kt * (d.Istall - p.I0);
    d.w0 = (p.V - d.driver.Vdrop - p.I0 * d.Rt) / p.Kt;
    d.G = (p.V / p.Kt / d.iTot) * d.R;
    d.Trated = p.Kt * (p.Irated - p.I0);
  }
  // Arduino PI gains, normalised to the plant gain (u per m/s)
  d.Kp = 0.6 / d.G;
  d.Ki = 3.0 / d.G;
  // Character
  d.servo = SERVOS[p.servo] || SERVOS.mg996r6;
  d.Js = (p.tauMech * d.servo.Ts) / d.servo.w0;
  d.rpp = (p.module * p.Zp) / 2 / 1000; // module in mm
  return d;
}

// Resistive forces at the belt surface (N), running (kinetic) or breakaway (static)
function resistances(p, d, opts = {}) {
  const mTopLoad = d.mBelt / 2 + (opts.mOnBelt ?? p.mObs);
  const muDeck = opts.static ? p.muDeckS : p.muDeckK;
  const Fdeck = p.deck ? muDeck * mTopLoad * g : 0;
  const Fcoll = opts.collision ? p.muObsK * p.mObs * g : 0;
  const belt = Fdeck + d.Fbend + Fcoll;
  const wheel = d.Frr + d.Fbearing;
  return { Fdeck, Fbend: d.Fbend, Frr: d.Frr, Fbearing: d.Fbearing, Fcoll, belt, wheel, total: belt + wheel };
}

// ---------- Motor models ----------
// DC: u = PWM duty (0..1). Returns {T, I} at the motor shaft.
function dcMotor(p, d, u, w) {
  const e = u * p.V - p.Kt * w;
  let I = 0;
  if (Math.abs(e) > d.driver.Vdrop) I = (e - sgn(e) * d.driver.Vdrop) / d.Rt;
  I = clamp(I, -d.driver.Ilim, d.driver.Ilim);
  const T = p.Kt * I - p.Kt * p.I0 * sgn(w);
  return { T, I };
}
// AC induction on V/f VFD, Kloss equation. f = output frequency (Hz).
function acMotor(p, d, f, w) {
  if (f < 0.05) return { T: 0, I: 0 };
  const ws = (2 * Math.PI * f) / d.pp;
  const s = (ws - w) / ws;
  const Tb = f <= p.fBase ? d.Tb : d.Tb * (p.fBase / f) ** 2;
  const T = (2 * Tb * s * d.sb) / (s * s + d.sb * d.sb);
  const I = Math.sqrt(d.Im * d.Im + (d.It * Math.abs(T) / d.Tn) ** 2);
  return { T, I, s };
}

// Steady state: command needed to hold belt speed v against force F (at belt)
function steadyCommand(p, d, v, F) {
  const w = (v / d.R) * d.iTot;
  const Tload = (F * d.R) / (d.iTot * d.eta);
  if (p.type === 'ac') {
    const Tb = d.Tb;
    if (Tload >= Tb) return { u: NaN, w, Tload, I: NaN, stall: true };
    const k = Tb / Math.max(Tload, 1e-9);
    const s = d.sb * (k - Math.sqrt(k * k - 1));
    const ws = w / (1 - s);
    const f = (ws * d.pp) / (2 * Math.PI);
    const I = Math.sqrt(d.Im * d.Im + (d.It * Tload / d.Tn) ** 2);
    return { u: f / p.fMax, f, w, Tload, I, s };
  }
  const I = Tload / p.Kt + p.I0;
  const Vm = I * d.Rt + p.Kt * w + d.driver.Vdrop;
  return { u: Vm / p.V, w, Tload, I, Vm };
}

// Max belt speed at full command under load F
function maxSpeed(p, d, F) {
  let lo = 0, hi = 50;
  for (let k = 0; k < 60; k++) {
    const v = (lo + hi) / 2;
    const c = steadyCommand(p, d, v, F);
    if (!isFinite(c.u) || c.u > 1) hi = v; else lo = v;
  }
  return lo;
}

// Torque-speed curve at full command, for the chart (motor shaft)
function torqueSpeedCurve(p, d, n = 80) {
  const pts = [];
  if (p.type === 'ac') {
    const wsMax = (2 * Math.PI * p.fMax) / d.pp;
    for (let k = 0; k <= n; k++) {
      const w = (wsMax * k) / n;
      pts.push({ w, T: Math.max(0, acMotor(p, d, p.fMax, w).T) });
    }
  } else {
    const w0 = (p.V - d.driver.Vdrop) / p.Kt;
    for (let k = 0; k <= n; k++) {
      const w = (w0 * k) / n;
      pts.push({ w, T: Math.max(0, dcMotor(p, d, 1, w).T) });
    }
  }
  return pts;
}

// ---------- Character kinematics: servo horn → bielle → pinion crank → crémaillère ----------
function linkage(p, alphaGeom) {
  const A = [p.dx + p.r1 * Math.cos(alphaGeom), p.dy + p.r1 * Math.sin(alphaGeom)];
  const d0 = Math.hypot(A[0], A[1]);
  if (d0 > p.r2 + p.L || d0 < Math.abs(p.r2 - p.L) || d0 < 1e-9) return null;
  const a = (p.r2 * p.r2 - p.L * p.L + d0 * d0) / (2 * d0);
  const h = Math.sqrt(Math.max(0, p.r2 * p.r2 - a * a));
  const ux = A[0] / d0, uy = A[1] / d0;
  const B = [a * ux - p.branch * h * uy, a * uy + p.branch * h * ux];
  return { A, B, phi: Math.atan2(B[1], B[0]) };
}

function makeKinematics(p, d) {
  const toGeom = (servoDeg) => (p.hornOffsetDeg + servoDeg) * DEG;
  const down = linkage(p, toGeom(p.servoDownDeg));
  const up = linkage(p, toGeom(p.servoUpDeg));
  if (!down || !up) return { ok: false, reason: tr('The bielle cannot connect horn and pinion at one end of the servo range. Change bielle length or servo angles.', 'La bielle ne peut pas relier le palonnier et le pignon à une extrémité de la course du servo. Modifiez la longueur de bielle ou les angles du servo.') };
  const unwrap = (phi, ref) => { while (phi - ref > Math.PI) phi -= 2 * Math.PI; while (phi - ref < -Math.PI) phi += 2 * Math.PI; return phi; };
  // Table over servo range with continuous unwrapping
  const N = 240;
  const table = [];
  let prev = down.phi;
  let mono = true, lastDir = 0, minTrans = 180, ok = true;
  for (let k = 0; k <= N; k++) {
    const sd = p.servoDownDeg + ((p.servoUpDeg - p.servoDownDeg) * k) / N;
    const r = linkage(p, toGeom(sd));
    if (!r) { ok = false; break; }
    const phi = unwrap(r.phi, prev);
    if (k > 0) { const dir = sgn(phi - prev); if (lastDir && dir && dir !== lastDir) mono = false; if (dir) lastDir = dir; }
    prev = phi;
    const BA = [r.A[0] - r.B[0], r.A[1] - r.B[1]];
    const c = (BA[0] * r.B[0] + BA[1] * r.B[1]) / (Math.hypot(BA[0], BA[1]) * Math.hypot(r.B[0], r.B[1]));
    const mu = Math.acos(clamp(c, -1, 1)) / DEG;
    minTrans = Math.min(minTrans, Math.min(mu, 180 - mu));
    table.push({ sd, phi, A: r.A, B: r.B });
  }
  if (!ok) return { ok: false, reason: tr('The linkage locks up inside the servo range (bielle too short or too long).', 'La liaison se bloque dans la course du servo (bielle trop courte ou trop longue).') };
  const phi0 = table[0].phi;
  const dir = sgn(table[N].phi - phi0) || 1;
  // y = rack lift. The rack sits on the side of the pinion that rises for this rotation
  // direction (right side if the pinion turns CCW while lifting, left side if CW).
  for (const t of table) t.y = d.rpp * (t.phi - phi0) * dir;
  const travel = table[N].y;
  const rackSide = dir;
  function at(servoDeg) {
    const x = clamp((servoDeg - p.servoDownDeg) / (p.servoUpDeg - p.servoDownDeg), 0, 1) * N;
    const i = Math.min(N - 1, Math.floor(x));
    const f = x - i;
    const a = table[i], b = table[i + 1];
    const lerp = (u, v) => u + (v - u) * f;
    return { y: lerp(a.y, b.y), phi: lerp(a.phi, b.phi), A: [lerp(a.A[0], b.A[0]), lerp(a.A[1], b.A[1])], B: [lerp(a.B[0], b.B[0]), lerp(a.B[1], b.B[1])] };
  }
  const hd = ((p.servoUpDeg - p.servoDownDeg) / N) * DEG; // rad per table step
  function deriv(servoDeg) {
    const h = (p.servoUpDeg - p.servoDownDeg) / N;
    const y0 = at(servoDeg - h).y, y1 = at(servoDeg).y, y2 = at(servoDeg + h).y;
    return { y1: (y2 - y0) / (2 * hd), y2: (y2 - 2 * y1 + y0) / (hd * hd) };
  }
  return { ok: true, at, deriv, travel, mono, minTrans, table, phi0, rackSide, toGeom };
}

// ---------- Servo (internal P-D loop limited by the stall-torque / no-load-speed line) ----------
function servoTorque(d, cmdRad, a, w) {
  const s = d.servo;
  const Kp = s.Ts / (5 * DEG);
  const Kd = 2 * Math.sqrt(Kp * d.Js);
  let T = Kp * (cmdRad - a) - Kd * w;
  // Motoring direction: available torque falls linearly to 0 at no-load speed
  if (sgn(T) === sgn(w) && w !== 0) T = clamp(T, -s.Ts * Math.max(0, 1 - Math.abs(w) / s.w0), s.Ts * Math.max(0, 1 - Math.abs(w) / s.w0));
  else T = clamp(T, -s.Ts, s.Ts);
  return T;
}

// Offline jump simulation (no obstacles) for the analysis panel and the Arduino timings
function simulateJump(p, d, kin, hObs) {
  const dt = 2e-4;
  let a = p.servoDownDeg * DEG, w = 0, t = 0;
  const up = p.servoUpDeg * DEG, down = p.servoDownDeg * DEG;
  let cmd = up, riseT = null, maxI = 0, maxT = 0, stalled = false;
  let tAboveStart = null, tAbove = 0;
  const trace = [];
  const travel = kin.travel;
  const holdS = p.holdMs / 1000;
  let tDownCmd = null;
  while (t < 3) {
    const sdeg = a / DEG;
    const k = kin.at(sdeg), dv = kin.deriv(sdeg);
    const yd = dv.y1 * w;
    const Ff = p.Fguide * Math.tanh(yd / 0.005);
    const Ts = servoTorque(d, cmd, a, w);
    const Jeq = d.Js + p.mChar * dv.y1 * dv.y1;
    const TL = dv.y1 * (p.mChar * g + p.mChar * dv.y2 * w * w + Ff);
    let acc = (Ts - TL) / Jeq;
    w += acc * dt;
    a += w * dt;
    if (a < down) { a = down; if (w < 0) w = 0; }
    if (a > up) { a = up; if (w > 0) w = 0; }
    t += dt;
    const I = d.servo.Iidle + (d.servo.Istall - d.servo.Iidle) * Math.abs(Ts) / d.servo.Ts;
    maxI = Math.max(maxI, I);
    maxT = Math.max(maxT, Math.abs(TL));
    if (riseT === null && k.y >= 0.95 * travel) { riseT = t; tDownCmd = t + holdS; }
    if (tDownCmd !== null && t >= tDownCmd && cmd === up) cmd = down;
    if (k.y >= hObs) { if (tAboveStart === null) tAboveStart = t; }
    else if (tAboveStart !== null && tAboveStart >= 0 && cmd === down) { tAbove = t - tAboveStart; tAboveStart = -1; }
    if (trace.length === 0 || t - trace[trace.length - 1].t > 0.005) trace.push({ t, y: k.y, I });
    if (cmd === down && a <= down + 0.2 * DEG && Math.abs(w) < 0.01) break;
    if (t > 2.5 && riseT === null) { stalled = true; break; }
  }
  if (tAboveStart !== null && tAboveStart >= 0) tAbove = t - tAboveStart;
  const fallT = tDownCmd !== null ? t - tDownCmd : null;
  return { riseT, fallT, total: t, maxI, maxTL: maxT, stalled, tAbove, trace };
}

// ---------- Full analysis for the design panel ----------
function analyze(p) {
  const d = derive(p);
  const out = { d };
  const run = resistances(p, d);
  const brk = resistances(p, d, { static: true });
  const col = resistances(p, d, { collision: true });
  out.run = run; out.brk = brk; out.col = col;
  out.wheelRpm = (p.vTarget / (Math.PI * p.D)) * 60;
  out.motorRpm = out.wheelRpm * d.iTot;
  out.Twheel = run.total * d.R; // per drive line (all rollers together)
  out.ss = steadyCommand(p, d, p.vTarget, run.total);
  out.ssCol = steadyCommand(p, d, p.vTarget, col.total);
  out.Pbelt = run.total * p.vTarget;
  out.vMax = maxSpeed(p, d, run.total);
  out.vMaxCol = maxSpeed(p, d, col.total);
  // Start-up: breakaway + acceleration at aMax, everything reflected to the motor
  const mTot = d.mBelt + p.mObs + d.mWheelSide;
  out.Fstart = brk.total + mTot * p.aMax;
  out.Tstart = (out.Fstart * d.R) / (d.iTot * d.eta);
  out.TstartAvail = p.type === 'ac' ? d.Tb : d.Tstall;
  // Traction: belt-side force needed at aMax vs capstan limit
  out.FtracNeed = (d.mBelt + p.mObs) * p.aMax + brk.belt;
  out.aSlip = (d.FtracS - run.belt) / (d.mBelt + p.mObs);
  out.tractionUse = out.FtracNeed / d.FtracS;
  // Sag of the top run if there is no deck
  const w = (d.mBelt / p.loopLength) * g;
  out.sag = (w * d.span * d.span) / (8 * p.T0) + (p.mObs * g * d.span) / (4 * p.T0);
  // Encoder resolution
  out.encStep = (Math.PI * p.D) / p.encSlots;
  out.encVmin = out.encStep / (p.encTimeoutMs / 1000);
  out.encPeriodMs = (out.encStep / Math.max(p.vTarget, 1e-6)) * 1000;
  // Thermal / rating
  out.loadVsRated = out.ss.Tload / d.Trated;
  out.currentVsRated = out.ss.I / (p.type === 'ac' ? p.In : p.Irated);
  // Character
  const kin = makeKinematics(p, d);
  out.kin = kin;
  if (kin.ok) {
    let maxStatic = 0;
    for (let s = p.servoDownDeg; s <= p.servoUpDeg; s += 1) {
      const dv = kin.deriv(s);
      maxStatic = Math.max(maxStatic, Math.abs(dv.y1) * (p.mChar * g + p.Fguide));
    }
    out.servoStatic = maxStatic;
    out.servoMargin = d.servo.Ts / maxStatic;
    out.jump = simulateJump(p, d, kin, p.hObs);
    // A slower belt keeps the obstacle under the foot longer: this is a MINIMUM speed.
    out.vMinClear = out.jump.tAbove > 0 ? (p.lObs + p.footW) / out.jump.tAbove : Infinity;
    out.tPass = (p.lObs + p.footW) / Math.max(p.vTarget, 1e-6);
    out.timingWindow = out.jump.tAbove - out.tPass;
  }
  // Collision sensor
  out.Fpush = p.muObsK * p.mObs * g;
  out.Tpush = out.Fpush * p.Larm;
  out.Tneed = p.Tpre + p.kSpring * p.thrDeg * DEG;
  out.detected = out.Tpush > out.Tneed;
  out.mObsMin = out.Tneed / (p.Larm * p.muObsK * g);
  out.countsPerDeg = 1023 / p.potRangeDeg;
  out.thrCounts = Math.max(2, Math.round(p.thrDeg * out.countsPerDeg));
  out.latency = p.debounceN / p.sampleHz + 1 / p.ctrlHz;
  out.stopDist = p.vTarget * out.latency + (p.vTarget * p.vTarget) / (2 * p.aBrake);
  out.overTravelDeg = Math.atan(out.stopDist / p.Larm) / DEG;
  out.potAtStop = Math.round(Math.min(out.overTravelDeg, p.thetaMaxDeg) * out.countsPerDeg);
  // Linear feed-forward u = u0 + u1·v (exact for a constant resistive force)
  const ca = steadyCommand(p, d, 0.5, run.total), cb = steadyCommand(p, d, 1.0, run.total);
  out.ff = isFinite(ca.u) && isFinite(cb.u) ? { u1: (cb.u - ca.u) / 0.5, u0: ca.u - 0.5 * ((cb.u - ca.u) / 0.5) } : { u0: 0, u1: 1 / d.G };
  out.riseMs = Math.round(((out.jump && out.jump.riseT) || 0.3) * 1000);
  out.fallMs = Math.round(((out.jump && out.jump.fallT) || 0.3) * 1000);
  return out;
}

function exportConfig(p, out) {
  const d = out.d;
  const f = (x, n = 3) => (Number.isFinite(x) ? x.toFixed(n) : '0.000');
  return [
    '// ===== CONFIG BEGIN (paste the block exported by the simulator here) =====',
    `#define MOTOR_DC ${p.type === 'ac' ? 0 : 1}            // 1 = DC motor + H-bridge, 0 = AC motor + VFD (0-10 V input)`,
    '#define USE_POT  1            // 1 = potentiometer on the pivot, 0 = microswitch',
    `const float WHEEL_D          = ${f(p.D)};   // m, roller wheel diameter`,
    `const int   ENC_SLOTS        = ${p.encSlots};      // pulses per roller revolution`,
    `const unsigned long ENC_TIMEOUT_US = ${p.encTimeoutMs * 1000}UL;`,
    `const float V_TARGET         = ${f(p.vTarget, 2)};    // m/s, belt speed`,
    `const float A_MAX            = ${f(p.aMax, 2)};    // m/s², start ramp (keep below the traction limit)`,
    `const float A_BRAKE          = ${f(p.aBrake, 2)};    // m/s², stop ramp after a collision`,
    `const float KP               = ${f(d.Kp)};   // command per m/s`,
    `const float KI               = ${f(d.Ki)};   // command per m (integral)`,
    `const float FF_U0            = ${f(out.ff.u0)};   // feed-forward: u = FF_U0 + FF_U1 * v`,
    `const float FF_U1            = ${f(out.ff.u1)};`,
    `const unsigned int CTRL_MS   = ${Math.round(1000 / p.ctrlHz)};      // ${p.ctrlHz} Hz control loop`,
    `const int   SERVO_DOWN_DEG   = ${Math.round(p.servoDownDeg)};`,
    `const int   SERVO_UP_DEG     = ${Math.round(p.servoUpDeg)};`,
    `const unsigned int RISE_MS   = ${out.riseMs};     // from the jump simulation`,
    `const unsigned int HOLD_MS   = ${Math.round(p.holdMs)};`,
    `const unsigned int FALL_MS   = ${out.fallMs};`,
    `const unsigned int COOLDOWN_MS = ${Math.round(p.cooldownMs)};`,
    `const int   THR_COUNTS       = ${out.thrCounts};      // ADC counts = threshold angle × 1023 / pot range`,
    `const int   DEBOUNCE_N       = ${p.debounceN};       // consecutive samples over threshold`,
    `const unsigned long SAMPLE_US = ${Math.round(1e6 / p.sampleHz)}UL; // ${p.sampleHz} Hz collision sampling`,
    '// ===== CONFIG END =====',
  ].join('\n');
}

// ---------- Arduino port: same logic as treadmill_jump.ino ----------
class ArduinoPort {
  constructor(p, d, out) {
    this.p = p; this.d = d; this.out = out;
    this.state = 'READY'; // READY → RUNNING → GAME_OVER
    this.jump = 'IDLE';
    this.vRef = 0; this.vTarget = 0; this.integ = 0; this.u = 0;
    this.lastPulseUs = 0; this.periodUs = 0;
    this.adcBase = 512; this.overCount = 0; this.hitLatched = false; this.hits = 0;
    this.jumpT0 = 0;
    this.riseMs = out.riseMs;
    this.fallMs = out.fallMs;
    this.servoCmdDeg = p.servoDownDeg;
    this.lastCtrlMs = 0; this.lastSampleUs = 0;
    this.events = [];
  }
  log(msg, nowMs) { this.events.push({ t: nowMs, msg }); if (this.events.length > 40) this.events.shift(); }
  encoderPulse(nowUs) {
    const dt = nowUs - this.lastPulseUs;
    if (dt > 200) { this.periodUs = dt; this.lastPulseUs = nowUs; }
  }
  measuredSpeed(nowUs) {
    if (this.periodUs === 0 || nowUs - this.lastPulseUs > this.p.encTimeoutMs * 1000) return 0;
    return this.out.encStep / (this.periodUs * 1e-6);
  }
  feedForward(v) {
    return v > 0 ? this.out.ff.u0 + this.out.ff.u1 * v : 0;
  }
  press(nowMs) {
    if (this.state === 'READY') { this.state = 'RUNNING'; this.vTarget = this.p.vTarget; this.log(tr('Start: belt ramps to ', 'Départ : le tapis accélère jusqu’à ') + this.p.vTarget.toFixed(2) + ' m/s', nowMs); return; }
    if (this.state === 'GAME_OVER') {
      if (this.vRef === 0) { this.state = 'READY'; this.log(tr('Reset. Press again to start.', 'Réinitialisé. Appuyez à nouveau pour démarrer.'), nowMs); }
      return;
    }
    if (this.jump === 'IDLE') { this.jump = 'UP'; this.jumpT0 = nowMs; this.servoCmdDeg = this.p.servoUpDeg; this.log(tr('Jump', 'Saut'), nowMs); }
  }
  calibrate(adc) { this.adcBase = adc; }
  sampleCollision(nowMs, adc) {
    const moving = this.jump === 'UP' || this.jump === 'DOWN';
    const thr = moving ? Math.floor((this.out.thrCounts * 3) / 2) : this.out.thrCounts;
    if (Math.abs(adc - this.adcBase) > thr) this.overCount++; else this.overCount = 0;
    // a hit is counted once per contact, re-armed only when the arm is back near rest (hysteresis vs ADC noise); the run keeps going
    if (Math.abs(adc - this.adcBase) < thr / 2) this.hitLatched = false;
    if (this.overCount >= this.p.debounceN && this.state === 'RUNNING' && !this.hitLatched) {
      this.hitLatched = true; this.hits++;
      this.log(tr(`Collision! ADC ${adc} (base ${this.adcBase}). Hit #${this.hits}, still running.`, `Collision ! ADC ${adc} (base ${this.adcBase}). Touche n°${this.hits}, la partie continue.`), nowMs);
      return true;
    }
    return false;
  }
  control(nowMs, nowUs) {
    const dt = 1 / this.p.ctrlHz;
    // speed reference ramp
    const aLim = this.vTarget < this.vRef ? this.p.aBrake : this.p.aMax;
    this.vRef += clamp(this.vTarget - this.vRef, -aLim * dt, aLim * dt);
    if (this.vRef < 1e-4) this.vRef = 0;
    const vMeas = this.measuredSpeed(nowUs);
    if (this.vRef === 0 && this.vTarget === 0) { this.integ = 0; this.u = 0; }
    else {
      const e = this.vRef - vMeas;
      this.integ = clamp(this.integ + this.d.Ki * e * dt, -0.5, 0.5);
      this.u = clamp(this.feedForward(this.vRef) + this.d.Kp * e + this.integ, 0, 1);
    }
    // jump state machine
    const tj = nowMs - this.jumpT0;
    if (this.jump === 'UP' && tj >= this.riseMs) this.jump = 'HOLD';
    if (this.jump === 'HOLD' && tj >= this.riseMs + this.p.holdMs) { this.jump = 'DOWN'; this.servoCmdDeg = this.p.servoDownDeg; }
    if (this.jump === 'DOWN' && tj >= this.riseMs + this.p.holdMs + this.fallMs) this.jump = 'COOLDOWN';
    if (this.jump === 'COOLDOWN' && tj >= this.riseMs + this.p.holdMs + this.fallMs + this.p.cooldownMs) this.jump = 'IDLE';
    return vMeas;
  }
}

// ---------- Real-time world: treadmill plant + character plant + obstacles ----------
class World {
  constructor(p, seed = 1) {
    this.p = p;
    this.out = analyze(p);
    this.d = this.out.d;
    this.ard = new ArduinoPort(p, this.d, this.out);
    this.t = 0; this.tUs = 0;
    this.vb = 0; this.vw = 0; this.xb = 0; this.thW = 0; this.slip = false;
    this.u = 0; this.fCmd = 0; this.I = 0; this.Tm = 0;
    this.a = p.servoDownDeg * DEG; this.w = 0; this.Is = 0; this.y = 0; this.Tservo = 0;
    this.theta = 0; this.thetaDot = 0;
    this.obs = [];
    this.seed = seed;
    this.nextSpawn = 0.2;
    this.score = 0;
    this.landedOn = false;
    this.encAcc = 0;
    this.lastCtrl = 0; this.lastSample = 0;
    this.adc = 512;
    this.xChar = this.d.span / 2 - 0.12; // character near the downstream end
    this.ard.calibrate(this.readAdc());
    this.vMeas = 0;
    this.hist = [];
    this.mOnBelt = 0;
    this.spawnFirst = true;
  }
  rand() { this.seed = (this.seed * 16807) % 2147483647; return this.seed / 2147483647; }
  readAdc() {
    const p = this.p;
    const v = 512 + (this.theta / DEG) * (1023 / p.potRangeDeg) + (this.rand() - 0.5) * 3;
    return clamp(Math.round(v), 0, 1023);
  }
  spawn() {
    const p = this.p;
    this.obs.push({ x: -this.d.span / 2 + 0.03, v: this.vb, stick: true, passed: false, contact: 0 });
  }
  step(dt) {
    const p = this.p, d = this.d;
    this.t += dt; this.tUs = this.t * 1e6;
    const nowMs = this.t * 1000;
    // --- Arduino timing: ADC sampling and control loop ---
    if (this.t - this.lastSample >= 1 / p.sampleHz) { this.lastSample = this.t; this.adc = this.readAdc(); if (this.ard.sampleCollision(nowMs, this.adc)) {
        // let the obstacle that is pressing on the arm slip past so it doesn't stay pinned there
        for (const o of this.obs) if (o.contact === 1) o.ghost = true;
      } }
    if (this.t - this.lastCtrl >= 1 / p.ctrlHz) { this.lastCtrl = this.t; this.vMeas = this.ard.control(nowMs, this.tUs); this.u = this.ard.u; }
    // --- Motor ---
    const wm = (this.vw / d.R) * d.iTot;
    let mot;
    if (p.type === 'ac') {
      const fTarget = this.u * p.fMax;
      const rate = p.fBase / p.vfdAccel;
      this.fCmd += clamp(fTarget - this.fCmd, -rate * dt, rate * dt);
      mot = acMotor(p, d, this.fCmd, wm);
    } else mot = dcMotor(p, d, this.u, wm);
    this.Tm = mot.T; this.I = mot.I;
    const Fm = mot.T >= 0 ? (mot.T * d.iTot * d.eta) / d.R : (mot.T * d.iTot) / (d.eta * d.R);
    // --- Obstacles: friction with the belt and contact with the character ---
    const footBack = this.xChar - p.footW / 2 + p.Larm * Math.sin(this.theta);
    const footY = p.footGap + this.y;
    let Fcontact = 0, beltFromObs = 0, mStuck = 0, yBlock = -1;
    let mTop = 0;
    for (const o of this.obs) {
      mTop += p.mObs;
      const front = o.x + p.lObs / 2, back = o.x - p.lObs / 2;
      const footFront = footBack + p.footW;
      let F = 0;
      const xOverlap = front > footBack && back < footFront;
      if (o.ghost) o.contact = 0;
      else if (xOverlap && footY < p.hObs) {
        if (o.contact === 0 && footY > p.hObs - 0.006 && this.ard.jump !== 'IDLE') o.contact = 2; // landed on top
        else if (o.contact === 0) o.contact = 1;
      }
      if (!xOverlap) o.contact = 0;
      if (o.contact === 1) {
        const pen = front - footBack;
        if (pen > 0) F = Math.max(0, 3000 * pen + 30 * (o.v - this.thetaDot * p.Larm));
      }
      if (o.contact === 2) yBlock = Math.max(yBlock, p.hObs - p.footGap);
      Fcontact += F;
      o.F = F;
      // stick / slip with the belt
      if (o.stick) {
        if (F > p.muObsS * p.mObs * g) o.stick = false;
        else { o.v = this.vb; mStuck += p.mObs; beltFromObs += F; }
      }
      if (!o.stick) {
        const rel = this.vb - o.v;
        const Ff = p.muObsK * p.mObs * g * (Math.abs(rel) > 1e-4 ? sgn(rel) : 0);
        o.v += ((Ff - F) / p.mObs) * dt;
        beltFromObs += Ff;
        if (Math.abs(this.vb - o.v) < 2e-3 && F < p.muObsS * p.mObs * g) { o.stick = true; o.v = this.vb; }
      }
      o.x += o.v * dt;
      if (!o.passed && back > footFront) { o.passed = true; if (o.contact !== 1 && !o.ghost) this.score++; }
    }
    this.obs = this.obs.filter((o) => o.x < d.span / 2 + 0.02);
    // --- Treadmill drive: wheel side and belt side, locked or slipping ---
    const mb = d.mBelt + mStuck;
    const mw = d.mWheelSide;
    const muDeck = Math.abs(this.vb) < 1e-4 ? p.muDeckS : p.muDeckK;
    const FdeckMax = p.deck ? muDeck * (d.mBelt / 2 + mTop) * g : 0;
    const Fbelt = FdeckMax + d.Fbend + beltFromObs;
    const Fwheel = d.Frr + d.Fbearing;
    if (!this.slip) {
      let v = this.vb;
      const Fnet = Fm - Fwheel - Fbelt;
      if (Math.abs(v) < 1e-4 && Fnet <= 0) { this.vb = this.vw = 0; }
      else {
        const acc = Fnet / (mb + mw);
        const Ft = mb * acc + Fbelt;
        if (Math.abs(Ft) > d.FtracS) this.slip = true;
        else { v = Math.max(0, v + acc * dt); this.vb = this.vw = v; }
      }
    }
    if (this.slip) {
      const rel = this.vw - this.vb;
      const Ft = d.FtracK * sgn(rel);
      this.vw = Math.max(0, this.vw + ((Fm - Fwheel - Ft) / mw) * dt);
      this.vb = Math.max(0, this.vb + ((Ft - Fbelt) / mb) * dt);
      if (Math.abs(this.vw - this.vb) < 1e-3) { this.slip = false; this.vb = this.vw = (this.vb + this.vw) / 2; }
    }
    this.xb += this.vb * dt;
    const dTh = (this.vw * dt) / d.R;
    this.thW += dTh;
    // encoder on the wheel axle (cannot see belt slip, like the real thing)
    this.encAcc += dTh;
    const slot = (2 * Math.PI) / p.encSlots;
    while (this.encAcc >= slot) { this.encAcc -= slot; this.ard.encoderPulse(this.tUs); }
    // --- Character: servo + linkage + rack ---
    const kin = this.out.kin;
    if (kin.ok) {
      const sdeg = this.a / DEG;
      const k = kin.at(sdeg), dv = kin.deriv(sdeg);
      const yd = dv.y1 * this.w;
      const Ff = p.Fguide * Math.tanh(yd / 0.005);
      let Fblock = 0;
      if (yBlock >= 0 && k.y < yBlock) Fblock = 4000 * (yBlock - k.y) - 40 * Math.min(0, yd);
      this.landedOn = Fblock > 0;
      const Ts = servoTorque(d, this.ard.servoCmdDeg * DEG, this.a, this.w);
      const Jeq = d.Js + p.mChar * dv.y1 * dv.y1;
      const TL = dv.y1 * (p.mChar * g + p.mChar * dv.y2 * this.w * this.w + Ff - Fblock);
      this.w += ((Ts - TL) / Jeq) * dt;
      this.a += this.w * dt;
      const lo = p.servoDownDeg * DEG, hi = p.servoUpDeg * DEG;
      if (this.a < lo) { this.a = lo; if (this.w < 0) this.w = 0; }
      if (this.a > hi) { this.a = hi; if (this.w > 0) this.w = 0; }
      this.Tservo = Ts;
      this.Is = d.servo.Iidle + (d.servo.Istall - d.servo.Iidle) * Math.abs(Ts) / d.servo.Ts;
      this.y = kin.at(this.a / DEG).y;
    }
    // --- Collision arm on its pivot (spring preload + stiffness, hard stops) ---
    const Jarm = (p.mLower * p.Larm * p.Larm) / 3 + p.mLower * 0.3 * p.Larm * p.Larm;
    let Tarm = Fcontact * p.Larm * Math.cos(this.theta) - (p.Tpre + p.kSpring * this.theta) - 0.002 * this.thetaDot;
    if (this.theta <= 0 && Tarm < 0) { this.theta = 0; this.thetaDot = 0; }
    else {
      this.thetaDot += (Tarm / Jarm) * dt;
      this.theta += this.thetaDot * dt;
      const tmax = p.thetaMaxDeg * DEG;
      if (this.theta > tmax) { this.theta = tmax; if (this.thetaDot > 0) this.thetaDot = 0; }
      if (this.theta < 0) { this.theta = 0; this.thetaDot = 0; }
    }
    // --- Spawning obstacles while running ---
    if (this.ard.state === 'RUNNING') {
      this.nextSpawn -= this.vb * dt;
      if (this.nextSpawn <= 0) { this.spawn(); this.nextSpawn = p.gapMin + (p.gapMax - p.gapMin) * this.rand(); }
    }
  }
  reset() {
    const w = new World(this.p, this.seed);
    Object.assign(this, w);
  }
}

const api = { g, DEG, MOTORS, DRIVERS, GEARS, BEARINGS, WOODS, SERVOS, DEFAULTS, derive, resistances, dcMotor, acMotor, steadyCommand, maxSpeed, torqueSpeedCurve, makeKinematics, simulateJump, analyze, exportConfig, ArduinoPort, World, clamp };
export default api;
