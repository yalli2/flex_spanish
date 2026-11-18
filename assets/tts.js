/* =========================================================
   FLEX 스페인어 — 음성 엔진 (스페인 원어민 느낌의 자연스러운 발음)
   Web Speech API 기반. 스페인(es-ES) 음성을 우선 선택하고,
   없으면 중남미(es-MX/es-US/es-AR...) 음성으로 대체한다.
   ========================================================= */
const TTS = (() => {
  let voices = [];
  let voiceF = null;   // 여성(기본)
  let voiceM = null;   // 남성(대화 B역)
  let ready = false;
  const listeners = [];

  // 품질이 좋은(원어민에 가까운) 엔진을 우선순위로 점수화
  const PREMIUM = [
    'google español', 'google espanol', 'google español de españa',
    'microsoft elvira', 'microsoft alvaro', 'microsoft álvaro',
    'microsoft helena', 'microsoft laura', 'microsoft pablo',
    'mónica', 'monica', 'jorge', 'marisol', 'paulina', 'juan',
    'diego', 'lucia', 'lucía', 'carmen', 'enrique'
  ];
  const MALE_HINT = ['alvaro','álvaro','jorge','pablo','diego','juan','enrique','carlos','male','hombre'];

  function score(v) {
    const n = (v.name || '').toLowerCase();
    const l = (v.lang || '').toLowerCase().replace('_', '-');
    let s = 0;
    if (l.startsWith('es')) s += 50;                 // 스페인어
    if (l === 'es-es') s += 35;                      // 스페인 본토 억양 최우선
    else if (['es-mx','es-us','es-ar','es-co','es-cl','es-pe'].includes(l)) s += 14;
    PREMIUM.forEach((p, i) => { if (n.includes(p)) s += 30 - i * 0.5; });
    if (n.includes('google')) s += 18;               // 구글 신경망 음성
    if (n.includes('natural') || n.includes('neural') || n.includes('premium') || n.includes('enhanced')) s += 22;
    if (n.includes('siri')) s += 12;
    if (v.localService === false) s += 6;            // 클라우드 음성이 대개 더 자연스러움
    if (n.includes('compact') || n.includes('eloquence')) s -= 20;
    return s;
  }

  function isMale(v) {
    const n = (v.name || '').toLowerCase();
    return MALE_HINT.some(h => n.includes(h));
  }

  function pick() {
    const all = speechSynthesis.getVoices() || [];
    voices = all.filter(v => (v.lang || '').toLowerCase().startsWith('es'))
                .sort((a, b) => score(b) - score(a));
    if (!voices.length) { voices = all.slice(); }
    const saved = localStorage.getItem('flex_voice');
    voiceF = voices.find(v => v.name === saved) || voices.find(v => !isMale(v)) || voices[0] || null;
    voiceM = voices.find(v => isMale(v) && v !== voiceF) || voices[1] || voiceF;
    ready = true;
    listeners.forEach(fn => fn(voices, voiceF));
  }

  if ('speechSynthesis' in window) {
    pick();
    speechSynthesis.onvoiceschanged = pick;
    setTimeout(pick, 400);
  }

  /* 문장을 자연스럽게 끊어 읽기 위한 전처리 */
  function humanize(text) {
    return String(text)
      .replace(/\s+/g, ' ')
      .replace(/([,;:])\s*/g, '$1 ')
      .trim();
  }

  function speak(text, opt = {}) {
    if (!('speechSynthesis' in window)) {
      alert('이 브라우저는 음성 재생을 지원하지 않습니다. Chrome 또는 Edge를 사용해 주세요.');
      return;
    }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(humanize(text));
    const v = opt.male ? voiceM : voiceF;
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'es-ES'; }
    u.rate = opt.rate || 0.96;   // 원어민 자연 속도에 가깝게
    u.pitch = opt.pitch || (opt.male ? 0.92 : 1.03);
    u.volume = 1;
    if (opt.onend) u.onend = opt.onend;
    speechSynthesis.speak(u);
    return u;
  }

  /* A/B 대화를 남녀 목소리로 번갈아 읽기 */
  function speakDialog(lines, opt = {}) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const rate = opt.rate || 0.96;
    let i = 0;
    const next = () => {
      if (i >= lines.length) { if (opt.onend) opt.onend(); return; }
      const line = lines[i++];
      const male = /^(B|H|Hombre|Chico|Señor)\b/i.test(line.who || '') ? true
                 : (line.male !== undefined ? line.male : (i % 2 === 0));
      const u = new SpeechSynthesisUtterance(humanize(line.text || line));
      const v = male ? voiceM : voiceF;
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'es-ES'; }
      u.rate = rate; u.pitch = male ? 0.92 : 1.03;
      u.onend = () => setTimeout(next, 420);  // 화자 교체 사이 자연스러운 쉼
      speechSynthesis.speak(u);
    };
    next();
  }

  function stop() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
  function onReady(fn) { listeners.push(fn); if (ready) fn(voices, voiceF); }
  function setVoice(name) {
    const v = voices.find(x => x.name === name);
    if (v) { voiceF = v; localStorage.setItem('flex_voice', name);
      voiceM = voices.find(x => isMale(x) && x !== voiceF) || voiceF; }
  }
  function getVoices() { return voices; }
  function current() { return voiceF; }

  return { speak, speakDialog, stop, onReady, setVoice, getVoices, current };
})();

/* 음성 선택 UI를 특정 요소에 렌더링 */
function mountVoicePicker(el) {
  if (!el) return;
  TTS.onReady((list, cur) => {
    if (!list.length) { el.innerHTML = '<span>이 브라우저에서 스페인어 음성을 찾지 못했습니다 · Chrome 권장</span>'; return; }
    el.innerHTML = '<span>🔊 음성</span>';
    const sel = document.createElement('select');
    sel.className = 'vsel';
    list.slice(0, 12).forEach(v => {
      const o = document.createElement('option');
      o.value = v.name;
      o.textContent = `${v.name} (${v.lang})`;
      if (cur && v.name === cur.name) o.selected = true;
      sel.appendChild(o);
    });
    sel.onchange = () => TTS.setVoice(sel.value);
    el.appendChild(sel);
    const test = document.createElement('button');
    test.className = 'btn small';
    test.textContent = '발음 테스트';
    test.onclick = () => TTS.speak('Buenos días. Vamos a empezar la prueba de español.');
    el.appendChild(test);
  });
}
