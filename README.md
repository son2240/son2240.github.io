# son2240 포트폴리오 사이트

빌드 없는 정적 사이트(HTML · CSS · JS)이고 GitHub Pages로 배포합니다.
주소: https://son2240.github.io (배포 뒤)

## 가장 쉬운 수정 방법: 사이트 편집기

이 사이트는 직접 만든 [사이트 편집기](https://github.com/son2240/site-editor)로 고칩니다. 편집기에서 이 폴더를 **열기**로 열고, 페이지를 클릭해 고친 뒤 **공개하기…**에서 바뀐 내용을 확인하고 올립니다. 아래는 파일을 직접 고칠 때의 안내입니다.

## 파일 구성

| 파일 | 내용 |
|---|---|
| `content.js` | **사이트 글은 전부 여기에 있습니다.** 이름, 소개, 프로젝트, 기술, 이력, 연락처 |
| `index.html` | 페이지 뼈대 (보통 고칠 일 없음) |
| `assets/style.css` | 디자인 (색은 맨 위 `:root` 토큰) |
| `assets/main.js` | 화면 그리기, 언어 전환(KO/EN), 다크 모드 |
| `assets/demo.js` | 디자인 확인용 가짜 예시. 주소 뒤에 `?demo`를 붙였을 때만 보입니다 |

- 글은 `{ ko: "한국어", en: "English" }` 형태로 두 언어를 함께 씁니다.
- 배열이 비어 있는 섹션(`projects: []` 등)은 메뉴와 함께 자동으로 숨겨집니다.
- 이력서 PDF는 `assets/cv.pdf`로 넣고 `profile.cv: "assets/cv.pdf"`로 지정합니다. 비워 두면 버튼이 숨겨집니다.

## 프로젝트 추가

`content.js`의 `projects: [ ... ]` 안에 아래 형식으로 넣습니다. 필요 없는 칸은 지우면 됩니다.

```js
{
  featured: true,                                   // 가로 전체 폭 대표 카드 (선택)
  kind: { ko: "연구", en: "Research" },             // 분류 — 2개 이상이면 필터 버튼이 생김
  period: "2026.03 – 2026.06",
  title: { ko: "제목", en: "Title" },
  summary: { ko: "한두 문장 요약", en: "..." },
  problem: { ko: "어떤 문제를 풀었나", en: "..." },
  role: [{ ko: "내가 한 일 1", en: "..." }, { ko: "내가 한 일 2", en: "..." }],
  metrics: [{ value: "0.998", label: { ko: "점수", en: "Score" } }],
  links: [{ href: "https://...", label: { ko: "코드", en: "Code" } }],   // 공개 링크만 넣기
  tags: ["Python", "PyTorch"]
}
```

`assets/demo.js`에 형식 예시가 모두 들어 있습니다.

## 로컬 미리보기

```bash
python -m http.server 8765 --directory projects/portfolio_site
```

브라우저에서 http://localhost:8765 를 엽니다. 예시 카드는 http://localhost:8765/?demo 에서 봅니다.

## 다시 배포

`main` 브랜치에 push하면 1~2분 뒤 사이트에 반영됩니다.

```bash
cd projects/portfolio_site
git add -A
git commit -m "Update portfolio"
git push
```

배포 상태 확인: `gh api repos/son2240/son2240.github.io/pages/builds/latest --jq .status`

## 주의

- 이 저장소는 **공개**입니다. 비공개 저장소 링크, 학번, 전화번호, 비밀값은 넣지 않습니다.
- `.gitignore`가 `.env`, 키 파일, 개인 메모(`private/`)를 막아 둡니다.
