var CH = window.CH || {};
CH.r2 = {
  id:'r2', area:'읽기 Comprensión Escrita', range:'66–70',
  title:'Segunda Parte — 문장 의미 바꿔 쓰기',
  subtitle:'주어진 문장과 의미가 가장 가까운 문장을 고릅니다. 문장 전체의 논리 관계가 관건입니다.',
  guide:`
    <h3>이 유형 공략 포인트</h3>
    <ul>
      <li>어휘 하나가 아니라 <b>문장의 논리</b>를 바꿔 쓴 것을 찾습니다. 양보(aunque), 조건(si), 인과(porque), 정도(tan… que)의 관계가 유지되어야 합니다.</li>
      <li>흔한 오답 유형: ① 긍정↔부정 뒤집기 ② 정도 과장(muy → demasiado) ③ 인과 관계 반대로 뒤집기</li>
      <li>부정 표현의 등가를 외워 두세요.
        <br>no… ninguno = ninguno en absoluto · no hay más remedio que = es obligatorio · no me queda otra que = tengo que</li>
    </ul>`,
  items:[
    { no:66, stem:'No hay ningún problema por mi parte.',
      options:['Por mi parte, todo está bien.','Tengo varios problemas que resolver.','El problema no es mío, sino tuyo.','No quiero formar parte de este asunto.'],
      answer:0, explain:'"내 쪽은 아무 문제 없다" = 내 입장에서는 다 괜찮다. 2번은 정반대, 3번은 책임 전가, 4번은 참여 거부로 의미가 달라집니다.',
      vocab:'por mi parte 내 쪽에서는' },

    { no:67, stem:'Aunque llovía a cántaros, decidimos salir a dar un paseo.',
      options:['No salimos porque llovía mucho.','Salimos a pasear a pesar de la fuerte lluvia.','Salimos cuando dejó de llover.','Decidimos pasear para que lloviera menos.'],
      answer:1, explain:'aunque(양보) = a pesar de. 비가 왔음에도 나갔다는 관계를 그대로 유지한 2번이 정답입니다.',
      vocab:'llover a cántaros 비가 억수같이 오다 · a pesar de ~에도 불구하고' },

    { no:68, stem:'Esta cuestión tiene aspectos tanto positivos como negativos.',
      options:['Esta cuestión tiene aspectos positivos y negativos.','Los aspectos son tan positivos que la cuestión es negativa.','Esta cuestión tiene más aspectos negativos que positivos.','Esta cuestión no tiene ningún aspecto positivo.'],
      answer:0, explain:'tanto A como B = A도 B도 (둘 다). 우열을 말하지 않으므로 단순 병렬인 1번이 등가입니다.',
      vocab:'tanto… como… ~도 ~도' },

    { no:69, stem:'No me queda más remedio que aceptar sus condiciones.',
      options:['Puedo elegir entre varias condiciones.','Me niego a aceptar sus condiciones.','Estoy obligado a aceptar sus condiciones.','Acepto sus condiciones con mucho gusto.'],
      answer:2, explain:'no quedar más remedio que = 다른 수가 없다 → 의무. 기꺼이 수락한다는 4번은 감정이 반대입니다.',
      vocab:'no quedar más remedio que ~하는 수밖에 없다' },

    { no:70, stem:'El informe estaba tan mal redactado que tuvimos que rehacerlo entero.',
      options:['Rehicimos el informe aunque estaba bien escrito.','El informe estaba bien, pero preferimos cambiarlo.','Como el informe estaba muy mal escrito, lo hicimos de nuevo.','Nadie quiso escribir el informe desde el principio.'],
      answer:2, explain:'tan… que는 "정도 → 결과"의 인과 구조입니다. como(이유) + 결과로 바꿔 쓴 3번이 등가입니다.',
      vocab:'redactar 작성하다 · rehacer 다시 하다' },

    { no:71, stem:'Hace años que no visito a mis tíos de Valencia.',
      options:['Visité a mis tíos hace unos días.','No veo a mis tíos desde hace mucho tiempo.','Voy a Valencia todos los años.','Mis tíos vinieron a verme hace años.'],
      answer:1, explain:'Hace años que no + 현재 = 오랫동안 ~하지 않고 있다(현재까지 계속). desde hace mucho tiempo와 등가입니다.',
      vocab:'hace años que no… 몇 년째 ~하지 않다' },

    { no:72, stem:'Se me rompió el ordenador justo antes de entregar el trabajo.',
      options:['Rompí el ordenador a propósito.','El ordenador se estropeó poco antes de la entrega.','Entregué el trabajo y luego rompí el ordenador.','El trabajo se perdió porque no tenía ordenador.'],
      answer:1, explain:'se me rompió는 의도 없는 사고를 나타내는 무의지 구문입니다. justo antes = poco antes.',
      vocab:'se me rompió (나도 모르게) 고장났다 · estropearse 고장나다' },

    { no:73, stem:'Por mucho que insistas, no pienso cambiar de opinión.',
      options:['Si insistes un poco más, cambiaré de opinión.','Aunque insistas mucho, mantendré mi opinión.','No insistas, porque ya he cambiado de opinión.','Insisto en que cambies tu opinión.'],
      answer:1, explain:'Por mucho que + 접속법 = 아무리 ~해도(양보). 결론은 의견을 바꾸지 않는다는 것입니다.',
      vocab:'por mucho que 아무리 ~해도 · cambiar de opinión 생각을 바꾸다' },

    { no:74, stem:'Al final resultó que la reunión no era necesaria.',
      options:['La reunión fue muy necesaria al final.','Se comprobó que la reunión sobraba.','Nadie asistió a la reunión necesaria.','La reunión terminó antes de lo previsto.'],
      answer:1, explain:'resultar que = 결국 ~인 것으로 드러나다. no era necesaria = sobraba(불필요했다).',
      vocab:'resultar que ~로 밝혀지다 · sobrar 남아돌다, 불필요하다' },

    { no:75, stem:'Me han dicho que el plazo se amplía hasta final de mes.',
      options:['El plazo termina hoy mismo.','Han reducido el plazo a una semana.','Tenemos más tiempo: hasta que acabe el mes.','El plazo empezará a final de mes.'],
      answer:2, explain:'ampliar el plazo = 기한 연장 → 시간이 더 생겼다는 의미입니다.',
      vocab:'ampliar el plazo 기한을 연장하다' }
  ]
};
window.CH = CH;
