var CH = window.CH || {};
CH.l3 = {
  id:'l3', area:'듣기 Comprensión Auditiva', range:'31–50',
  title:'Parte 3 — 담화·뉴스·강의 듣기',
  subtitle:'시사 뉴스, 음성 메시지, 발표, 회의·세미나 등 긴 담화를 듣고 내용을 파악합니다.',
  guide:`
    <h3>이 유형 공략 포인트</h3>
    <ul>
      <li>생활언어 + 원어수학 + 실무언어를 모두 평가하는 구간이라 주제 폭이 가장 넓습니다.</li>
      <li>담화는 대부분 <b>도입(주제 제시) → 전개(근거·수치) → 마무리(결론·요청)</b> 구조입니다. 마지막 문장에 화자의 의도가 들어 있습니다.</li>
      <li>숫자(비율·날짜·금액)는 들리는 즉시 메모하세요. 세부 정보 문항의 90%가 여기서 나옵니다.</li>
      <li>받아쓰기(dictación) 연습이 가장 효과적입니다. 스크립트를 열기 전에 반드시 두 번 들어 보세요.</li>
    </ul>`,
  items:[
    { no:31, tag:'시사 뉴스', audio:'El ayuntamiento ha anunciado esta mañana que el carril bici del paseo central se ampliará en cuatro kilómetros antes del verano. Según los datos municipales, el uso de la bicicleta ha crecido un treinta por ciento en los dos últimos años, sobre todo entre los menores de treinta y cinco años. La obra comenzará en abril y, durante dos meses, uno de los carriles para coches permanecerá cerrado al tráfico.',
      stem:'¿Cuál es la noticia principal?',
      options:['El cierre definitivo del paseo central al tráfico.','La ampliación del carril bici de la ciudad.','La prohibición de circular en bicicleta por el centro.','El aumento del precio del transporte público.'],
      answer:1, explain:'첫 문장이 주제문입니다: 자전거 도로를 4km 연장한다. 차로 폐쇄는 공사 기간의 부수 정보입니다.',
      vocab:'carril bici 자전거 도로 · ampliar 확장하다 · ayuntamiento 시청' },

    { no:32, tag:'시사 뉴스 (세부)', audio:'El ayuntamiento ha anunciado esta mañana que el carril bici del paseo central se ampliará en cuatro kilómetros antes del verano. Según los datos municipales, el uso de la bicicleta ha crecido un treinta por ciento en los dos últimos años, sobre todo entre los menores de treinta y cinco años. La obra comenzará en abril y, durante dos meses, uno de los carriles para coches permanecerá cerrado al tráfico.',
      stem:'Según la noticia, ¿cuánto ha aumentado el uso de la bicicleta?',
      options:['Un cuatro por ciento.','Un treinta por ciento.','Un treinta y cinco por ciento.','Un sesenta por ciento.'],
      answer:1, explain:'30%입니다. treinta y cinco는 "35세 미만"이라는 연령이므로 혼동하지 마세요.',
      vocab:'crecer 증가하다 · menores de ~세 미만' },

    { no:33, tag:'음성 메시지', audio:'Hola, Marta, soy Álvaro. Te llamo porque el cliente ha adelantado la visita: en vez del jueves, vendrá el miércoles a las once. Necesito que me envíes el presupuesto actualizado antes del martes por la tarde para poder imprimirlo. Si tienes algún problema con la fecha, llámame al móvil; estaré reunido hasta las cinco, así que mejor después de esa hora.',
      stem:'¿Qué le pide Álvaro a Marta?',
      options:['Que reserve una sala para el miércoles.','Que le envíe el presupuesto antes del martes por la tarde.','Que llame al cliente para cambiar la cita.','Que imprima el contrato el jueves.'],
      answer:1, explain:'Necesito que me envíes el presupuesto actualizado antes del martes por la tarde — 요청 문장이 명확합니다.',
      vocab:'adelantar 앞당기다 · presupuesto 견적서 · estar reunido 회의 중이다' },

    { no:34, tag:'음성 메시지 (세부)', audio:'Hola, Marta, soy Álvaro. Te llamo porque el cliente ha adelantado la visita: en vez del jueves, vendrá el miércoles a las once. Necesito que me envíes el presupuesto actualizado antes del martes por la tarde para poder imprimirlo. Si tienes algún problema con la fecha, llámame al móvil; estaré reunido hasta las cinco, así que mejor después de esa hora.',
      stem:'¿Cuándo conviene llamar a Álvaro?',
      options:['Antes de las cinco.','Después de las cinco.','El jueves por la mañana.','A las once del miércoles.'],
      answer:1, explain:'5시까지 회의 중이므로 그 이후가 낫다고 직접 말합니다.',
      vocab:'conviene ~하는 편이 낫다 · mejor después de ~ 이후가 낫다' },

    { no:35, tag:'원어 강의', audio:'Hoy vamos a ocuparnos de un fenómeno que afecta a casi todas las lenguas del mundo: el préstamo léxico. Cuando dos comunidades mantienen contacto comercial o cultural, las palabras viajan de una lengua a otra con una facilidad sorprendente. El español, por ejemplo, incorporó centenares de términos del árabe durante la Edad Media, y hoy sigue incorporando voces del inglés en los campos de la tecnología y el deporte. Lo interesante no es que el préstamo ocurra, sino cómo la lengua receptora lo adapta a su propio sistema de sonidos.',
      stem:'¿Cuál es el tema central de la clase?',
      options:['La historia política de la Edad Media.','La desaparición de las lenguas minoritarias.','La incorporación de palabras de otras lenguas.','La enseñanza del inglés en las escuelas.'],
      answer:2, explain:'핵심어는 préstamo léxico(어휘 차용)입니다. 예시(아랍어·영어)는 근거일 뿐 주제가 아닙니다.',
      vocab:'préstamo léxico 어휘 차용 · lengua receptora 수용 언어 · adaptar 적응시키다' },

    { no:36, tag:'원어 강의 (세부)', audio:'Hoy vamos a ocuparnos de un fenómeno que afecta a casi todas las lenguas del mundo: el préstamo léxico. Cuando dos comunidades mantienen contacto comercial o cultural, las palabras viajan de una lengua a otra con una facilidad sorprendente. El español, por ejemplo, incorporó centenares de términos del árabe durante la Edad Media, y hoy sigue incorporando voces del inglés en los campos de la tecnología y el deporte. Lo interesante no es que el préstamo ocurra, sino cómo la lengua receptora lo adapta a su propio sistema de sonidos.',
      stem:'Según el profesor, ¿qué resulta más interesante?',
      options:['Que las lenguas se presten palabras.','La cantidad de términos árabes del español.','La forma en que la lengua que recibe adapta la palabra.','El contacto comercial entre comunidades.'],
      answer:2, explain:'마지막 문장 Lo interesante no es… sino cómo… lo adapta에 답이 있습니다. no es A sino B 구문을 반드시 잡아야 합니다.',
      vocab:'no… sino… ~가 아니라 ~이다 · sistema de sonidos 음운 체계' },

    { no:37, tag:'회의', audio:'Antes de cerrar la reunión, resumo los tres acuerdos. Primero: el lanzamiento se retrasa dos semanas para incluir las mejoras que pidió el departamento de calidad. Segundo: el equipo de diseño entregará la versión definitiva del envase el día quince. Y tercero, y esto es lo más importante, nadie comunicará la nueva fecha a los distribuidores hasta que la dirección lo confirme por escrito.',
      stem:'¿Qué NO deben hacer los asistentes?',
      options:['Entregar el envase el día quince.','Incluir las mejoras de calidad.','Informar a los distribuidores de la nueva fecha.','Retrasar el lanzamiento dos semanas.'],
      answer:2, explain:'세 번째 합의 사항이 금지 사항입니다: 경영진의 서면 확인 전까지 유통업체에 알리지 말 것.',
      vocab:'lanzamiento 출시 · envase 포장 · por escrito 서면으로' },

    { no:38, tag:'발표', audio:'Los resultados de la encuesta nos han sorprendido. Esperábamos que el precio fuera el factor decisivo para nuestros clientes, pero solo el veinte por ciento lo menciona en primer lugar. La mayoría, un cincuenta y cinco por ciento, valora sobre todo la rapidez de la entrega, y un veinticinco por ciento, la atención posventa. Por tanto, la próxima campaña debería centrarse en el plazo de envío y no tanto en las ofertas.',
      stem:'¿Qué valoran más los clientes?',
      options:['El precio del producto.','La rapidez de la entrega.','La atención posventa.','La variedad de ofertas.'],
      answer:1, explain:'55%가 배송 속도를 가장 중시한다고 했습니다. 수치 비교형 문항은 가장 큰 숫자에 집중하세요.',
      vocab:'encuesta 설문조사 · entrega 배송 · posventa 애프터서비스' },

    { no:39, tag:'발표 (의도)', audio:'Los resultados de la encuesta nos han sorprendido. Esperábamos que el precio fuera el factor decisivo para nuestros clientes, pero solo el veinte por ciento lo menciona en primer lugar. La mayoría, un cincuenta y cinco por ciento, valora sobre todo la rapidez de la entrega, y un veinticinco por ciento, la atención posventa. Por tanto, la próxima campaña debería centrarse en el plazo de envío y no tanto en las ofertas.',
      stem:'¿Qué propone el ponente para la próxima campaña?',
      options:['Bajar los precios de forma general.','Destacar el plazo de envío.','Ampliar el servicio posventa.','Repetir la encuesta el año próximo.'],
      answer:1, explain:'Por tanto로 시작하는 마지막 문장이 제안입니다: 배송 기한을 내세우고 할인은 줄이자.',
      vocab:'ponente 발표자 · centrarse en ~에 집중하다 · plazo de envío 배송 기한' },

    { no:40, tag:'안내 방송', audio:'Atención, señores pasajeros. Debido a las condiciones meteorológicas en el aeropuerto de destino, el vuelo con dirección a Bogotá sufrirá un retraso aproximado de hora y media. El embarque comenzará por la puerta B doce en lugar de la A ocho anunciada anteriormente. Los pasajeros con conexión posterior pueden dirigirse al mostrador de atención, donde se les reubicará sin ningún coste adicional.',
      stem:'¿Cuál de las siguientes afirmaciones es correcta?',
      options:['El vuelo ha sido cancelado por el mal tiempo.','El embarque se hará por una puerta distinta.','Los pasajeros deben pagar por el cambio de vuelo.','El retraso será de media hora.'],
      answer:1, explain:'B12로 탑승구가 변경되었습니다. 취소가 아니라 지연(1시간 30분)이며 재배정은 무료입니다.',
      vocab:'retraso 지연 · embarque 탑승 · reubicar 재배정하다 · sin coste adicional 추가 비용 없이' }
  ]
};
window.CH = CH;
