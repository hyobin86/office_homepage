# FinGate 홈페이지

Vue3 + Nuxt + Sass 기반의 현대적인 기업용 홈페이지입니다.  
**Video Background Hero**와 **투명한 디자인**으로 차별화된 사용자 경험을 제공합니다.

## 기술 스택

- **프레임워크**: Nuxt 3
- **언어**: Vue 3, TypeScript
- **스타일링**: Sass (Dart Sass 3.0 호환)
- **상태관리**: Pinia
- **유틸리티**: VueUse
- **애니메이션**: GSAP + Lenis
- **SEO**: @nuxtjs/seo
- **폰트**: Google Fonts (Noto Sans KR, Roboto)

## 프로젝트 구조

```
fingate_homepage/
├── assets/
│   └── scss/
│       ├── main.scss          # 메인 Sass 파일 (@use 문법)
│       ├── _variables.scss    # 변수 정의
│       ├── _mixins.scss       # 믹스인 정의
│       ├── _base.scss         # 기본 스타일
│       ├── _components.scss   # 컴포넌트 스타일
│       ├── _layouts.scss      # 레이아웃 스타일
│       ├── _pages.scss        # 페이지별 스타일
│       └── _utilities.scss    # 유틸리티 클래스
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue      # 헤더 컴포넌트
│   │   └── AppFooter.vue      # 푸터 컴포넌트
│   ├── pages/
│   │   ├── home/              # 홈페이지 섹션들
│   │   │   ├── HeroSection.vue
│   │   │   ├── FeaturesSection.vue
│   │   │   ├── StatsSection.vue
│   │   │   ├── TechnologySection.vue
│   │   │   ├── TestimonialsSection.vue
│   │   │   └── CtaSection.vue
│   │   ├── about/             # 회사소개 섹션들
│   │   │   ├── AboutHero.vue
│   │   │   ├── AboutValues.vue
│   │   │   └── AboutTeam.vue
│   │   ├── services/          # 서비스 섹션들
│   │   │   ├── ServicesHero.vue
│   │   │   ├── ServicesList.vue
│   │   │   └── ServicesCta.vue
│   │   └── contact/           # 연락처 섹션들
│   │       ├── ContactHero.vue
│   │       ├── ContactInfo.vue
│   │       └── ContactForm.vue
│   ├── shared/
│   │   └── PageHeader.vue     # 공통 페이지 헤더
│   ├── Icon.vue               # 아이콘 컴포넌트
│   └── StructuredData.vue     # 구조화된 데이터
├── layouts/
│   └── default.vue            # 기본 레이아웃
├── pages/
│   ├── index.vue              # 홈페이지
│   ├── about.vue              # 회사소개
│   ├── services.vue           # 서비스
│   ├── contact.vue            # 연락처
│   ├── blog.vue               # 블로그
│   ├── privacy.vue            # 개인정보처리방침
│   ├── terms.vue              # 이용약관
│   └── cookies.vue            # 쿠키정책
├── plugins/
│   ├── gsap.client.js         # GSAP 애니메이션
│   └── lenis.client.js        # 스무스 스크롤
├── public/
│   ├── images/                # 이미지 파일들
│   ├── favicon.svg            # 파비콘
│   └── robots.txt             # 검색엔진 설정
├── nuxt.config.ts             # Nuxt 설정
├── package.json               # 의존성 관리
└── README.md                  # 프로젝트 설명
```

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

### 4. 정적 사이트 생성

```bash
npm run generate
```

## 주요 기능

- **🎥 Video Background Hero**: 동적 비디오 배경으로 임팩트 있는 첫인상
- **🌌 투명한 디자인**: 완전 투명한 헤더와 섹션으로 통합된 시각적 경험
- **📱 반응형 디자인**: 모바일(768px 이하), 데스크톱(1400px) 지원
- **🧩 모듈화된 컴포넌트**: 페이지별 섹션을 독립적인 컴포넌트로 분리
- **✨ GSAP 애니메이션**: 스크롤 기반 인터랙티브 애니메이션
- **🌊 스무스 스크롤**: Lenis를 활용한 부드러운 스크롤 경험
- **🔍 SEO 최적화**: @nuxtjs/seo 모듈을 활용한 완전한 SEO 설정
- **📊 구조화된 데이터**: Schema.org JSON-LD 형식
- **⚡ 성능 최적화**: 이미지 최적화, 코드 스플리팅, 압축
- **🎨 최신 Sass**: Dart Sass 3.0 호환 @use 문법 사용

