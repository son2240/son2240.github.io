// =====================================================================
//  Site content. Edit it with the site editor (projects/site_editor),
//  or by hand: it is plain JSON after `window.SITE =`.
//  Text is written as { "ko": "...", "en": "..." } for both languages.
//  Sections whose list is empty ([]) are hidden on the site.
// =====================================================================
window.SITE = {
  "profile": {
    "name": {
      "ko": "이름",
      "en": "Your Name"
    },
    "photo": {
      "src": "",
      "alt": {
        "ko": "",
        "en": ""
      }
    },
    "eyebrow": {
      "ko": "KENTECH 재학생",
      "en": "Student at KENTECH"
    },
    "headline": {
      "ko": "한 줄 소개를 적어 주세요.",
      "en": "Write a one-line introduction here."
    },
    "lead": {
      "ko": "무엇을 공부하고, 어떤 문제를 풀고 싶은지 2~3문장으로 적습니다.",
      "en": "Two or three sentences about what you study and the problems you want to solve."
    },
    "github": "https://github.com/son2240",
    "email": "sondong0422@kentech.ac.kr",
    "cv": "",
    "linkedin": ""
  },
  "highlights": [],
  "about": {
    "paragraphs": [
      {
        "ko": "자기소개 문단을 적어 주세요.",
        "en": "Write an about paragraph here."
      }
    ],
    "facts": [
      {
        "k": {
          "ko": "소속",
          "en": "School"
        },
        "v": {
          "ko": "KENTECH (한국에너지공과대학교)",
          "en": "KENTECH (Korea Institute of Energy Technology)"
        }
      },
      {
        "k": {
          "ko": "GitHub",
          "en": "GitHub"
        },
        "v": {
          "ko": "son2240",
          "en": "son2240"
        },
        "href": "https://github.com/son2240"
      }
    ]
  },
  "projects": [
    {
      "featured": true,
      "kind": {
        "ko": "AI 에이전트",
        "en": "AI Agents"
      },
      "period": "2026",
      "title": {
        "ko": "Slack 기반 AI 코딩 에이전트 협업 시스템",
        "en": "Slack Orchestration for AI Coding Agents"
      },
      "summary": {
        "ko": "Claude Code·Codex 세션 여러 개가 Slack 하나로 협업하도록 직접 설계·운영한 환경에서 핵심 구조를 떼어 공개한 도구입니다.",
        "en": "Core mechanisms extracted from a multi-agent setup I designed and run, where many Claude Code and Codex sessions coordinate through one Slack workspace."
      },
      "problem": {
        "ko": "에이전트끼리 서로 깨우며 끝없이 대화하면 한 번의 요청이 모델 호출 수십 번으로 불어나고, 채팅만으로는 작업 소유·검토 상태를 믿을 수 없습니다.",
        "en": "Agents that wake each other can turn one request into dozens of paid model turns, and chat history is not a reliable record of who owns or reviewed a task."
      },
      "role": [
        {
          "ko": "'깊이 1' 규칙 설계: 사람 메시지 1건당 에이전트 간 전달은 최대 1단계 (+ 상한·긴급 정지·부재 정지·shadow 모드)",
          "en": "Designed the depth-1 rule: one human message allows at most one agent-to-agent hop (plus caps, kill switch, absent pause, shadow mode)"
        },
        {
          "ko": "봇 하나로 에이전트별 이름·아이콘 게시, 일이 있을 때만 세션을 깨우는 감시기 (스레드 답글·빈 구간 메우기·꺼진 감시 대신 받기·코드 변경 시 자동 재시작)",
          "en": "One bot posting as many personas; a watcher that wakes a session only when there is work (thread replies, gap backfill, offline cover, auto-restart on code change)"
        },
        {
          "ko": "받은편지함 라우팅: 대표 감시 하나만 Slack을 읽고 나머지 에이전트는 파일로 받아 API 한도·토큰 노출을 줄임",
          "en": "File-inbox routing: one router reads Slack, other agents receive via atomic file delivery with no token and no API calls"
        },
        {
          "ko": "Codex·Claude 공용 SQLite 작업 대장: 낙관적 동시성, 파일 범위 잠금, 해시 고정 보고서, 자기 검토 금지",
          "en": "Shared SQLite task ledger: optimistic concurrency, file-scope locks, hash-pinned reports, no self-review"
        },
        {
          "ko": "구현은 Claude Code·Codex 에이전트에게 맡기고 설계·검토·운영을 지휘",
          "en": "Directed AI coding agents for implementation while owning design, review and operation"
        }
      ],
      "metrics": [
        {
          "value": "≤ 1 hop",
          "label": {
            "ko": "사람 요청당 에이전트 연쇄",
            "en": "agent hops per human request"
          }
        },
        {
          "value": "56",
          "label": {
            "ko": "오프라인 테스트 (CI)",
            "en": "offline tests (CI)"
          }
        },
        {
          "value": "0",
          "label": {
            "ko": "외부 의존성",
            "en": "runtime dependencies"
          }
        }
      ],
      "links": [
        {
          "href": "https://github.com/son2240/slack-agent-orchestration",
          "label": {
            "ko": "GitHub 코드",
            "en": "Code on GitHub"
          }
        }
      ],
      "tags": [
        "Claude Code",
        "Codex",
        "Multi-agent",
        "Slack API",
        "Python",
        "SQLite"
      ],
      "image": {
        "src": "",
        "alt": {
          "ko": "",
          "en": ""
        }
      }
    },
    {
      "featured": true,
      "kind": {
        "ko": "웹 도구",
        "en": "Web tool"
      },
      "period": "2026",
      "title": {
        "ko": "사이트 편집기 — 클릭해서 고치고, 확인한 뒤 공개하는 웹사이트 편집 도구",
        "en": "Site Editor — click-to-edit websites, published after review"
      },
      "summary": {
        "ko": "HTML을 몰라도 이미 있는 웹사이트를 마우스로 고치고, 바뀐 내용을 확인한 뒤 GitHub Pages·SFTP·FTP 서버에 올리는 로컬 앱입니다. 화면은 한국어·영어를 지원합니다.",
        "en": "A local app that lets anyone edit an existing website with the mouse and publish it to GitHub Pages, SFTP or FTP after reviewing the changes. Interface in English and Korean."
      },
      "problem": {
        "ko": "웹페이지를 처음 다루는 사람은 글자나 여백 하나를 바꾸려 해도 HTML·CSS와 배포 명령을 알아야 하고, 실수하면 공개 사이트가 바로 깨집니다.",
        "en": "Changing one word or margin usually requires HTML/CSS and deploy commands, and a mistake breaks the live site immediately."
      },
      "role": [
        {
          "ko": "Google Docs 같은 홈 화면: 예시 사이트, PC 폴더 열기, 폴더·zip 업로드, 인터넷 주소로 가져오기(같은 사이트의 링크를 따라가며 복사하고 링크를 상대 경로로 변환)",
          "en": "Docs-like home screen: example site, open a folder, upload folder/zip, import a live site by URL (same-site crawl with links rewritten to relative paths)"
        },
        {
          "ko": "블록식 시각 편집: 손잡이로 크기 조정(스냅·가이드선), 끌어서 순서 바꾸기, 제자리 글자 편집과 떠 있는 서식 막대. 원본 HTML은 바뀐 부분만 고치고 디자인은 CSS 규칙 파일로",
          "en": "Block-style visual editing: resize handles with snapping and guides, drag to reorder, in-place text with a floating format bar. Only the edited bytes of the HTML change; design goes into one CSS rule file"
        },
        {
          "ko": "안전한 공개 과정: 변경 비교 → 비밀값 검사 → 사용자 확인 → 서버 백업 → 업로드 → 공개 주소 바이트 대조 → 한 단계 되돌리기",
          "en": "Safe publishing: diff review → secret scan → explicit confirmation → server backup → upload → byte-for-byte live check → one-step rollback"
        },
        {
          "ko": "자동 저장과 저장 뒤에도 되는 실행 취소, 비밀번호는 OS 자격 증명 저장소에만, 127.0.0.1 전용 + 세션 토큰",
          "en": "Autosave with undo across saves, passwords only in the OS credential store, localhost-only with a session token"
        },
        {
          "ko": "AI 코딩 에이전트(Claude Code)와 함께 설계·구현하고 테스트로 검증",
          "en": "Designed and built together with an AI coding agent (Claude Code), verified with tests"
        }
      ],
      "metrics": [
        {
          "value": "67",
          "label": {
            "ko": "오프라인 테스트 (CI)",
            "en": "offline tests (CI)"
          }
        },
        {
          "value": "4",
          "label": {
            "ko": "공개 방식 (GitHub Pages·SFTP·FTP·폴더)",
            "en": "publish targets (GitHub Pages · SFTP · FTP · folder)"
          }
        },
        {
          "value": "0",
          "label": {
            "ko": "외부 의존성",
            "en": "runtime dependencies"
          }
        }
      ],
      "links": [
        {
          "href": "https://github.com/son2240/site-editor",
          "label": {
            "ko": "GitHub 코드",
            "en": "Code on GitHub"
          }
        }
      ],
      "image": {
        "src": "",
        "alt": {
          "ko": "",
          "en": ""
        }
      },
      "tags": [
        "Python",
        "JavaScript",
        "Visual editor",
        "GitHub Pages",
        "SFTP",
        "i18n"
      ]
    }
  ],
  "skills": [],
  "timeline": []
};
