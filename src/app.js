import './style.css';
import TJ from './physics.js';
import Scene3D from './scene3d.js';
import inoSource from '../treadmill_jump.ino?raw';
import { tr, stateName, initLangSwitch } from './i18n.js';

const $ = (s, el = document) => el.querySelector(s);
const DEG = TJ.DEG;
const fmt = (x, n = 2) => (Number.isFinite(x) ? x.toFixed(n) : '—');
const RPM = tr('rpm', 'tr/min');

// ---------- Parameter schema (display value = SI × scale) ----------
const isDC = (p) => p.type !== 'ac';
const isAC = (p) => p.type === 'ac';
const opts = (lib) => Object.entries(lib).map(([k, v]) => [k, v.label]);
const SCHEMA = {
  drive: [
    { h: tr('Motor', 'Moteur') },
    { k: 'motorPreset', label: tr('Motor', 'Moteur'), type: 'select', options: [...opts(TJ.MOTORS), ['custom', tr('Custom (edit values below)', 'Personnalisé (modifiez les valeurs ci-dessous)')]] },
    { k: 'type', label: tr('Motor type', 'Type de moteur'), type: 'select', options: [['dc', tr('DC brushed (PWM H-bridge)', 'CC à balais (pont en H, PWM)')], ['ac', tr('AC induction (VFD, 0-10 V)', 'Asynchrone (variateur, 0-10 V)')]] },
    { k: 'V', label: tr('Supply voltage', 'Tension d’alimentation'), unit: 'V', step: 0.5, show: isDC },
    { k: 'R', label: tr('Winding resistance', 'Résistance du bobinage'), unit: 'Ω', step: 0.01, show: isDC },
    { k: 'Kt', label: tr('Torque constant Kt = Ke', 'Constante de couple Kt = Ke'), unit: 'N·m/A', step: 0.0005, show: isDC },
    { k: 'I0', label: tr('No-load current', 'Courant à vide'), unit: 'A', step: 0.05, show: isDC },
    { k: 'Irated', label: tr('Rated (continuous) current', 'Courant nominal (continu)'), unit: 'A', step: 0.1, show: isDC },
    { k: 'driver', label: tr('Motor driver', 'Driver moteur'), type: 'select', options: opts(TJ.DRIVERS), show: isDC },
    { k: 'P', label: tr('Rated power', 'Puissance nominale'), unit: 'W', step: 5, show: isAC },
    { k: 'nRated', label: tr('Rated speed', 'Vitesse nominale'), unit: tr('rpm', 'tr/min'), step: 10, show: isAC },
    { k: 'poles', label: tr('Poles', 'Pôles'), unit: '', step: 2, show: isAC },
    { k: 'fBase', label: tr('Base frequency', 'Fréquence de base'), unit: 'Hz', step: 10, show: isAC },
    { k: 'kb', label: tr('Breakdown / rated torque', 'Couple de décrochage / nominal'), unit: '×', step: 0.1, show: isAC },
    { k: 'In', label: tr('Rated current', 'Courant nominal'), unit: 'A', step: 0.05, show: isAC },
    { k: 'fMax', label: tr('VFD max frequency (= 10 V)', 'Fréquence max du variateur (= 10 V)'), unit: 'Hz', step: 5, show: isAC },
    { k: 'vfdAccel', label: tr('VFD ramp 0 → base freq.', 'Rampe variateur 0 → fréq. de base'), unit: 's', step: 0.1, show: isAC },
    { k: 'Jrotor', label: tr('Rotor inertia', 'Inertie du rotor'), unit: '×10⁻⁶ kg·m²', scale: 1e6, step: 1 },
    { k: 'gh', label: tr('Built-in gearbox ratio', 'Rapport du réducteur intégré'), unit: ':1', step: 1 },
    { k: 'etaGh', label: tr('Gearbox efficiency', 'Rendement du réducteur'), unit: '%', scale: 100, step: 1 },
  ],
  gears: [
    { h: tr('Rouage (bevel gear train)', 'Rouage (engrenages coniques)') },
    { k: 'gearType', label: tr('Gear type', 'Type d’engrenage'), type: 'select', options: opts(TJ.GEARS) },
    { note: tr('Power path: motor → Z1 meshes Z2 (stage A) → driveshaft → Z3 meshes Z4 (stage B) → roller axle. Stage B is at both ends of the driveshaft, so Z3 and Z4 each exist twice. Hover or edit a field to light that gear up in the 3D view.', 'Chaîne de puissance : moteur → Z1 engrène Z2 (étage A) → arbre de transmission → Z3 engrène Z4 (étage B) → axe du rouleau. L’étage B est aux deux bouts de l’arbre, donc Z3 et Z4 existent chacun en double. Survolez ou modifiez un champ pour mettre l’engrenage en évidence dans la vue 3D.') },
    { h: tr('Stage A · motor → driveshaft', 'Étage A · moteur → arbre') },
    { k: 'Z1', label: tr('Z1 · pinion on the motor shaft', 'Z1 · pignon sur l’arbre moteur'), unit: tr('teeth', 'dents'), step: 1, int: true, gear: 'Z1' },
    { k: 'Z2', label: tr('Z2 · crown on the driveshaft (middle)', 'Z2 · couronne sur l’arbre (au milieu)'), unit: tr('teeth', 'dents'), step: 1, int: true, gear: 'Z2' },
    { note: (p) => tr('Stage A ratio', 'Rapport étage A') + ` Z2/Z1 = ${p.Z2} / ${p.Z1} = ${(p.Z2 / p.Z1).toFixed(2)}` },
    { h: tr('Stage B · driveshaft → rollers (×2)', 'Étage B · arbre → rouleaux (×2)') },
    { k: 'Z3', label: tr('Z3 · gear at each end of the driveshaft', 'Z3 · engrenage à chaque bout de l’arbre'), unit: tr('teeth', 'dents'), step: 1, int: true, gear: 'Z3' },
    { k: 'Z4', label: tr('Z4 · gear on each roller axle', 'Z4 · engrenage sur chaque axe de rouleau'), unit: tr('teeth', 'dents'), step: 1, int: true, gear: 'Z4' },
    { note: (p) => tr('Stage B ratio', 'Rapport étage B') + ` Z4/Z3 = ${p.Z4} / ${p.Z3} = ${(p.Z4 / p.Z3).toFixed(2)}` },
    { note: (p) => {
      const tot = `${p.gh} × ${(p.Z2 / p.Z1).toFixed(2)} × ${(p.Z4 / p.Z3).toFixed(2)} = ${(p.gh * (p.Z2 / p.Z1) * (p.Z4 / p.Z3)).toFixed(2)}`;
      return tr(`Total i = gearbox ${tot}. Wheel speed = motor speed ÷ i; wheel torque = motor torque × i × η. Miter gears are 1:1 (Z1 = Z2, Z3 = Z4).`,
        `i total = réducteur ${tot}. Vitesse des roues = vitesse moteur ÷ i ; couple aux roues = couple moteur × i × η. Les engrenages à onglet sont en 1:1 (Z1 = Z2, Z3 = Z4).`);
    } },
    { h: tr('Rollers', 'Rouleaux') },
    { k: 'D', label: tr('Wheel diameter', 'Diamètre des roues'), unit: 'mm', scale: 1000, step: 1 },
    { k: 'mWheel', label: tr('Mass per wheel', 'Masse par roue'), unit: 'g', scale: 1000, step: 5 },
    { k: 'bearing', label: tr('Axle bearings', 'Paliers des axes'), type: 'select', options: opts(TJ.BEARINGS) },
    { k: 'dShaft', label: tr('Axle diameter', 'Diamètre des axes'), unit: 'mm', scale: 1000, step: 1 },
    { k: 'Crr', label: tr('Rolling resistance Crr', 'Résistance au roulement Crr'), unit: '', step: 0.001 },
  ],
  belt: [
    { h: tr('Tablier (laser-cut belt)', 'Tablier (découpé au laser)') },
    { k: 'wood', label: tr('Board', 'Panneau'), type: 'select', options: opts(TJ.WOODS) },
    { k: 'loopLength', label: tr('Loop length', 'Longueur de la boucle'), unit: 'm', step: 0.05 },
    { k: 'width', label: tr('Width', 'Largeur'), unit: 'mm', scale: 1000, step: 10 },
    { k: 'thick', label: tr('Thickness', 'Épaisseur'), unit: 'mm', scale: 1000, step: 0.5 },
    { k: 'kerfFrac', label: tr('Material removed by kerfs', 'Matière enlevée par les traits de coupe'), unit: '%', scale: 100, step: 1 },
    { k: 'pitch', label: tr('Hinge pitch', 'Pas des charnières'), unit: 'mm', scale: 1000, step: 1 },
    { k: 'kHinge', label: tr('Hinge stiffness (full width)', 'Raideur des charnières (pleine largeur)'), unit: 'N·m/rad', step: 0.002 },
    { k: 'hyst', label: tr('Hinge hysteresis loss', 'Pertes par hystérésis des charnières'), unit: '%', scale: 100, step: 5 },
    { k: 'T0', label: tr('Belt pretension', 'Prétension du tablier'), unit: 'N', step: 5 },
    { h: tr('Friction', 'Frottement') },
    { k: 'muS', label: tr('μ static · rubber wheel / wood', 'μ statique · roue caoutchouc / bois'), unit: '', step: 0.05 },
    { k: 'muK', label: tr('μ kinetic · rubber wheel / wood', 'μ dynamique · roue caoutchouc / bois'), unit: '', step: 0.05 },
    { k: 'deck', label: tr('Support deck under the top run', 'Plateau d’appui sous le brin supérieur'), type: 'check' },
    { k: 'muDeckS', label: tr('μ static · belt / deck', 'μ statique · tablier / plateau'), unit: '', step: 0.05, show: (p) => p.deck },
    { k: 'muDeckK', label: tr('μ kinetic · belt / deck', 'μ dynamique · tablier / plateau'), unit: '', step: 0.05, show: (p) => p.deck },
    { table: true },
  ],
  game: [
    { h: tr('Speed control (Arduino)', 'Régulation de vitesse (Arduino)') },
    { k: 'aMax', label: tr('Start ramp', 'Rampe de démarrage'), unit: 'm/s²', step: 0.1 },
    { k: 'aBrake', label: tr('Stop ramp after a hit', 'Rampe d’arrêt après une touche'), unit: 'm/s²', step: 0.1 },
    { k: 'encSlots', label: tr('Encoder slots per roller turn', 'Fentes du codeur par tour de rouleau'), unit: '', step: 1, int: true },
    { k: 'ctrlHz', label: tr('Control loop rate', 'Fréquence de la boucle de régulation'), unit: 'Hz', step: 10 },
    { h: tr('Obstacles', 'Obstacles') },
    { k: 'mObs', label: tr('Mass', 'Masse'), unit: 'g', scale: 1000, step: 10 },
    { k: 'lObs', label: tr('Length (along belt)', 'Longueur (dans le sens du tapis)'), unit: 'mm', scale: 1000, step: 5 },
    { k: 'hObs', label: tr('Height', 'Hauteur'), unit: 'mm', scale: 1000, step: 1 },
    { k: 'muObsS', label: tr('μ static · obstacle / belt', 'μ statique · obstacle / tablier'), unit: '', step: 0.05 },
    { k: 'muObsK', label: tr('μ kinetic · obstacle / belt', 'μ dynamique · obstacle / tablier'), unit: '', step: 0.05 },
    { k: 'gapMin', label: tr('Min spacing', 'Espacement min'), unit: 'm', step: 0.05 },
    { k: 'gapMax', label: tr('Max spacing', 'Espacement max'), unit: 'm', step: 0.05 },
  ],
  character: [
    { h: 'Servo' },
    { k: 'servo', label: 'Servo', type: 'select', options: opts(TJ.SERVOS) },
    { k: 'tauMech', label: tr('Mechanical time constant', 'Constante de temps mécanique'), unit: 'ms', scale: 1000, step: 5 },
    { k: 'servoDownDeg', label: tr('Angle, character down', 'Angle, personnage en bas'), unit: '°', step: 1 },
    { k: 'servoUpDeg', label: tr('Angle, character up', 'Angle, personnage en haut'), unit: '°', step: 1 },
    { k: 'holdMs', label: tr('Hold at the top', 'Maintien en haut'), unit: 'ms', step: 10 },
    { h: tr('Bielle linkage', 'Système bielle') },
    { k: 'r1', label: tr('Servo horn radius', 'Rayon du palonnier du servo'), unit: 'mm', scale: 1000, step: 1 },
    { k: 'L', label: tr('Bielle length', 'Longueur de la bielle'), unit: 'mm', scale: 1000, step: 1 },
    { k: 'r2', label: tr('Crank pin radius on pinion', 'Rayon du maneton sur le pignon'), unit: 'mm', scale: 1000, step: 1 },
    { k: 'dx', label: tr('Servo axis, horizontal offset', 'Axe du servo, décalage horizontal'), unit: 'mm', scale: 1000, step: 1 },
    { k: 'dy', label: tr('Servo axis, vertical offset', 'Axe du servo, décalage vertical'), unit: 'mm', scale: 1000, step: 1 },
    { k: 'hornOffsetDeg', label: tr('Horn angle at 0°', 'Angle du palonnier à 0°'), unit: '°', step: 5 },
    { h: tr('Pignon / crémaillère', 'Pignon / crémaillère') },
    { k: 'module', label: tr('Gear module', 'Module de l’engrenage'), unit: 'mm', step: 0.5 },
    { k: 'Zp', label: tr('Pinion teeth', 'Dents du pignon'), unit: tr('teeth', 'dents'), step: 1, int: true },
    { k: 'mChar', label: tr('Moving mass (rack + arm + character)', 'Masse mobile (crémaillère + bras + personnage)'), unit: 'g', scale: 1000, step: 10 },
    { k: 'Fguide', label: tr('Rack guide friction', 'Frottement du guide de crémaillère'), unit: 'N', step: 0.1 },
    { k: 'footW', label: tr('Character foot length', 'Longueur du pied du personnage'), unit: 'mm', scale: 1000, step: 5 },
    { k: 'footGap', label: tr('Gap above belt (down)', 'Jeu au-dessus du tapis (en bas)'), unit: 'mm', scale: 1000, step: 1 },
  ],
  sensor: [
    { h: tr('Liaison pivot', 'Liaison pivot') },
    { k: 'Larm', label: tr('Pivot → hit point', 'Pivot → point d’impact'), unit: 'mm', scale: 1000, step: 5 },
    { k: 'mLower', label: tr('Mass below pivot', 'Masse sous le pivot'), unit: 'g', scale: 1000, step: 10 },
    { k: 'Tpre', label: tr('Return spring preload', 'Précharge du ressort de rappel'), unit: 'N·mm', scale: 1000, step: 1 },
    { k: 'kSpring', label: tr('Return spring stiffness', 'Raideur du ressort de rappel'), unit: 'N·mm/rad', scale: 1000, step: 5 },
    { k: 'thetaMaxDeg', label: tr('Mechanical end stop', 'Butée mécanique'), unit: '°', step: 1 },
    { h: tr('Potentiometer + ADC', 'Potentiomètre + CAN') },
    { k: 'potRangeDeg', label: tr('Pot electrical range', 'Course électrique du potentiomètre'), unit: '°', step: 10 },
    { k: 'thrDeg', label: tr('Detection threshold', 'Seuil de détection'), unit: '°', step: 0.5 },
    { k: 'debounceN', label: tr('Consecutive samples', 'Échantillons consécutifs'), unit: '', step: 1, int: true },
    { k: 'sampleHz', label: tr('Sampling rate', 'Fréquence d’échantillonnage'), unit: 'Hz', step: 100 },
  ],
};

