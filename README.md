# FinGate Homepage - Quick Guide

## 문서
- Scroll: `docs/scroll.md`
- Layout: `docs/layout.md`
- Animations: `docs/animations.md`

# FinGate 홈페이지

보험을 가장 잘 아는 인슈어테크 기업 FinGate의 공식 홈페이지입니다.

## 🚀 프로젝트 개요

이 프로젝트는 Nuxt.js 3를 기반으로 구축된 현대적인 기업 홈페이지로, GSAP 애니메이션과 반응형 디자인을 통해 사용자에게 매력적인 경험을 제공합니다.

## ✨ 주요 기능

### 🎨 애니메이션 시스템
- **GSAP 기반 애니메이션**: 부드럽고 자연스러운 스크롤 기반 애니메이션
- **카드 스프레드 애니메이션**: 중앙에서 퍼져나가는 카드 레이아웃
- **텍스트 마스크 애니메이션**: 연극의 장막이 올라가는 듯한 텍스트 등장 효과
- **스크롤 다운 인디케이터**: 무한 반복되는 스크롤 가이드 애니메이션

### 🎯 컴포넌트 구조
- **MainHero**: 비디오 배경과 메인 타이틀
- **MainCompany**: 회사 소개 및 서비스 카드 레이아웃
- **MainServices**: 서비스 소개 섹션
- **MainPartners**: 파트너사 소개
- **MainVision**: 비전 및 미래 계획
- **MainBanner**: CTA 배너

### 🎨 디자인 시스템
- **Poppins 폰트**: 메인 타이틀용 현대적인 폰트
- **Pretendard Variable**: 본문용 한글 최적화 폰트
- **SCSS 모듈화**: 변수, 믹스인, 컴포넌트별 스타일 분리
- **반응형 디자인**: 모바일부터 데스크톱까지 완벽 대응

## 🛠 기술 스택

### 프론트엔드
- **Nuxt.js 3.8.0**: Vue.js 기반 풀스택 프레임워크
- **Vue 3.4.0**: 컴포지션 API 기반 프론트엔드 프레임워크
- **TypeScript 5.3.0**: 타입 안전성 보장
- **SCSS**: CSS 전처리기

### 애니메이션 & UX
- **GSAP 3.13.0**: 고성능 애니메이션 라이브러리
- **Lenis 1.3.11**: 부드러운 스크롤 라이브러리
- **ScrollTrigger**: 스크롤 기반 애니메이션 트리거

### 상태 관리 & 유틸리티
- **Pinia 2.1.7**: Vue 상태 관리
- **VueUse**: Vue 컴포지션 유틸리티
- **EmailJS**: 클라이언트 사이드 이메일 전송

## 📁 프로젝트 구조

```
office_homepage/
├── assets/
│   └── scss/
│       ├── main.scss          # 메인 SCSS 파일
│       ├── _variables.scss    # 색상, 폰트, 간격 변수
│       ├── _mixins.scss       # 재사용 가능한 믹스인
│       ├── _base.scss         # 기본 스타일 및 공통 애니메이션
│       └── _pages.scss        # 페이지별 스타일
├── components/
│   ├── layout/                # 레이아웃 컴포넌트
│   └── pages/
│       └── main/              # 메인 페이지 컴포넌트
│           ├── MainHero.vue
│           ├── MainCompany.vue
│           ├── MainServices.vue
│           ├── MainPartners.vue
│           ├── MainVision.vue
│           └── MainBanner.vue
├── pages/
│   ├── index.vue             # 메인 페이지
│   ├── company.vue           # 회사 소개
│   ├── services/             # 서비스 페이지
│   ├── newvision.vue         # 비전 페이지
│   └── contact.vue           # 연락처 페이지
├── plugins/
│   ├── gsap-animations.client.js  # GSAP 애니메이션 플러그인
│   └── lenis.client.js            # 부드러운 스크롤 플러그인
├── config/
│   └── site.ts               # 사이트 설정
└── public/
    └── images/               # 이미지 리소스
```

## 🎬 애니메이션 시스템

### 애니메이션 클래스
- **`.fade-in`**: 기본 페이드인 애니메이션 (아래에서 위로)
- **`.fade-in-delayed`**: 지연된 페이드인 (hero-title 완료 후)
- **`.fade-out-delayed`**: 지연된 페이드아웃 (위에서 아래로)
- **`.fade-in-left`**: 왼쪽에서 오른쪽으로 슬라이드
- **`.fade-in-right`**: 오른쪽에서 왼쪽으로 슬라이드
- **`.mask-reveal-up`**: 마스크 효과로 텍스트 등장
- **`.scroll-dot-bounce`**: 스크롤 다운 점 애니메이션
- **`.cards-spread-out`**: 카드 중앙에서 퍼져나가는 애니메이션

