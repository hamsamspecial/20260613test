# design.md

# EduHub - Design System & UI Guideline

> EduHub 학습 웹앱 포털의 디자인 시스템 문서.
> Modern · Minimal · Rounded · Soft Shadow · Material + Apple 디자인 혼합.

---

## 1. 디자인 원칙

| 원칙 | 설명 |
|---|---|
| **Clarity** | 학생·교사 누구나 3초 안에 원하는 앱을 찾을 수 있어야 한다. |
| **Calm** | 자극적 색·애니메이션 지양. 학습 환경에 어울리는 차분한 톤. |
| **Consistency** | 모든 카드·버튼·간격은 동일한 토큰을 따른다. |
| **Accessibility** | WCAG 2.1 AA 기준. 색 대비 4.5:1 이상, 키보드 네비게이션 지원. |
| **Responsive First** | 모바일 → 태블릿 → 데스크탑 순으로 설계. |

---

## 2. 컬러 시스템

### 2.1 Light Mode

| 토큰 | HEX | 용도 |
|---|---|---|
| `--primary` | `#2563EB` | 주요 버튼, 링크, 강조 |
| `--primary-hover` | `#1D4ED8` | Hover 상태 |
| `--primary-soft` | `#DBEAFE` | 배경 강조, 태그 |
| `--background` | `#F8FAFC` | 페이지 배경 |
| `--surface` | `#FFFFFF` | 카드, 모달, Sidebar |
| `--border` | `#E5E7EB` | 1px 구분선 |
| `--text-primary` | `#111827` | 본문, 제목 |
| `--text-secondary` | `#4B5563` | 보조 텍스트 |
| `--text-muted` | `#9CA3AF` | 비활성, 캡션 |

### 2.2 Dark Mode

| 토큰 | HEX | 용도 |
|---|---|---|
| `--primary` | `#3B82F6` | 강조 |
| `--background` | `#0F172A` | 배경 |
| `--surface` | `#1E293B` | 카드 |
| `--border` | `#334155` | 구분선 |
| `--text-primary` | `#F1F5F9` | 본문 |
| `--text-secondary` | `#CBD5E1` | 보조 |

### 2.3 Semantic Colors

| 의미 | Light | Dark | 용도 |
|---|---|---|---|
| Success | `#10B981` | `#34D399` | 저장 완료, 무료 뱃지 |
| Warning | `#F59E0B` | `#FBBF24` | 유료, 로그인 필요 |
| Danger | `#EF4444` | `#F87171` | 삭제, 오류 |
| Info | `#0EA5E9` | `#38BDF8` | 안내, 신규 |

### 2.4 카테고리 컬러 (Soft 톤)

| 카테고리 | 배경 | 텍스트 |
|---|---|---|
| AI | `#EDE9FE` | `#6D28D9` |
| 퀴즈 | `#FEF3C7` | `#B45309` |
| 평가 | `#DBEAFE` | `#1D4ED8` |
| 영상 | `#FCE7F3` | `#BE185D` |
| 협업 | `#D1FAE5` | `#047857` |
| 디자인 | `#FFE4E6` | `#BE123C` |
| 코딩 | `#E0E7FF` | `#4338CA` |
| 수학 | `#CCFBF1` | `#0F766E` |
| 과학 | `#DCFCE7` | `#15803D` |
| 언어 | `#FEE2E2` | `#B91C1C` |
| 음악 | `#F3E8FF` | `#7E22CE` |
| 미술 | `#FFEDD5` | `#C2410C` |
| 특수교육 | `#E0F2FE` | `#0369A1` |

---

## 3. 타이포그래피

### 3.1 폰트 패밀리

```css
--font-sans: "Pretendard", -apple-system, BlinkMacSystemFont,
             "Segoe UI", "Apple SD Gothic Neo", sans-serif;
--font-mono: "JetBrains Mono", "D2Coding", monospace;
```

### 3.2 스케일

| 토큰 | Size | Line | Weight | 용도 |
|---|---|---|---|---|
| `display` | 36px | 44px | 700 | 첫 화면 Hero |
| `h1` | 28px | 36px | 700 | 페이지 제목 |
| `h2` | 22px | 30px | 600 | 섹션 제목 |
| `h3` | 18px | 26px | 600 | 카드 제목 |
| `body` | 14px | 22px | 400 | 본문 |
| `small` | 13px | 20px | 400 | 보조 |
| `caption` | 12px | 18px | 500 | 태그, 라벨 |

