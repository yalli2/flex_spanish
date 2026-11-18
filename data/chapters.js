/* 전체 과 목록 (메인 페이지 구성) */
const CHAPTERS = [
  { id:'guide', area:'시험 안내', badge:'OVERVIEW', cls:'guide', short:'시험 개요',
    title:'FLEX 시험 완전 분석', subtitle:'140문항 구성, 배점, 시간 배분과 영역별 공략 전략 총정리' },

  { id:'l1', area:'듣기 Comprensión Auditiva', badge:'Parte 1', cls:'listen', range:'1–10', count:12, short:'듣기 Parte 1',
    title:'짧은 반응 고르기', subtitle:'한두 문장을 듣고 가장 알맞은 응답을 고르는 유형 (인사·부탁·사과·칭찬 표현)' },
  { id:'l2', area:'듣기 Comprensión Auditiva', badge:'Parte 2', cls:'listen', range:'11–30', count:12, short:'듣기 Parte 2',
    title:'두 사람의 대화 이해', subtitle:'대화를 듣고 장소·관계·주제·다음 행동을 추론하는 유형' },
  { id:'l3', area:'듣기 Comprensión Auditiva', badge:'Parte 3', cls:'listen', range:'31–50', count:10, short:'듣기 Parte 3',
    title:'담화·뉴스·강의 듣기', subtitle:'시사, 음성 메시지, 발표, 회의·세미나 등 긴 담화 이해' },

  { id:'r1', area:'읽기 Comprensión Escrita', badge:'Primera Parte', cls:'read', range:'51–65', count:18, short:'읽기 1부',
    title:'빈칸 완성 (문법·어휘)', subtitle:'문장에 가장 알맞은 표현을 고르는 기초언어능력 핵심 유형' },
  { id:'r2', area:'읽기 Comprensión Escrita', badge:'Segunda Parte', cls:'read', range:'66–70', count:10, short:'읽기 2부',
    title:'문장 의미 바꿔 쓰기', subtitle:'주어진 문장과 의미가 가장 가까운 문장 고르기' },
  { id:'r3', area:'읽기 Comprensión Escrita', badge:'Tercera Parte', cls:'read', range:'71–80', count:12, short:'읽기 3부',
    title:'밑줄 친 단어의 의미', subtitle:'문맥 속 어휘의 동의어를 고르는 유형' },
  { id:'r4', area:'읽기 Comprensión Escrita', badge:'Cuarta Parte', cls:'read', range:'81–85', count:10, short:'읽기 4부',
    title:'밑줄 친 숙어·구문의 의미', subtitle:'관용 표현(locuciones)의 뜻을 문맥으로 파악하기' },
  { id:'r5', area:'읽기 Comprensión Escrita', badge:'Quinta Parte', cls:'read', range:'86–88', count:8, short:'읽기 5부',
    title:'밑줄 중 문법 오류 찾기', subtitle:'문장 안에서 문법적으로 틀린 부분 하나를 고르기' },
  { id:'r6', area:'읽기 Comprensión Escrita', badge:'Sexta Parte', cls:'read', range:'89–90', count:8, short:'읽기 6부',
    title:'비문(非文) 찾기', subtitle:'네 문장 중 문법적으로 올바르지 않은 문장 고르기' },
  { id:'r7', area:'읽기 Comprensión Escrita', badge:'Séptima Parte', cls:'read', range:'91–140', count:14, short:'읽기 7부',
    title:'독해 지문 (생활·시사·학술·실무)', subtitle:'광고·편지·기사·학술문·업무 문서를 읽고 푸는 최대 배점 영역' },

  { id:'s1', area:'말하기 Expresión Oral', badge:'9 TAREAS', cls:'speak', count:9, short:'말하기',
    title:'말하기 9개 과제 완전 연습', subtitle:'몸풀기·사진묘사·역할설정·데이터분석·의견진술까지 준비시간 타이머와 모범답안 제공' },

  { id:'w1', area:'쓰기 Expresión Escrita', badge:'6 TAREAS', cls:'write', count:10, short:'쓰기',
    title:'쓰기 6개 과제 완전 연습', subtitle:'단문번역·요약·담화완성·데이터분석·서신작성·자유작문 모범답안 포함' },

  { id:'mock', area:'실전 모의고사', badge:'MINI TEST', cls:'guide', count:25, short:'모의고사',
    title:'실전 미니 모의고사', subtitle:'듣기 10 + 읽기 15문항을 실제 시험 순서대로 풀고 영역별 점수 확인' }
];
