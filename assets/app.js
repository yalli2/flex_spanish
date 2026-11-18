/* =========================================================
   FLEX 스페인어 — 공통 학습/채점 엔진
   ========================================================= */

const Store = {
  key: 'flex_spanish_progress',
  all() { try { return JSON.parse(localStorage.getItem(this.key) || '{}'); } catch (e) { return {}; } },
  get(id) { return this.all()[id] || null; },
  set(id, data) { const a = this.all(); a[id] = data; localStorage.setItem(this.key, JSON.stringify(a)); },
  clear() { localStorage.removeItem(this.key); }
};

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
/* 보기/문장 안의 밑줄 표기 __...__ 를 <u>로 변환 */
function fmt(s) {
  return esc(s).replace(/__(.+?)__/g, '<u>$1</u>').replace(/\n/g, '<br>');
}

/* ---------------- 공통 헤더 ---------------- */
function renderTop(active) {
  const nav = [
    ['index.html', '메인'],
    ['chapter.html?c=guide', '시험 개요'],
    ['chapter.html?c=l1', '듣기'],
    ['chapter.html?c=r1', '읽기'],
    ['chapter.html?c=s1', '말하기'],
    ['chapter.html?c=w1', '쓰기'],
    ['chapter.html?c=mock', '모의고사']
  ];
  return `<header class="top"><div class="top-in">
    <a class="brand" href="index.html">
      <span class="logo">FX</span>
      <span>FLEX 스페인어<small>실전 인터랙티브 학습실</small></span>
    </a>
    <nav>${nav.map(([h, t]) => `<a href="${h}"${t === active ? ' style="color:var(--accent);border-color:var(--accent)"' : ''}>${t}</a>`).join('')}</nav>
  </div></header>`;
}

/* ---------------- 챕터 렌더링 ---------------- */
function renderChapter(ch) {
  document.title = `${ch.title} · FLEX 스페인어`;
  const root = document.getElementById('app');
  const idx = CHAPTERS.findIndex(c => c.id === ch.id);
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx >= 0 && idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;

  let html = renderTop() + `<div class="wrap">
    <div class="chead">
      <div class="crumb"><a href="index.html">메인</a> › ${esc(ch.area || '')} ${ch.range ? '· 문항 ' + esc(ch.range) : ''}</div>
      <h1>${esc(ch.title)}</h1>
      <p>${esc(ch.subtitle || '')}</p>
      <div class="voicebox" id="voicebox" style="margin-top:14px"></div>
    </div>`;

  if (ch.guide) html += `<div class="panel">${ch.guide}</div>`;

  if (ch.items && ch.items.length) {
    html += `<div class="qbar">
      <span class="score">점수 <b id="sc">0</b> / ${ch.items.filter(i => i.type !== 'free').length}</span>
      <span class="prog"><i id="pg"></i></span>
      <button class="btn small" id="btnAll">전체 정답·해설 보기</button>
      <button class="btn small ghost" id="btnReset">다시 풀기</button>
    </div>
    <div id="qs"></div>
    <div class="result" id="res"></div>`;
  }

  html += `<div class="navbtns">
      ${prev ? `<a class="btn" href="chapter.html?c=${prev.id}">← ${esc(prev.short || prev.title)}</a>` : '<span></span>'}
      ${next ? `<a class="btn primary" href="chapter.html?c=${next.id}">${esc(next.short || next.title)} →</a>` : '<a class="btn primary" href="index.html">메인으로</a>'}
    </div>
    <div class="foot">다인에듀 · 후안샘 FLEX 스페인어 학습실 — 모든 문제와 지문은 학습용으로 새로 작성한 창작 문항입니다.</div>
  </div>`;

  root.innerHTML = html;
  mountVoicePicker(document.getElementById('voicebox'));
  if (ch.items && ch.items.length) mountQuiz(ch);
}