---

## 4. 간격 / 레이아웃

### 4.1 Spacing Token (4px 기반)

| 토큰 | px |
|---|---|
| `space-1` | 4 |
| `space-2` | 8 |
| `space-3` | 12 |
| `space-4` | 16 |
| `space-5` | 24 |
| `space-6` | 32 |
| `space-7` | 48 |
| `space-8` | 64 |

### 4.2 Radius

| 토큰 | 값 | 용도 |
|---|---|---|
| `radius-sm` | 6px | 태그, 인풋 |
| `radius-md` | 12px | 버튼 |
| `radius-lg` | 16px | 카드 (기본) |
| `radius-xl` | 24px | Hero Banner, 모달 |
| `radius-full` | 9999px | 아바타 |

### 4.3 Shadow

```css
--shadow-sm:  0 1px 2px  rgba(15, 23, 42, 0.04);
--shadow-md:  0 4px 12px rgba(15, 23, 42, 0.06);
--shadow-lg:  0 12px 24px rgba(15, 23, 42, 0.08);
--shadow-hover: 0 8px 20px rgba(37, 99, 235, 0.12);
```

### 4.4 그리드

| 디바이스 | Width | Columns | Gutter |
|---|---|---|---|
| Mobile | ≤ 640px | 1열 | 16px |
| Tablet | 641 ~ 1024 | 2열 | 20px |
| Desktop | 1025 ~ 1440 | 3~4열 | 24px |
| Wide | 1441+ | 4~5열 | 24px |

---

## 5. 레이아웃 구조

### 5.1 전체 프레임

```
┌──────────────────────────────────────────────────────────┐
│ Top Navigation  (64px, sticky)                           │
├──────────────┬───────────────────────────────────────────┤
│              │                                           │
│  Sidebar     │   Main Content                            │
│  240px       │   max-width 1280px, padding 24px          │
│  (접힘 64px) │                                           │
│              │                                           │
└──────────────┴───────────────────────────────────────────┘
```

| 영역 | 크기 |
|---|---|
| Top Nav 높이 | 64px |
| Sidebar 너비 | 240px (펼침) / 64px (접힘) |
| Main padding | 24px (desktop), 16px (mobile) |
| Section 간격 | 48px |

### 5.2 Z-index

| 레이어 | z |
|---|---|
| Base | 0 |
| Sidebar | 20 |
| Top Nav | 30 |
| Dropdown / Tooltip | 40 |
| Modal Overlay | 50 |
| Modal | 60 |
| Toast | 70 |

---

## 6. 컴포넌트

### 6.1 Button

| 종류 | 배경 | 텍스트 | 사용처 |
|---|---|---|---|
| Primary | `--primary` | `#FFF` | 저장, 바로가기 |
| Secondary | `--surface` + border | `--text-primary` | 취소, 보조 |
| Ghost | transparent | `--text-primary` | 네비, 아이콘 |
| Danger | `--danger` | `#FFF` | 삭제 |

```
Size    Height  Padding   Font
sm      32px    0 12px    13px
md      40px    0 16px    14px  ← 기본
lg      48px    0 20px    15px
```

### 6.2 Input / Search

```
Height  44px
Border  1px solid var(--border)
Radius  12px
Focus   border var(--primary) + ring 3px rgba(37,99,235,0.15)
```

검색창은 좌측에 아이콘(20px), 우측에 클리어 버튼.

### 6.3 웹앱 카드 (가장 중요)

```
크기        320 × 220
배경        var(--surface)
Border      1px solid var(--border)
Radius      16px
Padding     16px
Shadow      var(--shadow-sm)

Hover
  ├─ scale 1.03
  ├─ shadow var(--shadow-hover)
  └─ transition 200ms ease-out
```

내부 레이아웃

```
┌───────────────────────────────────┐
│ [48x48 아이콘]    [♥ 즐겨찾기]    │ ← 12px gap
│                                   │
│ ChatGPT                           │ ← h3 18/600
│ 대화형 AI 도우미...               │ ← body 14/400, 1줄 ellipsis
│                                   │
│ ★ 4.6  · 12k                      │ ← small 13
│                                   │
│ [AI] [무료] [영어]                │ ← 태그 caption
│                                   │
│              [바로가기 →]         │ ← primary sm
└───────────────────────────────────┘
```