const MU_TABLE = [
  [tr('Rubber on raw MDF / particleboard', 'Caoutchouc sur MDF / aggloméré brut'), '0.5 – 0.8', '0.4 – 0.6'],
  [tr('Rubber on varnished or waxed wood', 'Caoutchouc sur bois verni ou ciré'), '0.4 – 0.6', '0.3 – 0.5'],
  [tr('Rubber on dusty wood (sawdust)', 'Caoutchouc sur bois poussiéreux (sciure)'), '0.3 – 0.5', '0.25 – 0.4'],
  [tr('Wood on wood (belt on deck)', 'Bois sur bois (tablier sur plateau)'), '0.3 – 0.5', '0.2 – 0.4'],
  [tr('Wood on UHMW-PE tape', 'Bois sur ruban PE-UHMW'), '0.15 – 0.25', '0.1 – 0.2'],
];

// ---------- State ----------
let p = { ...TJ.DEFAULTS };
let out, world, scene;
let simSpeed = 1;
let running = true;
const hist = { t: [], vb: [], vm: [], vr: [], I: [], y: [], th: [] };
const HIST_S = 10;
let lastHist = 0;
const inoTemplate = inoSource;

// ---------- Form ----------
let activeTab = 'drive';
function buildForm() {
  const host = $('#form');
  const keepGear = scene.gearHl; // removing the focused input fires blur, which clears it
  host.innerHTML = '';
  for (const f of SCHEMA[activeTab]) {
    if (f.show && !f.show(p)) continue;
    if (f.h) { const h = document.createElement('h3'); h.className = 'fh'; h.textContent = f.h; host.appendChild(h); continue; }
    if (f.note) { const n = document.createElement('p'); n.className = 'fnote'; n.textContent = typeof f.note === 'function' ? f.note(p) : f.note; host.appendChild(n); continue; }
    if (f.table) { host.appendChild(muTable()); continue; }
    const row = document.createElement('label');
    row.className = 'frow';
    const id = 'f_' + f.k;
    row.htmlFor = id;
    const lab = document.createElement('span'); lab.className = 'flabel'; lab.textContent = f.label; row.appendChild(lab);
    let input;
    if (f.type === 'select') {
      input = document.createElement('select');
      for (const [v, t] of f.options) { const o = document.createElement('option'); o.value = v; o.textContent = t; input.appendChild(o); }
      input.value = p[f.k];
    } else if (f.type === 'check') {
      input = document.createElement('input'); input.type = 'checkbox'; input.checked = !!p[f.k];
    } else {
      input = document.createElement('input'); input.type = 'number'; input.step = f.step;
      const sc = f.scale || 1;
      input.value = +(p[f.k] * sc).toPrecision(6);
    }
    input.id = id;
    const wrap = document.createElement('span'); wrap.className = 'finput';
    wrap.appendChild(input);
    if (f.unit !== undefined && f.type !== 'select' && f.type !== 'check') { const u = document.createElement('span'); u.className = 'funit'; u.textContent = f.unit; wrap.appendChild(u); }
    row.appendChild(wrap);
    input.addEventListener('change', () => onField(f, input));
    if (f.gear) {
      row.classList.add('gearRow');
      const on = () => scene.highlightGear(f.gear);
      const off = () => { if (document.activeElement !== input) scene.highlightGear(null); };
      row.addEventListener('pointerenter', on);
      row.addEventListener('pointerleave', off);
      input.addEventListener('focus', on);
      input.addEventListener('blur', () => scene.highlightGear(null));
      if (keepGear === f.gear) { scene.highlightGear(f.gear); requestAnimationFrame(() => input.focus()); }
    }
    host.appendChild(row);
  }
}

