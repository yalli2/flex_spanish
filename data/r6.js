var CH = window.CH || {};
CH.r6 = {
  id:'r6', area:'읽기 Comprensión Escrita', range:'89–90',
  title:'Sexta Parte — 비문(非文) 찾기',
  subtitle:'네 개의 문장 중 문법적으로 올바르지 않은 문장 하나를 고릅니다.',
  guide:`
    <h3>이 유형 공략 포인트</h3>
    <ul>
      <li>문항 수는 적지만 난도가 높습니다. 네 문장을 모두 꼼꼼히 읽을 시간은 없으므로 <b>체크리스트</b>로 빠르게 훑으세요.</li>
      <li>체크리스트 — ① gustar류 동사의 주어 ② se 무인칭 ③ por/para ④ 접속법 신호어 ⑤ 성·수 일치 ⑥ 직접/간접 목적격 대명사 순서</li>
      <li>"어색해 보이는" 문장이 아니라 "규칙을 어긴" 문장을 찾아야 합니다. 구어체라서 낯선 문장이 정답인 경우는 드뭅니다.</li>
    </ul>`,
  items:[
    { no:89, stem:'문법적으로 올바르지 <b>않은</b> 문장을 고르세요.',
      options:[
        'Nosotros los coreanos somos muy trabajadores.',
        'Se me olvidó traer los documentos que estaban en la mesa.',
        'A los estudiantes le interesa mucho esta asignatura.',
        'Hace tres meses que no veo a mis primos.'],
      answer:2, explain:'A los estudiantes(복수)를 받으므로 간접목적 대명사도 복수 les여야 합니다. → A los estudiantes <b>les</b> interesa mucho esta asignatura.',
      vocab:'asignatura 과목 · interesar 흥미를 주다' },

    { no:90, stem:'문법적으로 올바르지 <b>않은</b> 문장을 고르세요.',
      options:[
        'Este regalo es para ti, lo compré ayer.',
        'Busco una secretaria que habla tres idiomas.',
        'No creo que sea tan difícil como dicen.',
        'Cuando termines el informe, avísame.'],
      answer:1, explain:'아직 찾지 못한 불특정 대상(una secretaria)을 수식하므로 접속법이 필요합니다. → una secretaria que <b>hable</b> tres idiomas.',
      vocab:'idioma 언어 · avisar 알리다' },

    { no:91, stem:'문법적으로 올바르지 <b>않은</b> 문장을 고르세요.',
      options:[
        'Me lo dijo el director esta mañana.',
        'Se venden pisos en el centro de la ciudad.',
        'Le di el libro a ella y se puso muy contenta.',
        'Si tendría tiempo, iría contigo al concierto.'],
      answer:3, explain:'si절에는 조건법(tendría)을 쓸 수 없습니다. → Si <b>tuviera</b> tiempo, iría contigo.',
      vocab:'ponerse contento 기뻐하다' },

    { no:92, stem:'문법적으로 올바르지 <b>않은</b> 문장을 고르세요.',
      options:[
        'Hace mucho calor, por eso abrí la ventana.',
        'Estudio español para poder trabajar en Chile.',
        'Gracias para invitarme a tu fiesta de cumpleaños.',
        'Salimos por la mañana y volvimos por la noche.'],
      answer:2, explain:'감사의 이유는 por로 표현합니다. → Gracias <b>por</b> invitarme.',
      vocab:'invitar 초대하다' },

    { no:93, stem:'문법적으로 올바르지 <b>않은</b> 문장을 고르세요.',
      options:[
        'El agua está muy fría esta mañana.',
        'Tengo muchas ganas de verte otra vez.',
        'Las problemas de la empresa son graves.',
        'Hay varios documentos sobre la mesa.'],
      answer:2, explain:'problema는 -a로 끝나지만 남성 명사입니다. → <b>Los</b> problemas de la empresa son graves.',
      vocab:'grave 심각한 · tener ganas de ~하고 싶다' },

    { no:94, stem:'문법적으로 올바르지 <b>않은</b> 문장을 고르세요.',
      options:[
        'Me gustaría que vinieras a la reunión del lunes.',
        'Es posible que llueva mañana por la tarde.',
        'Aunque es tarde, todavía podemos llamarle.',
        'Espero que puedes acompañarme al médico.'],
      answer:3, explain:'esperar que 뒤에는 접속법이 옵니다. → Espero que <b>puedas</b> acompañarme.',
      vocab:'acompañar 동행하다' },

    { no:95, stem:'문법적으로 올바르지 <b>않은</b> 문장을 고르세요.',
      options:[
        'Hace dos años que vivo en Barcelona.',
        'Ayer he ido al cine con mis compañeros.',
        'Este verano hemos viajado por Andalucía.',
        'Nunca había visto una ciudad tan bonita.'],
      answer:1, explain:'ayer는 종료된 과거 시점이므로 현재완료와 함께 쓰지 않습니다. → Ayer <b>fui</b> al cine.',
      vocab:'compañero 동료, 친구' },

    { no:96, stem:'문법적으로 올바르지 <b>않은</b> 문장을 고르세요.',
      options:[
        'Se lo expliqué todo al cliente por teléfono.',
        'Le lo entregué al responsable esta mañana.',
        'Nos lo contaron en la reunión de ayer.',
        'Te las mandaré por correo electrónico.'],
      answer:1, explain:'le + lo는 함께 쓸 수 없고 le가 se로 바뀝니다. → <b>Se lo</b> entregué al responsable.',
      vocab:'entregar 전달하다 · responsable 담당자' }
  ]
};
window.CH = CH;
