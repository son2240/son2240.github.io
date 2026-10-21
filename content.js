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
  projects: [
    {
      featured: true,
      kind: { ko: "AI 에이전트", en: "AI Agents" },
      period: "2026",
      title: { ko: "Slack 기반 AI 코딩 에이전트 협업 시스템", en: "Slack Orchestration for AI Coding Agents" },
      summary: {
        ko: "Claude Code·Codex 세션 여러 개가 Slack 하나로 협업하도록 직접 설계·운영한 환경에서 핵심 구조를 떼어 공개한 도구입니다.",
        en: "Core mechanisms extracted from a multi-agent setup I designed and run, where many Claude Code and Codex sessions coordinate through one Slack workspace."
      },
      problem: {
        ko: "에이전트끼리 서로 깨우며 끝없이 대화하면 한 번의 요청이 모델 호출 수십 번으로 불어나고, 채팅만으로는 작업 소유·검토 상태를 믿을 수 없습니다.",
        en: "Agents that wake each other can turn one request into dozens of paid model turns, and chat history is not a reliable record of who owns or reviewed a task."
      },
      role: [
        { ko: "'깊이 1' 규칙 설계: 사람 메시지 1건당 에이전트 간 전달은 최대 1단계 (+ 상한·긴급 정지·부재 정지·shadow 모드)", en: "Designed the depth-1 rule: one human message allows at most one agent-to-agent hop (plus caps, kill switch, absent pause, shadow mode)" },
        { ko: "봇 하나로 에이전트별 이름·아이콘 게시, 일이 있을 때만 세션을 깨우는 감시기 (스레드 답글·빈 구간 메우기·꺼진 감시 대신 받기·코드 변경 시 자동 재시작)", en: "One bot posting as many personas; a watcher that wakes a session only when there is work (thread replies, gap backfill, offline cover, auto-restart on code change)" },
        { ko: "받은편지함 라우팅: 대표 감시 하나만 Slack을 읽고 나머지 에이전트는 파일로 받아 API 한도·토큰 노출을 줄임", en: "File-inbox routing: one router reads Slack, other agents receive via atomic file delivery with no token and no API calls" },
        { ko: "Codex·Claude 공용 SQLite 작업 대장: 낙관적 동시성, 파일 범위 잠금, 해시 고정 보고서, 자기 검토 금지", en: "Shared SQLite task ledger: optimistic concurrency, file-scope locks, hash-pinned reports, no self-review" },
        { ko: "구현은 Claude Code·Codex 에이전트에게 맡기고 설계·검토·운영을 지휘", en: "Directed AI coding agents for implementation while owning design, review and operation" }
      ],
      metrics: [
        { value: "≤ 1 hop", label: { ko: "사람 요청당 에이전트 연쇄", en: "agent hops per human request" } },
        { value: "56", label: { ko: "오프라인 테스트 (CI)", en: "offline tests (CI)" } },
        { value: "0", label: { ko: "외부 의존성", en: "runtime dependencies" } }
      ],
      links: [{ href: "https://github.com/son2240/slack-agent-orchestration", label: { ko: "GitHub 코드", en: "Code on GitHub" } }],
      tags: ["Claude Code", "Codex", "Multi-agent", "Slack API", "Python", "SQLite"]
    }
  ],

  // 기술 스택 묶음 (예: { group: { ko: "언어", en: "Languages" }, items: ["Python"] })
  skills: [],

  // 이력·활동 (예: { when: "2026.03 –", what: {ko,en}, desc: {ko,en} })
  timeline: []
};