function muTable() {
  const wrap = document.createElement('div');
  wrap.className = 'mutable';
  wrap.innerHTML = `<table><thead><tr><th>${tr('Pair', 'Couple de matériaux')}</th><th>${tr('μ static', 'μ statique')}</th><th>${tr('μ kinetic', 'μ dynamique')}</th></tr></thead><tbody>` +
    MU_TABLE.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('') +
    '</tbody></table><p class="fnote">' + tr('Typical handbook ranges. Measure yours with a tilt test: put a wheel on a strip of your board, tilt slowly, note the angle θ where it slides. μ static = tan θ.', 'Plages typiques des manuels. Mesurez les vôtres avec un plan incliné : posez une roue sur une chute de votre panneau, inclinez lentement, notez l’angle θ où elle glisse. μ statique = tan θ.') + '</p>';
  return wrap;
}

// ---------- Spec: what the parts must deliver for the current design ----------
const SPEED_MARGIN = 1.15; // same headroom the report asks of top speed
const LOAD_MAX = 0.8; // continuous load ≤ 80 % of rated torque
const FRICTION_SF = 1.5; // wood, hinges and μ are estimates: oversize by this much
const STD_W = [5, 10, 15, 25, 40, 60, 90, 120, 180, 250, 370, 550, 750, 1100];
const stdUp = (x, list) => list.find((v) => v >= x) ?? Math.ceil(x);

