var CH = window.CH || {};
CH.r3 = {
  id:'r3', area:'읽기 Comprensión Escrita', range:'71–80',
  title:'Tercera Parte — 밑줄 친 단어의 의미',
  subtitle:'문맥 속에서 밑줄 친 단어와 바꿔 쓸 수 있는 동의어를 고릅니다.',
  guide:`
    <h3>이 유형 공략 포인트</h3>
    <ul>
      <li>사전적 의미가 아니라 <b>그 문장 안에서의 의미</b>를 묻습니다. 같은 단어라도 문맥이 바뀌면 답이 달라집니다.</li>
      <li>선택지를 밑줄 자리에 하나씩 <b>넣어 읽어 보는</b> 대입법이 가장 빠릅니다. 성·수와 품사가 맞지 않으면 즉시 탈락입니다.</li>
      <li>자주 나오는 형용사 짝: apresurado=rápido · monótono=aburrido · asequible=barato · insólito=raro · imprescindible=necesario</li>
    </ul>`,
  items:[
    { no:71, stem:'La gente joven de hoy en día vive muy __apresurada__.',
      options:['obsesionada','entusiasmada','acelerada','preocupada'], answer:2,
      explain:'apresurado = 서두르는, 바쁜 → acelerado. obsesionado(집착하는), entusiasmado(열광한)는 뜻이 다릅니다.',
      vocab:'apresurado 서두르는 · acelerado 빠른, 가속된' },

    { no:72, stem:'Aquel documental sobre los glaciares me pareció bastante __monótono__.',
      options:['maravilloso','triste','aburrido','monumental'], answer:2,
      explain:'monótono = 단조로운 → aburrido(지루한). 발음이 비슷한 monumental에 속지 마세요.',
      vocab:'monótono 단조로운' },

    { no:73, stem:'Adjuntamos el __informe__ que hemos realizado sobre el descenso de las ventas.',
      options:['conjunto','pedido','documento','informático'], answer:2,
      explain:'informe = 보고서 → documento. informático는 "컴퓨터의"라는 형용사라 명사 자리에 올 수 없습니다.',
      vocab:'adjuntar 첨부하다 · descenso 하락' },

    { no:74, stem:'El precio del piso es __asequible__ para una pareja joven.',
      options:['elevado','razonable','inseguro','provisional'], answer:1,
      explain:'asequible = (가격이) 감당 가능한 → razonable. elevado(높은)는 정반대입니다.',
      vocab:'asequible 적당한 가격의 · razonable 합리적인' },

    { no:75, stem:'Su reacción ante la noticia fue completamente __insólita__.',
      options:['habitual','extraña','correcta','prudente'], answer:1,
      explain:'insólito = 이례적인, 흔치 않은 → extraño. habitual은 반대말입니다.',
      vocab:'insólito 이례적인' },

    { no:76, stem:'El director __hizo hincapié__ en la puntualidad durante toda la reunión.',
      options:['insistió','olvidó','dudó','rechazó'], answer:0,
      explain:'hacer hincapié en = ~을 강조하다 → insistir en. 실무 문서에 자주 등장합니다.',
      vocab:'hacer hincapié 강조하다 · puntualidad 시간 엄수' },

    { no:77, stem:'La empresa ha decidido __prescindir de__ dos proveedores extranjeros.',
      options:['contratar a','renunciar a','depender de','felicitar a'], answer:1,
      explain:'prescindir de = ~없이 지내다, ~을 포기하다 → renunciar a.',
      vocab:'prescindir de 없애다 · proveedor 공급업체' },

    { no:78, stem:'Los resultados del experimento fueron __contundentes__: no hubo ninguna duda.',
      options:['confusos','rotundos','discretos','provisionales'], answer:1,
      explain:'contundente = 결정적인, 반박의 여지가 없는 → rotundo. 뒤 문장의 ninguna duda가 결정적 단서입니다.',
      vocab:'contundente 명백한 · rotundo 단호한' },

    { no:79, stem:'Con este descuento, el viaje resulta mucho más __económico__.',
      options:['caro','barato','rápido','cómodo'], answer:1,
      explain:'económico는 "경제의"가 아니라 "값싼"으로 자주 쓰입니다 → barato.',
      vocab:'económico 값싼 · descuento 할인' },

    { no:80, stem:'El plazo de entrega es __improrrogable__: ni un día más.',
      options:['ampliable','flexible','inaplazable','opcional'], answer:2,
      explain:'improrrogable = 연장 불가의 → inaplazable(미룰 수 없는). 뒤의 ni un día más가 힌트입니다.',
      vocab:'improrrogable 연장 불가의 · aplazar 연기하다' },

    { no:81, stem:'Este modelo ha quedado __obsoleto__ en apenas tres años.',
      options:['anticuado','novedoso','resistente','costoso'], answer:0,
      explain:'obsoleto = 구식이 된 → anticuado. 기술·학술 지문에 자주 등장합니다.',
      vocab:'obsoleto 구식의 · apenas 겨우' },

    { no:82, stem:'La situación del mercado sigue siendo __incierta__ para este año.',
      options:['segura','dudosa','estable','favorable'], answer:1,
      explain:'incierto = 불확실한 → dudoso. 경제 기사에 반복적으로 출제되는 어휘입니다.',
      vocab:'incierto 불확실한 · estable 안정적인' }
  ]
};
window.CH = CH;
