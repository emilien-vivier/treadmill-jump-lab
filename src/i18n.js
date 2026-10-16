// Language comes from <html lang>: index.html is English, fr/index.html is French.
export const LANG = typeof document !== 'undefined' && document.documentElement.lang.startsWith('fr') ? 'fr' : 'en';
export const tr = (en, fr) => (LANG === 'fr' ? fr : en);

// Display names for the Arduino state machine (the sketch keeps the English identifiers)
const STATES_FR = { READY: 'PRÊT', RUNNING: 'EN COURS', GAME_OVER: 'FIN DE PARTIE', IDLE: 'REPOS', UP: 'MONTÉE', HOLD: 'MAINTIEN', DOWN: 'DESCENTE', COOLDOWN: 'RÉARMEMENT' };
export const stateName = (s) => (LANG === 'fr' ? STATES_FR[s] || s : s).replace('_', ' ');

// Language dropdown: same page in the other language, keeping the hash
export function initLangSwitch(select) {
  if (!select) return;
  select.value = LANG;
  select.addEventListener('change', () => {
    const base = import.meta.env.BASE_URL;
    const page = location.pathname.split('/').pop(); // '' or 'index.html' or 'build.html'
    location.href = (select.value === 'fr' ? base + 'fr/' : base) + page + location.hash;
  });
}
