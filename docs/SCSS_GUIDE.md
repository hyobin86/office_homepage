# SCSS 스타일 가이드

FinGate Office Homepage의 SCSS 디자인 시스템과 스타일 가이드입니다.

## 🎨 디자인 시스템

### 색상 팔레트

```scss
$color-primary: #12A2B8;
$color-primary-light: #60a5fa;

$color-text-primary: #12A2B8;
$color-text-secondary: #64748b;
$color-text-light: #cbd5e1;
$color-text-white: #ffffff;
$color-text-black: #111111;
$color-text-gray: #444444;

$color-bg-primary: #12A2B8;
$color-bg-secondary: #f8fafc;
$color-bg-white: #ffffff;
$color-bg-quaternary: #DDDDDD;
$color-bg-dark: #0A0A10;
```

### 타이포그래피

```scss
$font-family-primary: 'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;

$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### 간격 유틸리티
```scss
// Margin (0~10rem)
.m-0 ~ .m-100
.mt-0 ~ .mt-100
.mb-0 ~ .mb-100
.ml-0 ~ .ml-100
.mr-0 ~ .mr-100

// Padding (0~10rem)
.p-0 ~ .p-100
.pt-0 ~ .pt-100
.pb-0 ~ .pb-100
.pl-0 ~ .pl-100
.pr-0 ~ .pr-100

// Gap (0~3rem)
.gap-0 ~ .gap-30
```

### 플렉스/정렬 유틸리티
```scss
.d-flex
.flex-center
.flex-column
.flex-row
.justify-center
.justify-between
.align-center
```

### 텍스트/배경 유틸리티
```scss
.text-center .text-left .text-right
.text-primary .text-secondary .text-light .text-white .text-black .text-gray
.bg-primary .bg-secondary .bg-dark
```

## 📱 반응형 디자인

### 브레이크포인트
```scss
$container-max-width: 1400px;
$breakpoint-xl: 2560px; // 대형 화면 기준
```

### 믹스인/패턴
```scss
// 컨테이너 (assets/scss/_mixins.scss)
@mixin container-responsive {
  max-width: $container-max-width;
  margin: 0 auto;
  padding: 0 $container-padding;

  @media (min-width: 2560px) { max-width: 1680px; }
}

// 대형 화면 분기 (assets/scss/_variables.scss)
@media (min-width: $breakpoint-xl) {
  // 2560px 이상 전용 스타일
}
```

## 🎨 SCSS 아키텍처

### 모듈화된 구조
1. Variables — 디자인 토큰
2. Mixins — 재사용 가능한 스타일 블록
3. Base — 기본 스타일 (reset, typography)
4. Layouts — 레이아웃 스타일
5. Pages — 페이지별 스타일
6. Animations — 애니메이션 스타일
7. Utilities — 유틸리티 클래스

### 믹스인 예시
```scss
@mixin hero-header {
  width: max-content;
  .hero-title {
    font-size: 5.6rem;
    font-weight: $font-weight-semibold;
    color: $color-text-white;
    line-height: 7.2rem;
    letter-spacing: -0.06rem;
  }
}

@mixin section-header {
  .section-title {
    font-size: 4.8rem;
    font-weight: $font-weight-semibold;
    color: $color-text-white;
    line-height: 6.4rem;
    letter-spacing: -0.06rem;
  }
}
```

## 📁 SCSS 파일 구조

```
assets/scss/
├── main.scss
├── _variables.scss
├── _mixins.scss
├── _utilities.scss
├── _pages.scss
├── _layouts.scss
├── _base.scss
└── _animations.scss
```

## 🎯 사용법

### 1. 변수 사용
```scss
.my-component {
  color: $color-primary;
}
```

### 2. 믹스인 사용
```scss
.hero-section { @include hero-header; }
.section-title { @include section-header; }
.container { @include container-responsive; }
```

### 3. 반응형 분기
```scss
@media (min-width: $breakpoint-xl) {
  .some-class { font-size: 1.25em; }
}
```

### 4. 유틸리티 클래스
```html
<div class="d-flex flex-center gap-24 mt-80">
  <p class="text-center text-primary">중앙 정렬된 텍스트</p>
</div>
```

---

이 가이드는 프로젝트의 SCSS 디자인 시스템 요약입니다. 자세한 구현은 `assets/scss/`를 참고하세요.