function renderSpec() {
  const host = $('#specView');
  if (!host) return;
  const d = out.d, ac = p.type === 'ac';
  // each h() opens a new card; renderSpec closes them
  let open = false;
  const h = (t) => { const s = (open ? '</article>' : '') + `<article class="card"><header><h3>${t}</h3></header>`; open = true; return s; };
  const tbl = (rows) => `<table class="kv">${rows.join('')}</table>`;
  const big = (k, v, extra) => row(k, v, extra).replace('<tr>', '<tr class="big">');
  const okPill = (good, tight) => pill(good ? 'ok' : tight ? 'warn' : 'bad', good ? 'ok' : tight ? tr('tight', 'juste') : tr('short', 'insuffisant'));

  // Worst steady case: design speed with one obstacle held against the character
  const vReq = p.vTarget * SPEED_MARGIN;
  const F = out.col.total;
  const wWheel = vReq / d.R;
  const wMotor = wWheel * d.iTot;
  const Tcont = (F * d.R) / (d.iTot * d.eta);
  const TratedReq = Math.max(Tcont / LOAD_MAX, out.Tstart / 2);
  const Pbelt = F * vReq;
  const Pshaft = Pbelt / d.eta;
  const PratedMin = TratedReq * wMotor;
  const Prec = stdUp(PratedMin * FRICTION_SF, STD_W);
  // Gearmotor output = after the built-in gearbox, before Z1
  const iBevel = d.iA * d.iB, etaBevel = d.gear.eta * d.gear.eta;
  const rpmOut = (wWheel * iBevel * 60) / (2 * Math.PI);
  const Tout = (F * d.R) / (iBevel * etaBevel);
  const TstartOut = out.Tstart * p.gh * p.etaGh;
  const toRpm = 60 / (2 * Math.PI);

  // Selected motor: rated mechanical power and top speed
  let Psel, rpmSel;
  if (ac) { Psel = p.P; rpmSel = (p.nRated * p.fMax) / p.fBase; }
  else { Psel = d.Trated * Math.max(0, (p.V - p.Irated * p.R) / p.Kt); rpmSel = d.w0 * toRpm; }
  const powOk = Psel >= PratedMin * FRICTION_SF, powTight = Psel >= PratedMin;
  const trqOk = d.Trated >= TratedReq * FRICTION_SF, trqTight = d.Trated >= TratedReq;
  const spdOk = out.vMax >= vReq, spdTight = out.vMax >= p.vTarget;
  const stOk = out.TstartAvail >= out.Tstart / 0.6, stTight = out.TstartAvail >= out.Tstart;

  const html = [];
  html.push(`<div class="spec-intro"><h2>${tr('Specification', 'Cahier des charges')}</h2><p>${tr(`Sized for ${fmt(vReq, 2)} m/s (target ${fmt(p.vTarget, 2)} m/s + ${Math.round((SPEED_MARGIN - 1) * 100)} %) with one obstacle held by the character. Change the belt speed or any design-sheet tab and this page follows.`, `Dimensionné pour ${fmt(vReq, 2)} m/s (cible ${fmt(p.vTarget, 2)} m/s + ${Math.round((SPEED_MARGIN - 1) * 100)} %) avec un obstacle retenu par le personnage. La vitesse du tapis et les onglets de la fiche de conception mettent cette page à jour.`)}</p></div><div class="spec-grid">`);

  html.push(h(tr('Motor needed', 'Moteur nécessaire')));
  html.push(tbl([
    row(tr('Force at the belt', 'Force au tapis'), fmt(F, 2) + ' N'),
    row(tr('Power at the belt', 'Puissance au tapis'), fmt(Pbelt, 2) + ' W'),
    row(tr('Power at the motor shaft', 'Puissance sur l’arbre moteur') + ` (η ${fmt(d.eta * 100, 0)} %)`, fmt(Pshaft, 2) + ' W'),
    row(tr('Motor speed', 'Vitesse moteur') + ` (i = ${fmt(d.iTot, 1)})`, fmt(wMotor * toRpm, 0) + ' ' + RPM),
    row(tr('Running torque', 'Couple en marche'), fmt(Tcont * 1000, 1) + ' N·mm'),
    row(tr('Start torque (breakaway + ramp)', 'Couple de démarrage (décollage + rampe)'), fmt(out.Tstart * 1000, 1) + ' N·mm'),
    big(tr('Rated torque, min', 'Couple nominal min'), fmt(TratedReq * 1000, 1) + ' N·mm'),
    big(tr('Rated power, min', 'Puissance nominale min'), fmt(PratedMin, 1) + ' W'),
    big(tr('Rated power, recommended', 'Puissance nominale conseillée'), Prec + ' W'),
  ]));
  html.push(`<p class="fnote">${tr(`Min = running torque at ≤ ${LOAD_MAX * 100} % of rated, and start torque ≤ 2× rated. Recommended adds ×${FRICTION_SF} because deck and hinge friction are estimates, rounded up to a catalogue size.`, `Min = couple en marche ≤ ${LOAD_MAX * 100} % du nominal, et couple de démarrage ≤ 2× nominal. Conseillé ajoute ×${FRICTION_SF} car les frottements plateau et charnières sont estimés, arrondi à une taille catalogue.`)}</p>`);

  html.push(h(tr('If you buy a gearmotor', 'Si vous achetez un motoréducteur')));
  html.push(tbl([
    row(tr('Output speed (before Z1)', 'Vitesse de sortie (avant Z1)'), fmt(rpmOut, 0) + ' ' + RPM + ' ' + tr('or more', 'ou plus')),
    row(tr('Output torque, running', 'Couple de sortie en marche'), fmt(Tout * 1000 / LOAD_MAX, 0) + ' N·mm'),
    row(tr('Output torque, start', 'Couple de sortie au démarrage'), fmt(TstartOut * 1000, 0) + ' N·mm'),
    row(tr('Roller speed', 'Vitesse des rouleaux'), fmt(wWheel * toRpm, 0) + ' ' + RPM),
  ]));
  html.push(`<p class="fnote">${tr(`Bevel stages Z2/Z1 × Z4/Z3 = ${fmt(iBevel, 2)}. Pick a gearmotor whose no-load output speed is about 1.3× the figure above: the rated speed under load sits ~20 % lower.`, `Étages coniques Z2/Z1 × Z4/Z3 = ${fmt(iBevel, 2)}. Choisissez un motoréducteur dont la vitesse à vide en sortie vaut environ 1,3× ce chiffre : sous charge, la vitesse nominale est ~20 % plus basse.`)}</p>`);

  html.push(h(tr('Your motor vs the need', 'Votre moteur face au besoin')));
  html.push(tbl([
    row(tr('Rated power', 'Puissance nominale'), fmt(Psel, Psel < 10 ? 1 : 0) + ' W' + okPill(powOk, powTight)),
    row(tr('Rated torque', 'Couple nominal'), fmt(d.Trated * 1000, 1) + ' N·mm' + okPill(trqOk, trqTight)),
    row(tr('Top belt speed', 'Vitesse max du tapis'), fmt(out.vMax, 2) + ' m/s' + okPill(spdOk, spdTight)),
    row(ac ? tr('Breakdown torque', 'Couple de décrochage') : tr('Stall torque (driver limit)', 'Couple de blocage (limite driver)'), fmt(out.TstartAvail * 1000, 0) + ' N·mm' + okPill(stOk, stTight)),
    row(tr('Max motor speed', 'Vitesse moteur max'), fmt(rpmSel, 0) + ' ' + RPM),
  ]));

  if (ac) {
    const vfdW = stdUp(Math.max(p.P, Prec), [200, 400, 750, 1500, 2200]);
    html.push(h(tr('Variable-frequency drive', 'Variateur de fréquence')));
    html.push(tbl([
      row(tr('Input / output', 'Entrée / sortie'), tr('230 V 1~ → 230 V 3~', '230 V 1~ → 230 V 3~')),
      big(tr('VFD rating', 'Calibre du variateur'), (vfdW >= 1000 ? fmt(vfdW / 1000, 1) + ' kW' : vfdW + ' W')),
      row(tr('Output current ≥', 'Courant de sortie ≥'), fmt(p.In, 2) + ' A'),
      row(tr('Frequency at target speed', 'Fréquence à la vitesse cible'), fmt(out.ss.f, 1) + ' Hz'),
      row(tr('Control input', 'Entrée de commande'), '0–10 V + FWD'),
    ]));
  } else {
    const Ipeak = Math.min(out.Tstart / p.Kt + p.I0, d.Istall);
    const Ipsu = Math.max(p.Irated * 1.25, out.ssCol.I * 1.5);
    const Idrv = Math.max(p.Irated * 2, Ipeak);
    const psuA = stdUp(Ipsu, [1, 2, 3, 5, 6.5, 10, 15, 20, 30]);
    html.push(h(tr('Power supply and driver', 'Alimentation et driver')));
    html.push(tbl([
      row(tr('Motor current at target', 'Courant moteur à la cible'), fmt(out.ss.I, 2) + ' A'),
      row(tr('With an obstacle held', 'Avec un obstacle retenu'), fmt(out.ssCol.I, 2) + ' A'),
      row(tr('Start peak', 'Pointe au démarrage'), fmt(Ipeak, 2) + ' A'),
      big(tr('Motor supply', 'Alimentation moteur'), `${fmt(p.V, 0)} V · ${psuA} A (${Math.round(p.V * psuA)} W)`),
      big(tr('Driver continuous current ≥', 'Courant continu du driver ≥'), fmt(Idrv, 1) + ' A' + okPill(d.driver.Ilim >= Idrv, d.driver.Ilim >= Ipeak)),
    ]));
  }

  html.push(h(tr('Jump servo', 'Servo de saut')));
  if (out.kin.ok) {
    const TsReq = (out.servoStatic * 2 * 100) / 9.81; // kg·cm, ×2 margin
    html.push(tbl([
      row(tr('Peak static load torque', 'Couple statique max'), fmt((out.servoStatic * 100) / 9.81, 2) + ' kg·cm'),
      big(tr('Stall torque ≥ (×2 margin)', 'Couple de blocage ≥ (marge ×2)'), fmt(TsReq, 1) + ' kg·cm'),
      row(tr('Your servo', 'Votre servo'), fmt((d.servo.Ts * 100) / 9.81, 1) + ' kg·cm' + okPill(out.servoMargin >= 2, out.servoMargin >= 1.2)),
      row(tr('Peak current', 'Courant crête'), fmt(out.jump.maxI, 2) + ' A'),
      big(tr('Servo supply', 'Alimentation servo'), `5–6 V · ≥ ${Math.ceil(out.jump.maxI * 1.5)} A`),
      row(tr('Rack travel needed', 'Course de crémaillère nécessaire'), '≥ ' + fmt((p.hObs + p.footGap) * 1000 + 5, 0) + ' mm'),
    ]));
  } else {
    html.push(`<p class="advice">${out.kin.reason}</p>`);
  }

  html.push(h(tr('Other parts', 'Autres pièces')));
  html.push(`<ul class="parts">
    <li>${tr('Arduino Uno or Nano (5 V)', 'Arduino Uno ou Nano (5 V)')}</li>
    <li>${tr(`Belt: ${p.loopLength.toFixed(2)} m × ${Math.round(p.width * 1000)} mm × ${p.thick * 1000} mm ${TJ.WOODS[p.wood].label}, ≈ ${Math.round(d.mBelt * 1000)} g`, `Tablier : ${p.loopLength.toFixed(2)} m × ${Math.round(p.width * 1000)} mm × ${p.thick * 1000} mm ${TJ.WOODS[p.wood].label}, ≈ ${Math.round(d.mBelt * 1000)} g`)}</li>
    <li>${tr(`2 rollers, 4 wheels Ø${Math.round(p.D * 1000)} mm, axles Ø${Math.round(p.dShaft * 1000)} mm, 4 × ${TJ.BEARINGS[p.bearing].label}`, `2 rouleaux, 4 roues Ø${Math.round(p.D * 1000)} mm, axes Ø${Math.round(p.dShaft * 1000)} mm, 4 × ${TJ.BEARINGS[p.bearing].label}`)}</li>
    <li>${tr(`Bevel gears: Z1 ${p.Z1} / Z2 ${p.Z2}, 2 × Z3 ${p.Z3} / 2 × Z4 ${p.Z4}`, `Engrenages coniques : Z1 ${p.Z1} / Z2 ${p.Z2}, 2 × Z3 ${p.Z3} / 2 × Z4 ${p.Z4}`)}</li>
    <li>${tr(`Encoder: ${p.encSlots}-slot disc + optical fork (or A3144 hall + magnets)`, `Codeur : disque ${p.encSlots} fentes + fourche optique (ou hall A3144 + aimants)`)}</li>
    <li>${tr(`Rack and pinion, module ${p.module}, pinion ${p.Zp} teeth`, `Pignon / crémaillère module ${p.module}, pignon ${p.Zp} dents`)}</li>
    <li>${tr(`10 kΩ linear potentiometer, ${p.potRangeDeg}° travel, on the pivot`, `Potentiomètre 10 kΩ linéaire, course ${p.potRangeDeg}°, sur le pivot`)}</li>
    <li>${tr('Push button, LED + 220 Ω, emergency stop in the motor power line', 'Bouton poussoir, LED + 220 Ω, arrêt d’urgence sur l’alimentation du moteur')}</li>
  </ul></article></div>`);
  host.innerHTML = html.join('');
}

function onField(f, input) {
  let v;
  if (f.type === 'select') v = input.value;
  else if (f.type === 'check') v = input.checked;
  else { v = parseFloat(input.value) / (f.scale || 1); if (!Number.isFinite(v)) return; if (f.int) v = Math.max(1, Math.round(v)); }
  if (f.k === 'motorPreset') {
    if (v !== 'custom') p = { ...p, ...TJ.MOTORS[v] };
    p.motorPreset = v;
  } else {
    p[f.k] = v;
    if (['V', 'R', 'Kt', 'I0', 'Irated', 'P', 'nRated', 'poles', 'fBase', 'kb', 'In', 'Jrotor', 'gh', 'etaGh', 'type'].includes(f.k)) p.motorPreset = 'custom';
  }
  rebuild();
  buildForm();
}

// ---------- Rebuild model ----------
function rebuild() {
  world = new TJ.World(p, 7);
  out = world.out;
  for (const k in hist) hist[k].length = 0;
  lastHist = 0;
  scene.build(p, out, world);
  renderReport();
  renderSpec();
  renderCode();
  drawTorqueSpeed();
  $('#vTarget').value = p.vTarget;
  $('#vTargetOut').textContent = p.vTarget.toFixed(2) + ' m/s';
  $('#log').innerHTML = '';
  logLine(tr('# ready: press Start (or Space)', '# prêt : appuyez sur Démarrer (ou Espace)'));
}