/* ---------------- 문제 렌더링 + 채점 ---------------- */
function mountQuiz(ch) {
  const host = document.getElementById('qs');
  const graded = ch.items.filter(i => i.type !== 'free').length;
  const state = { answered: {}, score: 0 };

  ch.items.forEach((it, i) => {
    const box = document.createElement('div');
    box.className = 'q';
    box.id = 'q' + i;
    const no = it.no ? `No.${it.no}` : `문제 ${i + 1}`;
    let inner = `<div class="qno">${esc(no)}${it.tag ? ' · ' + esc(it.tag) : ''}</div>`;

    /* 음성 자료 */
    if (it.audio) {
      inner += `<div class="audio-row">
        <button class="btn small primary" data-play="${i}">▶ 듣기</button>
        <button class="btn small" data-play="${i}" data-slow="1">🐢 느리게</button>
        <button class="btn small ghost" data-script="${i}">스크립트 보기</button>
        <span class="label">스페인 원어민 발음으로 재생됩니다</span>
      </div>
      <div class="script" id="sc${i}">${scriptHtml(it.audio)}</div>`;
    }

    if (it.passage) inner += `<div class="passage">${fmt(it.passage)}</div>`;
    if (it.stem) inner += `<div class="stem">${fmt(it.stem)}</div>`;

    if (it.type === 'free') {
      inner += `<textarea class="free" placeholder="${esc(it.placeholder || '여기에 스페인어로 작성해 보세요.')}"></textarea>
        <div class="audio-row" style="margin-top:10px">
          <button class="btn small primary" data-model="${i}">모범 답안 보기</button>
          ${it.seconds ? `<button class="btn small" data-timer="${i}" data-sec="${it.seconds}">⏱ ${it.seconds}초 타이머</button><span class="timer" id="tm${i}"></span>` : ''}
        </div>
        <div class="model" id="md${i}">
          <h5>모범 답안 (Respuesta modelo)</h5>
          <div>${fmt(it.model || '')}</div>
          ${it.modelKo ? `<div class="expl vocab show" style="background:transparent;border:none;padding:8px 0 0">${fmt(it.modelKo)}</div>` : ''}
          ${it.model ? `<button class="btn small" style="margin-top:10px" data-speak="${i}">🔊 모범 답안 듣기</button>` : ''}
        </div>`;
    } else {
      inner += `<div class="opts">` + it.options.map((o, k) =>
        `<button class="opt" data-q="${i}" data-o="${k}"><span class="num">${k + 1}</span><span>${fmt(o)}</span></button>`
      ).join('') + `</div>`;
      inner += `<div class="expl" id="ex${i}"><b>정답 ${it.answer + 1}번</b> — ${fmt(it.explain || '')}
        ${it.vocab ? `<div class="vocab">📘 ${fmt(it.vocab)}</div>` : ''}</div>`;
    }

    box.innerHTML = inner;
    host.appendChild(box);
  });

  /* 이벤트 위임 */
  host.addEventListener('click', e => {
    const t = e.target.closest('[data-q],[data-play],[data-script],[data-model],[data-speak],[data-timer]');
    if (!t) return;

    if (t.dataset.play !== undefined) {
      const it = ch.items[+t.dataset.play];
      const rate = t.dataset.slow ? 0.72 : 0.96;
      if (Array.isArray(it.audio)) TTS.speakDialog(it.audio, { rate });
      else TTS.speak(it.audio, { rate });
      return;
    }
    if (t.dataset.script !== undefined) {
      document.getElementById('sc' + t.dataset.script).classList.toggle('show'); return;
    }
    if (t.dataset.model !== undefined) {
      document.getElementById('md' + t.dataset.model).classList.add('show'); return;
    }
    if (t.dataset.speak !== undefined) {
      TTS.speak(String(ch.items[+t.dataset.speak].model).replace(/<[^>]+>/g, ' ')); return;
    }
    if (t.dataset.timer !== undefined) {
      startTimer(+t.dataset.timer, +t.dataset.sec); return;
    }
    if (t.dataset.q !== undefined) {
      const qi = +t.dataset.q, oi = +t.dataset.o;
      if (state.answered[qi] !== undefined) return;
      const it = ch.items[qi];
      state.answered[qi] = oi;
      const box = document.getElementById('q' + qi);
      box.querySelectorAll('.opt').forEach((b, k) => {
        b.disabled = true;
        if (k === it.answer) b.classList.add('ok');
        else if (k === oi) b.classList.add('no');
      });
      if (oi === it.answer) { state.score++; box.classList.add('correct'); }
      else box.classList.add('wrong');
      document.getElementById('ex' + qi).classList.add('show');
      update();
    }
  });

  document.getElementById('btnAll').onclick = () => {
    ch.items.forEach((it, i) => {
      if (it.type === 'free') { document.getElementById('md' + i).classList.add('show'); return; }
      if (state.answered[i] === undefined) {
        state.answered[i] = -1;
        const box = document.getElementById('q' + i);
        box.querySelectorAll('.opt').forEach((b, k) => { b.disabled = true; if (k === it.answer) b.classList.add('ok'); });
        document.getElementById('ex' + i).classList.add('show');
      }
      const s = document.getElementById('sc' + i); if (s) s.classList.add('show');
    });
    update();
  };
  document.getElementById('btnReset').onclick = () => location.reload();

  function update() {
    const done = Object.keys(state.answered).length;
    document.getElementById('sc').textContent = state.score;
    document.getElementById('pg').style.width = Math.round(done / Math.max(graded, 1) * 100) + '%';
    if (done >= graded && graded > 0) {
      const pct = Math.round(state.score / graded * 100);
      const msg = pct >= 90 ? '¡Excelente! 실전 대비 완성 단계입니다.'
        : pct >= 70 ? '¡Muy bien! 틀린 문항의 해설만 다시 정리하세요.'
        : pct >= 50 ? '¡Vas bien! 해설을 읽고 한 번 더 풀어 보세요.'
        : '¡Ánimo! 해설을 꼼꼼히 본 뒤 다시 도전해 보세요.';
      const r = document.getElementById('res');
      r.innerHTML = `<div class="big">${state.score} / ${graded}</div>
        <p>정답률 ${pct}% — ${esc(msg)}</p>
        <button class="btn primary" onclick="location.reload()">다시 풀기</button>`;
      r.classList.add('show');
      Store.set(ch.id, { score: state.score, total: graded, pct, at: Date.now() });
    }
  }

  function startTimer(i, sec) {
    const el = document.getElementById('tm' + i);
    let left = sec;
    el.textContent = left + '초';
    const t = setInterval(() => {
      left--; el.textContent = left + '초';
      if (left <= 0) { clearInterval(t); el.textContent = '시간 종료!'; }
    }, 1000);
  }
}

