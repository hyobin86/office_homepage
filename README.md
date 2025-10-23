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
- ✅ **Lenis 스무스 스크롤** - 부드러운 섹션 전환 및 스냅 효과 (메인 6개, 뉴비전 5개 섹션)
- ✅ **복잡한 스크롤 애니메이션** - NewvisionAgenda 200vh 높이, 이미지 마스크 reveal, 텍스트 순차 등장
- ✅ **인덱스 기반 애니메이션** - 동적 요소 순차 등장 (0.7초 + 0.6초 간격)
- ✅ **성능 최적화** - RAF, Throttle, Intersection Observer, GPU 가속
- ✅ **이미지 최적화** - @nuxt/image로 WebP/AVIF 자동 변환, Lazy loading
- ✅ **SEO 완벽 지원** - 메타태그, Sitemap, Robots.txt, JSON-LD 구조화 데이터
- ✅ **반응형 디자인** - 모바일(~1024px) / 데스크톱(1024px+) 완벽 대응
- ✅ **모듈화된 SCSS** - 페이지별 분리, 유틸리티 최적화
- ✅ **SITE_CONFIG 중앙 관리** - 연락처 정보, 회사 정보 통합 관리
- ✅ **회사소개 페이지 완성** - 6개 섹션 (히어로, 성장, 강점, 사업영역, 연혁, 연락처)
- ✅ **서비스 페이지 완성** - Service1 (GA 통합 운영 시스템) 5개 섹션 구현
- ✅ **Service2 페이지 완성** - 원스톱 상담지원 솔루션 6개 섹션 구현
- ✅ **연락처 페이지 완성** - 히어로, 연락처 정보, 문의 폼 (EmailJS 통합)

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
│   │   │   ├── MainHero.vue        # 메인 히어로
│   │   │   ├── MainServices.vue    # 서비스 소개
│   │   │   ├── MainCompany.vue     # 회사 소개
│   │   │   ├── MainPartners.vue    # 파트너사
│   │   │   ├── MainVision.vue      # 비전
│   │   │   └── MainBanner.vue      # 배너
│   │   ├── newvision/
│   │   │   ├── NewvisionHero.vue   # 뉴비전 히어로
│   │   │   ├── NewvisionAgenda.vue # 아젠다
│   │   │   ├── NewvisionNextstep.vue # 넥스트스텝
│   │   │   ├── NewvisionValue.vue  # 가치
│   │   │   └── NewvisionContact.vue # 연락
│   │   ├── company/
│   │   │   ├── CompanyHero.vue        # 회사 히어로 섹션
│   │   │   ├── CompanyGrowth.vue      # 성장 가치 카드 섹션
│   │   │   ├── CompanyStrength.vue    # 회사 강점 슬라이더
│   │   │   ├── CompanyBusiness.vue    # 사업 영역 섹션
│   │   │   ├── CompanyHistory.vue     # 회사 연혁 + AI 히어로 섹션
│   │   │   └── CompanyContact.vue      # 연락처 정보 + 지도 섹션
│   │   ├── services/
│   │   │   ├── service1/
│   │   │   │   ├── Service1Hero.vue        # Service1 히어로 섹션
│   │   │   │   ├── Service1Solution.vue    # 솔루션 소개 섹션
│   │   │   │   ├── Service1Total.vue       # 통합 서비스 카드 섹션
│   │   │   │   ├── Service1Revolution.vue  # 지그재그 혁신 섹션
│   │   │   │   ├── Service1Custom.vue      # 커스터마이징 POINT 섹션
│   │   │   │   ├── Service1Reason.vue     # 선택 이유 섹션
│   │   │   │   └── Service1Contact.vue     # 고객사 로고 + CTA 섹션
│   │   │   └── service2/
│   │   │       ├── Service2Hero.vue        # Service2 히어로 섹션
│   │   │       ├── Service2Recommend.vue   # 추천 섹션 (말풍선 애니메이션)
│   │   │       ├── Service2Onestop.vue     # 원스톱 섹션 (11개 카드 대시보드)
│   │   │       ├── Service2Manage.vue      # 고객 관리 섹션 (순차 애니메이션)
│   │   │       ├── Service2Diagnosis.vue   # 보험 진단 섹션 (인터랙티브 버튼)
│   │   │       └── Service2Report.vue      # 리포트 섹션
│   │   └── contact/
│   │       ├── ContactHero.vue         # 연락처 히어로 섹션
│   │       ├── ContactInfo.vue         # 연락처 정보 + 지도 섹션
│   │       └── ContactForm.vue         # EmailJS 통합, Toast 알림
│   └── Icon.vue                     # SVG 아이콘
│
├── 📂 pages/
│   ├── index.vue                    # 메인 페이지
│   ├── company.vue                  # 회사소개
│   ├── contact.vue                  # 연락처
│   ├── newvision.vue                # 뉴비전
│   └── services/
│       ├── service1.vue             # GA 통합 운영 시스템
│       └── service2.vue             # 원스톱 상담지원 솔루션
│
├── 📂 assets/scss/
│   ├── main.scss                    # SCSS 진입점
│   ├── _variables.scss              # 색상, 폰트, 간격 변수
│   ├── _mixins.scss                 # 재사용 믹스인
│   ├── _base.scss                   # CSS Reset, 공통 버튼
│   ├── _layouts.scss                # 헤더, 푸터 스타일
│   ├── _animations.scss             # GSAP 애니메이션 클래스
│   ├── _utilities.scss              # 유틸리티 클래스
│   ├── _pages.scss                  # 페이지별 스타일 통합
│   ├── _pages-main.scss             # 메인 페이지
│   ├── _pages-company.scss          # 회사소개 페이지
│   ├── _pages-service1.scss         # Service1 페이지 (GA 통합 운영 시스템)
│   ├── _pages-service2.scss         # Service2 페이지 (원스톱 상담지원 솔루션)
│   ├── _pages-newvision.scss        # 뉴비전 페이지
│   └── _pages-contact.scss          # 연락처 페이지
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
| **NewvisionHero** | 뉴비전 히어로 섹션 | 비디오 배경, 기본 fade-in 애니메이션 |
| **NewvisionAgenda** | 아젠다 섹션 | 복잡한 스크롤 애니메이션, 이미지 마스크 reveal, 텍스트 순차 등장 (200vh) |
| **NewvisionNextstep** | 넥스트스텝 섹션 | 인덱스 기반 순차 등장 (0.7초 + 0.6초 간격), 6개 POINT 카드 |
| **NewvisionValue** | 가치 섹션 | 인덱스 기반 순차 등장, 버튼 클릭 시 콘텐츠 전환 애니메이션 |
| **NewvisionContact** | 연락 섹션 | 단순 fade-in 애니메이션, CTA 버튼 |
| **ContactForm** | 연락 폼 | EmailJS 통합, Toast 알림, Loading 상태, 폼 검증 |