// ---------- Report ----------
function pill(state, text) { return `<span class="pill ${state}">${text}</span>`; }
function row(k, v, extra = '') { return `<tr><th>${k}</th><td>${v}</td>${extra ? `<td>${extra}</td>` : ''}</tr>`; }

function renderReport() {
  const d = out.d, r = out.run;
  const ac = p.type === 'ac';
  // Verdicts
  const lowF = ac && Number.isFinite(out.ss.f) && out.ss.f < 10;
  const vOk = out.vMax >= p.vTarget * 1.15 ? (lowF ? 'warn' : 'ok') : out.vMax >= p.vTarget ? 'warn' : 'bad';
  const tOk = out.loadVsRated <= 0.8 ? 'ok' : out.loadVsRated <= 1 ? 'warn' : 'bad';
  const sOk = out.Tstart <= out.TstartAvail * 0.6 ? 'ok' : out.Tstart <= out.TstartAvail ? 'warn' : 'bad';
  const trOk = out.tractionUse <= 0.5 ? 'ok' : out.tractionUse <= 0.9 ? 'warn' : 'bad';
  const kin = out.kin;
  const cmd = ac ? `${fmt(out.ss.f, 1)} Hz (${fmt(out.ss.u * 10, 2)} V ${tr('on the VFD input', 'sur l’entrée du variateur')})` : `${fmt(out.ss.u * 100, 0)} % ${tr('duty', 'de rapport cyclique')} (${fmt(out.ss.Vm, 2)} V ${tr('at the motor', 'au moteur')})`;
  const iRated = ac ? p.In : p.Irated;
  const html = [];
  html.push(`<article class="card wide"><header><h3>${tr('Force budget at the belt', 'Bilan des forces sur le tapis')}</h3><span>${tr(`at ${fmt(p.vTarget, 2)} m/s, ${fmt(p.mObs * 1000, 0)} g of obstacles on the belt`, `à ${fmt(p.vTarget, 2)} m/s, ${fmt(p.mObs * 1000, 0)} g d’obstacles sur le tapis`)}</span></header>
    <div class="split"><table class="kv">
    ${row(tr('Deck friction', 'Frottement sur le plateau') + ' μ·(m<sub>belt</sub>/2 + m<sub>obs</sub>)·g', fmt(r.Fdeck, 3) + ' N')}
    ${row(tr('Rolling resistance Crr·2·T₀ per roller', 'Résistance au roulement Crr·2·T₀ par rouleau'), fmt(r.Frr, 3) + ' N')}
    ${row(tr('Bearing friction', 'Frottement des paliers') + ' μ<sub>b</sub>·2T₀·d/2 ÷ R', fmt(r.Fbearing, 3) + ' N')}
    ${row(tr('Hinge bending loss (living hinge)', 'Pertes en flexion des charnières (charnière vivante)'), fmt(r.Fbend, 3) + ' N')}
    ${row('<strong>' + tr('Total running resistance', 'Résistance totale en marche') + '</strong>', '<strong>' + fmt(r.total, 2) + ' N</strong>')}
    ${row(tr('+ one obstacle held by the character', '+ un obstacle retenu par le personnage'), '+' + fmt(out.Fpush, 2) + ' N')}
    ${row(tr('Breakaway (static) resistance', 'Résistance au décollage (statique)'), fmt(out.brk.total, 2) + ' N')}
    </table><table class="kv">
    ${row(tr('Belt mass', 'Masse du tablier'), fmt(d.mBelt * 1000, 0) + ' g')}
    ${row(tr('Total ratio i', 'Rapport total i'), fmt(d.iTot, 2) + ' : 1')}
    ${row(tr('Drive efficiency η', 'Rendement de transmission η'), fmt(d.eta * 100, 1) + ' %')}
    ${row(tr('Roller speed', 'Vitesse des rouleaux'), fmt(out.wheelRpm, 1) + ' ' + RPM)}
    ${row(tr('Motor speed', 'Vitesse moteur'), fmt(out.motorRpm, 0) + ' ' + RPM)}
    ${row(tr('Torque at the rollers', 'Couple aux rouleaux'), fmt(out.Twheel * 1000, 1) + ' N·mm')}
    ${row(tr('Torque at the motor shaft', 'Couple sur l’arbre moteur'), fmt(out.ss.Tload * 1000, 2) + ' N·mm')}
    ${row(tr('Mechanical power at the belt', 'Puissance mécanique au tapis'), fmt(out.Pbelt, 2) + ' W')}
    </table></div></article>`);
  html.push(`<article class="card"><header><h3>${tr('Motor operating point', 'Point de fonctionnement du moteur')}</h3>${pill(vOk === 'bad' || tOk === 'bad' || sOk === 'bad' ? 'bad' : vOk === 'warn' || tOk === 'warn' || sOk === 'warn' ? 'warn' : 'ok', vOk === 'bad' ? tr('Too slow', 'Trop lent') : tOk === 'bad' ? tr('Overloaded', 'Surchargé') : sOk === 'bad' ? tr('Will not start', 'Ne démarre pas') : lowF ? tr('Needs reduction', 'Réduction nécessaire') : tr('Fits', 'Convient'))}</header>
    <table class="kv">
    ${row(tr('Command for target speed', 'Commande pour la vitesse cible'), cmd)}
    ${row(tr('Motor current', 'Courant moteur'), fmt(out.ss.I, 2) + ' A', `${fmt(out.currentVsRated * 100, 0)} % ${tr('of rated', 'du nominal')}`)}
    ${row(tr('Load / rated torque', 'Couple de charge / nominal'), fmt(out.loadVsRated * 100, 0) + ' %', pill(tOk, tOk === 'ok' ? 'ok' : tOk === 'warn' ? tr('hot', 'chauffe') : tr('over', 'dépassé')))}
    ${row(tr('Top speed, full command', 'Vitesse max, commande à fond'), fmt(out.vMax, 2) + ' m/s', pill(vOk, vOk === 'ok' ? tr('margin', 'marge') : vOk === 'warn' ? tr('tight', 'juste') : tr('short', 'insuffisant')))}
    ${row(tr('Start torque needed (breakaway + ramp)', 'Couple de démarrage requis (décollage + rampe)'), fmt(out.Tstart * 1000, 2) + ' N·mm')}
    ${row(ac ? tr('Available (breakdown, with boost)', 'Disponible (décrochage, avec boost)') : tr('Available (stall at driver limit)', 'Disponible (blocage à la limite du driver)'), fmt(out.TstartAvail * 1000, 1) + ' N·mm', pill(sOk, sOk === 'ok' ? 'ok' : sOk === 'warn' ? tr('tight', 'juste') : tr('stall', 'calage')))}
    ${ac ? row(tr('Slip at load', 'Glissement en charge'), fmt(out.ss.s * 100, 2) + ' %') : row('Driver', d.driver.label)}
    </table>
    ${vOk === 'bad' ? `<p class="advice">${tr('Lower i: try', 'Baissez i : essayez')} Z2/Z1 = ${fmt((p.Z2 / p.Z1) * (out.vMax / p.vTarget) * 0.85, 2)} (${tr('e.g.', 'ex.')} Z1 ${Math.round(p.Z2 / ((p.Z2 / p.Z1) * (out.vMax / p.vTarget) * 0.85))} → Z2 ${p.Z2}), ${tr('a faster motor, or a bigger wheel.', 'un moteur plus rapide ou une roue plus grande.')}</p>` : ''}
    ${lowF ? `<p class="advice">${tr(`The VFD would run at ${fmt(out.ss.f, 1)} Hz. Below about 10 Hz a self-cooled induction motor overheats and loses torque. Add reduction: a total ratio near ${fmt(d.iTot * (35 / out.ss.f), 0)}:1 puts it around 35 Hz (gearbox or Z2/Z1, Z4/Z3).`, `Le variateur tournerait à ${fmt(out.ss.f, 1)} Hz. En dessous d’environ 10 Hz, un moteur asynchrone autoventilé chauffe et perd du couple. Ajoutez de la réduction : un rapport total d’environ ${fmt(d.iTot * (35 / out.ss.f), 0)}:1 le place vers 35 Hz (réducteur ou Z2/Z1, Z4/Z3).`)}</p>` : ''}
    ${!ac && p.driver === 'l298n' ? `<p class="advice">${tr('The L298N loses about 2 V and heats up. A MOSFET driver (BTS7960, MD10C) gives the motor its full voltage.', 'Le L298N perd environ 2 V et chauffe. Un driver à MOSFET (BTS7960, MD10C) donne au moteur sa pleine tension.')}</p>` : ''}
    </article>`);
  html.push(`<article class="card"><header><h3>${tr('Traction, wheel on tablier', 'Adhérence, roue sur tablier')}</h3>${pill(trOk, trOk === 'ok' ? tr('Grips', 'Adhère') : trOk === 'warn' ? tr('Near slip', 'Limite de glissement') : tr('Slips', 'Patine'))}</header>
    <table class="kv">
    ${row(tr('Capstan limit 2·T₀·tanh(μθ/2) × 2 rollers', 'Limite cabestan 2·T₀·tanh(μθ/2) × 2 rouleaux'), fmt(d.FtracS, 1) + ' N')}
    ${row(tr('Needed at the start ramp', 'Nécessaire pendant la rampe de démarrage'), fmt(out.FtracNeed, 2) + ' N', `${fmt(out.tractionUse * 100, 0)} % ${tr('used', 'utilisé')}`)}
    ${row(tr('Max acceleration before slip', 'Accélération max avant glissement'), fmt(out.aSlip, 1) + ' m/s²')}
    ${row(tr('Reflected rotor inertia (J·i²/R²)', 'Inertie du rotor ramenée (J·i²/R²)'), fmt(d.mRotorRefl, 2) + tr(' kg equivalent', ' kg équivalent'))}
    ${row(tr('Chordal speed ripple (slats on roller)', 'Ondulation de vitesse polygonale (lattes sur rouleau)'), fmt(d.chordRipple * 100, 2) + ' %')}
    ${p.deck ? '' : row(tr('Top-run sag without deck', 'Flèche du brin supérieur sans plateau'), fmt(out.sag * 1000, 1) + ' mm')}
    </table>
    <p class="advice">${tr('The encoder sits on a roller axle, so it cannot see belt slip. Watch the gap between the true and measured speed in the chart.', 'Le codeur est sur un axe de rouleau, il ne voit donc pas le glissement du tablier. Surveillez l’écart entre vitesse réelle et mesurée sur le graphique.')}</p></article>`);
  if (kin.ok) {
    const j = out.jump;
    const mOk = out.servoMargin >= 2 ? 'ok' : out.servoMargin >= 1.2 ? 'warn' : 'bad';
    const twOk = out.timingWindow >= 0.15 ? 'ok' : out.timingWindow > 0 ? 'warn' : 'bad';
    const trans = kin.minTrans >= 40 ? 'ok' : kin.minTrans >= 25 ? 'warn' : 'bad';
    html.push(`<article class="card"><header><h3>${tr('Jump mechanism', 'Mécanisme de saut')}</h3>${pill(!kin.mono || mOk === 'bad' || j.stalled ? 'bad' : twOk === 'bad' ? 'bad' : mOk === 'warn' || twOk === 'warn' || trans !== 'ok' ? 'warn' : 'ok', j.stalled ? tr('Servo stalls', 'Le servo cale') : !kin.mono ? tr('Dead point', 'Point mort') : twOk === 'bad' ? tr('Cannot clear', 'Ne passe pas') : tr('Works', 'Fonctionne'))}</header>
      <table class="kv">
      ${row(tr('Pinion pitch radius m·Z/2', 'Rayon primitif du pignon m·Z/2'), fmt(d.rpp * 1000, 1) + ' mm')}
      ${row(tr('Rack travel (jump height)', 'Course de la crémaillère (hauteur de saut)'), fmt(kin.travel * 1000, 1) + ' mm', kin.travel < p.hObs + p.footGap ? pill('bad', tr('below obstacle', 'sous l’obstacle')) : '')}
      ${row(tr('Min transmission angle', 'Angle de transmission min'), fmt(kin.minTrans, 0) + '°', pill(trans, trans === 'ok' ? 'ok' : trans === 'warn' ? tr('poor', 'médiocre') : tr('jams', 'coince')))}
      ${row(tr('Peak static torque at servo', 'Couple statique max au servo'), fmt(out.servoStatic * 100 / 9.81, 2) + ' kg·cm', `${tr('margin', 'marge')} ×${fmt(out.servoMargin, 1)}`)}
      ${row(tr('Rise / fall time', 'Temps de montée / descente'), `${fmt(j.riseT * 1000, 0)} / ${fmt(j.fallT * 1000, 0)} ms`)}
      ${row(tr('Peak servo current', 'Courant crête du servo'), fmt(j.maxI, 2) + ' A')}
      ${row(tr('Time above the obstacle', 'Temps au-dessus de l’obstacle'), fmt(j.tAbove * 1000, 0) + ' ms')}
      ${row(tr('Obstacle passes under the foot in', 'L’obstacle passe sous le pied en'), fmt(out.tPass * 1000, 0) + ' ms')}
      ${row(tr('Timing window for the player', 'Fenêtre de timing pour le joueur'), fmt(out.timingWindow * 1000, 0) + ' ms', pill(twOk, twOk === 'ok' ? tr('fair', 'jouable') : twOk === 'warn' ? tr('hard', 'difficile') : 'impossible'))}
      ${row(tr('Slowest belt a perfect jump clears', 'Vitesse min du tapis pour un saut parfait'), fmt(out.vMinClear, 2) + ' m/s')}
      </table>
      ${!kin.mono ? `<p class="advice">${tr('The pinion reverses inside the servo range (dead point). Reduce the servo range or lengthen the bielle.', 'Le pignon s’inverse dans la course du servo (point mort). Réduisez la course du servo ou allongez la bielle.')}</p>` : ''}
      <p class="advice">${tr(`The servo draws its stall current while it accelerates. Feed it from a separate 5–6 V supply rated ≥ ${fmt(Math.ceil(j.maxI * 1.5), 0)} A, never from the Arduino 5 V pin.`, `Le servo tire son courant de blocage pendant qu’il accélère. Alimentez-le par une alimentation 5–6 V séparée de ≥ ${fmt(Math.ceil(j.maxI * 1.5), 0)} A, jamais par la broche 5 V de l’Arduino.`)}</p></article>`);
  } else {
    html.push(`<article class="card"><header><h3>${tr('Jump mechanism', 'Mécanisme de saut')}</h3>${pill('bad', tr('Does not assemble', 'Ne s’assemble pas'))}</header><p class="advice">${kin.reason}</p></article>`);
  }
  const dOk = out.detected ? (out.Tpush > out.Tneed * 1.5 ? 'ok' : 'warn') : 'bad';
  const oOk = out.overTravelDeg < p.thetaMaxDeg ? 'ok' : 'warn';
  html.push(`<article class="card"><header><h3>${tr('Collision sensor', 'Capteur de collision')}</h3>${pill(dOk, dOk === 'bad' ? tr('Misses hits', 'Rate des touches') : dOk === 'warn' ? tr('Marginal', 'Limite') : tr('Detects', 'Détecte'))}</header>
    <table class="kv">
    ${row(tr('Push from a held obstacle', 'Poussée d’un obstacle retenu') + ' μ<sub>k</sub>·m·g', fmt(out.Fpush, 3) + ' N')}
    ${row(tr('Torque on the pivot', 'Couple sur le pivot'), fmt(out.Tpush * 1000, 1) + ' N·mm')}
    ${row(tr('Needed to reach threshold', 'Nécessaire pour atteindre le seuil'), fmt(out.Tneed * 1000, 1) + ' N·mm')}
    ${row(tr('Lightest obstacle detected', 'Obstacle le plus léger détecté'), fmt(out.mObsMin * 1000, 0) + ' g')}
    ${row(tr('ADC counts per degree', 'Points CAN par degré'), fmt(out.countsPerDeg, 2))}
    ${row(tr('Threshold', 'Seuil'), out.thrCounts + tr(' counts (', ' points (') + fmt(p.thrDeg, 1) + '°)')}
    ${row(tr('Detection + reaction latency', 'Latence de détection + réaction'), fmt(out.latency * 1000, 0) + ' ms')}
    ${row(tr('Belt travel until stopped', 'Course du tapis avant l’arrêt'), fmt(out.stopDist * 1000, 0) + ' mm')}
    ${row(tr('Arm deflection if obstacle sticks', 'Déviation du bras si l’obstacle reste coincé'), fmt(out.overTravelDeg, 1) + '°', pill(oOk, oOk === 'ok' ? tr('within stop', 'avant la butée') : tr('hits stop', 'touche la butée')))}
    </table>
    <p class="advice">${tr('The pivot only sees horizontal hits. If the character lands on top of an obstacle, the arm does not rotate. Sensing servo current (INA219) or a second switch under the foot covers that case.', 'Le pivot ne voit que les chocs horizontaux. Si le personnage atterrit sur un obstacle, le bras ne tourne pas. Mesurer le courant du servo (INA219) ou ajouter un second contact sous le pied couvre ce cas.')}</p></article>`);
  $('#report').innerHTML = html.join('');
  // Summary pills in header
  const summary = [
    [tr('Drive', 'Motorisation'), vOk === 'bad' || tOk === 'bad' || sOk === 'bad' ? 'bad' : (vOk === 'warn' || tOk === 'warn' || sOk === 'warn') ? 'warn' : 'ok'],
    [tr('Traction', 'Adhérence'), trOk],
    [tr('Jump', 'Saut'), kin.ok && kin.mono && !out.jump.stalled ? (out.timingWindow > 0.15 ? 'ok' : out.timingWindow > 0 ? 'warn' : 'bad') : 'bad'],
    [tr('Sensor', 'Capteur'), dOk],
  ];
  $('#verdicts').innerHTML = summary.map(([k, s]) => pill(s, k)).join('');
}

