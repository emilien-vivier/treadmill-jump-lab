// Build guide: schematics (inline SVG) + step-by-step assembly, for the default design.
import './style.css';
import TJ from './physics.js';
import { tr, initLangSwitch } from './i18n.js';

const p = { ...TJ.DEFAULTS };
const out = TJ.analyze(p);
const d = out.d;
const mm = (x) => Math.round(x * 1000);
const n2 = (x) => x.toFixed(2);
const spanMm = mm(d.span);
const servoName = TJ.SERVOS[p.servo].label.split(' (')[0];
const thrCounts = Math.round((p.thrDeg * 1023) / p.potRangeDeg);
const encStepMm = (Math.PI * p.D * 1000) / p.encSlots;

// ---------- SVG helpers ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const T = (x, y, s, cls = '', anchor = 'start') => {
  const lines = Array.isArray(s) ? s : [s];
  return `<text x="${x}" y="${y}" class="${cls}" text-anchor="${anchor}">${lines.map((l, i) => `<tspan x="${x}" dy="${i ? '1.2em' : 0}">${esc(l)}</tspan>`).join('')}</text>`;
};
const box = (x, y, w, h, title, sub, cls = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" class="bx ${cls}"/>` +
  T(x + w / 2, y + h / 2 - (sub ? 3 : -4), title, 't-b', 'middle') + (sub ? T(x + w / 2, y + h / 2 + 14, sub, 't-sub', 'middle') : '');
const path = (dd, cls) => `<path d="${dd}" class="${cls}"/>`;
const lead = (x1, y1, x2, y2) => `<path d="M${x1},${y1} L${x2},${y2}" class="lead"/><circle cx="${x1}" cy="${y1}" r="2.2" class="lead-dot"/>`;
const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="3.4" class="jdot"/>`;
const gnd = (x, y) => `<path d="M${x},${y} v8 M${x - 9},${y + 8} h18 M${x - 6},${y + 12} h12 M${x - 3},${y + 16} h6" class="w gnd"/>`;
const vcc = (x, y, label = '5V') => `<path d="M${x},${y} v-10 M${x - 8},${y - 10} h16" class="w pwr"/>` + T(x, y - 14, label, 't-pin', 'middle');
const pin = (x, y, label, side) => `<circle cx="${x}" cy="${y}" r="2.6" class="pin"/>` + T(side === 'l' ? x + 7 : x - 7, y + 4, label, 't-pin', side === 'l' ? 'start' : 'end');
const arrowDefs = (id) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="arrowhead"/></marker></defs>`;
const svg = (vb, label, body, minW = 0) => `<div class="figscroll"><svg viewBox="${vb}" role="img" aria-label="${esc(label)}" style="max-width:${vb.split(' ')[2]}px${minW ? `;min-width:${minW}px` : ''}">${body}</svg></div>`;
const fig = (n, caption, inner) => `<figure class="fig">${inner}<figcaption><b>${tr('Figure', 'Figure')} ${n}.</b> ${caption}</figcaption></figure>`;

// ---------- Figure 1: system overview ----------
function figOverview() {
  const A = 'ar1';
  const top = [
    [tr('Motor driver', 'Driver moteur'), TJ.DRIVERS[p.driver].label.split(' ')[0]],
    [tr('Motor', 'Moteur'), `${p.V} V · ${p.gh}:1`],
    [tr('Stage A', 'Étage A'), `Z1→Z2 ${p.Z1}/${p.Z2}`],
    [tr('Stage B ×2', 'Étage B ×2'), `Z3→Z4 ${p.Z3}/${p.Z4}`],
    [tr('Rollers', 'Rouleaux'), tr(`4 wheels Ø${mm(p.D)}`, `4 roues Ø${mm(p.D)}`)],
    [tr('Tablier', 'Tablier'), tr(`belt ${n2(p.loopLength)} m`, `boucle ${n2(p.loopLength)} m`)],
  ];
  const bot = [
    ['Servo', servoName],
    [tr('Horn', 'Palonnier'), `r1 = ${mm(p.r1)} mm`],
    [tr('Bielle', 'Bielle'), `L = ${mm(p.L)} mm`],
    [tr('Pinion', 'Pignon'), tr(`crank r2 = ${mm(p.r2)}`, `maneton r2 = ${mm(p.r2)}`)],
    [tr('Rack', 'Crémaillère'), `m${p.module} · ${p.Zp} ${tr('t', 'd')}`],
    [tr('Pivot + foot', 'Pivot + pied'), `L = ${mm(p.Larm)} mm`],
  ];
  const bw = 118, gap = 22, x0 = 210;
  let b = arrowDefs(A);
  b += box(20, 120, 140, 110, 'Arduino', 'Uno / Nano', 'ard');
  top.forEach(([t, s], i) => {
    const x = x0 + i * (bw + gap);
    b += box(x, 40, bw, 56, t, s, i < 2 ? 'elec' : 'mech');
    if (i) b += `<path d="M${x - gap},68 H${x - 2}" class="flow" marker-end="url(#${A})"/>`;
  });
  bot.forEach(([t, s], i) => {
    const x = x0 + i * (bw + gap);
    b += box(x, 254, bw, 56, t, s, i < 1 ? 'elec' : 'mech');
    if (i) b += `<path d="M${x - gap},282 H${x - 2}" class="flow" marker-end="url(#${A})"/>`;
  });
  // commands out of the Arduino
  b += `<path d="M160,145 H185 V68 H${x0 - 2}" class="flow cmd" marker-end="url(#${A})"/>` + T(170, 112, 'D3 · D8', 't-pin', 'middle');
  b += `<path d="M160,205 H185 V282 H${x0 - 2}" class="flow cmd" marker-end="url(#${A})"/>` + T(170, 248, 'D9', 't-pin', 'middle');
  // feedback into the Arduino
  const xr = x0 + 4 * (bw + gap) + bw / 2, xp = x0 + 5 * (bw + gap) + bw / 2;
  b += `<path d="M${xr},40 V16 H90 V118" class="flow fb" marker-end="url(#${A})"/>` + T((xr + 90) / 2, 11, tr('encoder on a roller axle → D2 (speed feedback)', 'codeur sur un axe de rouleau → D2 (retour vitesse)'), 't-fb', 'middle');
  b += `<path d="M${xp},310 V334 H90 V232" class="flow fb" marker-end="url(#${A})"/>` + T((xp + 90) / 2, 350, tr('potentiometer on the pivot → A0 (collision)', 'potentiomètre sur le pivot → A0 (collision)'), 't-fb', 'middle');
  b += T(x0, 128, tr('TREADMILL · power path', 'TAPIS · chaîne de puissance'), 't-cap');
  b += T(x0, 242, tr('CHARACTER · jump linkage', 'PERSONNAGE · mécanisme de saut'), 't-cap');
  return svg('0 0 1050 360', tr('System overview', 'Vue d’ensemble du système'), b, 760);
}

// ---------- Figure 2: treadmill, top view ----------
function figPlan() {
  let b = arrowDefs('ar2');
  // rails + bearings
  b += `<rect x="100" y="46" width="540" height="12" class="woodDark"/><rect x="100" y="262" width="540" height="12" class="woodDark"/>`;
  // belt with hinge cuts
  b += `<rect x="128" y="68" width="484" height="184" class="woodLight"/>`;
  for (let x = 140; x < 612; x += 12) b += `<path d="M${x},${(x / 12) % 2 ? 72 : 76} V${(x / 12) % 2 ? 248 : 244}" class="kerf"/>`;
  // axles, wheels (dashed: under the belt), bearings
  for (const x of [160, 580]) {
    b += `<path d="M${x},36 V322" class="steel"/>`;
    for (const y of [80, 216]) b += `<rect x="${x - 11}" y="${y}" width="22" height="24" rx="3" class="rubber"/>`;
    for (const y of [52, 268]) b += `<circle cx="${x}" cy="${y}" r="7" class="bearing"/>`;
  }
  // driveshaft and bevel gears
  b += `<path d="M178,322 H562" class="steel"/>`;
  for (const [ax, sx] of [[160, 1], [580, -1]]) {
    b += `<rect x="${ax - 13}" y="${322 - 5}" width="26" height="10" class="brass"/>`; // Z4 on axle
    b += `<rect x="${ax + sx * 18 - 5}" y="${322 - 13}" width="10" height="26" class="brass"/>`; // Z3 on shaft end
  }
  b += `<rect x="373" y="307" width="10" height="30" class="brass"/>`; // Z2 crown
  b += `<rect x="385" y="332" width="22" height="9" class="brass"/>`; // Z1 pinion
  b += `<path d="M396,341 V350" class="steel"/><rect x="380" y="350" width="32" height="44" rx="4" class="motor"/>`;
  // belt travel + character footprint
  b += `<path d="M230,160 H330" class="flow" marker-end="url(#ar2)"/>` + T(280, 150, tr('top run moves this way', 'le brin supérieur avance ainsi'), 't-sm', 'middle');
  b += `<rect x="440" y="120" width="40" height="80" rx="3" class="ghost"/>` + T(460, 215, tr('character foot', 'pied du personnage'), 't-sm', 'middle');
  // dimensions
  b += `<path d="M160,22 H580" class="dim" marker-start="url(#ar2)" marker-end="url(#ar2)"/>` + T(370, 17, tr(`axle spacing ≈ ${spanMm} mm`, `entraxe ≈ ${spanMm} mm`), 't-dim', 'middle');
  b += `<path d="M660,68 V252" class="dim" marker-start="url(#ar2)" marker-end="url(#ar2)"/>` + T(668, 164, `${mm(p.width)} mm`, 't-dim');
  // labels
  b += T(186, 92, tr('Tablier (laser-cut belt)', 'Tablier (découpé au laser)'), 't-b');
  b += lead(160, 228, 196, 236) + T(200, 240, tr('rubber wheels ×4 (under the belt)', 'roues caoutchouc ×4 (sous le tablier)'), 't-sm');
  b += lead(580, 52, 610, 30) + T(614, 34, tr('608 bearing in the rail', 'roulement 608 dans le longeron'), 't-sm');
  b += lead(580, 290, 610, 296) + T(614, 300, tr('roller axle', 'axe de rouleau'), 't-sm');
  b += lead(470, 322, 480, 352) + T(484, 356, tr('driveshaft', 'arbre de transmission'), 't-sm');
  b += lead(100, 52, 70, 40) + T(66, 36, tr('rail', 'longeron'), 't-sm', 'end');
  b += T(378, 300, 'Z2', 't-gear', 'middle') + T(412, 341, 'Z1', 't-gear');
  b += T(178, 302, 'Z3', 't-gear', 'middle') + T(562, 302, 'Z3', 't-gear', 'middle');
  b += T(144, 344, 'Z4', 't-gear', 'middle') + T(596, 344, 'Z4', 't-gear', 'middle');
  b += T(420, 378, tr(`motor + ${p.gh}:1 gearbox`, `moteur + réducteur ${p.gh}:1`), 't-sm');
  return svg('0 0 820 400', tr('Treadmill top view', 'Tapis, vue de dessus'), b, 640);
}

// ---------- Figure 3: treadmill, side view ----------
function figSide() {
  let b = arrowDefs('ar3');
  b += `<path d="M20,262 H800" class="ground"/>`;
  for (const x of [150, 620]) b += `<rect x="${x}" y="130" width="12" height="132" class="woodDark"/>`;
  b += `<rect x="590" y="124" width="46" height="12" rx="6" class="slot"/>`;
  b += `<rect x="226" y="92" width="328" height="7" class="woodDark"/>`; // deck
  for (const x of [180, 600]) b += `<circle cx="${x}" cy="130" r="40" class="rubber"/><circle cx="${x}" cy="130" r="4" class="axle"/>`;
  b += `<path d="M180,86.5 H600 A43.5,43.5 0 0 1 600,173.5 H180 A43.5,43.5 0 0 1 180,86.5 Z" class="belt"/>`;
  // encoder disc on the left axle
  let ticks = '';
  for (let i = 0; i < 20; i++) { const a = (i / 20) * 2 * Math.PI; ticks += `M${180 + 15 * Math.cos(a)},${130 + 15 * Math.sin(a)} L${180 + 22 * Math.cos(a)},${130 + 22 * Math.sin(a)} `; }
  b += `<circle cx="180" cy="130" r="22" class="encdisc"/><path d="${ticks}" class="enctick"/><rect x="196" y="142" width="14" height="22" rx="2" class="sensor"/>`;
  // character + obstacle
  b += `<path d="M430,8 V44" class="arm"/><circle cx="430" cy="8" r="5" class="pivotDot"/><rect x="410" y="44" width="40" height="36" rx="3" class="char"/>`;
  b += `<rect x="300" y="60" width="40" height="23" rx="2" class="obstacle"/>`;
  b += `<path d="M350,72 H396" class="flow" marker-end="url(#ar3)"/>`;
  // labels
  b += lead(320, 72, 290, 40) + T(286, 36, tr('obstacle rides on the belt', 'obstacle posé sur le tapis'), 't-sm', 'end');
  b += lead(452, 62, 480, 40) + T(484, 36, tr(`foot, ${mm(p.footGap)} mm above the belt`, `pied, ${mm(p.footGap)} mm au-dessus du tapis`), 't-sm');
  b += lead(470, 98, 470, 228) + T(474, 240, tr('deck: belt slides on it', 'plateau : le tablier glisse dessus'), 't-sm');
  b += lead(636, 130, 668, 110) + T(672, 106, [tr('slotted axle mount:', 'palier en lumière :'), tr('slide to tension (T₀)', 'glisser pour tendre (T₀)')], 't-sm');
  b += lead(203, 160, 230, 205) + T(234, 210, [tr(`encoder: ${p.encSlots}-slot disc + optical fork`, `codeur : disque ${p.encSlots} fentes + fourche optique`), tr(`= ${encStepMm.toFixed(1)} mm of belt per pulse → D2`, `= ${encStepMm.toFixed(1)} mm de tapis par impulsion → D2`)], 't-sm');
  b += lead(600, 173, 640, 210) + T(644, 214, tr('180° wrap on each roller', 'enroulement 180° sur chaque rouleau'), 't-sm');
  b += lead(140, 130, 70, 130) + T(66, 134, tr(`Ø${mm(p.D)} mm`, `Ø${mm(p.D)} mm`), 't-dim', 'end');
  return svg('0 0 820 280', tr('Treadmill side view', 'Tapis, vue de côté'), b, 640);
}

// ---------- Figure 4: tablier hinge pattern ----------
function figHinge() {
  let b = arrowDefs('ar4');
  b += `<rect x="40" y="40" width="640" height="110" class="woodLight"/>`;
  // alternating living-hinge rows: A = center bridge, B = edge bridges
  for (let i = 0, x = 64; x < 680; i++, x += 24) {
    b += i % 2 ? `<path d="M${x},40 V88 M${x},102 V150" class="cut"/>` : `<path d="M${x},52 V138" class="cut"/>`;
  }
  // finger joint at the end
  b += `<path d="M680,40 V58 H700 V76 H680 V94 H700 V112 H680 V130 H700 V150" class="cut"/>`;
  b += `<path d="M64,170 H88" class="dim" marker-start="url(#ar4)" marker-end="url(#ar4)"/>` + T(76, 186, tr(`pitch ${mm(p.pitch)} mm`, `pas ${mm(p.pitch)} mm`), 't-dim', 'middle');
  b += `<path d="M24,40 V150" class="dim" marker-start="url(#ar4)" marker-end="url(#ar4)"/>` + T(18, 99, `${mm(p.width)}`, 't-dim', 'end');
  b += lead(400, 95, 420, 20) + T(424, 18, tr('cut lines run parallel to the roller axles', 'les traits sont parallèles aux axes des rouleaux'), 't-sm');
  b += lead(692, 112, 720, 172) + T(716, 186, tr('finger joint closes the loop', 'assemblage à doigts pour fermer la boucle'), 't-sm', 'end');
  return svg('-30 0 790 200', tr('Living-hinge cutting pattern', 'Motif de charnière vivante'), b, 560);
}

// ---------- Figure 5: character mechanism, front view (scale 2 px/mm) ----------
function figCharacter() {
  let b = arrowDefs('ar5');
  const P = [260, 130], S = [380, 110];
  const horn = [355, 67], crank = [222, 116];
  // mounting plate
  b += `<rect x="150" y="30" width="320" height="250" rx="6" class="plate"/>`;
  // rack guides (fixed)
  for (const y of [70, 196]) b += `<rect x="296" y="${y}" width="22" height="16" rx="2" class="guide"/>`;
  // rack
  b += `<rect x="300" y="44" width="14" height="244" class="rackbar"/>`;
  let teeth = '';
  for (let y = 50; y < 284; y += 6.3) teeth += `M300,${y} l-5,3 l5,3 `;
  b += `<path d="${teeth}" class="rackteeth"/>`;
  // pinion
  b += `<circle cx="${P[0]}" cy="${P[1]}" r="40" class="pinion"/><circle cx="${P[0]}" cy="${P[1]}" r="4" class="axle"/>`;
  // servo + horn
  b += `<rect x="352" y="88" width="80" height="44" rx="4" class="servo"/>`;
  b += `<path d="M${S[0]},${S[1]} L${horn[0]},${horn[1]}" class="horn"/><circle cx="${S[0]}" cy="${S[1]}" r="6" class="axle"/>`;
  // bielle
  b += `<path d="M${horn[0]},${horn[1]} L${crank[0]},${crank[1]}" class="bielle"/>`;
  b += `<circle cx="${horn[0]}" cy="${horn[1]}" r="4" class="joint"/><circle cx="${crank[0]}" cy="${crank[1]}" r="4" class="joint"/>`;
  // pivot, pot, arm with break, foot
  b += `<circle cx="307" cy="292" r="15" class="pot"/><circle cx="307" cy="292" r="5" class="pivotDot"/>`;
  b += `<path d="M307,297 V350 l-8,6 l16,8 l-8,6 V420" class="arm"/>`;
  b += `<path d="M307,297 L330,419" class="arm ghostline"/>`;
  b += `<path d="M322,300 a18,18 0 0 1 -8,12" class="spring"/>`;
  b += `<rect x="267" y="420" width="80" height="44" rx="4" class="char"/>`;
  b += `<rect x="20" y="474" width="560" height="12" class="belt-flat"/>`;
  b += `<rect x="150" y="424" width="80" height="50" rx="3" class="obstacle"/>`;
  b += `<path d="M90,450 H140" class="flow" marker-end="url(#ar5)"/>`;
  b += `<path d="M336,250 V170" class="flow up" marker-end="url(#ar5)"/>` + T(342, 214, tr('lift', 'levée'), 't-sm');
  // labels (right column)
  const L = 500;
  b += lead(420, 96, L - 6, 92) + T(L, 96, tr(`Servo (${servoName})`, `Servo (${servoName})`), 't-b');
  b += lead(367, 89, L - 6, 122) + T(L, 126, tr(`horn r1 = ${mm(p.r1)} mm`, `palonnier r1 = ${mm(p.r1)} mm`), 't-sm');
  b += lead(290, 91, 290, 18) + T(294, 16, tr(`bielle L = ${mm(p.L)} mm`, `bielle L = ${mm(p.L)} mm`), 't-sm');
  b += lead(crank[0], crank[1], 120, 96) + T(116, 92, [tr('crank pin on the pinion', 'maneton sur le pignon'), `r2 = ${mm(p.r2)} mm`], 't-sm', 'end');
  b += lead(240, 160, 120, 190) + T(116, 186, [tr(`pinion m${p.module}, ${p.Zp} teeth`, `pignon m${p.module}, ${p.Zp} dents`), tr('on a fixed axle', 'sur un axe fixe')], 't-sm', 'end');
  b += lead(318, 204, L - 6, 186) + T(L, 190, [tr('rack (crémaillère)', 'crémaillère'), tr('slides up/down in 2 guides', 'coulisse dans 2 guides')], 't-sm');
  b += lead(320, 285, L - 6, 270) + T(L, 274, [tr('liaison pivot + 10 kΩ pot → A0', 'liaison pivot + pot 10 kΩ → A0'), tr('return spring holds the arm vertical', 'un ressort de rappel tient le bras vertical')], 't-sm');
  b += lead(331, 400, L - 6, 360) + T(L, 364, [tr(`arm L = ${mm(p.Larm)} mm`, `bras L = ${mm(p.Larm)} mm`), tr(`hit → arm swings > ${p.thrDeg}° → game over`, `choc → le bras tourne > ${p.thrDeg}° → fin de partie`)], 't-sm');
  b += lead(347, 444, L - 6, 430) + T(L, 434, tr(`foot, ${mm(p.footW)} mm long`, `pied, ${mm(p.footW)} mm de long`), 't-sm');
  b += T(190, 500, tr(`obstacle ${mm(p.hObs)} mm high`, `obstacle ${mm(p.hObs)} mm de haut`), 't-sm', 'middle');
  b += T(30, 504, tr('belt', 'tapis'), 't-sm');
  return svg('-90 0 890 520', tr('Jumping character mechanism', 'Mécanisme du personnage sauteur'), b, 640);
}

// ---------- Figure 6: wiring (DC motor version) ----------
function figWiring() {
  let b = '';
  // motor PSU + e-stop + motor
  b += box(20, 66, 96, 74, tr('Motor PSU', 'Alim. moteur'), `${p.V} V`, 'elec');
  b += pin(116, 86, '+', 'r') + pin(116, 120, '−', 'r');
  b += `<path d="M116,86 H138" class="w pwr"/><circle cx="141" cy="86" r="3" class="pin"/><path d="M144,86 L164,74" class="w pwr"/><circle cx="167" cy="86" r="3" class="pin"/><path d="M170,86 H210" class="w pwr"/>`;
  b += T(155, 64, tr('E-stop', 'Arrêt d’urg.'), 't-pin', 'middle');
  b += `<path d="M116,120 H210" class="w gnd"/>` + dot(150, 120) + `<path d="M150,120 V132" class="w gnd"/>` + gnd(150, 132);
  b += `<circle cx="100" cy="215" r="26" class="motorSym"/>` + T(100, 221, 'M', 't-b', 'middle');
  b += `<path d="M126,205 H210 M126,225 H210" class="w mot"/>`;
  // BTS7960
  b += `<rect x="210" y="40" width="120" height="216" rx="7" class="bx elec"/>` + T(270, 60, 'BTS7960', 't-b', 'middle');
  b += pin(210, 86, 'B+', 'l') + pin(210, 120, 'B−', 'l') + pin(210, 205, 'M+', 'l') + pin(210, 225, 'M−', 'l');
  b += pin(330, 86, 'RPWM', 'r') + pin(330, 112, 'LPWM', 'r') + pin(330, 138, 'R_EN', 'r') + pin(330, 160, 'L_EN', 'r') + pin(330, 200, 'VCC', 'r') + pin(330, 230, 'GND', 'r');
  // Arduino
  b += `<rect x="470" y="60" width="150" height="410" rx="8" class="bx ard"/>` + T(545, 270, 'Arduino', 't-b', 'middle') + T(545, 288, 'Uno / Nano', 't-sub', 'middle');
  b += pin(470, 86, 'D3', 'l') + pin(470, 112, 'D11', 'l') + pin(470, 149, 'D8', 'l') + pin(470, 340, 'D2', 'l');
  b += pin(620, 86, 'D9', 'r') + pin(620, 196, 'A0', 'r') + pin(620, 300, 'D4', 'r') + pin(620, 350, 'D7', 'r') + pin(620, 410, 'D13', 'r');
  b += `<circle cx="520" cy="60" r="2.6" class="pin"/>` + T(520, 78, '5V', 't-pin', 'middle') + vcc(520, 60, '');
  b += `<circle cx="560" cy="470" r="2.6" class="pin"/>` + T(560, 462, 'GND', 't-pin', 'middle') + gnd(560, 470);
  // Arduino ↔ BTS7960
  b += `<path d="M470,86 H330 M470,112 H330" class="w sig"/>`;
  b += `<path d="M470,149 H395 M395,138 V160 M395,138 H330 M395,160 H330" class="w sig"/>` + dot(395, 149);
  b += `<path d="M330,200 H372" class="w pwr"/>` + vcc(372, 200);
  b += `<path d="M330,230 H372 V240" class="w gnd"/>` + gnd(372, 240);
  b += T(400, 104, 'PWM 3.9 kHz', 't-note', 'middle') + T(400, 128, tr('held LOW', 'tenu à 0'), 't-note', 'middle');
  // encoder
  b += `<rect x="210" y="300" width="120" height="86" rx="7" class="bx elec"/>` + T(262, 336, tr('Encoder', 'Codeur'), 't-b', 'middle') + T(262, 352, tr('optical fork', 'fourche optique'), 't-sub', 'middle');
  b += pin(330, 340, 'OUT', 'r') + pin(330, 316, 'VCC', 'r') + pin(330, 366, 'GND', 'r');
  b += `<path d="M330,340 H470" class="w fbw"/>`;
  b += `<path d="M330,316 H372" class="w pwr"/>` + vcc(372, 316);
  b += `<path d="M330,366 H372 V376" class="w gnd"/>` + gnd(372, 376);
  // servo + its own PSU
  b += `<rect x="700" y="60" width="120" height="84" rx="7" class="bx elec"/>` + T(760, 96, 'Servo', 't-b', 'middle') + T(760, 112, servoName, 't-sub', 'middle');
  b += pin(700, 86, 'SIG', 'l') + pin(820, 80, '+', 'r') + pin(820, 124, '−', 'r');
  b += `<path d="M620,86 H700" class="w sig"/>`;
  b += box(880, 60, 110, 84, tr('Servo PSU', 'Alim. servo'), '5–6 V ≥ 3 A', 'elec');
  b += `<path d="M820,80 H880" class="w pwr"/><path d="M820,124 H880" class="w gnd"/>`;
  b += `<path d="M848,80 V96 M840,96 h16 M840,102 h16 M848,102 V124" class="w cap"/>` + dot(848, 80) + dot(848, 124) + T(828, 166, '1000 µF', 't-note', 'end');
  b += `<path d="M836,124 V172" class="w gnd"/>` + dot(836, 124) + gnd(836, 172);
  // pivot potentiometer
  b += `<rect x="700" y="180" width="150" height="76" rx="7" class="bx mech"/>` + T(775, 224, tr('Pivot pot', 'Pot. du pivot'), 't-b', 'middle') + T(775, 240, '10 kΩ lin.', 't-sub', 'middle');
  b += pin(700, 196, tr('wiper', 'curseur'), 'l') + pin(850, 196, '5V', 'r') + pin(850, 240, 'GND', 'r');
  b += `<path d="M620,196 H700" class="w fbw"/>`;
  b += `<path d="M850,196 H890" class="w pwr"/>` + vcc(890, 196);
  b += `<path d="M850,240 H910 V248" class="w gnd"/>` + gnd(910, 248);
  // button, optional microswitch, LED
  const sw = (y, label, cls = '') => `<path d="M620,${y} H690" class="w sig ${cls}"/><circle cx="693" cy="${y}" r="3" class="pin"/><path d="M696,${y} L716,${y - 12}" class="w sig ${cls}"/><circle cx="719" cy="${y}" r="3" class="pin"/><path d="M722,${y} H750 V${y + 6}" class="w gnd ${cls}"/>` + gnd(750, y + 6) + T(770, y + 4, label, 't-sm');
  b += sw(300, tr('jump / start button', 'bouton saut / départ'));
  b += sw(350, tr('pivot microswitch (only if USE_POT 0)', 'microrupteur du pivot (si USE_POT 0)'), 'opt');
  b += `<path d="M620,410 H650 l4,-7 l8,14 l8,-14 l8,14 l8,-14 l4,7 H710" class="w sig"/>` + T(670, 398, '220 Ω', 't-note', 'middle');
  b += `<path d="M710,400 V420 L728,410 Z" class="led"/><path d="M728,400 V420" class="w sig"/><path d="M728,410 H750 V418" class="w gnd"/>` + gnd(750, 418) + T(770, 414, tr('game-over LED', 'LED fin de partie'), 't-sm');
  // legend
  const lg = [['pwr', tr('power', 'puissance')], ['gnd', 'GND'], ['sig', tr('control signal', 'signal de commande')], ['fbw', tr('sensor signal', 'signal capteur')], ['mot', tr('motor', 'moteur')]];
  lg.forEach(([c, t], i) => { const x = 20 + i * 150; b += `<path d="M${x},512 h28" class="w ${c}"/>` + T(x + 36, 516, t, 't-sm'); });
  return svg('0 0 1000 530', tr('Wiring diagram, DC motor version', 'Schéma de câblage, version moteur CC'), b, 780);
}

// ---------- Figure 7: AC motor variant ----------
function figAC() {
  const A = 'ar7';
  let b = arrowDefs(A);
  const bx = (x, y, t, s, c = 'elec') => box(x, y, 150, 54, t, s, c);
  b += box(20, 50, 110, 120, 'Arduino', '', 'ard');
  b += bx(180, 30, tr('RC filter', 'Filtre RC'), '10 kΩ + 10 µF');
  b += bx(370, 30, tr('LM358 gain ×2', 'LM358 gain ×2'), tr('on 12 V', 'sous 12 V'));
  b += bx(180, 136, tr('Optocoupler', 'Optocoupleur'), 'PC817');
  b += `<rect x="580" y="24" width="160" height="172" rx="7" class="bx elec"/>` + T(660, 100, tr('VFD', 'Variateur'), 't-b', 'middle') + T(660, 118, '230 V 1~ → 3~', 't-sub', 'middle');
  b += `<circle cx="850" cy="110" r="34" class="motorSym"/>` + T(850, 106, 'M', 't-b', 'middle') + T(850, 122, '3~', 't-sub', 'middle');
  b += `<path d="M130,70 H178" class="flow" marker-end="url(#${A})"/>` + T(154, 62, 'D3', 't-pin', 'middle');
  b += `<path d="M330,57 H368" class="flow" marker-end="url(#${A})"/>` + T(349, 49, '0–5 V', 't-note', 'middle');
  b += `<path d="M520,57 H578" class="flow" marker-end="url(#${A})"/>` + T(549, 49, 'AI 0–10 V', 't-note', 'middle');
  b += `<path d="M130,150 H150 V163 H178" class="flow" marker-end="url(#${A})"/>` + T(150, 142, 'D8', 't-pin', 'middle');
  b += `<path d="M330,163 H578" class="flow" marker-end="url(#${A})"/>` + T(454, 155, 'FWD / COM', 't-note', 'middle');
  b += `<path d="M740,110 H814" class="w mot"/>` + T(777, 102, 'U V W', 't-note', 'middle');
  b += `<path d="M660,250 V198" class="w pwr"/>` + T(660, 268, tr('230 V mains · qualified electrician only', '230 V secteur · électricien qualifié uniquement'), 't-warn', 'middle');
  return svg('0 0 920 280', tr('AC motor variant: Arduino to VFD', 'Variante moteur asynchrone : Arduino vers variateur'), b, 700);
}

// ---------- Content ----------
const step = (n, title, body) => `<li class="step"><div class="stepn">${n}</div><div><h4>${title}</h4>${body}</div></li>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

const SECTIONS = [
  ['overview', tr('How it works', 'Principe')],
  ['treadmill', tr('Treadmill', 'Tapis roulant')],
  ['character', tr('Character', 'Personnage')],
  ['wiring', tr('Wiring', 'Câblage')],
  ['program', tr('Program & calibrate', 'Programmer et régler')],
  ['trouble', tr('Troubleshooting', 'Dépannage')],
];

function render() {
  const h = [];
  h.push(`<nav class="toc" aria-label="${tr('Sections', 'Sections')}">${SECTIONS.map(([id, t], i) => `<a href="#${id}"><span>${i + 1}</span>${t}</a>`).join('')}</nav>`);

  h.push(`<aside class="callout"><b>${tr('Dimensions on this page', 'Les cotes de cette page')}</b> ${tr(
    `come from the simulator's default design (${mm(p.width)} mm × ${n2(p.loopLength)} m belt, Ø${mm(p.D)} mm wheels, ${servoName}). If you changed the design sheet, use the numbers from the simulator's <a href="./#spec">Specification</a> tab and the exported Arduino config instead.`,
    `viennent de la conception par défaut du simulateur (tablier ${mm(p.width)} mm × ${n2(p.loopLength)} m, roues Ø${mm(p.D)} mm, ${servoName}). Si vous avez modifié la fiche de conception, prenez les valeurs de l’onglet <a href="./#spec">Cahier des charges</a> et la config Arduino exportée.`)}</aside>`);

  // 1. Overview
  h.push(`<section class="bsec" id="overview"><div class="section-h"><h2>1 · ${SECTIONS[0][1]}</h2></div>
  <p class="lead-p">${tr(
    'Two machines share one Arduino. The <b>treadmill</b> carries obstacles toward the character at a regulated speed: a motor drives two rubber-wheel rollers through bevel gears, and an encoder on a roller axle tells the Arduino how fast the belt really goes. The <b>character</b> jumps when you press the button: a servo pulls a bielle that turns a pinion, which lifts a rack. The foot hangs from the bottom of the rack on a pivot; if an obstacle hits it, the arm swings, the potentiometer on the pivot sees it, and the Arduino stops the belt.',
    'Deux machines partagent un Arduino. Le <b>tapis</b> amène les obstacles vers le personnage à vitesse régulée : un moteur entraîne deux rouleaux à roues caoutchouc par des engrenages coniques, et un codeur sur un axe de rouleau donne à l’Arduino la vitesse réelle du tapis. Le <b>personnage</b> saute quand on appuie sur le bouton : un servo tire une bielle qui fait tourner un pignon, lequel lève une crémaillère. Le pied pend sous la crémaillère sur un pivot ; si un obstacle le heurte, le bras tourne, le potentiomètre du pivot le voit, et l’Arduino arrête le tapis.')}</p>
  ${fig(1, tr('Signal and power flow. Solid arrows: commands and mechanical power. Dashed: sensor feedback.', 'Flux de signaux et de puissance. Flèches pleines : commandes et puissance mécanique. Pointillés : retours capteurs.'), figOverview())}
  </section>`);

  // 2. Treadmill
  h.push(`<section class="bsec" id="treadmill"><div class="section-h"><h2>2 · ${SECTIONS[1][1]}</h2></div>
  <div class="figgrid">
  ${fig(2, tr('Top view. The driveshaft runs along one side; a bevel pair at each end turns both roller axles, so both rollers drive the belt.', 'Vue de dessus. L’arbre de transmission longe un côté ; un couple conique à chaque bout entraîne les deux axes, donc les deux rouleaux sont moteurs.'), figPlan())}
  ${fig(3, tr('Side view. The top run slides on a deck so the obstacles and the character’s weight don’t sag the belt.', 'Vue de côté. Le brin supérieur glisse sur un plateau pour que les obstacles et le personnage ne fassent pas fléchir le tablier.'), figSide())}
  </div>
  <ol class="steps">
  ${step(1, tr('Get the parts', 'Réunir les pièces'), `<p>${tr('Open the simulator’s <a href="./#spec">Specification</a> tab: it lists the motor power, supply, driver and servo your design needs, plus every mechanical part.', 'Ouvrez l’onglet <a href="./#spec">Cahier des charges</a> du simulateur : il donne la puissance moteur, l’alimentation, le driver et le servo nécessaires, plus toutes les pièces mécaniques.')}</p>`)}
  ${step(2, tr('Frame and rollers', 'Châssis et rouleaux'), ul([
    tr(`Cut two side rails and four legs. Bore the bearing seats so the axles end up <b>${spanMm} mm apart</b> (= (loop − π·D) / 2).`, `Découpez deux longerons et quatre pieds. Percez les logements de roulement pour un <b>entraxe de ${spanMm} mm</b> (= (boucle − π·D) / 2).`),
    tr('Make one axle mount a horizontal slot (≈ 20 mm long) so you can tension the belt later.', 'Faites un des paliers en lumière horizontale (≈ 20 mm) pour pouvoir tendre le tablier ensuite.'),
    tr(`Press two Ø${mm(p.D)} mm rubber wheels on each Ø${mm(p.dShaft)} mm axle, ${mm(p.width) - 40} mm apart, and fix them with grub screws or a drop of glue.`, `Montez deux roues caoutchouc Ø${mm(p.D)} mm sur chaque axe Ø${mm(p.dShaft)} mm, à ${mm(p.width) - 40} mm d’écart, bloquées par vis pointeau ou une goutte de colle.`),
    tr('Screw the deck between the rails, its top just under the belt line. A strip of UHMW-PE tape on it halves the friction.', 'Vissez le plateau entre les longerons, son dessus juste sous le tablier. Un ruban PE-UHMW dessus divise le frottement par deux.'),
  ]))}
  ${step(3, tr('Laser-cut the tablier', 'Découper le tablier au laser'), `${fig(4, tr('Living-hinge pattern. Alternate rows: one with a bridge in the middle, the next with bridges at both edges.', 'Motif de charnière vivante. Rangées alternées : une avec un pont au milieu, la suivante avec des ponts aux deux bords.'), figHinge())}` + ul([
    tr(`Board: ${mm(p.thick)} mm ${TJ.WOODS[p.wood].label}. Strip ${n2(p.loopLength)} m × ${mm(p.width)} mm plus the joint. If your laser bed is shorter, cut 2–3 segments and join them with the same finger joint.`, `Panneau : ${TJ.WOODS[p.wood].label} ${mm(p.thick)} mm. Bande de ${n2(p.loopLength)} m × ${mm(p.width)} mm plus l’assemblage. Si le plateau du laser est trop court, découpez 2–3 segments assemblés avec le même joint à doigts.`),
    tr(`Cut lines every ${mm(p.pitch)} mm across the whole length. Test a 100 mm sample first: it must wrap a Ø${mm(p.D)} mm roller without cracking.`, `Traits tous les ${mm(p.pitch)} mm sur toute la longueur. Testez d’abord un échantillon de 100 mm : il doit s’enrouler sur un rouleau Ø${mm(p.D)} mm sans casser.`),
    tr('Glue the finger joint with the belt wrapped around the rollers, then add a strip of fabric tape on the inside face over the joint.', 'Collez le joint à doigts une fois le tablier enroulé sur les rouleaux, puis ajoutez un ruban de tissu sur la face intérieure au droit du joint.'),
  ]))}
  ${step(4, tr('Transmission (rouage)', 'Transmission (rouage)'), ul([
    tr('Mount the driveshaft parallel to the belt, outside one rail, in two bearings.', 'Montez l’arbre de transmission parallèle au tapis, à l’extérieur d’un longeron, sur deux paliers.'),
    tr(`Fit Z3 (${p.Z3} t) at each end of the driveshaft and Z4 (${p.Z4} t) on the end of each roller axle. Mesh them at 90° with a little backlash: a sheet of paper between the teeth while tightening is about right.`, `Montez Z3 (${p.Z3} d) à chaque bout de l’arbre et Z4 (${p.Z4} d) au bout de chaque axe de rouleau. Engrenez-les à 90° avec un léger jeu : une feuille de papier entre les dents au serrage, c’est à peu près ça.`),
    tr(`Fit the crown Z2 (${p.Z2} t) mid-shaft, then mount the motor across it with Z1 (${p.Z1} t) on its shaft. Total ratio i = ${n2(d.iTot)}.`, `Montez la couronne Z2 (${p.Z2} d) au milieu de l’arbre, puis le moteur perpendiculaire avec Z1 (${p.Z1} d) sur son arbre. Rapport total i = ${n2(d.iTot)}.`),
    tr('Both Z3 must face the same way so both rollers turn in the same direction. Check by hand before closing anything.', 'Les deux Z3 doivent être orientés pareil pour que les deux rouleaux tournent dans le même sens. Vérifiez à la main avant de tout fermer.'),
  ]))}
  ${step(5, tr('Tension and tracking', 'Tension et alignement'), ul([
    tr(`Slide the slotted axle until the belt doesn’t slip when you hold it and turn the rollers by hand (target ≈ ${p.T0} N pretension). Too tight wears the bearings and raises the hinge losses.`, `Faites glisser l’axe en lumière jusqu’à ce que le tablier ne patine pas quand vous le retenez en tournant les rouleaux à la main (cible ≈ ${p.T0} N de prétension). Trop tendu use les roulements et augmente les pertes dans les charnières.`),
    tr('If the belt walks to one side, the axles aren’t parallel: measure both diagonals of the frame and adjust the slotted mount until they match.', 'Si le tablier dérive d’un côté, les axes ne sont pas parallèles : mesurez les deux diagonales du châssis et réglez le palier en lumière jusqu’à égalité.'),
  ]))}
  ${step(6, tr('Encoder', 'Codeur'), `<p>${tr(`Glue a ${p.encSlots}-slot disc on the free end of one roller axle and fix the optical fork so the slots pass through it. Each slot = ${encStepMm.toFixed(1)} mm of belt. A hall sensor (A3144) with ${p.encSlots} small magnets works too.`, `Collez un disque à ${p.encSlots} fentes sur le bout libre d’un axe de rouleau et fixez la fourche optique pour que les fentes passent dedans. Chaque fente = ${encStepMm.toFixed(1)} mm de tapis. Un capteur à effet hall (A3144) avec ${p.encSlots} petits aimants marche aussi.`)}</p>`)}
  </ol></section>`);

  // 3. Character
  const travel = out.kin.ok ? mm(out.kin.travel) : null;
  h.push(`<section class="bsec" id="character"><div class="section-h"><h2>3 · ${SECTIONS[2][1]}</h2></div>
  ${fig(5, tr('Front view, roughly to scale (arm shortened). The servo, pinion and rack guides are fixed to one plate held by a post behind the belt; only the rack, pivot, arm and foot move up.', 'Vue de face, à peu près à l’échelle (bras raccourci). Le servo, le pignon et les guides sont fixés sur une platine tenue par un poteau derrière le tapis ; seuls la crémaillère, le pivot, le bras et le pied montent.'), figCharacter())}
  <ol class="steps" start="7">
  ${step(7, tr('Mechanism plate', 'Platine du mécanisme'), ul([
    tr('Fix a vertical post behind the belt and a cantilever arm that holds a plate above the belt. The plate must not touch the treadmill frame, so belt vibration doesn’t shake the pivot sensor.', 'Fixez un poteau vertical derrière le tapis et un bras en porte-à-faux qui tient une platine au-dessus du tapis. La platine ne doit pas toucher le châssis du tapis, pour que les vibrations ne secouent pas le capteur du pivot.'),
    tr(`Drill the pinion axle hole. Drill the servo axis ${mm(p.dx)} mm to the side and ${mm(p.dy)} mm higher.`, `Percez le trou de l’axe du pignon. Placez l’axe du servo ${mm(p.dx)} mm sur le côté et ${mm(p.dy)} mm plus haut.`),
  ]))}
  ${step(8, tr('Rack and pinion', 'Pignon et crémaillère'), ul([
    tr(`Mount the module ${p.module} pinion (${p.Zp} t, Ø${p.module * p.Zp} mm pitch) on its axle. Add a crank pin at r2 = ${mm(p.r2)} mm from the centre.`, `Montez le pignon module ${p.module} (${p.Zp} dents, Ø primitif ${p.module * p.Zp} mm) sur son axe. Ajoutez un maneton à r2 = ${mm(p.r2)} mm du centre.`),
    tr('Put the rack in two guides (printed or wooden blocks with a slot) so it can only slide vertically, meshing with the pinion. Rub the guides with candle wax.', 'Placez la crémaillère dans deux guides (blocs imprimés ou en bois avec une rainure) pour qu’elle ne puisse que coulisser verticalement, engrenée sur le pignon. Frottez les guides à la bougie.'),
    travel ? tr(`Rack travel over the servo stroke: ${travel} mm. It must be more than the obstacle height + gap (${mm(p.hObs + p.footGap)} mm).`, `Course de la crémaillère sur la course du servo : ${travel} mm. Elle doit dépasser hauteur d’obstacle + jeu (${mm(p.hObs + p.footGap)} mm).`) : '',
  ].filter(Boolean)))}
  ${step(9, tr('Servo and bielle', 'Servo et bielle'), ul([
    tr(`Before fitting the horn, power the servo and send it to ${p.servoDownDeg}° (the sketch does this at boot). Then fit the horn so the character is down.`, `Avant de monter le palonnier, alimentez le servo et envoyez-le à ${p.servoDownDeg}° (le sketch le fait au démarrage). Montez alors le palonnier personnage en bas.`),
    tr(`Make the bielle ${mm(p.L)} mm between hole centres, from the horn hole at r1 = ${mm(p.r1)} mm to the crank pin. Use shoulder screws or rivets so the joints turn freely without play.`, `Faites une bielle de ${mm(p.L)} mm entre axes, du trou du palonnier à r1 = ${mm(p.r1)} mm au maneton. Utilisez des vis épaulées ou des rivets pour que les articulations tournent librement sans jeu.`),
    tr(`Move the servo by hand from ${p.servoDownDeg}° to ${p.servoUpDeg}°: the linkage must never go straight (horn and bielle aligned), or it locks.`, `Faites tourner le servo à la main de ${p.servoDownDeg}° à ${p.servoUpDeg}° : la tringlerie ne doit jamais passer en ligne droite (palonnier et bielle alignés), sinon elle se bloque.`),
  ]))}
  ${step(10, tr('Pivot, sensor and foot', 'Pivot, capteur et pied'), ul([
    tr('At the bottom of the rack, make the liaison pivot: the arm turns on the shaft of a 10 kΩ linear potentiometer (or on its own axle coupled to the pot).', 'En bas de la crémaillère, réalisez la liaison pivot : le bras tourne sur l’axe d’un potentiomètre 10 kΩ linéaire (ou sur son propre axe couplé au potentiomètre).'),
    tr(`Add a light return spring (preload ≈ ${mm(p.Tpre)} N·mm) and an end stop at ${p.thetaMaxDeg}°. The arm must hang vertical at rest and swing only toward the direction of belt travel.`, `Ajoutez un ressort de rappel léger (précharge ≈ ${mm(p.Tpre)} N·mm) et une butée à ${p.thetaMaxDeg}°. Le bras doit pendre vertical au repos et ne tourner que dans le sens d’avance du tapis.`),
    tr(`Fix the foot at the end of the arm (${mm(p.Larm)} mm from the pivot) and adjust the height so it clears the belt by ${mm(p.footGap)} mm when down.`, `Fixez le pied au bout du bras (${mm(p.Larm)} mm du pivot) et réglez la hauteur pour ${mm(p.footGap)} mm de jeu au-dessus du tapis en position basse.`),
  ]))}
  </ol></section>`);

  // 4. Wiring
  h.push(`<section class="bsec" id="wiring"><div class="section-h"><h2>4 · ${SECTIONS[3][1]}</h2></div>
  ${fig(6, tr('DC motor version (default). All grounds are joined: Arduino, BTS7960 logic, motor PSU − and servo PSU −. The ⏚ symbols are that one common ground.', 'Version moteur CC (par défaut). Toutes les masses sont reliées : Arduino, logique du BTS7960, − de l’alim moteur et − de l’alim servo. Les symboles ⏚ représentent cette masse commune.'), figWiring())}
  <ol class="steps" start="11">
  ${step(11, tr('Power first, no Arduino', 'D’abord la puissance, sans Arduino'), ul([
    tr('Wire the motor PSU through a latching emergency-stop button to the BTS7960 B+/B−, and the motor to M+/M−. Use wire rated for the stall current.', 'Câblez l’alim moteur via un bouton d’arrêt d’urgence à accrochage vers B+/B− du BTS7960, et le moteur sur M+/M−. Prenez du fil dimensionné pour le courant de blocage.'),
    tr('Give the servo its own 5–6 V supply (≥ 3 A) with a 1000 µF capacitor across it, close to the servo. Never power the servo from the Arduino 5 V pin.', 'Donnez au servo sa propre alim 5–6 V (≥ 3 A) avec un condensateur de 1000 µF en parallèle, près du servo. N’alimentez jamais le servo par la broche 5 V de l’Arduino.'),
  ]))}
  ${step(12, tr('Signals', 'Signaux'), ul([
    tr('D3 → RPWM, D11 → LPWM, D8 → R_EN and L_EN together, BTS7960 VCC/GND → Arduino 5 V/GND.', 'D3 → RPWM, D11 → LPWM, D8 → R_EN et L_EN ensemble, VCC/GND du BTS7960 → 5 V/GND de l’Arduino.'),
    tr('Encoder OUT → D2. Servo signal → D9. Pot wiper → A0, its two ends to 5 V and GND. Button between D4 and GND. LED + 220 Ω on D13.', 'OUT du codeur → D2. Signal servo → D9. Curseur du potentiomètre → A0, ses deux bouts sur 5 V et GND. Bouton entre D4 et GND. LED + 220 Ω sur D13.'),
    tr('Join every GND. A missing common ground is the #1 cause of a twitching servo or a jumpy pot reading.', 'Reliez toutes les masses. Une masse commune manquante est la cause n° 1 d’un servo qui tremble ou d’une lecture de potentiomètre instable.'),
  ]))}
  ${step(13, tr('AC motor instead (optional)', 'Moteur asynchrone à la place (option)'), `${fig(7, tr('With an AC induction motor, set MOTOR_DC 0. The Arduino only drives the VFD’s low-voltage control terminals.', 'Avec un moteur asynchrone, mettez MOTOR_DC 0. L’Arduino ne pilote que les bornes basse tension de commande du variateur.'), figAC())}<p>${tr('Set the VFD to take its frequency from the analog input (0–10 V = 0 to the max frequency in the design sheet) and RUN from the FWD terminal. Mains wiring to the VFD must be done by someone qualified.', 'Réglez le variateur pour prendre sa consigne sur l’entrée analogique (0–10 V = 0 à la fréquence max de la fiche) et la marche sur la borne FWD. Le câblage secteur du variateur doit être fait par une personne qualifiée.')}</p>`)}
  </ol></section>`);

  // 5. Program
  h.push(`<section class="bsec" id="program"><div class="section-h"><h2>5 · ${SECTIONS[4][1]}</h2></div>
  <ol class="steps" start="14">
  ${step(14, tr('Upload the sketch', 'Téléverser le sketch'), `<p>${tr('In the simulator, scroll to <b>Arduino sketch</b>, press <b>Copy code</b>, paste it into the Arduino IDE, choose Uno or Nano and upload. The config block at the top already holds your design’s numbers.', 'Dans le simulateur, descendez à <b>Sketch Arduino</b>, cliquez <b>Copier le code</b>, collez-le dans l’IDE Arduino, choisissez Uno ou Nano et téléversez. Le bloc de config en haut contient déjà les valeurs de votre conception.')}</p>`)}
  ${step(15, tr('First power-up, belt lifted', 'Première mise sous tension, tapis soulevé'), ul([
    tr('Lift the rollers off the table or remove the belt. Open the Serial Plotter at 115200 baud: you should see vRef, vMeas, u and pivot.', 'Soulevez les rouleaux ou retirez le tablier. Ouvrez le traceur série à 115200 bauds : vous devez voir vRef, vMeas, u et pivot.'),
    tr('Press the button once: vRef ramps up. If vMeas stays at 0, check the encoder; if the rollers turn backwards, swap M+ and M−.', 'Appuyez une fois : vRef monte en rampe. Si vMeas reste à 0, vérifiez le codeur ; si les rouleaux tournent à l’envers, inversez M+ et M−.'),
  ]))}
  ${step(16, tr('Check the speed reading', 'Vérifier la mesure de vitesse'), `<p>${tr('Mark the belt, time 10 laps with a stopwatch: real speed = 10 × loop length ÷ time. If vMeas is off, correct WHEEL_D (the belt runs on the wheel surface plus half its thickness).', 'Marquez le tablier, chronométrez 10 tours : vitesse réelle = 10 × longueur de boucle ÷ temps. Si vMeas est faux, corrigez WHEEL_D (le tablier tourne sur la surface des roues plus la moitié de son épaisseur).')}</p>`)}
  ${step(17, tr('Collision threshold', 'Seuil de collision'), ul([
    tr(`At boot the sketch averages the pot for its rest value. THR_COUNTS = ${thrCounts} counts ≈ ${p.thrDeg}° of swing.`, `Au démarrage, le sketch moyenne le potentiomètre pour sa valeur de repos. THR_COUNTS = ${thrCounts} points ≈ ${p.thrDeg}° de rotation.`),
    tr('Run the belt without obstacles and jump a few times. If it calls a collision on its own, raise THR_COUNTS or DEBOUNCE_N. Then push an obstacle into the foot by hand: it must trigger every time.', 'Faites tourner le tapis sans obstacle et sautez plusieurs fois. S’il détecte une collision tout seul, augmentez THR_COUNTS ou DEBOUNCE_N. Puis poussez un obstacle contre le pied à la main : il doit déclencher à chaque fois.'),
  ]))}
  ${step(18, tr('Tune if needed', 'Ajuster si besoin'), ul([
    tr('Belt speed oscillates: lower KI, then KP. Slow to reach speed: raise KP a little.', 'La vitesse oscille : baissez KI, puis KP. Lent à atteindre la vitesse : montez un peu KP.'),
    tr('Wheels slip at start: lower A_MAX or add tension.', 'Les roues patinent au démarrage : baissez A_MAX ou tendez plus.'),
    tr('Character doesn’t clear: raise SERVO_UP_DEG or HOLD_MS, or slow the belt.', 'Le personnage ne passe pas : augmentez SERVO_UP_DEG ou HOLD_MS, ou ralentissez le tapis.'),
  ]))}
  </ol></section>`);

  // 6. Troubleshooting
  const rows = [
    [tr('Servo twitches, Arduino resets on a jump', 'Le servo tremble, l’Arduino redémarre au saut'), tr('Servo on the Arduino 5 V, or no common ground. Use a separate supply + 1000 µF, join GNDs.', 'Servo sur le 5 V de l’Arduino, ou pas de masse commune. Alim séparée + 1000 µF, masses reliées.')],
    [tr('Belt stops but motor keeps turning', 'Le tapis s’arrête mais le moteur tourne'), tr('Wheels slipping: increase tension, clean dust off the belt underside, check μ.', 'Les roues patinent : tendez plus, dépoussiérez le dessous du tablier, vérifiez μ.')],
    [tr('Belt drifts sideways', 'Le tablier dérive sur le côté'), tr('Axles not parallel. Match the frame diagonals with the slotted mount.', 'Axes non parallèles. Égalisez les diagonales du châssis avec le palier en lumière.')],
    [tr('Game over with no hit', 'Fin de partie sans choc'), tr('Pivot sees vibration: stiffen the plate, raise THR_COUNTS or DEBOUNCE_N, check the pot is linear and tight on its shaft.', 'Le pivot voit des vibrations : rigidifiez la platine, augmentez THR_COUNTS ou DEBOUNCE_N, vérifiez que le potentiomètre est linéaire et serré sur son axe.')],
    [tr('Rack jams halfway up', 'La crémaillère se bloque à mi-course'), tr('Linkage passing a dead point or guides too tight. Check the horn angles and wax the guides.', 'Tringlerie qui passe un point mort ou guides trop serrés. Vérifiez les angles du palonnier et cirez les guides.')],
    [tr('Motor whines but doesn’t start', 'Le moteur siffle mais ne démarre pas'), tr('Start torque too low: check the Specification tab, reduce friction (deck tape, bearings) or pick a bigger ratio.', 'Couple de démarrage trop faible : voyez le Cahier des charges, réduisez les frottements (ruban, roulements) ou augmentez le rapport.')],
  ];
  h.push(`<section class="bsec" id="trouble"><div class="section-h"><h2>6 · ${SECTIONS[5][1]}</h2></div>
  <div class="card"><table class="trouble"><thead><tr><th>${tr('Symptom', 'Symptôme')}</th><th>${tr('Likely cause and fix', 'Cause probable et remède')}</th></tr></thead><tbody>${rows.map(([a, c]) => `<tr><td>${a}</td><td>${c}</td></tr>`).join('')}</tbody></table></div>
  <aside class="callout warn"><b>${tr('Safety', 'Sécurité')}</b> ${tr('The sketch’s collision stop is a game feature, not a safety function. Keep a hardware emergency stop in the motor power line, keep fingers away from the bevel gears and roller nips, and add a guard over the gears.', 'L’arrêt sur collision du sketch est une fonction de jeu, pas une sécurité. Gardez un arrêt d’urgence matériel sur l’alimentation du moteur, éloignez les doigts des engrenages et des points de pincement des rouleaux, et ajoutez un carter sur les engrenages.')}</aside>
  </section>`);

  document.getElementById('guide').innerHTML = h.join('');
}

render();
initLangSwitch(document.getElementById('lang'));
