// 디자인 확인용 가짜 예시 데이터. 주소 뒤에 ?demo 를 붙였을 때만 화면에 나온다.
// 실제 내용이 아니다. content.js 형식을 볼 때 참고용.
window.SITE_DEMO = {
  highlights: [
    { num: "00", label: { ko: "예시 지표 A", en: "Example metric A" } },
    { num: "0.00", label: { ko: "예시 지표 B", en: "Example metric B" } },
    { num: "0", label: { ko: "예시 지표 C", en: "Example metric C" } }
  ],
  projects: [
    {
      featured: true,
      kind: { ko: "연구", en: "Research" },
      period: "2026.01 – 2026.06",
      title: { ko: "예시 프로젝트 제목 (대표 카드)", en: "Example project (featured card)" },
      summary: { ko: "프로젝트를 한두 문장으로 요약하는 자리입니다.", en: "One or two sentences summarizing the project." },
      problem: { ko: "어떤 문제를 풀었는지 적습니다.", en: "What problem it solves." },
      role: [
        { ko: "내가 한 일 1", en: "What I did, part 1" },
        { ko: "내가 한 일 2", en: "What I did, part 2" }
      ],
      metrics: [
        { value: "0.000", label: { ko: "예시 점수", en: "Example score" } },
        { value: "+0.0%p", label: { ko: "예시 개선폭", en: "Example gain" } }
      ],
      links: [{ href: "#", label: { ko: "예시 링크", en: "Example link" } }],
      tags: ["Tag A", "Tag B", "Tag C"]
    },
    {
      kind: { ko: "공모전", en: "Competition" },
      period: "2026.05",
      title: { ko: "예시 프로젝트 2", en: "Example project 2" },
      summary: { ko: "일반 카드 모양입니다.", en: "A regular card." },
      role: { ko: "역할을 한 줄로 적을 수도 있습니다.", en: "Role can also be a single line." },
      metrics: [{ value: "0.00", label: { ko: "예시", en: "Example" } }],
      tags: ["Tag D"]
    },
    {
      kind: { ko: "개발", en: "Engineering" },
      period: "2026 –",
      title: { ko: "예시 프로젝트 3", en: "Example project 3" },
      summary: { ko: "분류가 둘 이상이면 위에 필터 버튼이 생깁니다.", en: "Filter chips appear when there are 2+ kinds." },
      tags: ["Tag E", "Tag F"]
    }
  ],
  skills: [
    { group: { ko: "예시 묶음 1", en: "Example group 1" }, items: ["Item A", "Item B"] },
    { group: { ko: "예시 묶음 2", en: "Example group 2" }, items: ["Item C"] }
  ],
  timeline: [
    { when: "2026.03 –", what: { ko: "예시 이력", en: "Example entry" }, desc: { ko: "설명 한 줄", en: "One-line description" } }
  ]
};
