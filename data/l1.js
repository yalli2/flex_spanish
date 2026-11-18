var CH = window.CH || {};
CH.l1 = {
  id:'l1', area:'듣기 Comprensión Auditiva', range:'1–10',
  title:'Parte 1 — 짧은 반응 고르기',
  subtitle:'한두 문장을 듣고 가장 자연스러운 응답을 고릅니다. 배점은 긴 지문과 같은 8점이므로 만점을 목표로 하세요.',
  guide:`
    <h3>이 유형 공략 포인트</h3>
    <ul>
      <li>1~7번은 <b>한 사람의 말</b>에 대한 반응, 8~10번은 <b>두 사람의 대화</b> 뒤에 이어질 반응을 고릅니다.</li>
      <li>핵심 단어 한두 개(시간·장소·감정)를 놓치지 않으면 대부분 풀립니다.</li>
      <li>자주 나오는 상황: 인사 · 소개 · 감사 · 위로 · 사과 · 초대 · 칭찬 · 격려 · 부탁 · 거절 · 허락</li>
      <li>함정: 들린 단어를 그대로 반복하는 선택지(¿Qué hora…? → hora가 들어간 오답)는 대개 오답입니다.</li>
    </ul>
    <div class="tipbox">🎧 먼저 <b>듣기</b>만으로 풀어 보고, 틀린 문항만 <b>스크립트 보기</b>로 확인하세요. 마지막에 느리게 한 번 더 들으면 발음이 귀에 남습니다.</div>`,
  items:[
    { no:1, tag:'인사·안부', audio:'¡Cuánto tiempo sin verte! ¿Qué tal te va en el trabajo nuevo?',
      options:['Sí, el trabajo está en el centro.','Muy bien, la verdad; me tratan de maravilla.','No, todavía no he visto esa película.','Porque salí muy tarde de casa.'],
      answer:1, explain:'안부를 묻는 ¿Qué tal te va...?에는 상태를 알려 주는 답이 와야 합니다. me tratan de maravilla는 "사람들이 아주 잘 대해 준다"는 뜻입니다.',
      vocab:'¡Cuánto tiempo sin verte! 정말 오랜만이야 · de maravilla 아주 훌륭하게' },

    { no:2, tag:'부탁', audio:'¿Te importaría echarme una mano con estas cajas? Pesan bastante.',
      options:['Claro que no, ahora mismo te ayudo.','Sí, me importa mucho el peso.','Es que las cajas están vacías.','Gracias, ya me las han traído.'],
      answer:0, explain:'¿Te importaría...?(~해 주시겠어요?)에 대한 수락은 Claro que no(=꺼리지 않는다, 물론이죠)입니다. Sí로 답하면 "싫다"는 뜻이 되어 어색합니다.',
      vocab:'echar una mano 도와주다 · ¿Te importaría…? 괜찮으시다면 ~해 주실래요?' },

    { no:3, tag:'사과', audio:'Perdona, se me ha olvidado por completo traerte el libro.',
      options:['No pasa nada, me lo das la semana que viene.','Qué bien, entonces ya lo has leído.','Lo siento, no sabía que te gustaba leer.','Sí, el libro cuesta veinte euros.'],
      answer:0, explain:'사과를 받아들이는 전형적 표현이 No pasa nada(괜찮아)입니다. 뒤에 대안을 제시하는 흐름도 자연스럽습니다.',
      vocab:'se me ha olvidado 깜빡했다 · por completo 완전히' },

    { no:4, tag:'제안·초대', audio:'Mañana celebramos el cumpleaños de Marta en casa. ¿Te apuntas?',
      options:['Es que mañana cumplo años yo también.','Encantado, allí estaré sin falta.','No, Marta vive muy cerca de aquí.','Sí, la casa es bastante grande.'],
      answer:1, explain:'¿Te apuntas?는 "너도 낄래?"라는 초대입니다. 수락은 allí estaré(갈게)처럼 참석 여부로 답해야 합니다.',
      vocab:'apuntarse 참가하다 · sin falta 꼭, 빠짐없이' },

    { no:5, tag:'위로', audio:'Me han dicho que no te han dado la beca. Lo siento mucho.',
      options:['Gracias, pero volveré a intentarlo el año que viene.','Sí, la beca empieza en septiembre.','No te preocupes, yo tampoco la pedí.','Claro, el dinero siempre hace falta.'],
      answer:0, explain:'위로를 받으면 감사 + 앞으로의 계획으로 답하는 것이 가장 자연스럽습니다.',
      vocab:'beca 장학금 · volver a + 동사원형 다시 ~하다' },

    { no:6, tag:'거절', audio:'¿Vienes con nosotros al cine esta tarde?',
      options:['Sí, la película dura dos horas.','Me encantaría, pero tengo que estudiar para el examen.','No, el cine está al lado de mi casa.','Porque las entradas son muy baratas.'],
      answer:1, explain:'정중한 거절의 기본형은 Me encantaría, pero…(가고 싶지만 ~해서)입니다. FLEX 듣기에서 가장 자주 출제되는 패턴입니다.',
      vocab:'Me encantaría, pero… 정말 그러고 싶지만…' },

    { no:7, tag:'칭찬', audio:'¡Qué bien te queda esa chaqueta! ¿Es nueva?',
      options:['Gracias, me la regaló mi hermana.','Sí, la tienda cierra a las ocho.','No, la chaqueta no me gusta nada.','Es que hoy hace mucho frío fuera.'],
      answer:0, explain:'칭찬에는 Gracias + 간단한 설명이 정답 패턴입니다. quedar bien a alguien은 "~에게 잘 어울리다".',
      vocab:'quedar bien 잘 어울리다 · regalar 선물하다' },

    { no:8, tag:'대화 뒤 반응', audio:[
        {who:'A:', text:'Oye, ¿sabes si la reunión sigue siendo a las diez?', male:false},
        {who:'B:', text:'La han cambiado; ahora empieza media hora más tarde.', male:true},
        {who:'A:', text:'…', male:false}
      ],
      options:['Entonces nos vemos a las diez y media, ¿no?','Vale, llegaré media hora antes de las nueve.','Es que la reunión fue ayer por la tarde.','Perfecto, así termina a las diez en punto.'],
      answer:0, explain:'10시에서 30분 늦춰졌으므로 10시 30분. 숫자 계산을 요구하는 전형적인 함정 문항입니다.',
      vocab:'media hora más tarde 30분 늦게 · en punto 정각' },

    { no:9, tag:'대화 뒤 반응', audio:[
        {who:'A:', text:'¿Qué tal si quedamos el sábado para preparar la presentación?', male:true},
        {who:'B:', text:'El sábado me viene fatal, estaré fuera de la ciudad.', male:false},
        {who:'A:', text:'…', male:true}
      ],
      options:['Genial, entonces el sábado a las cinco.','Pues lo dejamos para el domingo, si te parece.','No sabía que la presentación era el viernes.','Claro, la ciudad está muy lejos de aquí.'],
      answer:1, explain:'상대가 토요일이 안 된다고 했으므로 다른 날을 제안하는 흐름이 자연스럽습니다. venir fatal = 사정이 아주 안 좋다.',
      vocab:'quedar 만나기로 하다 · venir fatal 형편이 안 되다' },

    { no:10, tag:'대화 뒤 반응', audio:[
        {who:'A:', text:'He llamado tres veces al servicio técnico y nadie contesta.', male:false},
        {who:'B:', text:'Prueba a escribirles un correo; suelen responder el mismo día.', male:true},
        {who:'A:', text:'…', male:false}
      ],
      options:['Buena idea, les escribo ahora mismo.','Sí, el teléfono funciona perfectamente.','Es que no tengo ningún problema con el aparato.','Gracias, ya han venido a repararlo.'],
      answer:0, explain:'조언을 받아들이는 Buena idea + 즉시 실행이 가장 자연스러운 반응입니다.',
      vocab:'servicio técnico A/S센터 · probar a + 동사원형 ~해 보다' },

    { no:11, tag:'허락 요청', audio:'¿Le molesta si abro un poco la ventana? Hace bastante calor aquí dentro.',
      options:['En absoluto, ábrala cuando quiera.','Sí, la ventana está rota desde ayer.','Gracias, prefiero el aire acondicionado apagado.','Porque el calor llega en verano.'],
      answer:0, explain:'¿Le molesta si…?에 대한 허락은 En absoluto(전혀 아닙니다) 또는 Claro que no입니다. 긍정으로 Sí라고 하면 거절이 됩니다.',
      vocab:'molestar 불편하게 하다 · en absoluto 전혀 아니다' },

    { no:12, tag:'격려', audio:'Llevo toda la semana preparando la entrevista y estoy muy nervioso.',
      options:['Tranquilo, lo vas a hacer fenomenal.','Sí, las entrevistas duran una semana.','No te preocupes, yo no voy a ir.','Claro, es que los nervios no existen.'],
      answer:0, explain:'긴장을 털어놓는 말에는 Tranquilo / Ánimo / Seguro que te sale bien 같은 격려 표현이 짝을 이룹니다.',
      vocab:'estar nervioso 긴장하다 · fenomenal 아주 훌륭하게' }
  ]
};
window.CH = CH;