### 6.4 Hero Banner

| 속성 | 값 |
|---|---|
| Height | 280px (desktop), 200px (mobile) |
| Radius | 24px |
| 배경 | 카테고리 컬러 soft + 일러스트 |
| 자동 슬라이드 | 5초 |
| 인디케이터 | 하단 중앙, 4px 도트 |

### 6.5 Sidebar

```
폭            240px / 64px(접힘)
배경         var(--surface)
Border-right 1px var(--border)
Item Height  44px
Padding      0 16px
아이콘       20px

활성 상태
  ├─ 배경 var(--primary-soft)
  ├─ 좌측 3px var(--primary) bar
  └─ 텍스트 var(--primary), weight 600
```

### 6.6 Modal

| 속성 | 값 |
|---|---|
| Width | 480px (sm), 640px (md), 800px (lg) |
| Radius | 24px |
| Padding | 24px |
| Overlay | `rgba(15,23,42,0.4)` + blur 4px |
| Close | 우측 상단 X, 32×32 |

### 6.7 Toast

- 우측 하단 고정, 24px 여백
- 폭 320px, 자동 종료 3초
- 종류: success / warning / danger / info

### 6.8 Badge / Tag

```
Height      24px
Padding     0 8px
Radius      6px
Font        12/500
무료        bg #D1FAE5  fg #047857
유료        bg #FEF3C7  fg #B45309
로그인 필요 bg #FEE2E2  fg #B91C1C
```

---

## 7. 아이콘

- 라이브러리: **lucide-react**
- 사이즈: 16 / 20 / 24px
- 두께: 1.5px
- 색: 텍스트 색 상속 (currentColor)

| 영역 | 아이콘 |
|---|---|
| Home | `Home` |
| 추천 | `Sparkles` |
| AI | `Bot` |
| 과목 | `BookOpen` |
| 만들기 | `Palette` |
| 평가 | `ClipboardCheck` |
| 게임 | `Gamepad2` |
| 영상 | `Video` |
| 협업 | `Users` |
| 특수교육 | `Accessibility` |
| 즐겨찾기 | `Heart` |
| 최근 사용 | `Clock` |
| 설정 | `Settings` |

---

## 8. 모션 / 인터랙션

| 동작 | Duration | Easing |
|---|---|---|
| Hover (card, button) | 200ms | ease-out |
| Modal 등장 | 240ms | cubic-bezier(0.2, 0.8, 0.2, 1) |
| Sidebar 접기 | 220ms | ease-in-out |
| Hero 슬라이드 | 600ms | ease-in-out |
| Skeleton shimmer | 1200ms | linear infinite |

원칙
- 200~300ms 사이를 기본으로 한다.
- 페이지 진입 애니메이션은 **사용하지 않음** (Calm 원칙).
- 모션은 정보를 전달할 때만 사용한다.

---

## 9. 상태 (State)

### 9.1 로딩
- 카드 자리 **Skeleton** (회색 박스 + shimmer)
- 전체 페이지 로딩은 사용하지 않음

### 9.2 빈 상태 (Empty)

```
┌──────────────────────────────────┐
│        [일러스트 120×120]        │
│   아직 즐겨찾기한 앱이 없어요    │
│   마음에 드는 앱에 ♥를 눌러보세요│
│        [추천 앱 보러가기]         │
└──────────────────────────────────┘
```

### 9.3 에러
- 카드 단위 에러: 카드 내부에 `다시 시도` 버튼
- 페이지 에러: 중앙 정렬 메시지 + 홈으로 이동 버튼

---

## 10. 다크 모드 전환

- Top Nav의 아이콘 토글 (`Sun` / `Moon`)
- `localStorage.eduhub_theme` 저장
- 시스템 설정 자동 감지 (`prefers-color-scheme`)
- 전환 시 `transition: background-color 200ms`

---

## 11. 접근성 (A11y)

| 항목 | 기준 |
|---|---|
| 색 대비 | 본문 4.5:1, 큰 텍스트 3:1 이상 |
| 포커스 링 | `outline: 2px solid var(--primary); offset 2px` |
| 키보드 | Tab / Shift+Tab / Enter / Esc 지원 |
| 스크린리더 | 모든 아이콘 버튼에 `aria-label` |
| 모션 줄임 | `prefers-reduced-motion` 감지 시 애니메이션 제거 |
| 폼 라벨 | `<label for>` 또는 `aria-labelledby` 필수 |

