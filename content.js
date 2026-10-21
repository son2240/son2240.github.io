// =====================================================================
//  사이트 내용은 전부 이 파일에서 고칩니다. (index.html 은 건드리지 않아도 됨)
//  글자는 { ko: "...", en: "..." } 형태로 두 언어를 함께 씁니다.
//  빈 배열([])인 섹션은 사이트에서 자동으로 숨겨집니다.
// =====================================================================
window.SITE = {
  profile: {
    name: { ko: "이름", en: "Your Name" },            // TODO: 표시할 이름
    eyebrow: { ko: "KENTECH 재학생", en: "Student at KENTECH" },
    headline: {
      ko: "한 줄 소개를 적어 주세요.",                  // TODO
      en: "Write a one-line introduction here."
    },
    lead: {
      ko: "무엇을 공부하고, 어떤 문제를 풀고 싶은지 2~3문장으로 적습니다.",  // TODO
      en: "Two or three sentences about what you study and the problems you want to solve."
    },
    github: "https://github.com/son2240",
    email: "sondong0422@kentech.ac.kr",
    cv: "",          // 예: "assets/cv.pdf" (파일을 assets/ 에 넣고 경로 입력, 비우면 버튼 숨김)
    linkedin: ""     // 비우면 숨김
  },

  // 상단 숫자 3칸 (예: { num: "0.99", label: { ko: "...", en: "..." } })
  highlights: [],

  // 소개 섹션
  about: {
    paragraphs: [
      { ko: "자기소개 문단을 적어 주세요.", en: "Write an about paragraph here." }   // TODO
    ],
    facts: [
      { k: { ko: "소속", en: "School" }, v: { ko: "KENTECH (한국에너지공과대학교)", en: "KENTECH (Korea Institute of Energy Technology)" } },
      { k: { ko: "GitHub", en: "GitHub" }, v: { ko: "son2240", en: "son2240" }, href: "https://github.com/son2240" }
    ]
  },

  // 프로젝트 카드 — 아직 비워 둠. 형식은 README.md 의 "프로젝트 추가" 참고.
  projects: [],

  // 기술 스택 묶음 (예: { group: { ko: "언어", en: "Languages" }, items: ["Python"] })
  skills: [],

  // 이력·활동 (예: { when: "2026.03 –", what: {ko,en}, desc: {ko,en} })
  timeline: []
};
