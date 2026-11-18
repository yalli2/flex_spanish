var CH = window.CH || {};
CH.l2 = {
  id:'l2', area:'듣기 Comprensión Auditiva', range:'11–30',
  title:'Parte 2 — 두 사람의 대화 이해',
  subtitle:'짧은 대화를 듣고 장소·관계·주제·다음 행동·갈등의 원인을 추론합니다.',
  guide:`
    <h3>이 유형 공략 포인트</h3>
    <ul>
      <li>정답 단서는 대화의 <b>첫 문장(상황 설정)</b>과 <b>마지막 문장(결론·다음 행동)</b>에 집중됩니다.</li>
      <li>자주 나오는 질문 형태를 통째로 익혀 두세요.
        <br>¿De qué trata el diálogo? / ¿Dónde están el hombre y la mujer? / ¿Qué van a hacer? /
        ¿Qué relación tienen? / ¿Cuál de las siguientes afirmaciones es correcta?</li>
      <li>장소·직업을 직접 말해 주지 않습니다. <b>핵심 어휘</b>(receta, talla, factura, andén…)로 추론해야 합니다.</li>
    </ul>
    <div class="tipbox">🎧 1차: 듣기만 → 2차: 질문을 보고 다시 듣기 → 3차: 스크립트로 확인. 이 3단계가 가장 효율적입니다.</div>`,
  items:[
    { no:11, tag:'장소 추론', audio:[
        {who:'Mujer:', text:'Buenos días. Vengo a recoger lo que me recetó el médico ayer.', male:false},
        {who:'Hombre:', text:'A ver… Sí, aquí está. Son dos comprimidos al día, uno después de cada comida principal.', male:true},
        {who:'Mujer:', text:'¿Y puedo tomarlo con el jarabe que ya estoy tomando?', male:false},
        {who:'Hombre:', text:'Sin problema, pero deje al menos dos horas entre uno y otro.', male:true}
      ],
      stem:'¿Dónde están el hombre y la mujer?',
      options:['En una farmacia.','En la consulta de un médico.','En un supermercado.','En un laboratorio de análisis.'],
      answer:0, explain:'recetar(처방하다)한 약을 "받으러 왔다"고 했고 복용법을 설명받고 있습니다. 진료가 아니라 수령이므로 약국입니다.',
      vocab:'receta 처방전 · comprimido 알약 · jarabe 시럽약' },

    { no:12, tag:'관계 추론', audio:[
        {who:'Hombre:', text:'Profesora, ¿podría entregarle el trabajo el lunes en vez del viernes?', male:true},
        {who:'Mujer:', text:'¿Y eso? El plazo lo pusimos entre todos a principio de curso.', male:false},
        {who:'Hombre:', text:'Lo sé, pero esa semana tengo dos exámenes finales seguidos.', male:true},
        {who:'Mujer:', text:'Está bien, pero que sea el lunes a primera hora, sin excusas.', male:false}
      ],
      stem:'¿Qué relación tienen los dos?',
      options:['Son compañeros de trabajo.','Son profesora y alumno.','Son madre e hijo.','Son vecinos.'],
      answer:1, explain:'Profesora라는 호칭, entregar el trabajo(과제 제출), plazo(기한), exámenes finales로 대학 수업 상황임이 분명합니다.',
      vocab:'plazo 기한 · entregar 제출하다 · a primera hora 아침 일찍' },

    { no:13, tag:'다음 행동', audio:[
        {who:'Mujer:', text:'El tren de las nueve sale del andén cinco, pero acaban de anunciar un retraso.', male:false},
        {who:'Hombre:', text:'¿Cuánto tiempo? Si es mucho, podemos devolver los billetes.', male:true},
        {who:'Mujer:', text:'Cuarenta minutos. Mejor nos tomamos un café ahí enfrente y volvemos.', male:false},
        {who:'Hombre:', text:'Vale, pero yo me quedo con las maletas vigiladas.', male:true}
      ],
      stem:'¿Qué van a hacer ahora?',
      options:['Devolver los billetes del tren.','Cambiar de andén.','Tomar algo mientras esperan.','Subir al tren inmediatamente.'],
      answer:2, explain:'마지막 결론이 "커피를 마시고 오자"입니다. 환불(devolver)은 언급만 되고 실행되지 않았습니다 — 전형적인 함정입니다.',
      vocab:'andén 승강장 · retraso 연착 · vigilar 지키다' },

    { no:14, tag:'주제 파악', audio:[
        {who:'Hombre:', text:'¿Has visto la factura de la luz de este mes? Ha subido casi el doble.', male:true},
        {who:'Mujer:', text:'Será por la calefacción; la hemos tenido encendida día y noche.', male:false},
        {who:'Hombre:', text:'Pues habrá que bajarla un par de grados y ponernos un jersey.', male:true},
        {who:'Mujer:', text:'De acuerdo. Y por la noche la apagamos del todo.', male:false}
      ],
      stem:'¿De qué trata el diálogo?',
      options:['De una mudanza a otra casa.','Del aumento del gasto de electricidad.','De la compra de una calefacción nueva.','De un problema con el casero.'],
      answer:1, explain:'전기 요금(factura de la luz)이 두 배로 올랐고, 난방 사용을 줄이자는 해결책으로 이어집니다.',
      vocab:'factura 청구서 · calefacción 난방 · del todo 완전히' },

    { no:15, tag:'갈등의 원인', audio:[
        {who:'Mujer:', text:'Te pedí que me avisaras si ibas a llegar tarde. Llevo una hora esperando.', male:false},
        {who:'Hombre:', text:'Se me quedó el móvil sin batería en el metro, de verdad.', male:true},
        {who:'Mujer:', text:'Siempre tienes una excusa distinta.', male:false},
        {who:'Hombre:', text:'Tienes razón, debí llamarte desde el trabajo antes de salir.', male:true}
      ],
      stem:'¿Por qué está enfadada la mujer?',
      options:['Porque el hombre perdió el móvil.','Porque el hombre no la avisó de su retraso.','Porque el hombre no quiso ir en metro.','Porque el hombre salió pronto del trabajo.'],
      answer:1, explain:'첫 문장에 이유가 그대로 나옵니다. "늦으면 알려 달라고 했는데 한 시간째 기다린다."',
      vocab:'avisar 알리다 · excusa 핑계 · debí + 원형 ~했어야 했다' },

    { no:16, tag:'장소 추론', audio:[
        {who:'Hombre:', text:'Me llevo esta camisa, pero la talla M me queda un poco estrecha.', male:true},
        {who:'Mujer:', text:'Le traigo una L. Si no le convence, puede cambiarla en quince días con el ticket.', male:false},
        {who:'Hombre:', text:'Perfecto. ¿Aceptan tarjeta?', male:true},
        {who:'Mujer:', text:'Por supuesto. Pase por caja cuando quiera.', male:false}
      ],
      stem:'¿Dónde tiene lugar la conversación?',
      options:['En una tienda de ropa.','En una lavandería.','En una oficina de correos.','En un taller de costura.'],
      answer:0, explain:'talla(사이즈), probar, cambiar con el ticket, pasar por caja는 모두 의류 매장의 전형적 어휘입니다.',
      vocab:'talla 사이즈 · estrecho 꽉 끼는 · caja 계산대' },

    { no:17, tag:'일치하는 내용', audio:[
        {who:'Mujer:', text:'¿Al final te quedas en el piso del centro?', male:false},
        {who:'Hombre:', text:'No, al final me mudo a las afueras. Es más barato y tengo una habitación más.', male:true},
        {who:'Mujer:', text:'Pero tardarás más en llegar al trabajo, ¿no?', male:false},
        {who:'Hombre:', text:'Unos veinte minutos más, sí. Lo compenso con el alquiler que me ahorro.', male:true}
      ],
      stem:'¿Cuál de las siguientes afirmaciones es correcta?',
      options:['El hombre se queda en el centro de la ciudad.','El piso de las afueras es más caro.','El hombre tardará más en ir al trabajo.','El nuevo piso tiene menos habitaciones.'],
      answer:2, explain:'본인이 veinte minutos más라고 직접 인정합니다. 나머지는 모두 들린 내용과 반대입니다.',
      vocab:'mudarse 이사하다 · afueras 외곽 · alquiler 임대료' },

    { no:18, tag:'직업 추론', audio:[
        {who:'Hombre:', text:'Buenas tardes. ¿Ha reservado mesa?', male:true},
        {who:'Mujer:', text:'Sí, a nombre de Herrera, para dos personas.', male:false},
        {who:'Hombre:', text:'Aquí está. ¿Prefieren dentro o en la terraza?', male:true},
        {who:'Mujer:', text:'En la terraza, si no hace demasiado viento.', male:false}
      ],
      stem:'¿Cuál es la profesión del hombre?',
      options:['Recepcionista de hotel.','Camarero de un restaurante.','Guía turístico.','Taxista.'],
      answer:1, explain:'reservar mesa(테이블 예약)와 terraza는 식당 상황입니다. 호텔이면 habitación이 나왔을 것입니다.',
      vocab:'reservar 예약하다 · a nombre de ~의 이름으로' },

    { no:19, tag:'의도 파악', audio:[
        {who:'Mujer:', text:'Señor López, el informe que me pasó ayer tiene los datos del trimestre anterior.', male:false},
        {who:'Hombre:', text:'¿Está segura? Lo descargué de la carpeta compartida.', male:true},
        {who:'Mujer:', text:'Sí, mire la fecha de la portada. Habrá que rehacerlo antes de la reunión.', male:false},
        {who:'Hombre:', text:'Me pongo con ello ahora mismo. A las doce lo tiene en su correo.', male:true}
      ],
      stem:'¿Qué va a hacer el hombre?',
      options:['Cancelar la reunión del mediodía.','Actualizar el informe con los datos correctos.','Pedir los datos a otro departamento.','Imprimir la portada del informe.'],
      answer:1, explain:'rehacerlo(다시 작성하다)에 대해 "지금 바로 하겠다, 12시까지 메일로 보내겠다"고 답합니다.',
      vocab:'informe 보고서 · trimestre 분기 · ponerse con algo ~에 착수하다' },

    { no:20, tag:'추론', audio:[
        {who:'Hombre:', text:'¿Qué te ha parecido el curso de contabilidad?', male:true},
        {who:'Mujer:', text:'El contenido muy útil, pero el horario imposible: de siete a diez de la noche.', male:false},
        {who:'Hombre:', text:'¿Lo vas a dejar entonces?', male:true},
        {who:'Mujer:', text:'No, voy a pedir el cambio al grupo de los sábados por la mañana.', male:false}
      ],
      stem:'¿Qué decide hacer la mujer?',
      options:['Abandonar el curso.','Repetir el curso el año que viene.','Cambiarse a otro horario.','Quejarse del contenido del curso.'],
      answer:2, explain:'내용에는 만족하지만 시간이 문제여서 토요일 반으로 옮기겠다고 합니다. dejar(그만두다)는 질문으로만 나왔습니다.',
      vocab:'contabilidad 회계 · dejar un curso 수강을 그만두다' },

    { no:21, tag:'세부 정보', audio:[
        {who:'Mujer:', text:'¿Sabes a qué hora abre la biblioteca los domingos?', male:false},
        {who:'Hombre:', text:'Entre semana a las ocho, pero los fines de semana no abre hasta las diez.', male:true},
        {who:'Mujer:', text:'¿Y cierra a la misma hora?', male:false},
        {who:'Hombre:', text:'No, los domingos cierra dos horas antes, a las ocho de la tarde.', male:true}
      ],
      stem:'¿A qué hora abre la biblioteca el domingo?',
      options:['A las ocho de la mañana.','A las diez de la mañana.','A las ocho de la tarde.','A las dos de la tarde.'],
      answer:1, explain:'주중 8시, 주말 10시 개관. 들린 숫자 ocho를 그대로 고르면 오답이 되는 전형적 함정입니다.',
      vocab:'entre semana 주중에 · no… hasta ~가 되어야 비로소' },

    { no:22, tag:'문제 상황', audio:[
        {who:'Hombre:', text:'Mi maleta no ha salido por la cinta y el vuelo llegó hace media hora.', male:true},
        {who:'Mujer:', text:'Déme su tarjeta de embarque, por favor. Voy a rastrearla en el sistema.', male:false},
        {who:'Hombre:', text:'Aquí tiene. ¿Y si aparece mañana? Me alojo en un hotel del centro.', male:true},
        {who:'Mujer:', text:'Se la llevamos al hotel sin coste alguno. Rellene este formulario con la dirección.', male:false}
      ],
      stem:'¿Cuál es el problema del hombre?',
      options:['Ha perdido su vuelo.','Su equipaje no ha aparecido.','No encuentra su hotel.','Le han cobrado de más por la maleta.'],
      answer:1, explain:'공항 수하물 벨트(cinta)에서 가방이 나오지 않았습니다. 뒤에 배송 약속까지 이어집니다.',
      vocab:'cinta (수하물) 컨베이어 · tarjeta de embarque 탑승권 · rellenar 작성하다' }
  ]
};
window.CH = CH;