### 애니메이션 타이밍
```javascript
// MainCompany 섹션 애니메이션 순서
1. hero-title (fade-in) → 즉시 시작
2. hero-subtitle (fade-in-delayed) → 1.0초 후 시작
3. hero-desc (fade-out-delayed) → 1.2초 후 시작
4. company-cards (cards-spread-out) → 0.7초 후 시작
```

## 🎨 스타일링 시스템

### 색상 팔레트
```scss
// 주요 색상
$color-primary: #00A8B5;        // 메인 브랜드 컬러
$color-secondary: #1A1A1A;      // 보조 컬러
$color-text-white: #FFFFFF;      // 흰색 텍스트
$color-text-gray: #767676;      // 회색 텍스트
```

### 폰트 시스템
```scss
// 폰트 패밀리
$font-family-primary: 'Pretendard Variable', sans-serif;
$font-family-secondary: 'Poppins', sans-serif;
$font-family-poppins: 'Poppins', sans-serif;
```

### 간격 시스템
```scss
// 간격 변수
$spacing-xs: 0.8rem;
$spacing-sm: 1.2rem;
$spacing-md: 1.6rem;
$spacing-lg: 2.4rem;
$spacing-xl: 3.2rem;
$spacing-2xl: 4.8rem;
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 미리보기
npm run preview
```

### 사용 가능한 스크립트

```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run generate     # 정적 사이트 생성
npm run preview      # 빌드된 사이트 미리보기
npm run clean        # 빌드 캐시 정리
npm run type-check   # TypeScript 타입 체크
```

## 📱 반응형 디자인

### 브레이크포인트
```scss
$breakpoint-mobile: 768px;
$breakpoint-tablet: 1024px;
$breakpoint-desktop: 1200px;
```

### 반응형 믹스인
```scss
@include responsive(md) {
  // 태블릿 스타일
}

@include responsive(sm) {
  // 모바일 스타일
}
```

## 🎯 주요 컴포넌트

### MainCompany 컴포넌트
회사 소개 섹션으로, 중앙에서 퍼져나가는 카드 레이아웃이 특징입니다.

**특징:**
- 5개의 서비스 카드가 중앙에서 각자의 위치로 퍼져나가는 애니메이션
- SCSS에서 시작점 관리, GSAP에서 최종점 애니메이션
- 호버 시 이미지 확대 효과
- 클릭 시 해당 서비스 페이지로 이동

**애니메이션 타이밍:**
- 텍스트 등장 → 카드 애니메이션 순서로 자연스러운 플로우

### MainHero 컴포넌트
메인 히어로 섹션으로, 비디오 배경과 텍스트 마스크 애니메이션이 특징입니다.

**특징:**
- 비디오 배경 (fallback 이미지 지원)
- 그라데이션 오버레이
- 마스크 효과로 텍스트 등장
- 스크롤 다운 인디케이터

## 🔧 커스터마이징

### 애니메이션 타이밍 조정
`plugins/gsap-animations.client.js`에서 애니메이션 타이밍을 조정할 수 있습니다:

```javascript
// 지연 시간 조정
delay: 1.0 + (index * 0.2)

// 애니메이션 지속 시간 조정
duration: 1.5

// 이징 함수 변경
ease: "power2.out"
```

### 카드 위치 조정
`assets/scss/_pages.scss`에서 카드의 최종 위치를 조정할 수 있습니다:

```scss
.company-card-1 {
  transform: translate(-10px, -300px);
}
```

### 색상 테마 변경
`assets/scss/_variables.scss`에서 브랜드 색상을 변경할 수 있습니다:

```scss
$color-primary: #00A8B5;  // 메인 브랜드 컬러
```

## 📄 라이선스

이 프로젝트는 FinGate의 소유입니다.

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면 다음 단계를 따르세요:

1. 프로젝트를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

## 📞 연락처

- **이메일**: contact@fingate.co.kr
- **전화**: 02-1234-5678
- **주소**: 서울특별시 강남구 테헤란로 123

---

**FinGate** - 보험을 가장 잘 아는 인슈어테크 기업