// ---------- Charts (canvas) ----------
function css(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
function setupCanvas(c) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = c.clientWidth, h = c.clientHeight;
  if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) { c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); }
  const ctx = c.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}
function niceMax(x) { if (x <= 0) return 1; const e = Math.pow(10, Math.floor(Math.log10(x))); const m = x / e; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10) * e; }

const hover = {};
function stripChart(id, series, yUnit, yMinFixed) {
  const c = $('#' + id);
  const { ctx, w, h } = setupCanvas(c);
  const padL = 40, padR = 10, padT = 8, padB = 20;
  const t = hist.t;
  ctx.clearRect(0, 0, w, h);
  const tNow = t.length ? t[t.length - 1] : 0;
  const t0 = Math.max(0, tNow - HIST_S);
  let ymax = 0;
  for (const s of series) if (s.data) for (const v of s.data) if (v > ymax) ymax = v;
  if (s0(series)) ymax = Math.max(ymax, s0(series));
  ymax = niceMax(ymax * 1.1 || 1);
  const ymin = yMinFixed ?? 0;
  const X = (tt) => padL + ((tt - t0) / HIST_S) * (w - padL - padR);
  const Y = (v) => padT + (1 - (v - ymin) / (ymax - ymin)) * (h - padT - padB);
  ctx.font = '11px "IBM Plex Mono", ui-monospace, monospace';
  ctx.fillStyle = css('--muted');
  ctx.strokeStyle = css('--grid');
  ctx.lineWidth = 1;
  for (let k = 0; k <= 4; k++) {
    const v = ymin + ((ymax - ymin) * k) / 4;
    const yy = Math.round(Y(v)) + 0.5;
    ctx.beginPath(); ctx.moveTo(padL, yy); ctx.lineTo(w - padR, yy); ctx.stroke();
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    ctx.fillText(+v.toPrecision(3), padL - 6, yy);
  }
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (let s = Math.ceil(t0); s <= tNow; s += 2) ctx.fillText(s + ' s', X(s), h - padB + 5);
  for (const s of series) {
    if (s.ref !== undefined) {
      ctx.setLineDash([4, 4]); ctx.strokeStyle = css(s.color); ctx.lineWidth = 1.5;
      const yy = Y(s.ref); ctx.beginPath(); ctx.moveTo(padL, yy); ctx.lineTo(w - padR, yy); ctx.stroke(); ctx.setLineDash([]);
      continue;
    }
    ctx.strokeStyle = css(s.color);
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    if (s.dash) ctx.setLineDash(s.dash);
    ctx.beginPath();
    let first = true;
    for (let i = 0; i < t.length; i++) {
      if (t[i] < t0) continue;
      const xx = X(t[i]), yy = Y(s.data[i]);
      if (first) { ctx.moveTo(xx, yy); first = false; } else ctx.lineTo(xx, yy);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }
  // hover crosshair
  const hv = hover[id];
  if (hv && t.length) {
    const tt = t0 + ((hv.x - padL) / (w - padL - padR)) * HIST_S;
    let idx = 0, best = Infinity;
    for (let i = 0; i < t.length; i++) { const dd = Math.abs(t[i] - tt); if (dd < best) { best = dd; idx = i; } }
    const xx = X(t[idx]);
    if (xx >= padL && xx <= w - padR) {
      ctx.strokeStyle = css('--ink-2'); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(xx + 0.5, padT); ctx.lineTo(xx + 0.5, h - padB); ctx.stroke();
      for (const s of series) {
        if (!s.data) continue;
        ctx.fillStyle = css(s.color); ctx.strokeStyle = css('--panel'); ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(xx, Y(s.data[idx]), 4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      }
      const tip = $('#' + id + '_tip');
      tip.hidden = false;
      tip.innerHTML = `<b>${t[idx].toFixed(2)} s</b>` + series.filter((s) => s.data).map((s) => `<span><i style="background:var(${s.color})"></i>${s.name} ${s.data[idx].toFixed(3)} ${yUnit}</span>`).join('');
      tip.style.left = Math.min(w - 170, Math.max(0, xx + 10)) + 'px';
    }
  } else { const tip = $('#' + id + '_tip'); if (tip) tip.hidden = true; }
}
function s0(series) { const r = series.find((s) => s.ref !== undefined); return r ? r.ref : 0; }

function drawCharts() {
  stripChart('chSpeed', [
    { name: tr('reference', 'consigne'), data: hist.vr, color: '--muted', dash: [5, 4] },
    { name: tr('true belt', 'tapis réel'), data: hist.vb, color: '--series-1' },
    { name: tr('encoder', 'codeur'), data: hist.vm, color: '--series-2' },
  ], 'm/s');
  stripChart('chCurrent', [{ name: tr('motor', 'moteur'), data: hist.I, color: '--series-1' }], 'A');
  stripChart('chLift', [
    { name: tr('obstacle top', 'haut de l’obstacle'), ref: p.hObs * 1000, color: '--series-2' },
    { name: tr('foot height', 'hauteur du pied'), data: hist.y, color: '--series-1' },
  ], 'mm');
}

function drawTorqueSpeed() {
  const c = $('#chTS');
  const { ctx, w, h } = setupCanvas(c);
  const d = out.d;
  const pts = TJ.torqueSpeedCurve(p, d);
  const toRpm = 60 / (2 * Math.PI);
  const xmax = niceMax(pts[pts.length - 1].w * toRpm);
  const tmax = niceMax(Math.max(...pts.map((q) => q.T)) * 1000 * 1.05);
  const padL = 48, padR = 12, padT = 10, padB = 34;
  const X = (rpm) => padL + (rpm / xmax) * (w - padL - padR);
  const Y = (nmm) => padT + (1 - nmm / tmax) * (h - padT - padB);
  ctx.clearRect(0, 0, w, h);
  ctx.font = '11px "IBM Plex Mono", ui-monospace, monospace';
  ctx.strokeStyle = css('--grid'); ctx.fillStyle = css('--muted'); ctx.lineWidth = 1;
  for (let k = 0; k <= 4; k++) {
    const v = (tmax * k) / 4, yy = Math.round(Y(v)) + 0.5;
    ctx.beginPath(); ctx.moveTo(padL, yy); ctx.lineTo(w - padR, yy); ctx.stroke();
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(+v.toPrecision(3), padL - 6, yy);
    const xv = (xmax * k) / 4; ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillText(+xv.toPrecision(4), X(xv), h - padB + 5);
  }
  ctx.textAlign = 'center'; ctx.fillText(tr('motor speed (rpm)', 'vitesse moteur (tr/min)'), (padL + w - padR) / 2, h - 14);
  ctx.save(); ctx.translate(11, (padT + h - padB) / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(tr('torque (N·mm)', 'couple (N·mm)'), 0, 0); ctx.restore();
  ctx.strokeStyle = css('--series-1'); ctx.lineWidth = 2; ctx.beginPath();
  pts.forEach((q, i) => { const xx = X(q.w * toRpm), yy = Y(q.T * 1000); i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); });
  ctx.stroke();
  // load line (constant torque) and rated torque
  const Tl = out.ss.Tload * 1000, Tc = out.ssCol.Tload * 1000;
  ctx.setLineDash([5, 4]); ctx.strokeStyle = css('--series-2'); ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(padL, Y(Tl)); ctx.lineTo(w - padR, Y(Tl)); ctx.stroke();
  ctx.strokeStyle = css('--muted');
  const Tr = d.Trated * 1000;
  if (Tr < tmax) { ctx.beginPath(); ctx.moveTo(padL, Y(Tr)); ctx.lineTo(w - padR, Y(Tr)); ctx.stroke(); ctx.fillStyle = css('--muted'); ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.fillText(tr('rated ', 'nominal ') + Tr.toFixed(1), w - padR, Y(Tr) - 2); }
  ctx.setLineDash([]);
  ctx.fillStyle = css('--series-2'); ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
  ctx.fillText(tr('load ', 'charge ') + Tl.toFixed(2) + ' N·mm', padL + 6, Y(Tl) - 2);
  // operating point at target speed
  const op = out.ss;
  if (Number.isFinite(op.w)) {
    ctx.fillStyle = css('--series-2'); ctx.strokeStyle = css('--panel'); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(X(op.w * toRpm), Y(Tl), 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  }
  const full = p.type === 'ac' ? p.fMax + ' Hz' : '100 % PWM';
  $('#tsNote').textContent = tr(`Full-command curve (${full}) vs the load torque reflected to the motor shaft. Dot = operating point at ${p.vTarget.toFixed(2)} m/s. With one obstacle held: ${Tc.toFixed(2)} N·mm.`,
    `Courbe à commande maximale (${full}) face au couple de charge ramené sur l’arbre moteur. Point = fonctionnement à ${p.vTarget.toFixed(2)} m/s. Avec un obstacle retenu : ${Tc.toFixed(2)} N·mm.`);
}

// ---------- Arduino code ----------
function renderCode() {
  if (!inoTemplate) return;
  const code = inoTemplate.replace(/\/\/ ===== CONFIG BEGIN[\s\S]*?\/\/ ===== CONFIG END =====/, TJ.exportConfig(p, out));
  $('#code').textContent = code;
}

// ---------- Live loop ----------
function logLine(msg) {
  const el = $('#log');
  const line = document.createElement('div');
  line.textContent = msg;
  el.appendChild(line);
  while (el.childNodes.length > 60) el.removeChild(el.firstChild);
  el.scrollTop = el.scrollHeight;
}
let lastEvt = 0;

function readouts() {
  const ac = p.type === 'ac';
  const ard = world.ard;
  const set = (id, v) => { const e = document.getElementById(id); if (e && e.textContent !== v) e.textContent = v; };
  set('r_v', fmt(world.vb, 3));
  set('r_vm', fmt(world.vMeas, 3));
  set('r_u', ac ? fmt(world.fCmd, 1) : fmt(world.u * 100, 0));
  set('r_uUnit', ac ? 'Hz' : '% PWM');
  set('r_I', fmt(world.I, 2));
  set('r_Is', fmt(world.Is, 2));
  set('r_adc', String(world.adc));
  set('r_base', 'base ' + ard.adcBase);
  set('r_state', stateName(ard.state));
  set('r_jump', stateName(ard.jump));
  set('r_score', String(world.score));
  set('r_hits', String(ard.hits));
  set('r_y', fmt(world.y * 1000, 1));
  set('r_th', fmt(world.theta / DEG, 1));
  $('#slipFlag').hidden = !world.slip;
  $('#landFlag').hidden = !world.landedOn;
  const btn = $('#btnMain');
  const label = ard.state === 'READY' ? tr('Start', 'Démarrer') : ard.state === 'GAME_OVER' ? (ard.vRef === 0 ? tr('New game', 'Nouvelle partie') : tr('Braking…', 'Freinage…')) : tr('Jump', 'Sauter');
  if (btn.textContent !== label) btn.textContent = label;
  $('#stage').dataset.state = ard.state;
}

let tPrev = performance.now();
function frame(now) {
  const dtReal = Math.min(0.05, (now - tPrev) / 1000);
  tPrev = now;
  if (running) {
    const simDt = dtReal * simSpeed;
    const h = 2e-4;
    const n = Math.max(1, Math.round(simDt / h));
    for (let i = 0; i < n; i++) {
      world.step(h);
      if (world.t - lastHist >= 0.02) {
        lastHist = world.t;
        hist.t.push(world.t); hist.vb.push(world.vb); hist.vm.push(world.vMeas); hist.vr.push(world.ard.vRef);
        hist.I.push(Math.abs(world.I)); hist.y.push((world.y + p.footGap) * 1000); hist.th.push(world.theta / DEG);
        while (hist.t.length && hist.t[0] < world.t - HIST_S - 0.5) for (const k in hist) hist[k].shift();
      }
    }
    const ev = world.ard.events;
    while (lastEvt < ev.length) { const e = ev[lastEvt++]; logLine(`[${(e.t / 1000).toFixed(2)} s] ${e.msg}`); }
    if (lastEvt > ev.length) lastEvt = ev.length;
  }
  if ($('#simAcc').open && $('#stage').dataset.focus !== 'spec') { scene.update(world); scene.render(); }
  readouts();
  drawCharts();
  requestAnimationFrame(frame);
}

function press() {
  const before = world.ard.state;
  world.ard.press(world.t * 1000);
  if (before === 'GAME_OVER' && world.ard.state === 'READY') {
    // like the sketch: recalibrate and clear the belt
    world.obs = [];
    world.theta = 0; world.thetaDot = 0;
    world.ard.calibrate(world.readAdc());
    world.score = 0;
  }
  lastEvt = Math.min(lastEvt, world.ard.events.length);
}

// ---------- Focus: whole system, treadmill, or character ----------
const FOCUS_TABS = { belt: ['drive', 'gears', 'belt', 'game'], char: ['character', 'sensor', 'game'] };
function selectDesignTab(tab) {
  activeTab = tab;
  scene.highlightGear(null);
  document.querySelectorAll('.tabs button').forEach((x) => {
    const on = x.dataset.tab === tab;
    x.setAttribute('aria-selected', on ? 'true' : 'false');
    // in a focused view, only that part's design tabs are offered
    const f = $('#stage').dataset.focus;
    x.hidden = f in FOCUS_TABS && !FOCUS_TABS[f].includes(x.dataset.tab);
  });
  buildForm();
}
function setFocus(focus, animate = true) {
  if (!['all', 'belt', 'char', 'spec'].includes(focus)) focus = 'all';
  $('#stage').dataset.focus = focus;
  document.querySelectorAll('.viewtabs button').forEach((b) => b.setAttribute('aria-selected', b.dataset.focus === focus ? 'true' : 'false'));
  if (focus !== 'spec') scene.setFocus(focus, animate);
  const allowed = FOCUS_TABS[focus];
  selectDesignTab(allowed && !allowed.includes(activeTab) ? allowed[0] : activeTab);
  // keep the view in the URL so a reload or the language switch lands on it
  history.replaceState(null, '', focus === 'all' ? location.pathname + location.search : '#' + focus);
}

// ---------- Init ----------
function init() {
  initLangSwitch($('#lang'));
  scene = new Scene3D($('#view'), $('#labels'));
  document.querySelectorAll('.tabs button').forEach((b) => b.addEventListener('click', () => selectDesignTab(b.dataset.tab)));
  document.querySelectorAll('.viewtabs button').forEach((b) => b.addEventListener('click', () => setFocus(b.dataset.focus)));
  $('#btnMain').addEventListener('click', press);
  $('#btnReset').addEventListener('click', () => { rebuild(); });
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !/INPUT|SELECT|TEXTAREA|BUTTON|SUMMARY/.test(document.activeElement.tagName)) { e.preventDefault(); press(); }
  });
  $('#vTarget').addEventListener('input', (e) => {
    p.vTarget = parseFloat(e.target.value);
    $('#vTargetOut').textContent = p.vTarget.toFixed(2) + ' m/s';
    if (world.ard.state === 'RUNNING') world.ard.vTarget = p.vTarget;
    world.p.vTarget = p.vTarget;
  });
  $('#vTarget').addEventListener('change', () => {
    const keep = world;
    out = TJ.analyze(p);
    keep.out = out; keep.ard.out = out;
    renderReport(); renderCode(); drawTorqueSpeed();
    renderSpec();
  });
  document.querySelectorAll('[data-speed]').forEach((b) => b.addEventListener('click', () => {
    simSpeed = parseFloat(b.dataset.speed);
    document.querySelectorAll('[data-speed]').forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
  }));
  $('#btnPause').addEventListener('click', () => { running = !running; $('#btnPause').textContent = running ? 'Pause' : tr('Resume', 'Reprendre'); });
  $('#btnLabels').addEventListener('click', () => {
    scene.showLabels = !scene.showLabels;
    const b = $('#btnLabels');
    b.setAttribute('aria-pressed', scene.showLabels ? 'false' : 'true');
    b.textContent = scene.showLabels ? tr('Hide names', 'Masquer les noms') : tr('Show names', 'Afficher les noms');
  });
  // 3D accordion: remember open/closed for this viewer
  const acc = $('#simAcc');
  try { if (localStorage.getItem('simAcc') === 'closed') acc.open = false; } catch {}
  acc.addEventListener('toggle', () => { try { localStorage.setItem('simAcc', acc.open ? 'open' : 'closed'); } catch {} });
  for (const id of ['chSpeed', 'chCurrent', 'chLift']) {
    const c = $('#' + id);
    c.addEventListener('pointermove', (e) => { const r = c.getBoundingClientRect(); hover[id] = { x: e.clientX - r.left }; });
    c.addEventListener('pointerleave', () => { hover[id] = null; });
  }
  $('#btnCopy').addEventListener('click', async () => {
    const txt = $('#code').textContent;
    try { await navigator.clipboard.writeText(txt); $('#copyMsg').textContent = tr('Copied', 'Copié'); }
    catch { const r = document.createRange(); r.selectNodeContents($('#code')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); $('#copyMsg').textContent = tr('Selected, press Ctrl/Cmd + C', 'Sélectionné, faites Ctrl/Cmd + C'); }
    setTimeout(() => { $('#copyMsg').textContent = ''; }, 2500);
  });
  const themeChanged = () => { scene.applyTheme(); drawTorqueSpeed(); };
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeChanged);
  new MutationObserver(themeChanged).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.addEventListener('resize', () => drawTorqueSpeed());
  buildForm();
  rebuild();
  setFocus(location.hash.slice(1) || 'all', false);
  requestAnimationFrame(frame);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
