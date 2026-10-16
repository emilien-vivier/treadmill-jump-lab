// three.js view of the treadmill and the jumping character. Units: metres.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import TJ from './physics.js';
import { tr } from './i18n.js';

const T = { ...THREE, OrbitControls };

function cssColor(name, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

class Scene3D {
  constructor(container, labelLayer) {
    this.container = container;
    this.labelLayer = labelLayer;
    this.renderer = new T.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = T.PCFSoftShadowMap;
    if ('outputEncoding' in this.renderer) this.renderer.outputEncoding = T.sRGBEncoding;
    container.appendChild(this.renderer.domElement);
    this.scene = new T.Scene();
    this.camera = new T.PerspectiveCamera(35, 1, 0.01, 20);
    this.camera.position.set(0.42, 0.42, 0.95);
    this.controls = new T.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0.06, 0.17, 0);
    this.controls.enableDamping = true;
    this.controls.minDistance = 0.08;
    this.controls.maxDistance = 3;
    this.controls.maxPolarAngle = Math.PI * 0.49;
    const hemi = new T.HemisphereLight(0xffffff, 0x7a7f8c, 0.75);
    this.scene.add(hemi);
    const sun = new T.DirectionalLight(0xffffff, 0.85);
    sun.position.set(0.6, 1.4, 0.8);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const s = 0.9;
    Object.assign(sun.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 0.1, far: 4 });
    sun.shadow.bias = -0.0005;
    this.scene.add(sun);
    this.mats = {
      wood: new T.MeshStandardMaterial({ color: 0xc8a476, roughness: 0.85 }),
      woodDark: new T.MeshStandardMaterial({ color: 0x9c7a50, roughness: 0.9 }),
      rubber: new T.MeshStandardMaterial({ color: 0x1b2bb8, roughness: 0.7 }),
      steel: new T.MeshStandardMaterial({ color: 0xb9bec8, metalness: 0.75, roughness: 0.35 }),
      brass: new T.MeshStandardMaterial({ color: 0xc9a227, metalness: 0.7, roughness: 0.35 }),
      motor: new T.MeshStandardMaterial({ color: 0x8a909c, metalness: 0.5, roughness: 0.45 }),
      black: new T.MeshStandardMaterial({ color: 0x23262d, roughness: 0.6 }),
      servo: new T.MeshStandardMaterial({ color: 0x2c2f36, roughness: 0.55 }),
      char: new T.MeshStandardMaterial({ color: 0x6f737d, roughness: 0.6 }),
      obs: new T.MeshStandardMaterial({ color: 0xe0b45a, roughness: 0.75 }),
      obsHit: new T.MeshStandardMaterial({ color: 0xd94a3a, roughness: 0.6 }),
      gearHl: new T.MeshStandardMaterial({ color: 0x2a78d6, emissive: 0x1a4fd0, emissiveIntensity: 0.6, roughness: 0.4 }),
      ground: new T.MeshStandardMaterial({ color: 0xd9dce3, roughness: 1 }),
    };
    this.ground = new T.Mesh(new T.PlaneGeometry(6, 6), this.mats.ground);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);
    this.rig = new T.Group();
    this.scene.add(this.rig);
    this.labels = [];
    this.showLabels = true;
    this.gearHl = null; // 'Z1' … 'Z4' while that field is being edited
    this.focus = 'all'; // 'all' | 'belt' | 'char': which part of the system is in focus
    this.camAnim = null;
    this.applyTheme();
    this.resize();
    new ResizeObserver(() => this.resize()).observe(container);
  }

  applyTheme() {
    const bg = cssColor('--scene-bg', '#e4e7ee');
    this.scene.background = new T.Color(bg);
    this.mats.ground.color = new T.Color(cssColor('--scene-ground', '#d9dce3'));
  }

  resize() {
    const w = this.container.clientWidth, h = this.container.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  clearRig() {
    this.rig.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.scene.remove(this.rig);
    this.rig = new T.Group();
    this.scene.add(this.rig);
    this.labelLayer.innerHTML = '';
    this.labels = [];
  }

  mesh(geo, mat, parent) {
    const m = new T.Mesh(geo, mat);
    m.castShadow = true; m.receiveShadow = true;
    (parent || this.rig).add(m);
    return m;
  }

  label(text, obj, offset) {
    const el = document.createElement('div');
    el.className = 'label3d';
    el.textContent = text;
    this.labelLayer.appendChild(el);
    this.labels.push({ el, obj, offset: new T.Vector3(...offset) });
  }

  // Show which gear a form field changes: tint it and label it
  highlightGear(key) {
    this.gearHl = key;
    for (const [k, list] of Object.entries(this.gearMeshes || {})) {
      for (const m of list) m.material = k === key ? this.mats.gearHl : this.mats.brass;
    }
    for (const [k, l] of Object.entries(this.gearTags || {})) l.el.classList.toggle('active', k === key);
  }

  // ---------- Focus: treadmill, character, or the whole system ----------
  // Tag every object under root with the part it belongs to
  tagPart(root, part) {
    root.traverse((o) => { if (!o.userData.part) o.userData.part = part; });
  }

  // Show only the part in focus (obstacles stay: they are what the character jumps over)
  applyFocus() {
    if (!this.charRoot) return;
    const f = this.focus;
    const hidden = (o) => f !== 'all' && (o.userData.part === 'belt' || o.userData.part === 'char') && o.userData.part !== f;
    for (const o of this.rig.children) o.visible = !hidden(o);
    for (const l of this.labels) l.dim = hidden(l.obj);
  }

  setFocus(focus, animate = true) {
    this.focus = focus;
    this.applyFocus();
    const box = new T.Box3();
    let dir;
    if (focus === 'all') {
      this.rig.traverse((o) => { if (o.isMesh && o.userData.part !== 'obs') box.expandByObject(o); });
      dir = new T.Vector3(0.36, 0.25, 0.95);
    } else if (focus === 'char') {
      box.setFromObject(this.charRoot);
      box.min.y = Math.max(box.min.y, this.beltTop - 0.02);
      dir = new T.Vector3(0.35, 0.18, 1);
    } else {
      this.rig.traverse((o) => { if (o.isMesh && o.userData.part === 'belt') box.expandByObject(o); });
      dir = new T.Vector3(0.55, 0.6, 1);
    }
    const sphere = box.getBoundingSphere(new T.Sphere());
    const fovV = T.MathUtils.degToRad(this.camera.fov);
    const fovH = 2 * Math.atan(Math.tan(fovV / 2) * this.camera.aspect);
    const dist = (sphere.radius / Math.sin(Math.min(fovV, fovH) / 2)) * (focus === 'all' ? 0.72 : 0.95); // a sphere is loose around the wide, flat full rig
    const target = sphere.center;
    this.flyTo(target.clone().add(dir.normalize().multiplyScalar(dist)), target, animate);
  }

  flyTo(pos, target, animate) {
    if (!animate || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.camAnim = null;
      this.camera.position.copy(pos);
      this.controls.target.copy(target);
      return;
    }
    this.camAnim = { p0: this.camera.position.clone(), t0: this.controls.target.clone(), p1: pos, t1: target, start: performance.now(), dur: 650 };
  }

  // Faceted cone/cylinder with Z facets, reads as a gear at this scale
  gear(rTop, rBot, h, Z, mat) {
    const geo = new T.CylinderGeometry(rTop, rBot, h, Math.max(8, Z), 1);
    return this.mesh(geo, mat);
  }

  build(p, out, world) {
    this.clearRig();
    const d = out.d;
    this.p = p; this.out = out; this.d = d;
    const R = d.R, span = d.span, W = p.width, t = Math.max(p.thick, 0.002);
    this.H = R + 0.06; // axle height above ground
    const base = new T.Group();
    base.position.y = this.H;
    this.rig.add(base);
    this.base = base;

    // Side rails (frame)
    const railGeo = new T.BoxGeometry(span + 4 * R + 0.06, 2 * R + 0.06, 0.012);
    for (const z of [-1, 1]) {
      const r = this.mesh(railGeo, this.mats.woodDark, base);
      r.position.set(0, -0.012, z * (W / 2 + 0.03));
    }
    // Legs
    const legGeo = new T.BoxGeometry(0.03, this.H, 0.03);
    for (const x of [-1, 1]) for (const z of [-1, 1]) {
      const l = this.mesh(legGeo, this.mats.woodDark);
      l.position.set(x * (span / 2 + 2 * R), this.H / 2 - 0.01, z * (W / 2 + 0.03));
    }
    // Deck under top run
    if (p.deck) {
      const deck = this.mesh(new T.BoxGeometry(span - 2 * R, 0.006, W * 0.92), this.mats.woodDark, base);
      deck.position.set(0, R - 0.004, 0);
    }
    // Rollers: axle + 2 rubber wheels each
    this.rollers = [];
    const wheelGeo = new T.CylinderGeometry(R, R, 0.022, 40);
    const axleGeo = new T.CylinderGeometry(p.dShaft / 2, p.dShaft / 2, W + 0.12, 16);
    for (const x of [-span / 2, span / 2]) {
      const g = new T.Group();
      g.position.set(x, 0, 0);
      base.add(g);
      const ax = this.mesh(axleGeo, this.mats.steel, g); ax.rotation.x = Math.PI / 2; ax.position.z = 0.03;
      for (const z of [-1, 1]) {
        const wh = this.mesh(wheelGeo, this.mats.rubber, g);
        wh.rotation.x = Math.PI / 2;
        wh.position.z = z * (W / 2 - 0.02);
        // a spoke mark so rotation is visible
        const mark = this.mesh(new T.BoxGeometry(R * 1.6, 0.004, 0.024), this.mats.steel, g);
        mark.position.z = z * (W / 2 - 0.02);
      }
      this.rollers.push(g);
    }
    this.label(tr('Caoutchouc wheels', 'Roues caoutchouc'), this.rollers[0], [0, R + 0.02, W / 2]);

    // Driveshaft + bevel gears (transmission)
    const zs = W / 2 + 0.075;
    const mod = 0.0012;
    const rZ = (Z) => (Z * mod) / 2;
    const shaft = new T.Group();
    shaft.position.set(0, 0, zs);
    base.add(shaft);
    const sh = this.mesh(new T.CylinderGeometry(0.004, 0.004, span, 12), this.mats.steel, shaft);
    sh.rotation.z = Math.PI / 2;
    this.shaft = shaft;
    this.shaftGears = [];
    this.axleGears = [];
    const gm = (this.gearMeshes = { Z1: [], Z2: [], Z3: [], Z4: [] });
    this.gearTags = {};
    const names = tr({ Z1: 'motor pinion', Z2: 'crown', Z3: 'shaft end ×2', Z4: 'roller axle ×2' }, { Z1: 'pignon moteur', Z2: 'couronne', Z3: 'bout d’arbre ×2', Z4: 'axe de rouleau ×2' });
    const tag = (k, obj, off) => {
      this.label(`${k} · ${names[k]} · ${p[k]}${tr('t', 'd')}`, obj, off);
      const l = this.labels[this.labels.length - 1];
      l.el.classList.add('gearTag');
      this.gearTags[k] = l;
    };
    for (const sx of [-1, 1]) {
      // gear on driveshaft end (Z3), axis x
      const g3 = this.gear(rZ(p.Z3) * 0.55, rZ(p.Z3), 0.01, p.Z3, this.mats.brass);
      shaft.add(g3);
      g3.rotation.z = sx > 0 ? -Math.PI / 2 : Math.PI / 2;
      g3.position.x = sx * (span / 2 - rZ(p.Z4) - 0.004);
      this.shaftGears.push(g3);
      gm.Z3.push(g3);
      // gear on roller axle (Z4), axis z
      const g4wrap = new T.Group();
      g4wrap.position.set(sx * (span / 2), 0, zs - rZ(p.Z3) - 0.004);
      base.add(g4wrap);
      const g4 = this.gear(rZ(p.Z4) * 0.55, rZ(p.Z4), 0.01, p.Z4, this.mats.brass);
      g4.rotation.x = -Math.PI / 2;
      g4wrap.add(g4);
      this.axleGears.push(g4wrap);
      gm.Z4.push(g4);
      if (sx > 0) { tag('Z3', g3, [0, 0.03, 0.01]); tag('Z4', g4wrap, [0.02, -0.03, 0]); }
    }
    // Crown gear (Z2) at the middle of the shaft, axis x
    const g2 = this.gear(rZ(p.Z2) * 0.55, rZ(p.Z2), 0.01, p.Z2, this.mats.brass);
    shaft.add(g2);
    g2.rotation.z = -Math.PI / 2;
    g2.position.x = rZ(p.Z1) + 0.004;
    this.crown = g2;
    gm.Z2.push(g2);
    tag('Z2', g2, [0, 0.03, -0.01]);
    this.label(tr('Transmission (rouage conique)', 'Transmission (rouage conique)'), shaft, [0, 0.04, 0]);
    // Motor (axis z) with pinion Z1
    const motor = new T.Group();
    motor.position.set(0, 0, zs + rZ(p.Z2) + 0.006);
    base.add(motor);
    const pin = this.gear(rZ(p.Z1) * 0.55, rZ(p.Z1), 0.01, p.Z1, this.mats.brass, motor);
    motor.add(pin);
    pin.rotation.x = Math.PI / 2;
    this.motorPinion = pin;
    gm.Z1.push(pin);
    tag('Z1', motor, [0, -0.03, 0.01]);
    const isAC = p.type === 'ac';
    const bodyR = isAC ? 0.045 : 0.0185;
    const bodyL = isAC ? 0.12 : 0.07;
    const body = this.mesh(new T.CylinderGeometry(bodyR, bodyR, bodyL, 32), this.mats.motor, motor);
    body.rotation.x = Math.PI / 2;
    body.position.z = 0.012 + (p.gh > 1 ? 0.03 : 0) + bodyL / 2;
    if (p.gh > 1) {
      const gb = this.mesh(new T.CylinderGeometry(bodyR, bodyR, 0.03, 32), this.mats.steel, motor);
      gb.rotation.x = Math.PI / 2; gb.position.z = 0.012 + 0.015;
    }
    if (isAC) {
      for (let k = 0; k < 10; k++) {
        const fin = this.mesh(new T.BoxGeometry(0.004, 0.01, bodyL * 0.9), this.mats.motor, motor);
        const a = (k / 10) * Math.PI * 2;
        fin.position.set(Math.cos(a) * (bodyR + 0.004), Math.sin(a) * (bodyR + 0.004), body.position.z);
        fin.rotation.z = a;
      }
    }
    // keep the motor above the ground
    motor.position.y = Math.max(0, -this.H + bodyR + 0.01);
    this.label(isAC ? tr('AC motor', 'Moteur asynchrone') : tr('DC motor', 'Moteur CC'), motor, [0, bodyR + 0.03, 0.05]);

    // Belt (tablier): instanced slats
    this.slatCount = Math.max(8, Math.floor(p.loopLength / p.pitch));
    this.slatPitch = p.loopLength / this.slatCount;
    const slatGeo = new T.BoxGeometry(this.slatPitch * 0.9, t, W);
    this.belt = new T.InstancedMesh(slatGeo, this.mats.wood, this.slatCount);
    this.belt.castShadow = true; this.belt.receiveShadow = true;
    base.add(this.belt);
    this.beltR = R + t / 2;
    this.label(tr('Tablier (laser-cut wood)', 'Tablier (bois découpé laser)'), this.belt, [-span / 4, R + 0.02, -W / 2]);
    this.highlightGear(this.gearHl);

    // Obstacles
    this.obsGeo = new T.BoxGeometry(p.lObs, p.hObs, 0.06);
    this.obsMeshes = [];

    // Character rig
    for (const o of this.rig.children) this.tagPart(o, 'belt');
    this.buildCharacter(p, out, world);
    this.tagPart(this.charRoot, 'char');
    this.applyFocus();
    this.update(world);
  }

  buildCharacter(p, out, world) {
    const d = this.d, kin = out.kin;
    const beltTop = this.H + d.R + p.thick;
    this.beltTop = beltTop;
    const hFoot = 0.05;
    const xc = world.xChar;
    const footCy = beltTop + p.footGap + hFoot / 2;
    const pivotY = footCy + p.Larm;
    const rackLen = 0.12;
    const pinionY = pivotY + rackLen * 0.55;
    const zMech = 0;
    const ch = new T.Group();
    this.rig.add(ch);
    this.charRoot = ch;
    // Single post behind the belt + cantilever arm holding the mechanism plate
    const W = p.width;
    const side = kin.ok ? kin.rackSide : 1;
    const rpp = d.rpp;
    const pinX = xc - side * rpp;
    const plateX = pinX + p.dx / 2;
    const plateTop = pinionY + 0.1;
    const zPost = -(W / 2 + 0.06);
    const post = this.mesh(new T.BoxGeometry(0.03, plateTop, 0.03), this.mats.woodDark, ch);
    post.position.set(plateX, plateTop / 2, zPost);
    const cantilever = this.mesh(new T.BoxGeometry(0.03, 0.025, -zPost - 0.045 + 0.015), this.mats.woodDark, ch);
    cantilever.position.set(plateX, plateTop - 0.0125, (zPost + (zMech - 0.045)) / 2);
    const plate = this.mesh(new T.BoxGeometry(Math.max(0.16, p.dx + 0.1), 0.17, 0.008), this.mats.wood, ch);
    plate.position.set(plateX, plateTop - 0.085, zMech - 0.045);
    // Pinion (pignon) — a wheel with Zp facets
    const pinion = new T.Group();
    pinion.position.set(pinX, pinionY, zMech);
    ch.add(pinion);
    const pg = this.mesh(new T.CylinderGeometry(rpp, rpp, 0.012, Math.max(12, p.Zp)), this.mats.brass, pinion);
    pg.rotation.x = Math.PI / 2;
    const pinMark = this.mesh(new T.CylinderGeometry(0.003, 0.003, 0.03, 10), this.mats.steel, pinion);
    pinMark.rotation.x = Math.PI / 2;
    this.pinion = pinion;
    this.pinionCrankPin = this.mesh(new T.CylinderGeometry(0.003, 0.003, 0.02, 10), this.mats.steel, ch);
    this.pinionCrankPin.rotation.x = Math.PI / 2;
    this.label('Pignon', pinion, [-0.01, rpp + 0.015, 0]);
    // Servo body + horn
    const servoC = new T.Vector3(pinX + p.dx, pinionY + p.dy, zMech - 0.025);
    const sb = this.mesh(new T.BoxGeometry(0.04, 0.02, 0.038), this.mats.servo, ch);
    sb.position.copy(servoC).add(new T.Vector3(0.01, 0, -0.01));
    this.label('Servo', sb, [0.01, 0.03, 0]);
    const horn = new T.Group();
    horn.position.copy(servoC).setZ(zMech - 0.004);
    ch.add(horn);
    const hb = this.mesh(new T.BoxGeometry(p.r1 + 0.008, 0.008, 0.004), this.mats.black, horn);
    hb.position.x = p.r1 / 2;
    this.horn = horn;
    this.servoC = servoC;
    // Bielle (connecting rod)
    this.bielle = this.mesh(new T.BoxGeometry(1, 0.006, 0.004), this.mats.black, ch);
    this.bielleZ = zMech + 0.012;
    this.label('Bielle', this.bielle, [0, 0.015, 0]);
    // Rack (crémaillère) + guide
    const rack = new T.Group();
    ch.add(rack);
    this.rack = rack;
    const rb = this.mesh(new T.BoxGeometry(0.012, rackLen, 0.012), this.mats.steel, rack);
    rb.position.set(xc, pivotY + rackLen / 2, zMech);
    const nT = Math.floor(rackLen / (Math.PI * p.module / 1000));
    const toothGeo = new T.BoxGeometry(0.003, 0.0015, 0.012);
    for (let k = 0; k < nT; k++) {
      const tt = this.mesh(toothGeo, this.mats.steel, rack);
      tt.position.set(xc - side * 0.007, pivotY + (k + 0.5) * (Math.PI * p.module / 1000), zMech);
    }
    this.label('Crémaillère', rb, [side * 0.03, 0.02, 0]);
    const guide = this.mesh(new T.BoxGeometry(0.03, 0.02, 0.03), this.mats.woodDark, ch);
    guide.position.set(xc, pivotY + rackLen + 0.02, zMech);
    // Pivot + lower arm + character
    const pivot = new T.Group();
    pivot.position.set(xc, pivotY, zMech);
    rack.add(pivot);
    this.pivot = pivot;
    const pot = this.mesh(new T.CylinderGeometry(0.009, 0.009, 0.026, 20), this.mats.black, pivot);
    pot.rotation.x = Math.PI / 2;
    this.label(tr('Liaison pivot + pot.', 'Liaison pivot + potentiomètre'), pivot, [-0.04, 0, 0.02]);
    const arm = this.mesh(new T.BoxGeometry(0.01, p.Larm, 0.01), this.mats.black, pivot);
    arm.position.y = -p.Larm / 2;
    const body = this.mesh(new T.BoxGeometry(p.footW, hFoot, 0.05), this.mats.char, pivot);
    body.position.y = -p.Larm;
    this.label(tr('Character', 'Personnage'), body, [0, -0.04, 0.03]);
    this.rackBaseY = 0;
  }

  update(world) {
    if (!this.d) return;
    const p = this.p, d = this.d;
    const span = d.span, Rb = this.beltR;
    const L = p.loopLength;
    // Belt slats along the loop: top run (+x), right arc, bottom run (−x), left arc
    const straight = span, arc = Math.PI * Rb;
    const loop = 2 * straight + 2 * arc;
    const m = new T.Matrix4(), q = new T.Quaternion(), pos = new T.Vector3(), sc = new T.Vector3(1, 1, 1), zAx = new T.Vector3(0, 0, 1);
    for (let i = 0; i < this.slatCount; i++) {
      let s = (((world.xb + i * this.slatPitch) % L) + L) % L;
      s = (s / L) * loop;
      let ang = 0;
      if (s < straight) { pos.set(-span / 2 + s, Rb, 0); ang = 0; }
      else if (s < straight + arc) { const a = (s - straight) / Rb; pos.set(span / 2 + Rb * Math.sin(a), Rb * Math.cos(a), 0); ang = -a; }
      else if (s < 2 * straight + arc) { const u = s - straight - arc; pos.set(span / 2 - u, -Rb, 0); ang = Math.PI; }
      else { const a = (s - 2 * straight - arc) / Rb; pos.set(-span / 2 - Rb * Math.sin(a), -Rb * Math.cos(a), 0); ang = Math.PI - a; }
      q.setFromAxisAngle(zAx, ang);
      m.compose(pos, q, sc);
      this.belt.setMatrixAt(i, m);
    }
    this.belt.instanceMatrix.needsUpdate = true;
    // Drivetrain rotation
    const thW = world.thW;
    for (const r of this.rollers) r.rotation.z = -thW;
    for (const g of this.axleGears) g.rotation.z = -thW;
    this.shaft.rotation.x = thW * d.iB;
    this.motorPinion.rotation.y = thW * d.iB * d.iA;
    // Obstacles
    while (this.obsMeshes.length < world.obs.length) { const o = this.mesh(this.obsGeo, this.mats.obs); o.userData.part = 'obs'; this.obsMeshes.push(o); }
    this.obsMeshes.forEach((om, k) => {
      const o = world.obs[k];
      om.visible = !!o;
      if (!o) return;
      om.position.set(o.x, this.beltTop + p.hObs / 2, 0);
      om.material = o.ghost || (o.contact === 1 && o.F > 0.01) ? this.mats.obsHit : this.mats.obs;
    });
    // Character
    const kin = this.out.kin;
    if (kin.ok) {
      const k = kin.at(world.a / TJ.DEG);
      this.rack.position.y = world.y;
      this.pinion.rotation.z = k.phi - kin.phi0;
      const px = this.pinion.position.x, py = this.pinion.position.y;
      const A = new T.Vector3(px + k.A[0], py + k.A[1], this.bielleZ);
      const B = new T.Vector3(px + k.B[0], py + k.B[1], this.bielleZ);
      this.horn.rotation.z = Math.atan2(k.A[1] - p.dy, k.A[0] - p.dx);
      const mid = A.clone().add(B).multiplyScalar(0.5);
      this.bielle.position.copy(mid);
      this.bielle.scale.x = A.distanceTo(B);
      this.bielle.rotation.z = Math.atan2(B.y - A.y, B.x - A.x);
      this.pinionCrankPin.position.set(B.x, B.y, this.bielleZ - 0.006);
    }
    this.pivot.rotation.z = world.theta;
  }

  render() {
    const a = this.camAnim;
    if (a) {
      const k = Math.min(1, (performance.now() - a.start) / a.dur);
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      this.camera.position.lerpVectors(a.p0, a.p1, e);
      this.controls.target.lerpVectors(a.t0, a.t1, e);
      if (k >= 1) this.camAnim = null;
    }
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    const w = this.container.clientWidth, h = this.container.clientHeight;
    const v = new T.Vector3();
    for (const l of this.labels) {
      l.el.hidden = !this.showLabels || l.dim;
      if (l.el.hidden) continue;
      l.obj.getWorldPosition(v);
      v.add(l.offset).project(this.camera);
      const behind = v.z > 1;
      l.el.style.transform = `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px) translate(-50%, -50%)`;
      l.el.style.opacity = behind ? 0 : 1;
    }
  }
}

export default Scene3D;