function scriptHtml(audio) {
  if (Array.isArray(audio)) {
    return audio.map(l => `<span class="sp"><b>${esc(l.who || '')}</b> ${esc(l.text)}</span>`).join('');
  }
  return esc(audio);
}

/* ---------------- 메인 페이지 ---------------- */
function renderIndex() {
  const root = document.getElementById('app');
  const groups = {};
  CHAPTERS.forEach(c => { (groups[c.area] = groups[c.area] || []).push(c); });

  let html = renderTop('메인') + `<div class="wrap">
    <section class="hero">
      <h1>FLEX 스페인어 실전 대비 학습실</h1>
      <p>듣기·읽기·말하기·쓰기 전 영역을 교재 체계 그대로 정리했습니다. 각 과에서 설명을 읽고, 바로 문제를 풀고, 점수와 해설을 즉시 확인하세요. 모든 스페인어 문장은 버튼 하나로 원어민 발음으로 들을 수 있습니다.</p>
      <div class="pill-row">
        <span class="pill">총 <b>140</b>문항 체계</span>
        <span class="pill">읽기 <b>600</b>점 · 듣기 <b>400</b>점</span>
        <span class="pill">말하기 <b>9</b>유형 · 쓰기 <b>6</b>유형</span>
        <span class="pill">전 문항 <b>즉시 채점</b> + 해설</span>
      </div>
    </section>`;

  const order = ['시험 안내', '듣기 Comprensión Auditiva', '읽기 Comprensión Escrita', '말하기 Expresión Oral', '쓰기 Expresión Escrita', '실전 모의고사'];
  order.forEach(area => {
    if (!groups[area]) return;
    html += `<div class="sec-title"><h2>${esc(area)}</h2><span>${groups[area].length}개 과</span></div><div class="grid">`;
    groups[area].forEach(c => {
      const p = Store.get(c.id);
      html += `<a class="card" href="chapter.html?c=${c.id}">
        ${p ? `<span class="done">${p.score}/${p.total}</span>` : ''}
        <span class="tag ${c.cls || 'guide'}">${esc(c.badge || '')}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.subtitle || '')}</p>
        <div class="meta">${c.range ? `<span>문항 ${esc(c.range)}</span><span class="dot"></span>` : ''}<span>${c.count ? c.count + '문제' : '학습 자료'}</span></div>
      </a>`;
    });
    html += `</div>`;
  });

  html += `<div class="sec-title"><h2>학습 기록</h2><span>이 브라우저에 저장됩니다</span></div>
    <div class="panel"><p class="note">각 과에서 문제를 모두 풀면 점수가 자동 저장되어 위 카드에 표시됩니다.</p>
    <button class="btn small" onclick="if(confirm('모든 학습 기록을 지울까요?')){Store.clear();location.reload();}">기록 초기화</button></div>
    <div class="foot">다인에듀 · 후안샘 FLEX 스페인어 학습실 — 학습용 창작 문항으로 구성되어 있습니다.</div></div>`;

  root.innerHTML = html;
}
