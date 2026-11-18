var CH = window.CH || {};
CH.r1 = {
  id:'r1', area:'읽기 Comprensión Escrita', range:'51–65',
  title:'Primera Parte — 빈칸 완성 (문법·어휘)',
  subtitle:'문장을 완성하는 데 가장 알맞은 표현을 고릅니다. 기초언어능력(문법·어휘)의 핵심 구간입니다.',
  guide:`
    <h3>이 유형 공략 포인트</h3>
    <ul>
      <li>출제 축은 네 가지입니다 — <b>① 동사 선택(ser/estar/haber/tener) ② 시제·법(서법) ③ 전치사·관계사·의문사 ④ 어휘 변별</b></li>
      <li>빈칸 <b>앞뒤 두 단어</b>만 보면 대부분 풀립니다. 특히 빈칸 뒤의 전치사가 결정적 힌트입니다.</li>
      <li>접속법을 부르는 신호: ojalá, es necesario que, para que, cuando(미래), no creo que, buscar + 불특정 대상</li>
      <li>문항당 <b>30초</b>를 넘기지 마세요. 1부~6부 40문항을 30분에 끝내야 독해에 55분이 남습니다.</li>
    </ul>
    <div class="tipbox">🔊 각 문제의 해설에서 완성된 정답 문장을 확인한 뒤, 듣기 버튼으로 소리 내 따라 읽으면 어순이 몸에 붙습니다.</div>`,
  items:[
    { no:51, tag:'ser / estar', stem:'Después de tantas horas de viaje, los niños __________ agotados y no quieren cenar.',
      options:['son','están','hay','tienen'], answer:1,
      explain:'일시적 상태(피곤함)는 estar를 씁니다. ser agotado라고 하면 "사람을 지치게 하는 성격"이라는 전혀 다른 뜻이 됩니다.',
      vocab:'agotado 기진맥진한' },

    { no:52, tag:'동사 선택', stem:'Si nadie quiere ocuparse del inventario, yo mismo me __________ de ello.',
      options:['quedaré','tomaré','encargaré','acordaré'], answer:2,
      explain:'encargarse de = ~을 맡다, 책임지다. 재귀 + de와 함께 쓰는 동사를 묶어서 외우세요.',
      vocab:'encargarse de 맡다 · acordarse de 기억하다 · quedarse con 간직하다' },

    { no:53, tag:'어휘', stem:'Le compré un __________ de rosas blancas en el mercado de la plaza.',
      options:['ramo','puño','rastro','punto'], answer:0,
      explain:'ramo de flores = 꽃다발. puño(주먹), rastro(흔적), punto(점)는 꽃과 결합하지 않습니다.',
      vocab:'ramo 꽃다발 · ramo de olivo 올리브 가지' },

    { no:54, tag:'접속법', stem:'Es imprescindible que todos __________ el formulario antes del viernes.',
      options:['entregan','entregarán','entreguen','entregaban'], answer:2,
      explain:'Es imprescindible que(필수적이다) 같은 가치판단 표현 뒤에는 접속법이 옵니다 → entreguen.',
      vocab:'imprescindible 필수적인 · formulario 서식' },

    { no:55, tag:'전치사', stem:'No te preocupes __________ el resultado; has hecho todo lo que podías.',
      options:['de','por','en','a'], answer:1,
      explain:'preocuparse por algo = ~을 걱정하다. preocuparse de도 쓰이지만 "책임지고 챙기다"에 가깝고, 시험에서는 por가 기본입니다.',
      vocab:'preocuparse por ~을 걱정하다' },

    { no:56, tag:'시제', stem:'Cuando __________ a casa anoche, mis padres ya habían cenado.',
      options:['llegaba','llegué','llegaré','llegara'], answer:1,
      explain:'anoche라는 완료된 시점이 있으므로 단순과거(llegué). 뒤의 대과거(habían cenado)와 짝을 이룹니다.',
      vocab:'anoche 어젯밤 · ya 이미' },

    { no:57, tag:'의문사', stem:'¿__________ piensas que es la verdadera causa del problema?',
      options:['Qué','Cómo','Cuál','Dónde'], answer:2,
      explain:'뒤에 es + 명사(la causa)가 오고 여러 후보 중 하나를 고르는 맥락이므로 Cuál. ¿Qué es…?는 정의를 물을 때만 씁니다.',
      vocab:'causa 원인 · verdadero 진짜의' },

    { no:58, tag:'관계사', stem:'La empresa __________ trabajo mi hermana abrirá una sucursal en Lima.',
      options:['que','en la que','cuya','quien'], answer:1,
      explain:'trabajar en una empresa이므로 전치사 en이 필요합니다 → en la que(= donde).',
      vocab:'sucursal 지점' },

    { no:59, tag:'전치사', stem:'¿__________ qué trata el informe que nos enviaron ayer?',
      options:['Con','En','De','Bajo'], answer:2,
      explain:'tratar de = ~에 관한 것이다. tratar con은 "~와 거래/교류하다"로 뜻이 달라집니다.',
      vocab:'tratar de ~을 다루다 · tratar con ~와 상대하다' },

    { no:60, tag:'목적격 대명사', stem:'Esos documentos son para el director; __________ llevo ahora mismo.',
      options:['le los','se los','los le','lo les'], answer:1,
      explain:'간접(le) + 직접(los)이 겹치면 le → se로 바뀝니다 → se los llevo.',
      vocab:'llevar 가져다주다' },

    { no:61, tag:'접속법 (목적)', stem:'Te dejo las llaves para que __________ entrar cuando llegues.',
      options:['puedes','puedas','podrás','pudiste'], answer:1,
      explain:'para que + 접속법은 예외 없는 규칙입니다 → puedas.',
      vocab:'dejar 맡기다 · llave 열쇠' },

    { no:62, tag:'어휘 변별', stem:'El tren salió con veinte minutos de __________ por culpa de la nieve.',
      options:['retraso','retroceso','atraso','rechazo'], answer:0,
      explain:'교통편의 지연은 retraso가 표준 표현입니다. atraso는 주로 "낙후·연체"의 뜻으로 쓰입니다.',
      vocab:'con retraso 늦게 · por culpa de ~ 탓에' },

    { no:63, tag:'haber / tener', stem:'En esta ciudad __________ muchos edificios que merecen una visita.',
      options:['están','son','hay','tienen'], answer:2,
      explain:'존재(불특정 복수 명사 muchos edificios)는 hay. estar는 이미 아는 대상의 위치를 말할 때 씁니다.',
      vocab:'merecer ~할 가치가 있다' },

    { no:64, tag:'비교', stem:'Este modelo cuesta el doble __________ el anterior, pero dura mucho más.',
      options:['como','que','de','a'], answer:1,
      explain:'el doble que / más que처럼 비교의 기준은 que로 연결합니다.',
      vocab:'el doble 두 배 · durar 지속되다' },

    { no:65, tag:'접속법 (미래)', stem:'Cuando __________ los resultados, te llamo sin falta.',
      options:['tengo','tendré','tenga','tuviera'], answer:2,
      explain:'cuando가 미래의 일을 가리킬 때는 접속법 현재를 씁니다 → tenga.',
      vocab:'sin falta 꼭' },

    { no:66, tag:'재귀·수동', stem:'__________ necesitan dos camareros con experiencia para el turno de noche.',
      options:['Se','Le','Lo','Les'], answer:0,
      explain:'구인 광고의 전형적 무인칭 수동 se + 3인칭 복수 동사 구문입니다.',
      vocab:'turno de noche 야간 근무조' },

    { no:67, tag:'por / para', stem:'Gracias __________ avisarme con tanta antelación; he podido cambiar el billete.',
      options:['para','por','de','en'], answer:1,
      explain:'gracias por + 원인/이유. para는 목적을 나타내어 여기서는 쓸 수 없습니다.',
      vocab:'con antelación 미리 · avisar 알리다' },

    { no:68, tag:'조건문', stem:'Si hubiera salido diez minutos antes, no __________ el autobús.',
      options:['perdería','habría perdido','perdí','pierda'], answer:1,
      explain:'Si + 접속법 대과거(hubiera salido) → 가정법 과거완료(habría perdido). 이미 지나간 일에 대한 후회를 나타냅니다.',
      vocab:'perder el autobús 버스를 놓치다' }
  ]
};
window.CH = CH;
