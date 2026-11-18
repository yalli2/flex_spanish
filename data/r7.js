var CH = window.CH || {};

var P_ANUNCIO = 'ACADEMIA LINGUA VIVA — Cursos intensivos de verano\\nDel 1 de julio al 25 de agosto. Grupos reducidos de seis alumnos como máximo, con profesores nativos y materiales incluidos en el precio. Horario de mañana (9:00-12:00) o de tarde (18:00-21:00). Descuento del 15 % para quienes se matriculen antes del 10 de junio y del 20 % para antiguos alumnos. La matrícula se formaliza únicamente en la secretaría del centro; no se admiten reservas por teléfono. Las clases perdidas no se recuperan, salvo que se presente un justificante médico.';

var P_CARTA = 'Estimada señora Ferrer:\\nLe escribo en relación con el pedido número 4471, recibido el pasado martes. Al abrir las cajas comprobamos que faltaban doce unidades del modelo azul y que tres de las entregadas presentaban arañazos en la tapa. Dado que la campaña de Navidad comienza el día 20, le agradecería que nos enviara las unidades que faltan antes de esa fecha. Quedamos a la espera de su respuesta y le rogamos que nos confirme por escrito la fecha de envío.\\nAtentamente, Ignacio Robles, responsable de compras.';

var P_NOTICIA = 'Un equipo de biólogos de la Universidad de Granada ha documentado el regreso de una especie de mariposa que se daba por desaparecida en la región desde hace casi treinta años. Los investigadores atribuyen su reaparición a la recuperación de los prados de montaña, abandonados durante décadas y repoblados recientemente con plantas autóctonas. El hallazgo, sin embargo, no significa que la especie esté a salvo: los científicos recuerdan que una sola población aislada es muy vulnerable a los veranos extremos y piden que se amplíe la zona protegida antes de celebrar el éxito.';

var P_ACADEMICO = 'Durante mucho tiempo se creyó que dormir era un periodo de inactividad en el que el cerebro simplemente descansaba. Las investigaciones de las últimas décadas han desmentido esa idea: mientras dormimos, el cerebro reorganiza la información adquirida durante el día y refuerza las conexiones que considera útiles. De hecho, varios experimentos muestran que los estudiantes que duermen bien después de estudiar recuerdan más que quienes repasan toda la noche. El sueño, por tanto, no compite con el estudio, sino que forma parte de él.';

var P_EMPRESA = 'COMUNICADO INTERNO\\nA partir del próximo lunes, las solicitudes de vacaciones se tramitarán exclusivamente a través de la nueva plataforma digital. Cada empleado dispone de un usuario personal que recibirá por correo electrónico. Las solicitudes en papel dejarán de aceptarse, salvo en el caso de los trabajadores de planta que todavía no tengan acceso informático, quienes podrán entregarlas a su responsable directo. El plazo para pedir los días de agosto finaliza el 30 de junio; las peticiones posteriores se atenderán solo si queda disponibilidad en el turno.';

