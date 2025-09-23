# FinGate 홈페이지

Vue3 + Nuxt + Sass 기반의 기업용 홈페이지입니다.

## 기술 스택

- **프레임워크**: Nuxt 3
- **언어**: Vue 3, TypeScript
- **스타일링**: Sass
- **상태관리**: Pinia
- **유틸리티**: VueUse

## 프로젝트 구조

```
fingate_homepage/
├── assets/
│   └── scss/
│       ├── main.scss          # 메인 Sass 파일
│       ├── _variables.scss    # 변수 정의
│       ├── _mixins.scss       # 믹스인 정의
│       ├── _base.scss         # 기본 스타일
│       ├── _components.scss   # 컴포넌트 스타일
│       ├── _layouts.scss      # 레이아웃 스타일 (플렉스 기반)
│       ├── _pages.scss        # 페이지별 스타일
│       └── _utilities.scss    # 유틸리티 클래스
├── components/
│   ├── AppHeader.vue          # 헤더 컴포넌트
│   ├── AppFooter.vue          # 푸터 컴포넌트
│   └── Icon.vue               # 아이콘 컴포넌트
├── layouts/
│   └── default.vue            # 기본 레이아웃
├── pages/
│   ├── index.vue              # 홈페이지
│   ├── about.vue              # 회사소개
│   ├── services.vue           # 서비스
│   ├── contact.vue            # 연락처
│   └── blog.vue               # 블로그
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

- **반응형 디자인**: 모바일(1023px 이하)과 웹(1024px 이상) 지원
- **플렉스 기반 레이아웃**: CSS Grid 대신 Flexbox를 활용한 유연한 레이아웃
- **SEO 최적화**: 메타 태그 및 구조화된 데이터
- **접근성**: 웹 접근성 가이드라인 준수
- **성능 최적화**: 이미지 최적화 및 코드 스플리팅
- **다국어 지원**: 한국어 기본 지원

## 스타일 가이드

### 색상

- **Primary**: #2563eb (파란색)
- **Secondary**: #64748b (회색)
- **Success**: #10b981 (초록색)
- **Warning**: #f59e0b (노란색)
- **Error**: #ef4444 (빨간색)

### 타이포그래피

- **Primary Font**: Noto Sans KR
- **Secondary Font**: Roboto

### 브레이크포인트

- **Mobile**: 1023px 이하
- **Web**: 1024px 이상 (태블릿 제외)

## 개발 가이드

### 컴포넌트 작성

```vue
<template>
  <div class="component-name">
    <!-- 컴포넌트 내용 -->
  </div>
</template>

<script setup>
// 컴포넌트 로직
</script>

<style scoped>
.component-name {
  /* 컴포넌트 스타일 */
}
</style>
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

Sass 변수와 믹스인을 활용하여 일관된 스타일을 작성하세요:

```scss
.my-component {
  color: $primary-color;
  padding: $spacing-md;
  
  @include mobile {
    padding: $spacing-sm;
  }
}
```

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
