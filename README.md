# 🏢 FinGate - 보험 인슈어테크 홈페이지

> 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 보험 IT 솔루션 기업

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.8.0-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.4.0-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02)](https://greensock.com/gsap/)
[![Lenis](https://img.shields.io/badge/Lenis-1.3.11-FF6B6B)](https://lenis.studiofreight.com/)

---

## ✨ 주요 특징

- ✅ **TypeScript 100%** - 모든 Vue 컴포넌트 타입 안정성 보장
- ✅ **GSAP 애니메이션** - ScrollTrigger, Context API로 최적화된 인터랙션
- ✅ **Lenis 스무스 스크롤** - 부드러운 섹션 전환 및 스냅 효과
- ✅ **성능 최적화** - RAF, Throttle, Intersection Observer, GPU 가속
- ✅ **이미지 최적화** - @nuxt/image로 WebP/AVIF 자동 변환, Lazy loading
- ✅ **SEO 완벽 지원** - 메타태그, Sitemap, Robots.txt, JSON-LD 구조화 데이터
- ✅ **반응형 디자인** - 모바일(~1024px) / 데스크톱(1024px+) 완벽 대응
- ✅ **모듈화된 SCSS** - 페이지별 분리, 유틸리티 최적화

---

## 🚀 빠른 시작

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행 (http://localhost:3000)
npm run dev

# 3. 프로덕션 빌드 (SEO 파일 자동 생성)
npm run build

# 4. 정적 사이트 생성 (GitHub Pages, Netlify 등)
npm run generate

# 5. 빌드 미리보기
npm run preview
```

---

## 🛠 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| **프레임워크** | Nuxt 3 | 3.8.0 |
| **UI 라이브러리** | Vue 3 | 3.4.0 |
| **타입** | TypeScript | 5.3.0 |
| **애니메이션** | GSAP + ScrollTrigger | 3.13.0 |
| **스무스 스크롤** | Lenis | 1.3.11 |
| **스타일** | SCSS (모듈화) | - |
| **이미지 최적화** | @nuxt/image | Latest |
| **이메일** | EmailJS | Latest |
| **상태관리** | Pinia, VueUse | Latest |

---

## 📁 프로젝트 구조

```
office_homepage/
├── 📂 components/
│   ├── layout/
│   │   ├── AppHeader.vue           # 헤더 (TypeScript)
│   │   └── AppFooter.vue           # 푸터 (TypeScript)
│   ├── pages/
│   │   ├── main/
│   │   │   ├── MainHero.vue        # 메인 히어로 (비디오 배경, 마스크 애니메이션)
│   │   │   ├── MainServices.vue    # 서비스 소개 (카드 애니메이션)
│   │   │   ├── MainCompany.vue     # 회사 소개 (커스텀 커서, 카드 분산)
│   │   │   ├── MainPartners.vue    # 파트너사 (로고 애니메이션)
│   │   │   ├── MainVision.vue      # 비전 (순차 등장, Hover 효과)
│   │   │   └── MainBanner.vue      # 배너 (CTA)
│   │   ├── company/
│   │   │   ├── CompanyHero.vue
│   │   │   ├── CompanyValues.vue
│   │   │   └── CompanyTeam.vue
│   │   ├── services/
│   │   │   ├── ServicesHero.vue
│   │   │   ├── ServicesList.vue
│   │   │   └── ServicesCta.vue
│   │   └── contact/
│   │       ├── ContactHero.vue
│   │       ├── ContactForm.vue     # EmailJS 통합, Toast 알림
│   │       └── ContactInfo.vue
│   └── Icon.vue                     # SVG 아이콘 (엄격한 타입)
│
├── 📂 pages/
│   ├── index.vue                    # 메인 페이지
│   ├── company.vue                  # 회사소개
│   ├── contact.vue                  # 연락처
│   ├── newvision.vue                # 뉴비전
│   └── services/
│       ├── service1.vue             # 클라우드 솔루션
│       └── service2.vue             # 데이터 분석
│
├── 📂 assets/scss/
│   ├── main.scss                    # SCSS 진입점
│   ├── _variables.scss              # 색상, 폰트, 간격 변수
│   ├── _mixins.scss                 # 재사용 믹스인
│   ├── _base.scss                   # CSS Reset, 공통 버튼
│   ├── _layouts.scss                # 헤더, 푸터 스타일
│   ├── _animations.scss             # GSAP 애니메이션 클래스
│   ├── _utilities.scss              # 유틸리티 클래스 (m-0~100, gap, flex 등)
│   ├── _pages.scss                  # 페이지별 스타일 통합
│   ├── _pages-main.scss             # 메인 페이지 (543줄)
│   ├── _pages-company.scss          # 회사소개 페이지
│   ├── _pages-services.scss         # 서비스 페이지
│   ├── _pages-newvision.scss        # 뉴비전 페이지
│   └── _pages-contact.scss          # 연락처 페이지 (원본 스태틱 값 유지)
│
├── 📂 plugins/
│   ├── gsap.client.js               # GSAP + ScrollTrigger 전역 설정
│   ├── lenis.client.js              # Lenis 스무스 스크롤 + 섹션 스냅
│   └── gsap-animations.client.js   # 공통 GSAP 애니메이션
│
├── 📂 config/
│   ├── seo.ts                       # SEO 메타 데이터 (중앙 관리)
│   └── site.ts                      # 사이트 설정 (회사 정보, 네비게이션)
│
├── 📂 composables/
│   └── useSEO.ts                    # SEO 컴포저블
│
├── 📂 utils/
│   └── performance.ts               # throttle, debounce, RAF 유틸
│
├── 📂 scripts/
│   ├── generate-sitemap.js          # Sitemap 자동 생성
│   └── generate-robots.js           # Robots.txt 자동 생성
│
├── 📂 public/
│   ├── images/                      # 이미지 리소스
│   ├── sitemap.xml                  # 자동 생성
│   └── robots.txt                   # 자동 생성
│
├── nuxt.config.ts                   # Nuxt 설정 (이미지, 폰트, 빌드 최적화)
├── package.json                     # 의존성 및 스크립트
└── tsconfig.json                    # TypeScript 설정
```

---

## ⚡ 성능 최적화

### 적용된 최적화 기법

#### 1. **JavaScript/TypeScript**
```typescript
✅ GSAP Context API           // 메모리 누수 방지, 자동 cleanup
✅ RequestAnimationFrame      // 부드러운 DOM 업데이트 (커스텀 커서)
✅ Intersection Observer      // 지연 애니메이션, 뷰포트 진입 감지
✅ Event Delegation           // 이벤트 리스너 최소화
✅ Passive Event Listeners    // 스크롤 성능 향상
✅ Throttle/Debounce         // 이벤트 최적화
```

#### 2. **CSS/SCSS**
```scss
✅ GPU 가속                   // will-change, transform3d, backface-visibility
✅ CSS Containment           // contain: layout style paint
✅ 유틸리티 클래스 최적화      // m-0~400 → m-0~100 (75% 감소)
✅ 페이지별 SCSS 분리         // 유지보수성 향상
```

#### 3. **이미지**
```typescript
✅ WebP/AVIF 자동 변환       // @nuxt/image
✅ Lazy Loading              // loading="lazy"
✅ Responsive Images         // sizes, srcset 자동 생성
✅ 최적화된 크기             // width, height 명시
```

#### 4. **빌드**
```typescript
✅ Vendor 청크 분리          // gsap, lenis, vue 별도 번들
✅ Gzip/Brotli 압축         // Nitro 자동 압축
✅ 폰트 Preload             // Pretendard, Poppins
✅ Tree Shaking             // 미사용 코드 제거
```

### Lighthouse 점수 (예상)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## 🎬 주요 컴포넌트 & 기능

| 컴포넌트 | 설명 | 주요 기능 |
|---------|------|----------|
| **MainHero** | 메인 히어로 섹션 | 비디오 배경, 마스크 텍스트 애니메이션, GSAP Timeline |
| **MainCompany** | 회사 소개 섹션 | 카드 분산 애니메이션, 커스텀 커서 (RAF), Event Delegation |
| **MainVision** | 비전 섹션 | 순차 등장 애니메이션, CSS Hover 효과, GSAP 완료 후 CSS 전환 |
| **MainPartners** | 파트너사 섹션 | 로고 Stagger 애니메이션, NuxtImg 최적화 |
| **MainBanner** | CTA 배너 | Footer와 한 화면 구성 (60vh), 스크롤 스냅 |
| **ContactForm** | 연락 폼 | EmailJS 통합, Toast 알림, Loading 상태, 폼 검증 |

### 주요 애니메이션

#### 1. **Lenis 스무스 스크롤 + 섹션 스냅**
```javascript
// Vision → Banner 전환 시 자동으로 페이지 최하단 스냅
lenis.scrollTo(document.documentElement.scrollHeight - window.innerHeight)
```

#### 2. **GSAP ScrollTrigger**
```javascript
// MainServices 헤더: 섹션을 벗어날 때까지 유지
toggleActions: "play none none reverse"
end: () => parentSection.offsetTop + parentSection.offsetHeight
```

#### 3. **커스텀 커서 (MainCompany)**
```javascript
// RAF로 최적화된 마우스 추적
requestAnimationFrame(() => {
  cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
})
```

---

## 🔍 SEO

### 자동 생성 파일

```bash
# SEO 파일만 생성
npm run generate:seo

# 개별 생성
npm run generate:sitemap  # sitemap.xml
npm run generate:robots   # robots.txt
```

### 페이지별 SEO 적용

```typescript
// pages/index.vue
<script setup lang="ts">
const seoData = useSEO('index')
useHead(seoData)
</script>
```

### 포함된 SEO 기능
- ✅ 메타 태그 (title, description, keywords, OG, Twitter)
- ✅ Canonical URL
- ✅ JSON-LD 구조화 데이터 (Organization, WebSite)
- ✅ Sitemap.xml (자동 생성)
- ✅ Robots.txt (자동 생성)
- ✅ Dublin Core 메타태그

---

## 🎨 스타일 가이드

### 색상 팔레트

```scss
// 브랜드 컬러
$color-primary: #12A2B8;           // 메인 브랜드 (핀게이트 청록)
$color-primary-light: #60a5fa;     // 라이트 블루

// 텍스트
$color-text-primary: #12A2B8;      // 메인 컬러 텍스트
$color-text-white: #ffffff;        // 흰색
$color-text-black: #111111;        // 검정
$color-text-gray: #444444;         // 회색
$color-text-secondary: #64748b;    // 부가 텍스트
$color-text-light: #cbd5e1;        // 연한 회색

// 배경
$color-bg-primary: #12A2B8;        // 메인 배경
$color-bg-white: #ffffff;          // 흰색 배경
$color-bg-dark: #0A0A10;           // 다크 배경
$color-bg-secondary: #f8fafc;      // 세컨더리 배경
$color-bg-quaternary: #DDDDDD;     // 보더 색상
```

### 타이포그래피

```scss
// 폰트 패밀리
$font-family-primary: 'Pretendard Variable', ...;
$font-family-poppins: 'Poppins', ...;

// 폰트 크기 (1rem = 10px)
$font-size-xs: 0.75rem;   // 7.5px
$font-size-sm: 0.875rem;  // 8.75px
$font-size-base: 1rem;    // 10px
$font-size-lg: 1.125rem;  // 11.25px
$font-size-xl: 1.25rem;   // 12.5px
$font-size-2xl: 1.5rem;   // 15px
$font-size-3xl: 1.875rem; // 18.75px
$font-size-4xl: 2.25rem;  // 22.5px
$font-size-5xl: 3rem;     // 30px

// 폰트 굵기
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### 간격 시스템

```scss
$spacing-xs: 0.25rem;   // 2.5px
$spacing-sm: 0.5rem;    // 5px
$spacing-md: 1rem;      // 10px
$spacing-lg: 1.5rem;    // 15px
$spacing-xl: 2rem;      // 20px
$spacing-2xl: 3rem;     // 30px
$spacing-3xl: 4rem;     // 40px
$spacing-4xl: 6rem;     // 60px

// 유틸리티 클래스
.mt-20 { margin-top: 2rem; }    // 20px
.mt-40 { margin-top: 4rem; }    // 40px
.gap-24 { gap: 2.4rem; }        // 24px
```

### 반응형

```scss
// 브레이크포인트
$breakpoint-mobile: 1024px;   // 1024px 이하 = 모바일
$breakpoint-desktop: 1400px;  // 컨테이너 최대 너비

// 사용법
@include responsive(md) {
  // 태블릿 (max-width: 1024px)
}

@include responsive(sm) {
  // 모바일 (max-width: 768px)
}
```

---

## 📦 사용 가능한 스크립트

```bash
# 개발
npm run dev              # 개발 서버 실행 (http://localhost:3000)
npm run clean            # 캐시 정리 (.nuxt, node_modules/.vite 삭제)

# 빌드
npm run build            # 프로덕션 빌드 (SEO 파일 자동 생성)
npm run generate         # 정적 사이트 생성 (SEO 파일 자동 생성)
npm run preview          # 빌드 미리보기

# 타입 체크
npm run type-check       # TypeScript 타입 검증

# SEO
npm run generate:seo     # Sitemap + Robots.txt 생성
npm run generate:sitemap # Sitemap.xml만 생성
npm run generate:robots  # Robots.txt만 생성
```

---

## 🚢 배포

### 환경 변수 설정

```.env
# 사이트 기본 URL
NUXT_PUBLIC_BASE_URL=https://fingate.co.kr

# EmailJS 설정 (연락 폼)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_TO_EMAIL=withus@fingate.co.kr
```

### Netlify 배포

1. **빌드 설정**
   - Build command: `npm run generate`
   - Publish directory: `dist`

2. **환경 변수**
   - Netlify 대시보드에서 `.env` 변수 설정

### GitHub Pages 배포

```bash
# 1. 정적 사이트 생성
npm run generate

# 2. dist 폴더를 gh-pages 브랜치에 배포
# (GitHub Actions 사용 권장)
```

### Vercel 배포

```bash
# Vercel CLI 사용
vercel --prod
```

---

## 🔧 커스터마이징

### 색상 변경

```scss
// assets/scss/_variables.scss
$color-primary: #YOUR_COLOR;  // 메인 브랜드 컬러 변경
```

### 회사 정보 수정

```typescript
// config/site.ts
export const SITE_CONFIG = {
  company: {
    name: 'Your Company',
    nameEn: 'YOUR_COMPANY',
    // ...
  }
}
```

### SEO 수정

```typescript
// config/seo.ts
export const SEO_DEFAULTS = {
  siteName: 'Your Site',
  title: 'Your Title',
  // ...
}
```

---

## 📞 연락처

- **회사명**: 핀게이트 (FinGate)
- **이메일**: withus@fingate.co.kr
- **전화**: 070-7954-2241
- **팩스**: 02-6008-0048
- **주소**: 서울특별시 마포구 월드컵북로2길 19, 7층

---

## 📄 라이선스

Copyright © 2023-2024 FinGate. All rights reserved.

---

## 🙏 기여

프로젝트 개선 제안이나 버그 리포트는 언제나 환영합니다!

---

<div align="center">

**Made with ❤️ by FinGate Team**

[🏠 홈페이지](https://fingate.co.kr) · [📧 문의하기](mailto:withus@fingate.co.kr)

</div>