CH.r7 = {
  id:'r7', area:'읽기 Comprensión Escrita', range:'91–140',
  title:'Séptima Parte — 독해 지문',
  subtitle:'광고·서신·시사·학술·업무 문서를 읽고 주제, 세부 정보, 진위를 판단합니다. 읽기 90문항 중 50문항이 이 구간입니다.',
  guide:`
    <h3>이 유형 공략 포인트</h3>
    <ul>
      <li><b>질문 먼저, 지문 나중</b>. 질문의 핵심어(날짜·금액·인물·부정어)를 잡고 지문에서 해당 줄만 찾아 읽으면 시간이 절반으로 줄어듭니다.</li>
      <li>지문 유형별 정답 위치
        <br>· <b>광고</b> — 조건·예외(salvo que, únicamente, solo si)에 정답이 숨습니다.
        <br>· <b>서신</b> — 마지막 단락의 요청 문장이 "글쓴이의 목적"입니다.
        <br>· <b>시사</b> — 역접(sin embargo, no obstante) 뒤가 글의 진짜 주장입니다.
        <br>· <b>학술</b> — 통념 제시 → 반박 구조. "por tanto" 뒤가 결론입니다.</li>
      <li>NO가 들어간 질문(¿Cuál NO es correcta?)은 반드시 네 선택지를 모두 확인해야 합니다.</li>
    </ul>`,
  items:[
    { no:91, tag:'광고문', passage:P_ANUNCIO, audio:P_ANUNCIO,
      stem:'Según el anuncio, ¿quién obtiene el mayor descuento?',
      options:['Quien se matricule antes del 10 de junio.','Quien elija el horario de tarde.','Quien ya ha estudiado antes en la academia.','Quien pague la matrícula por teléfono.'],
      answer:2, explain:'기존 수강생 20% > 조기 등록 15%. 두 숫자를 비교하는 전형적 문항입니다.',
      vocab:'matricularse 등록하다 · antiguo alumno 기존 수강생' },

    { no:92, tag:'광고문', passage:P_ANUNCIO,
      stem:'¿Cuál de las siguientes afirmaciones NO es correcta?',
      options:['Los grupos tienen un máximo de seis alumnos.','Se puede reservar plaza por teléfono.','Los materiales están incluidos en el precio.','Las clases perdidas no se recuperan sin justificante.'],
      answer:1, explain:'no se admiten reservas por teléfono — 전화 예약은 불가능하다고 명시되어 있습니다.',
      vocab:'reserva 예약 · justificante 증빙서류' },

    { no:93, tag:'서신', passage:P_CARTA, audio:P_CARTA,
      stem:'¿Cuál es el objetivo principal de la carta?',
      options:['Cancelar definitivamente el pedido.','Reclamar la parte del pedido que falta.','Felicitar a la empresa por el servicio.','Solicitar un nuevo catálogo de productos.'],
      answer:1, explain:'마지막 단락의 요청이 목적입니다: 누락된 12개를 20일 전까지 보내 달라.',
      vocab:'pedido 주문 · faltar 부족하다 · reclamar 항의하다' },

    { no:94, tag:'서신', passage:P_CARTA,
      stem:'¿Qué problema encontraron además de las unidades que faltaban?',
      options:['Las cajas llegaron vacías.','El color era distinto al pedido.','Tres unidades estaban rayadas.','El envío llegó con un mes de retraso.'],
      answer:2, explain:'presentaban arañazos en la tapa = 뚜껑에 긁힌 자국이 있었다.',
      vocab:'arañazo 긁힌 자국 · tapa 뚜껑' },

    { no:95, tag:'서신', passage:P_CARTA,
      stem:'¿Qué pide el señor Robles al final de la carta?',
      options:['Una confirmación por escrito de la fecha de envío.','Una llamada telefónica del transportista.','La devolución total del dinero.','Una visita comercial antes de Navidad.'],
      answer:0, explain:'le rogamos que nos confirme por escrito la fecha de envío — 서면 확인 요청입니다.',
      vocab:'rogar 간청하다 · por escrito 서면으로' },

    { no:96, tag:'시사', passage:P_NOTICIA, audio:P_NOTICIA,
      stem:'¿Cuál es la idea principal del texto?',
      options:['Una mariposa ha vuelto a la región, aunque su situación sigue siendo frágil.','Los prados de montaña han desaparecido por completo.','La universidad ha creado una nueva especie de mariposa.','Los veranos extremos han hecho desaparecer la especie.'],
      answer:0, explain:'sin embargo 뒤가 글의 진짜 주장입니다: 돌아왔지만 아직 안전하지 않다.',
      vocab:'darse por desaparecido 멸종된 것으로 간주되다 · prado 초원' },

    { no:97, tag:'시사', passage:P_NOTICIA,
      stem:'¿A qué atribuyen los investigadores la reaparición de la mariposa?',
      options:['Al aumento de las temperaturas.','A la recuperación de los prados con plantas autóctonas.','A la construcción de un nuevo parque natural.','A la llegada de ejemplares de otros países.'],
      answer:1, explain:'atribuyen su reaparición a la recuperación de los prados… repoblados con plantas autóctonas.',
      vocab:'atribuir a ~의 탓/덕으로 돌리다 · autóctono 토착의' },

    { no:98, tag:'시사 · V/F', passage:P_NOTICIA,
      stem:'Indique la afirmación VERDADERA según el texto.',
      options:['La especie lleva treinta años en la región sin interrupción.','Los científicos piden ampliar la zona protegida.','La población de mariposas es numerosa y está repartida.','El hallazgo garantiza la supervivencia de la especie.'],
      answer:1, explain:'piden que se amplíe la zona protegida — 보호 구역 확대를 요구합니다. 나머지는 본문과 반대입니다.',
      vocab:'ampliar 확대하다 · a salvo 안전한' },

    { no:99, tag:'학술', passage:P_ACADEMICO, audio:P_ACADEMICO,
      stem:'¿Qué idea desmienten las investigaciones recientes?',
      options:['Que el cerebro trabaja durante el sueño.','Que dormir es un periodo de total inactividad cerebral.','Que estudiar de noche es muy eficaz.','Que el sueño refuerza las conexiones útiles.'],
      answer:1, explain:'통념(se creyó que dormir era un periodo de inactividad)을 반박하는 구조입니다.',
      vocab:'desmentir 반박하다 · reforzar 강화하다' },

    { no:100, tag:'학술', passage:P_ACADEMICO,
      stem:'Según el texto, ¿qué recuerdan mejor los estudiantes?',
      options:['Los que repasan durante toda la noche.','Los que duermen bien después de estudiar.','Los que estudian solo por la mañana.','Los que no estudian antes de dormir.'],
      answer:1, explain:'quienes duermen bien después de estudiar recuerdan más que quienes repasan toda la noche.',
      vocab:'repasar 복습하다 · recordar 기억하다' },

    { no:101, tag:'학술', passage:P_ACADEMICO,
      stem:'¿Cuál es la conclusión del autor?',
      options:['El sueño es una pérdida de tiempo para el estudiante.','El sueño forma parte del propio proceso de aprendizaje.','Hay que dormir antes de estudiar, nunca después.','El cerebro solo aprende cuando está despierto.'],
      answer:1, explain:'por tanto 뒤 마지막 문장이 결론입니다: 수면은 학습과 경쟁하지 않고 학습의 일부다.',
      vocab:'por tanto 따라서 · formar parte de ~의 일부이다' },

    { no:102, tag:'실무 문서', passage:P_EMPRESA, audio:P_EMPRESA,
      stem:'¿Qué cambia a partir del lunes?',
      options:['El número de días de vacaciones.','La forma de solicitar las vacaciones.','El horario del turno de agosto.','El responsable de cada departamento.'],
      answer:1, explain:'휴가 신청 방식이 종이에서 디지털 플랫폼으로 바뀝니다.',
      vocab:'solicitud 신청(서) · tramitar 처리하다' },

    { no:103, tag:'실무 문서', passage:P_EMPRESA,
      stem:'¿Quiénes pueden seguir entregando la solicitud en papel?',
      options:['Todos los empleados que lo prefieran.','Los responsables de departamento.','Los trabajadores de planta sin acceso informático.','Nadie, en ningún caso.'],
      answer:2, explain:'salvo en el caso de los trabajadores de planta que todavía no tengan acceso informático — 예외 조항에 정답이 있습니다.',
      vocab:'salvo ~을 제외하고 · planta 공장, 생산 현장' },

    { no:104, tag:'실무 문서', passage:P_EMPRESA,
      stem:'¿Qué ocurre con las peticiones presentadas después del 30 de junio?',
      options:['Se rechazan automáticamente.','Se atienden solo si queda sitio en el turno.','Se trasladan al mes de septiembre.','Se tramitan con prioridad.'],
      answer:1, explain:'las peticiones posteriores se atenderán solo si queda disponibilidad en el turno.',
      vocab:'disponibilidad 여유, 가용성 · turno 근무조' }
  ]
};
window.CH = CH;
