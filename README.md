# 🏢 FinGate - 보험 인슈어테크 홈페이지

> 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 보험 IT 솔루션 기업

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.8.0-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.4.0-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02)](https://greensock.com/gsap/)

---

## ✨ 주요 특징

- ✅ **TypeScript 100%** - 완벽한 타입 안정성
- ✅ **GSAP 애니메이션** - 부드럽고 자연스러운 인터랙션
- ✅ **성능 최적화** - RAF, Throttle, Intersection Observer
- ✅ **이미지 최적화** - WebP/AVIF 자동 변환, Lazy loading
- ✅ **SEO 완벽 지원** - 메타태그, 사이트맵, 구조화된 데이터
- ✅ **반응형 디자인** - 모바일부터 데스크톱까지 완벽 대응

---

## 🚀 빠른 시작

```bash
# 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 정적 사이트 생성
npm run generate
```

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| **프레임워크** | Nuxt 3.8.0, Vue 3.4.0, TypeScript 5.3.0 |
| **애니메이션** | GSAP 3.13.0, Lenis 1.3.11 |
| **스타일** | SCSS, CSS Reset |
| **이미지** | @nuxt/image (WebP/AVIF) |
| **상태관리** | Pinia, VueUse |
| **이메일** | EmailJS |

---

## 📁 프로젝트 구조

```
office_homepage/
├── 📂 components/
│   ├── layout/        (Header, Footer)
│   └── pages/         (Main, Company, Contact, Services)
│
├── 📂 pages/
│   ├── index.vue      (메인)
│   ├── company.vue    (회사소개)
│   ├── contact.vue    (연락처)
│   └── services/      (서비스)
│
├── 📂 assets/scss/
│   ├── _variables.scss  (색상, 폰트, 간격)
│   ├── _mixins.scss     (재사용 믹스인)
│   ├── _base.scss       (CSS Reset, 공통)
│   └── _pages.scss      (페이지별 스타일)
│
├── 📂 config/
│   ├── seo.ts         (SEO 설정)
│   └── site.ts        (사이트 설정)
│
├── 📂 utils/
│   └── performance.ts (throttle, debounce, RAF)
│
└── 📂 scripts/
    ├── generate-sitemap.js
    └── generate-robots.js
```

---

## ⚡ 성능 최적화

### 적용된 최적화 기법

```typescript
✅ GSAP Context      // 메모리 누수 방지
✅ RAF               // 부드러운 DOM 업데이트
✅ Intersection Observer  // 지연 로딩
✅ Throttle          // 이벤트 최적화
✅ Code Splitting    // Vendor 분리
✅ Image Optimization // WebP/AVIF 변환
✅ Compression       // Gzip/Brotli
```

### Lighthouse 점수
- Performance: **90+**
- Accessibility: **95+**
- SEO: **100**

---

## 🎬 주요 컴포넌트

| 컴포넌트 | 설명 | 주요 기능 |
|---------|------|----------|
| **MainHero** | 메인 히어로 | 비디오 배경, 마스크 텍스트 애니메이션 |
| **MainCompany** | 회사 소개 | 카드 분산 애니메이션, 커스텀 커서 |
| **MainVision** | 비전 | 순차 등장, Hover 효과 |
| **ContactForm** | 연락 폼 | Toast 알림, Loading 상태, EmailJS |

---

## 🔍 SEO

### 자동 생성 파일

```bash
npm run generate:sitemap  # sitemap.xml 생성
npm run generate:robots   # robots.txt 생성
```

### SEO 사용법

```typescript
// 페이지별 SEO 적용
const seoData = useSEO('index')
useHead(seoData)
```

---

## 🎨 스타일 가이드

### 색상
```scss
$color-primary: #00A8B5;     // 메인 브랜드
$color-text-white: #FFFFFF;   // 흰색 텍스트
$color-text-gray: #767676;   // 회색 텍스트
```

### 간격
```scss
$spacing-sm: 1.2rem;  // 12px
$spacing-md: 1.6rem;  // 16px
$spacing-lg: 2.4rem;  // 24px
$spacing-xl: 3.2rem;  // 32px
```

### 반응형
```scss
@include responsive(md) { /* 태블릿 */ }
@include responsive(sm) { /* 모바일 */ }
```

---

## 📦 사용 가능한 스크립트

```bash
npm run dev              # 개발 서버
npm run build            # 프로덕션 빌드 (SEO 파일 자동 생성)
npm run generate         # 정적 사이트 생성
npm run preview          # 빌드 미리보기
npm run clean            # 캐시 정리
npm run type-check       # 타입 체크
npm run generate:seo     # SEO 파일만 생성
```

---

## 🚢 배포

### 환경 변수 설정

```.env
NUXT_PUBLIC_BASE_URL=https://yoursite.com
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_TO_EMAIL=your_email@example.com
```

### Netlify 배포

```bash
npm run generate
# dist 폴더 배포
```

---

## 📞 연락처

- **이메일**: withus@fingate.co.kr
- **전화**: 070-7954-2241
- **주소**: 서울 마포구 월드컵북로2길 19 7층

---

## 📄 라이선스

Copyright © 2023 FinGate. All rights reserved.

---

<div align="center">

**Made with ❤️ by FinGate Team**

[🏠 홈페이지](https://fingate.co.kr) · [📧 문의하기](mailto:withus@fingate.co.kr)

</div>