---

## 12. 관리자(Admin) 화면 디자인

### 12.1 톤
- 사용자 페이지보다 **정보 밀도 높음**
- 컬러는 절제, 강조는 Primary 한 색만 사용
- Table 위주 레이아웃

### 12.2 관리자 진입 모달

```
┌──────────────────────────┐
│  관리자 인증              │
│                          │
│  관리자 코드              │
│  [ ________________ ]    │
│                          │
│  [취소]      [확인]      │
└──────────────────────────┘
```

- 입력은 `type="password"`
- 3회 실패 시 30초 잠금

### 12.3 Admin Table

| 컬럼 | 정렬 | 폭 |
|---|---|---|
| # | 우측 | 48 |
| 썸네일 | 중앙 | 64 |
| 이름 | 좌측 | flex |
| 카테고리 | 좌측 | 120 |
| 링크 | 좌측 | 200 (ellipsis) |
| 추천 | 중앙 | 64 |
| 수정/삭제 | 중앙 | 96 |

행 Hover 시 배경 `--background`.

### 12.4 폼 (등록/수정)

- 2열 그리드 (modal lg, 800px)
- 필수 필드는 라벨 옆 `*` 빨강
- 썸네일 영역: 200×200 미리보기 + 드래그앤드롭 박스
- 하단 고정 Footer: `취소` / `저장` 버튼

---

## 13. 일러스트 / 이미지 가이드

- 스타일: 플랫 + 한 톤 그라데이션 허용
- 메인 컬러는 `--primary` 계열로 통일
- 인물 표현 시 다양성 고려 (성별·연령·장애)
- 포맷: SVG 우선, 폴백 PNG@2x
- Empty/Error 일러스트: 120×120 또는 200×200

---

## 14. 콘텐츠 톤 (Voice & Tone)

| 상황 | 톤 |
|---|---|
| 기본 안내 | 친근한 존댓말. "~해요" |
| 오류 | 책임 전가 X. "잠시 후 다시 시도해 주세요." |
| 빈 상태 | 긍정적·행동 유도형 |
| 관리자 | 간결한 평어체. "저장됨", "삭제 완료" |

금지
- 명령형 ("눌러라")
- 과장 ("최고의", "혁신적인")
- 이모지 남용 (라벨·제목에 사용 금지)

---

## 15. 디자인 토큰 요약 (CSS)

```css
:root {
  /* Color */
  --primary: #2563EB;
  --primary-hover: #1D4ED8;
  --primary-soft: #DBEAFE;
  --background: #F8FAFC;
  --surface: #FFFFFF;
  --border: #E5E7EB;
  --text-primary: #111827;
  --text-secondary: #4B5563;
  --text-muted: #9CA3AF;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  /* Shadow */
  --shadow-sm: 0 1px 2px rgba(15,23,42,0.04);
  --shadow-md: 0 4px 12px rgba(15,23,42,0.06);
  --shadow-lg: 0 12px 24px rgba(15,23,42,0.08);
  --shadow-hover: 0 8px 20px rgba(37,99,235,0.12);

  /* Spacing */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;
  --space-4: 16px; --space-5: 24px; --space-6: 32px;
  --space-7: 48px; --space-8: 64px;

  /* Typography */
  --font-sans: "Pretendard", -apple-system, BlinkMacSystemFont, sans-serif;
}

[data-theme="dark"] {
  --primary: #3B82F6;
  --background: #0F172A;
  --surface: #1E293B;
  --border: #334155;
  --text-primary: #F1F5F9;
  --text-secondary: #CBD5E1;
}
```

---

## 16. 체크리스트 (디자인 QA)

배포 전 확인.

- [ ] 모든 텍스트 대비 4.5:1 이상
- [ ] 카드 Hover/Focus 상태 일관
- [ ] Mobile 1열 / Tablet 2열 / Desktop 4열 확인
- [ ] 다크모드 모든 페이지 적용
- [ ] 키보드만으로 모든 기능 접근 가능
- [ ] 빈 상태 / 에러 / 로딩 화면 존재
- [ ] 카테고리 컬러 충돌 없음
- [ ] 관리자 페이지와 사용자 페이지 톤 분리
- [ ] `prefers-reduced-motion` 대응
- [ ] 아이콘에 `aria-label` 누락 없음
