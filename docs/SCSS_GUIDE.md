# SCSS 스타일 가이드

FinGate Office Homepage의 SCSS 디자인 시스템과 스타일 가이드입니다.

## 🎨 디자인 시스템

### 색상 팔레트

```scss
// 메인 색상
$color-primary: #12A2B8;           // 메인 브랜드 컬러
$color-primary-light: #60a5fa;     // 메인 컬러 라이트

// 텍스트 색상
$color-text-primary: #12A2B8;      // 메인 텍스트
$color-text-secondary: #64748b;    // 보조 텍스트
$color-text-light: #cbd5e1;        // 연한 텍스트
$color-text-white: #ffffff;         // 흰색 텍스트
$color-text-black: #111111;        // 검은색 텍스트
$color-text-gray: #444444;         // 회색 텍스트

// 배경 색상
$color-bg-primary: #12A2B8;        // 메인 배경
$color-bg-secondary: #f8fafc;     // 보조 배경
$color-bg-white: #ffffff;          // 흰색 배경
$color-bg-quaternary: #DDDDDD;     // 테두리용 회색
$color-bg-dark: #0A0A10;           // 어두운 배경
```

### 타이포그래피

```scss
// 폰트 패밀리
$font-family-primary: 'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;

// 폰트 웨이트
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```


### 간격 유틸리티
```scss
// Margin (0-40rem, 0.1rem 단위)
.m-0 ~ .m-400
.mt-0 ~ .mt-400
.mb-0 ~ .mb-400
.ml-0 ~ .ml-400
.mr-0 ~ .mr-400

// Gap (0-3rem, 0.1rem 단위)
.gap-0 ~ .gap-30
```

### 플렉스 유틸리티
```scss
.d-flex          // display: flex
.flex-center     // 중앙 정렬
.flex-between    // 양쪽 정렬
.flex-column     // 세로 방향
```

### 텍스트 유틸리티
```scss
.text-center     // 중앙 정렬
.text-left       // 왼쪽 정렬
.text-right      // 오른쪽 정렬
.text-primary    // 메인 컬러
.text-secondary  // 보조 컬러
```

## 📱 반응형 디자인

### 브레이크포인트
```scss
$breakpoint-mobile: 1024px;   // 1024px 이하 = 모바일
$breakpoint-desktop: 1400px;  // 컨테이너 최대 너비
```

### 반응형 믹스인
```scss
@mixin responsive($breakpoint) {
  @media (max-width: $breakpoint) {
    @content;
  }
}
```

## 🎨 SCSS 아키텍처

### 모듈화된 구조
1. **Variables** - 디자인 토큰
2. **Mixins** - 재사용 가능한 스타일 블록
3. **Base** - 기본 스타일 (reset, typography)
4. **Components** - 공통 컴포넌트 스타일
5. **Layouts** - 레이아웃 스타일
6. **Pages** - 페이지별 스타일
7. **Animations** - 애니메이션 스타일
8. **Utilities** - 유틸리티 클래스

### 믹스인 예시
```scss
@mixin hero-header {
  width: max-content;
  text-align: left;
  
  .hero-title {
    font-size: 5.6rem;
    font-weight: $font-weight-semibold;
    color: $color-text-white;
    line-height: 7.2rem;
    letter-spacing: -0.11rem;
  }
}

@mixin section-header {
  .section-title {
    font-size: 4.8rem;
    font-weight: $font-weight-semibold;
    color: $color-text-black;
    line-height: 6.4rem;
    letter-spacing: -0.11rem;
  }
}
```

## 📁 SCSS 파일 구조

```
assets/scss/
├── main.scss           # 메인 SCSS 진입점
├── _variables.scss     # 디자인 토큰 (색상, 폰트, 간격 등)
├── _mixins.scss       # 재사용 가능한 SCSS 믹스인
├── _utilities.scss    # 유틸리티 클래스
├── _pages.scss        # 페이지별 스타일
├── _components.scss    # 공통 컴포넌트 스타일
├── _layouts.scss      # 레이아웃 스타일
├── _base.scss         # 기본 스타일
└── _animations.scss    # 애니메이션 스타일
```

## 🎯 사용법

### 1. 변수 사용
```scss
.my-component {
  color: $color-primary;
  font-size: $font-size-lg;
  margin: $spacing-md;
}
```

### 2. 믹스인 사용
```scss
.hero-section {
  @include hero-header;
}

.section-title {
  @include section-header;
}
```

### 3. 반응형 디자인
```scss
.responsive-element {
  font-size: $font-size-xl;
  
  @include responsive($breakpoint-mobile) {
    font-size: $font-size-lg;
  }
}
```

### 4. 유틸리티 클래스
```html
<div class="d-flex flex-center gap-24 mt-120">
  <p class="text-center text-primary">중앙 정렬된 텍스트</p>
</div>
```

---

**참고**: 이 가이드는 프로젝트의 SCSS 디자인 시스템을 설명합니다. 자세한 구현은 `assets/scss/` 폴더의 파일들을 참조하세요.
