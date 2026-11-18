var CH = window.CH || {};

var M_TEXTO = 'El Ayuntamiento de Zaragoza ha puesto en marcha un programa para recuperar las azoteas de los edificios públicos y convertirlas en huertos urbanos. La iniciativa, que empezó con tres colegios, se ha extendido ya a once centros y a dos bibliotecas. Los responsables explican que el objetivo no es producir alimentos a gran escala, sino enseñar a los alumnos de dónde viene lo que comen y reducir unos grados la temperatura del edificio en verano. Las familias que quieran participar deberán apuntarse antes del 30 de abril en la web municipal; las plazas se asignarán por orden de inscripción y no se aceptarán solicitudes presenciales.';

CH.mock = {
  id:'mock', area:'실전 모의고사',
  title:'실전 미니 모의고사 (듣기 10 + 읽기 15)',
  subtitle:'실제 시험 순서대로 구성했습니다. 시계를 보고 20분 안에 끝내 보세요.',
  guide:`
    <h3>시작 전 확인</h3>
    <ul>
      <li>듣기 10문항은 <b>한 번만</b> 듣고 푸는 것을 원칙으로 하세요. 느리게 듣기는 채점 후에.</li>
      <li>읽기 15문항 목표 시간은 <b>13분</b>입니다. 한 문항에 40초 이상 쓰지 마세요.</li>
      <li>모두 풀면 하단에 점수와 정답률이 자동으로 표시되고, 메인 화면 카드에 기록이 남습니다.</li>
    </ul>
    <div class="tipbox">⏱ 실제 시험은 읽기 90문항 90분, 듣기 50문항 30분입니다. 이 미니 테스트의 목표 시간(20분)은 같은 속도로 환산한 값입니다.</div>`,
  items:[
    /* ---------- 듣기 ---------- */
    { no:1, tag:'듣기 Parte 1', audio:'Se me ha estropeado el ordenador justo el día antes de la entrega.',
      options:['Qué mala suerte, ¿has podido recuperar los archivos?','Enhorabuena por la entrega.','Sí, el ordenador es nuevo.','Porque mañana es jueves.'], answer:0,
      explain:'악재를 털어놓는 말에는 공감(Qué mala suerte) + 후속 질문이 자연스럽습니다.' },

    { no:2, tag:'듣기 Parte 1', audio:'¿Le importaría cambiarme el asiento? Viajo con un niño pequeño.',
      options:['Sí, me importa el niño.','En absoluto, siéntese usted aquí.','No, el avión sale a las seis.','Gracias, ya he facturado.'], answer:1,
      explain:'¿Le importaría…?에 대한 승낙은 En absoluto / Claro que no입니다.' },

    { no:3, tag:'듣기 Parte 1', audio:'Enhorabuena, me han dicho que te han ascendido.',
      options:['Gracias, todavía no me lo creo.','Lo siento mucho, de verdad.','Sí, el ascensor está estropeado.','No, no conozco a tu jefe.'], answer:0,
      explain:'축하(Enhorabuena)에는 감사 + 솔직한 반응. ascender(승진시키다)와 ascensor(엘리베이터)의 함정에 주의하세요.' },

    { no:4, tag:'듣기 Parte 2', audio:[
        {who:'Mujer:', text:'¿Has visto que han cerrado la cafetería de la esquina?', male:false},
        {who:'Hombre:', text:'Sí, dicen que abren otra vez en junio, después de la reforma.', male:true},
        {who:'Mujer:', text:'Menos mal. Es donde quedo con mis compañeros todos los jueves.', male:false},
        {who:'Hombre:', text:'Pues hasta entonces tendréis que buscar otro sitio.', male:true}
      ],
      stem:'¿Qué pasa con la cafetería?',
      options:['Ha cerrado para siempre.','Está cerrada temporalmente por obras.','Ha cambiado de dueño.','Solo abre los jueves.'], answer:1,
      explain:'después de la reforma, 6월 재개장 — 공사로 인한 일시 휴업입니다.' },

    { no:5, tag:'듣기 Parte 2', audio:[
        {who:'Hombre:', text:'Señorita, ¿este billete sirve también para el tranvía?', male:true},
        {who:'Mujer:', text:'Sí, pero solo durante los noventa minutos siguientes a la primera validación.', male:false},
        {who:'Hombre:', text:'¿Y si tardo más? Quiero parar a comer por el camino.', male:true},
        {who:'Mujer:', text:'Entonces le conviene el bono de un día, que son cinco euros.', male:false}
      ],
      stem:'¿Qué le recomienda la mujer?',
      options:['Comprar un billete sencillo.','Validar el billete dos veces.','Comprar un bono para todo el día.','Ir andando hasta el restaurante.'], answer:2,
      explain:'90분을 넘길 상황이므로 le conviene el bono de un día.' },

    { no:6, tag:'듣기 Parte 2', audio:[
        {who:'Mujer:', text:'Te noto preocupado desde la reunión de esta mañana.', male:false},
        {who:'Hombre:', text:'Es que me han pedido que presente el proyecto yo solo el viernes.', male:true},
        {who:'Mujer:', text:'¿Y Álvaro? Él lleva la parte técnica, ¿no?', male:false},
        {who:'Hombre:', text:'Estará de baja hasta el mes que viene, así que me toca a mí.', male:true}
      ],
      stem:'¿Por qué está preocupado el hombre?',
      options:['Porque la reunión se ha cancelado.','Porque tendrá que presentar el proyecto sin su compañero.','Porque no entiende la parte técnica de Álvaro.','Porque el viernes estará de baja.'], answer:1,
      explain:'동료가 병가 중이라 혼자 발표해야 하는 상황입니다. me toca a mí = 내 차례다.' },

    { no:7, tag:'듣기 Parte 3', audio:'Les recordamos que la sala de lectura permanecerá cerrada el próximo martes por tareas de mantenimiento. Los usuarios que tengan libros prestados con fecha de devolución ese día podrán entregarlos el miércoles sin ningún recargo. El servicio de préstamo en línea seguirá funcionando con normalidad y los pedidos realizados el lunes se recogerán a partir del jueves en el mostrador de la planta baja.',
      stem:'¿Qué pueden hacer los usuarios con los libros que vencen el martes?',
      options:['Devolverlos el miércoles sin penalización.','Pagar un recargo del diez por ciento.','Entregarlos en otra biblioteca.','Renovarlos solo por teléfono.'], answer:0,
      explain:'podrán entregarlos el miércoles sin ningún recargo.' },

    { no:8, tag:'듣기 Parte 3', audio:'Les recordamos que la sala de lectura permanecerá cerrada el próximo martes por tareas de mantenimiento. Los usuarios que tengan libros prestados con fecha de devolución ese día podrán entregarlos el miércoles sin ningún recargo. El servicio de préstamo en línea seguirá funcionando con normalidad y los pedidos realizados el lunes se recogerán a partir del jueves en el mostrador de la planta baja.',
      stem:'¿Cuándo se podrán recoger los pedidos hechos el lunes?',
      options:['El mismo lunes.','El martes.','El miércoles.','A partir del jueves.'], answer:3,
      explain:'se recogerán a partir del jueves — 날짜 네 개가 모두 등장하는 전형적 함정 문항입니다.' },

    { no:9, tag:'듣기 Parte 3', audio:'Buenas tardes a todos. Antes de pasar a las preguntas, quisiera insistir en una idea: el error más común de quien empieza a invertir no es elegir mal un producto, sino no entender el riesgo que asume. Un producto rentable para un inversor con treinta años por delante puede ser completamente inadecuado para alguien que necesita el dinero dentro de dos. Por eso, antes de mirar la rentabilidad, conviene preguntarse cuándo se va a necesitar ese dinero.',
      stem:'¿Cuál es la idea principal del ponente?',
      options:['Hay que elegir siempre los productos más rentables.','Lo esencial es saber cuándo se necesitará el dinero.','Invertir es peligroso para todo el mundo.','Los jóvenes no deberían invertir.'], answer:1,
      explain:'Por eso로 시작하는 마지막 문장이 결론입니다: 수익률보다 자금이 필요한 시점이 먼저다.' },

    { no:10, tag:'듣기 Parte 3', audio:'Según el último informe del instituto meteorológico, el pasado mes de octubre fue el segundo más cálido desde que existen registros, con una temperatura media de dos grados por encima de lo habitual. Las lluvias, en cambio, se quedaron un cuarenta por ciento por debajo de la media, lo que agrava la situación de los embalses del sur. Los expertos no descartan restricciones en el riego agrícola si la primavera vuelve a ser seca.',
      stem:'¿Cuál de las siguientes afirmaciones es correcta?',
      options:['Octubre fue el mes más cálido de la historia.','Llovió más de lo normal en octubre.','Podría haber restricciones de riego si no llueve en primavera.','Los embalses del sur están completamente llenos.'], answer:2,
      explain:'no descartan restricciones en el riego si la primavera vuelve a ser seca. 1번은 "두 번째"이므로 오답입니다.' },

    /* ---------- 읽기 ---------- */
    { no:11, tag:'읽기 1부', stem:'Me molesta mucho __________ la gente hable por teléfono en el cine.',
      options:['que','de que','lo que','si'], answer:0,
      explain:'molestar + que + 접속법. 감정 표현 뒤의 종속절은 que로 연결합니다.' },

    { no:12, tag:'읽기 1부', stem:'Lleva dos semanas __________ un piso cerca de la universidad.',
      options:['buscar','buscando','buscado','que busca'], answer:1,
      explain:'llevar + 기간 + 현재분사(gerundio) = ~한 지 …되다.' },

    { no:13, tag:'읽기 1부', stem:'El examen fue __________ difícil que casi nadie lo aprobó.',
      options:['muy','tanto','tan','tal'], answer:2,
      explain:'tan + 형용사 + que = 너무 ~해서 …하다.' },

    { no:14, tag:'읽기 1부', stem:'Necesitamos a alguien que __________ manejar el programa de contabilidad.',
      options:['sabe','sepa','sabrá','supo'], answer:1,
      explain:'alguien(불특정)을 수식하므로 접속법 sepa.' },

    { no:15, tag:'읽기 1부', stem:'La reunión se ha aplazado __________ la ausencia del director.',
      options:['por','para','a causa','según'], answer:0,
      explain:'원인은 por + 명사. a causa는 a causa de로 써야 합니다.' },

    { no:16, tag:'읽기 2부', stem:'No pude ir a la fiesta porque me surgió un imprevisto.',
      options:['No fui a la fiesta porque me apeteció quedarme en casa.','Algo inesperado me impidió asistir a la fiesta.','Fui a la fiesta aunque tenía otros planes.','La fiesta se canceló por un imprevisto.'], answer:1,
      explain:'surgir un imprevisto = 예상치 못한 일이 생기다 → algo inesperado me impidió asistir.' },

    { no:17, tag:'읽기 2부', stem:'Me da igual que vayamos el sábado o el domingo.',
      options:['Prefiero claramente el domingo.','No quiero ir ni el sábado ni el domingo.','Cualquiera de los dos días me parece bien.','Solo puedo ir el sábado.'], answer:2,
      explain:'dar igual = 상관없다 → 둘 중 어느 날이든 괜찮다.' },

    { no:18, tag:'읽기 3부', stem:'Las negociaciones siguen __________ : __estancadas__ desde hace meses.',
      options:['avanzadas','paralizadas','resueltas','iniciadas'], answer:1,
      explain:'estancado = 정체된 → paralizado.' },

    { no:19, tag:'읽기 3부', stem:'Su explicación me pareció bastante __escueta__.',
      options:['breve','larga','confusa','apasionada'], answer:0,
      explain:'escueto = 간결한, 군더더기 없는 → breve.' },

    { no:20, tag:'읽기 4부', stem:'El director prefirió __dejar el tema de lado__ hasta la próxima reunión.',
      options:['resolverlo enseguida','aplazarlo','discutirlo con todos','votarlo en secreto'], answer:1,
      explain:'dejar algo de lado = 일단 제쳐 두다 → aplazar.' },

    { no:21, tag:'읽기 5부', stem:'Es necesario que el informe ① __esté__ listo antes del lunes, porque ② __habrá__ que enviarlo a los socios que ③ __quieren__ invertir y que todavía ④ __no han__ recibido los datos.',
      options:['① esté','② habrá','③ quieren','④ no han'], answer:2,
      explain:'누구인지 특정되지 않은 socios를 수식하므로 접속법 quieran이 맞습니다.' },

    { no:22, tag:'읽기 6부', stem:'문법적으로 올바르지 <b>않은</b> 문장을 고르세요.',
      options:['Me duele mucho la cabeza desde ayer.','A nosotros nos gusta mucho ese restaurante.','Yo gusto el chocolate con churros.','¿Te apetece tomar algo después?'], answer:2,
      explain:'gustar는 "~가 나에게 마음에 들다" 구조입니다. → <b>Me gusta</b> el chocolate con churros.' },

    { no:23, tag:'읽기 7부', passage:M_TEXTO, audio:M_TEXTO,
      stem:'¿Cuál es el objetivo principal del programa?',
      options:['Producir grandes cantidades de alimentos.','Educar a los alumnos y refrescar los edificios.','Vender verduras en el mercado municipal.','Construir nuevas bibliotecas en la ciudad.'], answer:1,
      explain:'el objetivo no es producir… sino enseñar… y reducir unos grados la temperatura. no… sino 구문이 정답을 가리킵니다.' },

    { no:24, tag:'읽기 7부', passage:M_TEXTO,
      stem:'¿En cuántos centros funciona ya la iniciativa?',
      options:['En tres colegios.','En once centros y dos bibliotecas.','Solo en dos bibliotecas.','En treinta edificios públicos.'], answer:1,
      explain:'se ha extendido ya a once centros y a dos bibliotecas. tres는 시작 당시의 숫자입니다.' },

    { no:25, tag:'읽기 7부', passage:M_TEXTO,
      stem:'¿Cómo deben inscribirse las familias interesadas?',
      options:['Por teléfono, en cualquier momento.','Presencialmente en el ayuntamiento.','Por internet, antes del 30 de abril.','Mediante una carta al colegio.'], answer:2,
      explain:'deberán apuntarse antes del 30 de abril en la web municipal; no se aceptarán solicitudes presenciales.' }
  ]
};
window.CH = CH;
