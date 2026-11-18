var CH = window.CH || {};
CH.w1 = {
  id:'w1', area:'쓰기 Expresión Escrita',
  title:'Expresión Escrita — 쓰기 6개 유형',
  subtitle:'단문 번역부터 자유 작문까지, 직접 써 본 뒤 모범 답안과 비교하세요.',
  guide:`
    <h3>시험 구성</h3>
    <table class="simple">
      <tr><th>유형</th><th>문항</th><th>과제</th></tr>
      <tr><td>단문 번역</td><td>5문항 (각 10점)</td><td>한국어 단문을 스페인어로</td></tr>
      <tr><td>내용 요약</td><td>1문항</td><td>150단어 내외 글을 40단어 내외로</td></tr>
      <tr><td>담화 구성</td><td>1문항</td><td>미완성 글을 50단어 이상으로 완성</td></tr>
      <tr><td>데이터 분석</td><td>1문항</td><td>표·그래프를 글로 기술</td></tr>
      <tr><td>서신·메모</td><td>1문항</td><td>목적에 맞는 서신 작성</td></tr>
      <tr><td>자유 작문</td><td>1문항</td><td>주제에 따른 짧은 에세이</td></tr>
    </table>
    <h4>감점을 막는 체크리스트</h4>
    <ul>
      <li>① 명사-형용사 <b>성·수 일치</b> ② 시제 <b>일관성</b> ③ 전치사 por/para/a/de ④ 접속법 신호어 ⑤ 악센트(está, trabajó, día)</li>
      <li>에세이는 <b>서론에서 주제 선언</b> → 본론 각 단락 첫 문장을 주제문으로 → 결론에서 의견 재확인.</li>
      <li>화려한 어휘보다 <b>틀리지 않는 문장</b>이 점수를 지킵니다. 아는 구문으로 쓰세요.</li>
    </ul>`,
  items:[
    { no:1, type:'free', tag:'단문 번역 1', stem:'다음 문장을 스페인어로 옮기세요.\n→ 회의가 끝나자마자 너에게 전화할게.',
      model:'Te llamaré en cuanto termine la reunión.',
      modelKo:'🇰🇷 "~하자마자"는 en cuanto / tan pronto como. 미래의 일이므로 뒤에 <b>접속법</b>(termine)이 옵니다. Te llamo en cuanto termine…도 가능합니다.' },

    { no:2, type:'free', tag:'단문 번역 2', stem:'→ 비가 많이 왔는데도 우리는 산책을 하러 나갔다.',
      model:'Aunque llovía mucho, salimos a dar un paseo.',
      modelKo:'🇰🇷 사실을 인정하는 양보(aunque + 직설법). "산책하다"는 dar un paseo / pasear. A pesar de que llovía…도 정답입니다.' },

    { no:3, type:'free', tag:'단문 번역 3', stem:'→ 그 서류들을 내일까지 보내 주셨으면 합니다.',
      model:'Le agradecería que me enviara esos documentos antes de mañana.',
      modelKo:'🇰🇷 정중한 요청은 Le agradecería que + 접속법 과거(enviara) 또는 Me gustaría que me enviara…. 실무 서신의 기본 공식입니다.' },

    { no:4, type:'free', tag:'단문 번역 4', stem:'→ 나는 스페인에 산 지 3년이 되었다.',
      model:'Hace tres años que vivo en España. / Llevo tres años viviendo en España.',
      modelKo:'🇰🇷 두 표현 모두 만점입니다. llevar + 기간 + 현재분사 구문을 쓰면 더 높은 평가를 받습니다. 과거시제(viví)를 쓰면 "지금은 살지 않는다"가 되어 오답입니다.' },

    { no:5, type:'free', tag:'단문 번역 5', stem:'→ 가격이 생각보다 비싸서 결국 아무것도 사지 않았다.',
      model:'Como era más caro de lo que pensaba, al final no compré nada.',
      modelKo:'🇰🇷 "생각보다"는 de lo que pensaba. 이중부정 no… nada를 반드시 지켜야 합니다.' },

    { no:6, type:'free', tag:'내용 요약', seconds:300,
      stem:'다음 글을 40단어 내외의 스페인어로 요약하세요.',
      passage:'Cada vez más empresas permiten que sus empleados trabajen desde casa algunos días a la semana. Los defensores de este modelo señalan que ahorra tiempo de desplazamiento, reduce el gasto en transporte y permite organizar mejor la vida familiar. Sin embargo, varios estudios advierten de que el teletrabajo puede aumentar la sensación de aislamiento y difuminar la frontera entre la vida laboral y la personal, de modo que muchos trabajadores acaban conectados más horas de las que trabajaban en la oficina. Por eso, la mayoría de los expertos recomienda un modelo mixto, con días presenciales fijos que permitan mantener el contacto con el equipo.',
      model:'El teletrabajo ahorra tiempo y dinero y facilita la vida familiar, pero puede provocar aislamiento y más horas conectadas. Por eso los expertos aconsejan un modelo mixto, con algunos días presenciales para mantener el contacto con el equipo.',
      modelKo:'🇰🇷 요약은 ① 장점 ② 단점 ③ 결론, 이 세 덩어리만 남기고 예시·수식어는 모두 버립니다. 원문 문장을 그대로 베끼지 말고 자신의 표현으로 압축하세요.' },

    { no:7, type:'free', tag:'담화 구성', seconds:420,
      stem:'다음 글은 미완성입니다. 먼저 읽고 50단어 이상으로 이어서 완성하세요.',
      passage:'Algunas personas mayores viven en residencias especiales y otras viven con sus hijos. El hecho de que los mayores vivan en una residencia tiene ventajas y desventajas. Por un lado, en esos lugares pueden convivir con gente de su misma edad y reciben una atención adecuada por parte de los trabajadores del centro. Por otro lado, ___________________',
      model:'Por otro lado, muchos ancianos echan de menos a su familia y sienten que han perdido parte de su independencia, porque los horarios de las comidas, de las visitas o de las actividades los decide el centro. Además, las buenas residencias resultan caras y no todas las familias pueden pagarlas. Por eso, en mi opinión, lo ideal sería que cada familia pudiera elegir con libertad y que existieran servicios de ayuda a domicilio para quienes prefieran quedarse en su casa.',
      modelKo:'🇰🇷 Por un lado로 시작했으므로 반드시 <b>반대 측면</b>으로 이어야 합니다. 단점 2개 + 본인 의견으로 마무리하면 구조 점수를 모두 가져갑니다.' },

    { no:8, type:'free', tag:'데이터 분석', seconds:420,
      stem:'다음 자료를 바탕으로 한 단락의 글을 쓰세요.',
      passage:'Motivos por los que los coreanos estudian español (encuesta, 1.000 personas)\n· Trabajo / negocios: 2015 — 34 % → 2025 — 46 %\n· Viajes: 2015 — 41 % → 2025 — 29 %\n· Cultura (cine, música, literatura): 2015 — 18 % → 2025 — 21 %\n· Otros: 2015 — 7 % → 2025 — 4 %',
      model:'Los datos muestran un cambio claro en los motivos por los que los coreanos estudian español. En 2015 la razón principal era el viaje, con un cuarenta y uno por ciento, mientras que en 2025 ha pasado al segundo lugar con solo un veintinueve. En cambio, el motivo laboral ha crecido doce puntos y se ha convertido en el más frecuente, con un cuarenta y seis por ciento. El interés cultural sube ligeramente, tres puntos, y el resto de motivos pierde importancia. En resumen, el español se estudia hoy sobre todo por razones profesionales.',
      modelKo:'🇰🇷 ① 전체 경향 선언 → ② 가장 큰 변화 → ③ 반대 방향의 변화 → ④ En resumen 한 문장. 수치는 반드시 포인트 차이로 비교하세요.' },

    { no:9, type:'free', tag:'서신·메모 작성', seconds:420,
      stem:'당신은 온라인으로 구입한 노트북을 받았으나 충전기가 들어 있지 않았고 상자도 일부 파손되어 있었습니다. 판매처에 보낼 항의 서신(80~100단어)을 쓰세요.',
      model:'Estimados señores:\nLes escribo en relación con el pedido n.º 8842, recibido el pasado 12 de marzo. Al abrir la caja comprobé que faltaba el cargador del ordenador y que el embalaje llegó parcialmente roto. Como necesito el equipo para trabajar, les agradecería que me enviaran el cargador con la mayor urgencia posible y que me confirmaran por escrito la fecha de envío. En caso de que no sea posible, solicitaría la devolución del importe.\nQuedo a la espera de su respuesta.\nAtentamente,\nJiwon Kim',
      modelKo:'🇰🇷 서신 채점 요소: 호칭(Estimados señores) · 주문번호 등 구체적 사실 · 요청(agradecería que + 접속법) · 대안 · 맺음말(Atentamente). 다섯 가지를 모두 넣으세요.' },

    { no:10, type:'free', tag:'자유 작문', seconds:900,
      stem:'다음 주제로 150~200단어의 에세이를 쓰세요.\n«¿Es necesario aprender idiomas extranjeros ahora que existen traductores automáticos?»',
      model:'Hoy en día cualquier persona puede traducir un texto en segundos con el móvil, y por eso algunos piensan que estudiar idiomas ya no tiene sentido. En mi opinión, sin embargo, aprender una lengua extranjera sigue siendo necesario.\nEn primer lugar, los traductores automáticos funcionan bien con frases sencillas, pero fallan cuando aparecen ironías, expresiones coloquiales o matices culturales. Quien depende solo de la máquina corre el riesgo de decir exactamente lo contrario de lo que pretendía.\nEn segundo lugar, hablar un idioma no consiste únicamente en transmitir información. Cuando usamos la lengua de nuestro interlocutor, la conversación se vuelve más cercana y se genera una confianza que ninguna aplicación puede crear. En el mundo profesional, esa confianza suele decidir un contrato.\nPor último, estudiar idiomas nos obliga a entender otra forma de pensar y amplía nuestra visión del mundo.\nPor todo ello, creo que los traductores son una herramienta muy útil, pero no un sustituto del aprendizaje.',
      modelKo:'🇰🇷 서론(통념 + 내 입장) → 본론 3단락(각 단락 첫 문장이 주제문) → 결론(입장 재확인). En primer lugar / En segundo lugar / Por último / Por todo ello 연결어를 그대로 활용하세요.' }
  ]
};
window.CH = CH;
