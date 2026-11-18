var CH = window.CH || {};
CH.r5 = {
  id:'r5', area:'읽기 Comprensión Escrita', range:'86–88',
  title:'Quinta Parte — 밑줄 중 문법 오류 찾기',
  subtitle:'한 문장 안의 네 부분 중 문법적으로 올바르지 않은 하나를 고릅니다.',
  guide:`
    <h3>이 유형 공략 포인트</h3>
    <ul>
      <li>검사 순서를 고정하세요 — <b>① 성·수 일치 → ② 동사 활용(인칭·시제) → ③ 서법(직설법/접속법) → ④ 전치사·대명사</b></li>
      <li>오류의 70%는 <b>접속법을 써야 할 자리에 직설법</b>을 쓰거나, <b>성·수 불일치</b>입니다.</li>
      <li>해석이 자연스러워도 문법은 틀릴 수 있습니다. 의미가 아니라 <b>형태</b>를 보세요.</li>
    </ul>
    <div class="tipbox">💡 선택지를 고른 뒤 해설에서 <b>올바르게 고친 문장</b>을 꼭 확인하세요. 교정 문장을 소리 내 읽는 것이 가장 빠른 교정법입니다.</div>`,
  items:[
    { no:86, stem:'Si un compañero ① __con que__ trabajamos no cumple ② __con__ su tarea, no debemos ③ __callarnos__, sino ④ __hablar__ con él cuanto antes.',
      options:['① con que','② con','③ callarnos','④ hablar'], answer:0,
      explain:'사람을 가리키는 전치사 + 관계사는 con quien 또는 con el que를 써야 합니다. con que는 사물에만 쓰입니다. → un compañero <b>con quien</b> trabajamos',
      vocab:'cumplir con 이행하다 · cuanto antes 가능한 한 빨리' },

    { no:87, stem:'Es importante que todos ① __estudien__ el informe antes de la reunión, porque ② __habrá__ que tomar decisiones que ③ __afectan__ a toda la plantilla y que nadie ④ __puede__ retrasar.',
      options:['① estudien','② habrá','③ afectan','④ puede'], answer:2,
      explain:'아직 결정되지 않은 불특정 결정(decisiones que…)을 수식하므로 접속법이 필요합니다. → decisiones que <b>afecten</b> a toda la plantilla',
      vocab:'plantilla 전 직원 · retrasar 미루다' },

    { no:88, stem:'La mayoría de los estudiantes ① __entregaron__ su trabajo a tiempo, aunque ② __algunas__ lo hicieron el último día y ③ __tuvieron__ que pedir ④ __una__ prórroga.',
      options:['① entregaron','② algunas','③ tuvieron','④ una'], answer:1,
      explain:'los estudiantes를 받으므로 남성 복수 algunos여야 합니다. → aunque <b>algunos</b> lo hicieron',
      vocab:'prórroga 기한 연장 · a tiempo 제때에' },

    { no:89, stem:'Cuando ① __llegues__ a Madrid, ② __llámame__ para que ③ __puedo__ ir a buscarte ④ __al__ aeropuerto.',
      options:['① llegues','② llámame','③ puedo','④ al'], answer:2,
      explain:'para que 뒤에는 반드시 접속법이 옵니다. → para que <b>pueda</b> ir a buscarte',
      vocab:'ir a buscar a alguien 마중 나가다' },

    { no:90, stem:'El año pasado ① __fuimos__ a Sevilla y ② __visitábamos__ la catedral, que ③ __nos__ pareció ④ __impresionante__.',
      options:['① fuimos','② visitábamos','③ nos','④ impresionante'], answer:1,
      explain:'el año pasado의 완결된 사건이므로 단순과거여야 합니다. → y <b>visitamos</b> la catedral',
      vocab:'impresionante 인상적인' },

    { no:91, stem:'No creo que ① __sea__ necesario ② __de__ repetir la prueba, pues los datos ③ __coinciden__ con los ④ __que__ obtuvimos ayer.',
      options:['① sea','② de','③ coinciden','④ que'], answer:1,
      explain:'ser necesario 뒤에는 전치사 없이 동사원형이 옵니다. → no sea necesario <b>repetir</b> la prueba',
      vocab:'coincidir con ~와 일치하다' },

    { no:92, stem:'① __A mí__ ② __me gustan__ ③ __ese tipo__ de películas, pero ④ __a mi hermano__ no le interesan nada.',
      options:['① A mí','② me gustan','③ ese tipo','④ a mi hermano'], answer:1,
      explain:'gustar의 주어는 ese tipo de películas(단수)입니다. películas에 이끌려 복수로 쓰면 안 됩니다. → ② <b>me gusta</b> ese tipo de películas',
      vocab:'ese tipo de ~ 그런 종류의 · interesar 흥미를 끌다' },

    { no:93, stem:'① __Espero__ que ② __tienes__ un rato mañana para ③ __revisar__ el contrato antes de ④ __firmarlo__.',
      options:['① Espero','② tienes','③ revisar','④ firmarlo'], answer:1,
      explain:'esperar que는 희망을 나타내므로 종속절에 접속법이 와야 합니다. → ② <b>tengas</b> un rato mañana',
      vocab:'un rato 잠깐 시간 · firmar 서명하다' }
  ]
};
window.CH = CH;