|| **CompanyHero** | 회사 히어로 섹션 | 회사 소개 메인 섹션, 배경 이미지 최적화 |
|| **CompanyGrowth** | 성장 가치 섹션 | 4개 가치 카드 그리드 레이아웃, 순차 등장 애니메이션 |
|| **CompanyStrength** | 회사 강점 섹션 | 커스텀 슬라이더 (Composition API), NuxtImg 최적화, 접근성 지원 |
|| **CompanyBusiness** | 사업 영역 섹션 | 동적 비즈니스 카드 그리드, 배경 오버레이 효과 |
|| **CompanyHistory** | 회사 연혁 섹션 | 타임라인 스크롤 애니메이션, AI 히어로 섹션 통합 |
|| **CompanyContact** | 연락처 섹션 | SITE_CONFIG 기반 연락처 정보, NuxtImg 지도, Flexbox 레이아웃 |

### Service2 주요 기능

#### 1. **Service2Diagnosis 인터랙티브 시스템**
```vue
// 버튼 높이 애니메이션 (168px → 220px)
.diagnosis-button {
  height: 16.8rem; // 비활성 상태
  transition: all 0.3s linear;
  
  &.active {
    height: 22rem; // 활성 상태
  }
}
```

#### 2. **Service2Onestop 대시보드**
```vue
// 11개 카드 절대 위치 기반 레이아웃
.card-1 { transform: translate(-50%, -50%) translate(-200px, -100px); }
.card-2 { transform: translate(-50%, -50%) translate(-100px, -150px); }
// ... 각 카드별 개별 위치와 딜레이
```

#### 3. **Service2Manage 순차 애니메이션**
```javascript
// 타이틀 → 영역1 → 이미지1 → 영역2 → 이미지2 순차 등장
gsap.fromTo(area1Ref.value, { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.3 })
gsap.fromTo(img1Ref.value, { opacity: 0, y: 80 }, { opacity: 1, y: 0, delay: 1.2 })
```

### 주요 애니메이션

#### 1. **Lenis 스무스 스크롤 + 섹션 스냅**
```javascript
// 메인 페이지: 6개 섹션 스냅 (hero, company, services, partners, vision, banner)
// 뉴비전 페이지: 5개 섹션 스냅 (hero, agenda, nextstep, value, contact)
const mainSections = ['hero', 'company', 'services', 'partners', 'vision', 'banner']
const newvisionSections = ['hero', 'agenda', 'nextstep', 'value', 'contact']
```

#### 2. **NewvisionAgenda 복잡한 스크롤 애니메이션**
```javascript
// 이미지 마스크 reveal + 텍스트 순차 등장 (200vh 높이)
gsap.fromTo(imgElement, 
  { clipPath: 'inset(0 0 100% 0)' },
  { clipPath: 'inset(0 0 0% 0)', delay: 1, scrub: false }
)
```

#### 3. **인덱스 기반 순차 등장 (NewvisionNextstep, NewvisionValue)**
```javascript
// container 바로 아래 3개 요소 순차 등장
children.forEach((child, index) => {
  gsap.fromTo(child, { opacity: 0, y: 50 }, {
    opacity: 1, y: 0, delay: 0.7 + (index * 0.6)
  })
})
```

#### 4. **커스텀 커서 (MainCompany)**
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

// 폰트 굵기
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### 반응형

```scss
// 브레이크포인트
$breakpoint-desktop: 1400px;  // 컨테이너 최대 너비

// 사용법
@include responsive(desktop) {
  // 데스크톱 (max-width: 1400px)
}

@include responsive(xl) {
  // 데스크톱 (max-width: 1400px) - 기존 호환성
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

# EmailJS 설정 (연락 폼) - 선택사항
# 로컬 개발 시에만 필요하며, 서버에서는 기본값 사용
NUXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NUXT_PUBLIC_EMAILJS_TO_EMAIL=your_email@domain.com
```

> **참고**: EmailJS 설정은 `config/site.ts`에 기본값이 설정되어 있어 환경 변수가 없어도 작동합니다.

### Netlify 배포

1. **빌드 설정**
   - Build command: `npm run generate`
   - Publish directory: `dist`

2. **환경 변수** (선택사항)
   - Netlify 대시보드에서 환경 변수 설정
   - 설정하지 않아도 기본값으로 작동

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
