# FinGate Office Homepage

핀게이트 오피스 홈페이지 프로젝트입니다.

## 🚀 프로젝트 개요

- **프레임워크**: Nuxt.js 3
- **스타일링**: SCSS (모듈화된 구조)
- **애니메이션**: GSAP + ScrollTrigger
- **타입**: TypeScript 지원

## 📁 프로젝트 구조

```
office_homepage/
├── assets/
│   └── scss/
│       ├── main.scss           # 메인 SCSS 진입점
│       ├── _variables.scss     # 디자인 토큰 (색상, 폰트, 간격 등)
│       ├── _mixins.scss       # 재사용 가능한 SCSS 믹스인
│       ├── _utilities.scss    # 유틸리티 클래스
│       ├── _pages.scss        # 페이지별 스타일
│       ├── _components.scss    # 공통 컴포넌트 스타일
│       ├── _layouts.scss      # 레이아웃 스타일
│       ├── _base.scss         # 기본 스타일
│       └── _animations.scss    # 애니메이션 스타일
├── components/
│   └── pages/
│       └── contact/
│           ├── ContactHero.vue     # 연락처 히어로 섹션
│           ├── ContactInfo.vue     # 연락처 정보
│           └── ContactForm.vue     # 문의 폼
├── plugins/
│   └── gsap-animations.client.js  # GSAP 애니메이션 플러그인
└── pages/
    └── contact.vue            # 연락처 페이지
```

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

// 폰트 크기
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;  // 14px
$font-size-base: 1rem;    // 16px
$font-size-lg: 1.125rem;  // 18px
$font-size-xl: 1.25rem;   // 20px
$font-size-2xl: 1.5rem;   // 24px
$font-size-3xl: 1.875rem; // 30px
$font-size-4xl: 2.25rem;  // 36px
$font-size-5xl: 3rem;     // 48px

// 폰트 웨이트
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### 간격 시스템

```scss
$spacing-xs: 0.25rem;  // 4px
$spacing-sm: 0.5rem;  // 8px
$spacing-md: 1rem;     // 16px
$spacing-lg: 1.5rem;   // 24px
$spacing-xl: 2rem;     // 32px
$spacing-2xl: 3rem;    // 48px
$spacing-3xl: 4rem;    // 64px
$spacing-4xl: 6rem;   // 96px
```

## 🎯 주요 기능

### Contact 페이지

#### 1. **ContactHero** - 히어로 섹션
- 배경 이미지와 타이틀
- 반응형 디자인

#### 2. **ContactInfo** - 연락처 정보
- 지도 이미지
- 전화번호, 이메일, 주소 정보
- 깔끔한 카드 레이아웃

#### 3. **ContactForm** - 문의 폼
- **폼 필드**:
  - 회사명 (필수)
  - 이름 (필수)
  - 연락처
  - 이메일 주소 (필수)
  - 문의유형 (라디오 버튼)
    - 견적문의
    - 시연요청
    - 컨설팅 문의
    - 기타
  - 문의사항 (필수, 최대 1000자)
- **특별 기능**:
  - 라디오 버튼을 버튼 형태로 스타일링
  - 실시간 글자수 카운터 (textarea 내부)
  - 폼 검증 및 제출 처리
  - 반응형 디자인

## ⚡ 애니메이션 시스템

### GSAP + ScrollTrigger 연동

```javascript
// plugins/gsap-animations.client.js
- fade-in: 아래에서 위로 페이드인
- fade-in-left: 왼쪽에서 오른쪽으로 페이드인
- fade-in-right: 오른쪽에서 왼쪽으로 페이드인
- fade-in-scale: 스케일 애니메이션과 함께 페이드인
```

### 접근성 고려
- `prefers-reduced-motion` 미디어 쿼리 지원
- 애니메이션 비활성화 옵션 제공

## 🛠️ 유틸리티 클래스

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

## 🚀 개발 환경 설정

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 📋 코드 품질

### 검수 결과
- ✅ **린터 오류**: 없음
- ✅ **코드 일관성**: 우수
- ✅ **모듈화**: 체계적인 구조
- ✅ **성능**: 최적화 완료
- ✅ **접근성**: 고려됨

### 주요 개선사항
1. **색상 시스템 정리**: 사용되지 않는 변수 제거
2. **SCSS 함수 최적화**: `darken()` → 직접 색상 값 사용
3. **Contact 폼 완성**: 라디오 버튼, 글자수 카운터 등
4. **애니메이션 최적화**: GSAP + ScrollTrigger 연동

## 🎯 다음 단계

- [ ] 다른 페이지 컴포넌트 개발
- [ ] SEO 최적화
- [ ] 성능 모니터링
- [ ] 접근성 테스트

---

**개발 완료일**: 2024년
**버전**: 1.0.0
**상태**: Contact 페이지 완료, 전체 프로젝트 진행 중