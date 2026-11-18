var CH = window.CH || {};
CH.s1 = {
  id:'s1', area:'말하기 Expresión Oral',
  title:'Expresión Oral — 말하기 9개 과제',
  subtitle:'준비시간 타이머를 누르고 실제처럼 연습한 뒤, 모범 답안을 듣고 비교하세요.',
  guide:`
    <h3>시험 구성</h3>
    <table class="simple">
      <tr><th>번호</th><th>유형</th><th>준비</th><th>답변</th></tr>
      <tr><td>1</td><td>몸풀기 질문 (자기소개 수준)</td><td>없음</td><td>짧게</td></tr>
      <tr><td>2–3</td><td>사진·삽화 묘사</td><td>30초</td><td>50초</td></tr>
      <tr><td>4</td><td>역할 설정 — 일상생활</td><td>30초</td><td>50–60초</td></tr>
      <tr><td>5</td><td>역할 설정 — 학술·실무</td><td>30초</td><td>50–60초</td></tr>
      <tr><td>6</td><td>데이터(표·그래프) 분석</td><td>30초</td><td>50초</td></tr>
      <tr><td>7–8</td><td>개인적 의견 진술</td><td>30초</td><td>50초</td></tr>
      <tr><td>9</td><td>사회적 이슈 의견 진술</td><td>30초</td><td>60초</td></tr>
    </table>
    <h4>답변 황금 템플릿</h4>
    <ul>
      <li><b>묘사</b>: En la imagen se ve… / En primer plano… / Al fondo… / Parece que… / Me da la impresión de que…</li>
      <li><b>역할</b>: 인사 → 상황 설명 → 요청·제안 → 대안 → 마무리 인사</li>
      <li><b>데이터</b>: El gráfico muestra… / Destaca que… / Mientras que A sube, B baja… / En conclusión…</li>
      <li><b>의견</b>: En mi opinión… + Por un lado… / Por otro… + Por ejemplo… + Por eso, creo que…</li>
    </ul>
    <div class="tipbox">🎙 준비 시간에는 문장을 다 쓰지 말고 <b>핵심어 3개와 순서</b>만 메모하세요. 문장을 외우려 하면 중간에 멈춥니다. 또 시간이 남았다고 급히 끝내지 말고, 마무리 문장(Por eso, en resumen…)으로 반드시 닫으세요.</div>`,
  items:[
    { no:1, type:'free', tag:'1번 · 몸풀기', seconds:30,
      stem:'Preséntese brevemente: diga su nombre, a qué se dedica y por qué estudia español.',
      placeholder:'답변을 스페인어로 적어 본 뒤 소리 내어 말해 보세요.',
      model:'Me llamo Jiwon Kim y soy estudiante de último curso de Comercio Internacional. Estudio español desde hace dos años porque me gustaría trabajar en una empresa que exporte a Latinoamérica. Además, me encanta la música y el cine en español, así que practico un poco todos los días.',
      modelKo:'🇰🇷 이름 + 직업·학년 + 배우는 이유 + 개인적 동기, 이 네 요소만 넣으면 충분합니다. 1번은 긴장을 푸는 문항이니 짧고 또렷하게.' },

    { no:2, type:'free', tag:'2번 · 사진 묘사', seconds:30,
      stem:'Describa la siguiente escena: un mercado al aire libre un sábado por la mañana; varias personas compran fruta y verdura, y al fondo un músico toca la guitarra.',
      model:'En la imagen se ve un mercado al aire libre, probablemente un sábado por la mañana, porque hay bastante gente. En primer plano, una señora mayor elige naranjas mientras el vendedor las pesa. A su lado, un hombre joven lleva una bolsa de tela llena de verduras. Al fondo, un músico toca la guitarra y algunas personas se han parado a escucharlo. Me da la impresión de que es un ambiente tranquilo y agradable.',
      modelKo:'🇰🇷 전경(en primer plano) → 중앙 → 배경(al fondo) → 전체 인상(me da la impresión de que). 이 순서를 고정하면 50초가 자연스럽게 채워집니다.' },

    { no:3, type:'free', tag:'3번 · 삽화 묘사', seconds:30,
      stem:'Describa esta situación: en una oficina, un empleado mira preocupado la pantalla de su ordenador mientras una compañera le señala un papel.',
      model:'La escena transcurre en una oficina moderna. Un empleado está sentado delante del ordenador y mira la pantalla con cara de preocupación; parece que algo no le cuadra en los datos. A su derecha, una compañera de pie le señala un papel, como si le estuviera explicando dónde está el error. Al fondo se ven otras mesas vacías, así que supongo que es bastante tarde y solo quedan ellos dos.',
      modelKo:'🇰🇷 인물의 감정을 추측하는 표현(parece que, como si, supongo que)을 넣으면 단순 나열보다 높은 점수를 받습니다.' },

    { no:4, type:'free', tag:'4번 · 역할 설정(일상)', seconds:30,
      stem:'Usted ha dejado su coche en el aparcamiento de un centro comercial. Al salir, ha golpeado sin querer el coche de al lado y ha roto un espejo. No hay nadie, pero ve un número de teléfono en el parabrisas. Deje un mensaje en el contestador explicando lo ocurrido y proponiendo una solución.',
      model:'Buenas tardes, le llamo porque esta mañana, sobre las once, he golpeado sin querer su coche al salir del aparcamiento del centro comercial. Lo siento muchísimo. Le he roto el espejo del lado derecho y, aunque no hay más daños, quiero hacerme cargo de la reparación. Tengo seguro a todo riesgo, así que podemos tramitarlo por la aseguradora o, si lo prefiere, le pago el arreglo directamente. Le dejo mi número: seis, cinco, cuatro… Llámeme cuando pueda y lo solucionamos enseguida. Muchas gracias y perdone de nuevo.',
      modelKo:'🇰🇷 사과 → 사실 설명(언제·무엇) → 책임 표명(hacerme cargo) → 두 가지 대안 제시 → 연락처 → 재사과. 이 6단계가 채점 포인트입니다.' },

    { no:5, type:'free', tag:'5번 · 역할 설정(학술·실무)', seconds:30,
      stem:'Usted no podrá entregar a tiempo un trabajo de la asignatura por un problema familiar. Hable con su profesor: explique la situación, pida una prórroga y proponga una fecha concreta.',
      model:'Buenos días, profesor. Quería hablar con usted sobre el trabajo final. Por un problema familiar he tenido que viajar esta semana y no voy a poder entregarlo el viernes, como estaba previsto. Tengo ya la parte teórica terminada y me falta solo el análisis de los datos. Por eso, le quería pedir si sería posible entregarlo el lunes a primera hora. Entiendo que el plazo es el mismo para todos, así que, si no es posible, entregaré lo que tenga hecho el viernes. Muchas gracias por su comprensión.',
      modelKo:'🇰🇷 실무·학술 역할에서는 반드시 ① 진척 상황 보고 ② 구체적 날짜 제시 ③ 거절당할 경우의 대안까지 말해야 만점권입니다.' },

    { no:6, type:'free', tag:'6번 · 데이터 분석', seconds:30,
      stem:'Analice estos datos durante 30 segundos y descríbalos en 50 segundos.\nUso del transporte en una ciudad (porcentaje de trayectos):\n2015 — coche 52 %, autobús 28 %, bicicleta 6 %, a pie 14 %\n2025 — coche 38 %, autobús 31 %, bicicleta 17 %, a pie 14 %',
      model:'El gráfico compara cómo se desplaza la gente de esta ciudad en 2015 y en 2025. El cambio más llamativo es la caída del coche, que pasa del cincuenta y dos por ciento al treinta y ocho; es decir, catorce puntos menos. En cambio, la bicicleta casi se triplica, del seis al diecisiete por ciento, y el autobús sube ligeramente, tres puntos. Los desplazamientos a pie se mantienen igual, en el catorce por ciento. En conclusión, los ciudadanos han sustituido el coche sobre todo por la bicicleta y, en menor medida, por el transporte público.',
      modelKo:'🇰🇷 수치는 "~포인트 하락/상승"으로 표현하세요(catorce puntos menos). 마지막에 En conclusión으로 전체 경향을 한 문장으로 요약하는 것이 핵심 점수 포인트입니다.' },

    { no:7, type:'free', tag:'7번 · 개인적 의견', seconds:30,
      stem:'¿Prefiere trabajar en equipo o de forma individual? Explique por qué.',
      model:'En mi opinión, depende del tipo de tarea, pero en general prefiero trabajar en equipo. Por un lado, cuando varias personas aportan ideas, el resultado suele ser más completo y se detectan antes los errores. Por ejemplo, en un proyecto de la universidad mi grupo encontró un fallo de cálculo que yo solo no habría visto nunca. Por otro lado, reconozco que el trabajo en equipo exige más tiempo de coordinación. Aun así, creo que merece la pena, sobre todo en proyectos largos.',
      modelKo:'🇰🇷 의견 → 근거1 → 구체적 사례 → 반대 측면 인정 → 재확인. 반대 측면을 한 문장 인정하면 논리 점수가 올라갑니다.' },

    { no:8, type:'free', tag:'8번 · 개인적 의견', seconds:30,
      stem:'Un amigo le pide que le preste su ordenador portátil. Sin querer, derrama café sobre el teclado y se lo devuelve estropeado. ¿Cómo le explicaría la situación y qué solución propondría?',
      model:'Mira, tenemos que hablar del portátil. Cuando me lo devolviste, el teclado no respondía y en el servicio técnico me han dicho que ha entrado líquido. Sé que fue sin querer y no estoy enfadado contigo, pero el arreglo cuesta unos ciento veinte euros. Yo propongo que paguemos la reparación a medias, ya que yo también debí avisarte de que no se puede comer ni beber cerca. Si ahora no te viene bien, puedes dármelo el mes que viene. ¿Te parece razonable?',
      modelKo:'🇰🇷 갈등 상황에서는 ① 감정 비난 금지 ② 사실과 비용 제시 ③ 합리적 분담안 ④ 상대 확인 질문(¿Te parece?)의 4단계를 지키세요.' },

    { no:9, type:'free', tag:'9번 · 사회적 이슈', seconds:30,
      stem:'Algunas ciudades han prohibido la circulación de coches particulares en el centro. ¿Está usted de acuerdo? Justifique su respuesta.',
      model:'Estoy bastante de acuerdo con esa medida, aunque con matices. En primer lugar, reducir el tráfico en el centro mejora la calidad del aire y disminuye el ruido, que son dos problemas serios en las ciudades grandes. En segundo lugar, cuando el centro se peatonaliza, los comercios pequeños suelen beneficiarse porque la gente pasea más. Ahora bien, para que la medida funcione hace falta un transporte público frecuente y barato; si no, se perjudica a quienes viven lejos o tienen movilidad reducida. Por eso, creo que la prohibición debe ir siempre acompañada de alternativas reales.',
      modelKo:'🇰🇷 사회적 이슈는 찬반 자체가 채점 대상이 아닙니다. En primer lugar / En segundo lugar / Ahora bien / Por eso 같은 연결어로 논리를 드러내는 것이 점수를 만듭니다.' }
  ]
};
window.CH = CH;