## 스타일 가이드

### 색상

- **Background**: #000f1d (어두운 네이비)
- **Primary**: #2563eb (파란색)
- **Secondary**: #64748b (회색)
- **Text Primary**: #ffffff (흰색)
- **Text Secondary**: #e2e8f0 (연한 회색)
- **Success**: #10b981 (초록색)
- **Warning**: #f59e0b (노란색)
- **Error**: #ef4444 (빨간색)

### 타이포그래피

- **Primary Font**: Noto Sans KR
- **Secondary Font**: Roboto

### 브레이크포인트

- **Mobile**: 768px 이하
- **Desktop**: 1400px 이하
- **Large Desktop**: 1400px 초과

## 개발 가이드

### 컴포넌트 작성

모든 스타일은 `assets/scss/main.scss`에서 중앙 관리됩니다:

```vue
<template>
  <div class="component-name">
    <!-- 컴포넌트 내용 -->
  </div>
</template>

<script setup>
// 컴포넌트 로직
</script>

<!-- 스타일은 assets/scss/main.scss에서 관리 -->
```

### 플렉스 시스템 사용법

플렉스 기반 레이아웃 시스템을 사용하여 반응형 레이아웃을 구성하세요:

```html
<!-- 2열 레이아웃 -->
<div class="flex-grid flex-grid--2">
  <div>첫 번째 아이템</div>
  <div>두 번째 아이템</div>
</div>

<!-- 3열 레이아웃 -->
<div class="flex-grid flex-grid--3">
  <div>첫 번째 아이템</div>
  <div>두 번째 아이템</div>
  <div>세 번째 아이템</div>
</div>

<!-- 4열 레이아웃 -->
<div class="flex-grid flex-grid--4">
  <div>첫 번째 아이템</div>
  <div>두 번째 아이템</div>
  <div>세 번째 아이템</div>
  <div>네 번째 아이템</div>
</div>
```

### 스타일 작성

최신 Sass @use 문법을 사용하여 일관된 스타일을 작성하세요:

```scss
// _components.scss
@use 'variables' as *;
@use 'mixins' as *;

.my-component {
  color: $color-primary;
  padding: $spacing-md;
  
  @include responsive(md) {
    padding: $spacing-sm;
  }
}
```

### 애니메이션 사용법

GSAP와 Lenis를 활용한 애니메이션:

```vue
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined' && window.gsap) {
    gsap.from('.animate-element', {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.animate-element',
        start: 'top 80%'
      }
    })
  }
})
</script>
```

## 최근 업데이트

### v3.0.0 (2025-01-XX) - 투명 디자인 & Video Background
- 🎥 **Video Background Hero**: 동적 비디오 배경으로 임팩트 있는 첫인상
- 🌌 **완전 투명 디자인**: 헤더와 모든 섹션을 투명하게 처리
- 🎨 **다크 테마**: 어두운 네이비 배경 (#000f1d)으로 현대적인 느낌
- 🧹 **소스 정리**: 불필요한 파일과 의존성 제거
- ⚡ **성능 최적화**: 비디오 최적화 및 로딩 개선

### v2.0.0 (2025-09-23) - 모던화
- ✅ **SCSS 모던화**: `@import` → `@use` 문법으로 전환
- ✅ **Dart Sass 3.0 호환성**: 모든 경고 메시지 해결
- ✅ **컴포넌트 모듈화**: 페이지별 섹션을 독립 컴포넌트로 분리
- ✅ **중앙화된 스타일 관리**: 모든 CSS를 `main.scss`에서 관리
- ✅ **GSAP + Lenis 통합**: 스크롤 애니메이션 및 스무스 스크롤
- ✅ **완전한 SEO 설정**: @nuxtjs/seo 모듈 적용
- ✅ **구조화된 데이터**: Schema.org JSON-LD 형식
- ✅ **성능 최적화**: 이미지 최적화, 압축, 코드 스플리팅

## 배포

### Vercel 배포

1. GitHub에 프로젝트 푸시
2. Vercel에서 프로젝트 연결
3. 자동 배포 설정

### Netlify 배포

1. GitHub에 프로젝트 푸시
2. Netlify에서 프로젝트 연결
3. 빌드 명령어: `npm run generate`
4. 배포 디렉토리: `dist`

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
