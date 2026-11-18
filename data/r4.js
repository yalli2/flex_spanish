var CH = window.CH || {};
CH.r4 = {
  id:'r4', area:'읽기 Comprensión Escrita', range:'81–85',
  title:'Cuarta Parte — 밑줄 친 숙어·구문의 의미',
  subtitle:'단어가 아니라 관용 표현(locución) 전체의 뜻을 문맥으로 파악합니다.',
  guide:`
    <h3>이 유형 공략 포인트</h3>
    <ul>
      <li>관용구는 <b>직역하면 반드시 틀립니다</b>. echar una mano는 "손을 던지다"가 아니라 "돕다"입니다.</li>
      <li>선택지가 모두 동사일 때는 밑줄 구문의 <b>목적어와 어울리는 동사</b>를 고르면 됩니다.</li>
      <li>FLEX 빈출 숙어 30개
        <br>llevar a cabo(수행하다) · tener en cuenta(고려하다) · dar a conocer(알리다) · poner en marcha(가동하다) ·
        hacer frente a(맞서다) · echar de menos(그리워하다) · caer en la cuenta(깨닫다) · estar al tanto(파악하고 있다) ·
        dar la lata(귀찮게 하다) · tomar el pelo(놀리다) · a corto plazo(단기적으로) · de buenas a primeras(대뜸)</li>
    </ul>`,
  items:[
    { no:81, stem:'El departamento __cuenta con__ varios técnicos que hablan español.',
      options:['busca','dispone de','necesita','contrata'], answer:1,
      explain:'contar con = ~을 보유하다, 갖추고 있다 → disponer de. "믿고 의지하다"의 뜻도 있지만 여기서는 보유입니다.',
      vocab:'contar con 갖추다 · disponer de 보유하다' },

    { no:82, stem:'El jefe pidió que se __llevara a cabo__ la reducción de gastos este trimestre.',
      options:['acompañara','realizara','consiguiera','explicara'], answer:1,
      explain:'llevar a cabo = 실행하다, 수행하다 → realizar. 실무 문서 최빈출 숙어입니다.',
      vocab:'llevar a cabo 실행하다 · reducción de gastos 비용 절감' },

    { no:83, stem:'Hay que __tener en cuenta__ que muchos clientes compran desde el móvil.',
      options:['olvidar','considerar','demostrar','negar'], answer:1,
      explain:'tener en cuenta = 고려하다 → considerar.',
      vocab:'tener en cuenta 고려하다' },

    { no:84, stem:'La empresa __dio a conocer__ sus resultados anuales la semana pasada.',
      options:['anunció','ocultó','cuestionó','corrigió'], answer:0,
      explain:'dar a conocer = 공표하다, 알리다 → anunciar. ocultar(숨기다)는 정반대입니다.',
      vocab:'dar a conocer 발표하다 · resultados anuales 연간 실적' },

    { no:85, stem:'El gobierno tendrá que __hacer frente a__ una subida de los precios de la energía.',
      options:['afrontar','provocar','aprovechar','ignorar'], answer:0,
      explain:'hacer frente a = ~에 맞서다, 대처하다 → afrontar.',
      vocab:'hacer frente a 대처하다 · subida 상승' },

    { no:86, stem:'Después de leerlo dos veces, por fin __caí en la cuenta__ del error.',
      options:['me olvidé','me di cuenta','me negué','me burlé'], answer:1,
      explain:'caer en la cuenta de = 비로소 알아차리다 → darse cuenta de.',
      vocab:'caer en la cuenta 깨닫다' },

    { no:87, stem:'Mi jefa siempre está __al tanto de__ las novedades del sector.',
      options:['harta de','informada de','alejada de','encargada de'], answer:1,
      explain:'estar al tanto de = ~을 훤히 알고 있다 → estar informado de.',
      vocab:'estar al tanto 파악하고 있다 · novedad 새 소식' },

    { no:88, stem:'A corto plazo la medida funciona, pero __a la larga__ sale cara.',
      options:['enseguida','con el tiempo','por casualidad','de momento'], answer:1,
      explain:'a la larga = 장기적으로 보면 → con el tiempo. 앞의 a corto plazo(단기)와 대비됩니다.',
      vocab:'a la larga 결국에는 · a corto plazo 단기적으로' },

    { no:89, stem:'De buenas a primeras, el cliente canceló todo el pedido.',
      options:['Poco a poco','De repente','Por suerte','Como siempre'], answer:1,
      explain:'de buenas a primeras = 느닷없이, 대뜸 → de repente.',
      vocab:'de buenas a primeras 갑자기 · pedido 주문' },

    { no:90, stem:'No le hagas caso: siempre te está __tomando el pelo__.',
      options:['ayudando','engañando en broma','criticando en serio','felicitando'], answer:1,
      explain:'tomar el pelo a alguien = 놀리다, 장난치다. hacer caso a는 "말을 듣다, 신경 쓰다"입니다.',
      vocab:'tomar el pelo 놀리다 · hacer caso 귀 기울이다' }
  ]
};
window.CH = CH;
