# FinGate Homepage

FinGate의 공식 홈페이지입니다. 혁신적인 금융 솔루션을 제공하는 기업의 웹사이트로, Vue.js와 Nuxt.js를 기반으로 구축되었습니다.

## 🚀 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **SEO 최적화**: 검색 엔진 최적화를 위한 메타 태그 및 구조화된 데이터
- **동적 SEO 파일**: 환경 변수 기반 사이트맵 및 robots.txt 자동 생성
- **성능 최적화**: 빠른 로딩 속도와 효율적인 리소스 관리
- **부드러운 애니메이션**: GSAP과 Lenis를 활용한 고품질 사용자 경험
- **접근성**: 웹 접근성 가이드라인 준수
- **다국어 지원**: 한국어 기본 지원

## 🛠 기술 스택

- **프레임워크**: Nuxt.js 3.8.0
- **언어**: TypeScript 5.3.0, Vue.js 3.4.0
- **스타일링**: SCSS (모듈화된 구조)
- **폰트**: Pretendard Variable (한국어 최적화)
- **애니메이션**: GSAP 3.13.0, Lenis 1.3.11
- **상태 관리**: Pinia 2.1.7
- **유틸리티**: VueUse 10.5.0
- **개발 도구**: Nuxt DevTools, Vue TSC

## 📁 프로젝트 구조

```
office_homepage/
├── assets/                    # SCSS 스타일 파일 (모듈화된 구조)
│   └── scss/
│       ├── main.scss         # 메인 진입점
│       ├── _variables.scss   # 디자인 토큰 (색상, 폰트, 간격)
│       ├── _mixins.scss      # 재사용 가능한 믹스인
│       ├── _base.scss        # 기본 스타일 (리셋, 컨테이너, 버튼)
│       ├── _components.scss  # 공통 컴포넌트 스타일
│       ├── _layouts.scss     # 레이아웃 스타일 (헤더, 푸터)
│       ├── _pages.scss       # 페이지별 스타일
│       └── _utilities.scss   # 유틸리티 클래스
├── components/               # Vue 컴포넌트
│   ├── layout/              # 레이아웃 컴포넌트
│   │   ├── AppHeader.vue    # 헤더 (네비게이션, 모바일 메뉴)
│   │   └── AppFooter.vue    # 푸터
│   ├── pages/               # 페이지별 컴포넌트
│   │   ├── home/           # 홈페이지 섹션들
│   │   ├── company/        # 회사소개 섹션들
│   │   ├── contact/        # 연락처 섹션들
│   │   └── services/       # 서비스 섹션들
│   └── Icon.vue            # SVG 아이콘 컴포넌트
├── composables/             # Vue 컴포저블
│   └── useSEO.ts           # SEO 관리 컴포저블
├── constants/               # 상수 정의
│   ├── navigation.ts       # 네비게이션 메뉴
│   ├── seo.ts             # SEO 설정
│   └── site.ts            # 사이트 정보
├── layouts/                # 레이아웃 템플릿
│   └── default.vue        # 기본 레이아웃
├── pages/                  # 페이지 라우트
│   ├── index.vue          # 홈페이지
│   ├── company.vue        # 회사소개
│   ├── contact.vue        # 연락처
│   ├── newvision.vue      # 새로운 비전
│   └── services/          # 서비스 페이지들
├── plugins/                # 플러그인
│   ├── gsap.client.js     # GSAP 애니메이션
│   └── lenis.client.js    # 부드러운 스크롤
├── public/                 # 정적 파일
├── scripts/                # 빌드 스크립트
│   ├── generate-sitemap.js # 사이트맵 동적 생성
│   └── generate-robots.js  # robots.txt 동적 생성
├── nuxt.config.ts          # Nuxt 설정
├── package.json            # 의존성 및 스크립트
└── tsconfig.json           # TypeScript 설정
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone <repository-url>
   cd office_homepage
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

## 📜 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run generate` - 정적 사이트 생성 (SEO 파일 포함)
- `npm run generate:seo` - SEO 파일들만 생성 (sitemap.xml, robots.txt)
- `npm run generate:sitemap` - 사이트맵만 생성
- `npm run generate:robots` - robots.txt만 생성
- `npm run preview` - 빌드 결과 미리보기
- `npm run clean` - 빌드 파일 정리
- `npm run type-check` - TypeScript 타입 검사

## 🌐 배포

### 정적 사이트 생성

```bash
npm run generate
```

생성된 파일은 `dist/public/` 폴더에 위치하며, 정적 호스팅 서비스에 업로드할 수 있습니다.

### 환경 변수 설정

프로덕션 배포 시 다음 환경 변수를 설정하세요:

```bash
# 프로덕션 환경
NUXT_PUBLIC_BASE_URL=https://leenstar.dothome.co.kr

# 개발 환경
NUXT_PUBLIC_BASE_URL=http://localhost:3000

# 스테이징 환경
NUXT_PUBLIC_BASE_URL=https://staging.fingate.co.kr
```

## 🔍 SEO 최적화

### 동적 SEO 파일 생성

이 프로젝트는 환경 변수를 기반으로 SEO 파일들을 동적으로 생성합니다:

- **sitemap.xml**: 모든 페이지 URL을 포함한 사이트맵
- **robots.txt**: 검색 엔진 크롤링 규칙

### SEO 파일 생성 과정

1. **빌드 전**: `npm run generate:seo` 실행
2. **스크립트**: 환경 변수에서 도메인 읽어서 SEO 파일 생성
3. **Nuxt 빌드**: 생성된 파일들을 `dist/public/`로 복사

### 포함된 SEO 요소

- **메타 태그**: 각 페이지별 최적화된 메타 태그
- **구조화된 데이터**: JSON-LD 스키마 마크업
- **사이트맵**: 자동 생성되는 XML 사이트맵
- **robots.txt**: 검색 엔진 크롤링 규칙
- **Open Graph**: 소셜 미디어 공유 최적화
- **Twitter Card**: 트위터 공유 최적화

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: #2563eb (Blue) - 메인 브랜드 컬러
- **Primary Dark**: #1d4ed8 - 호버 상태
- **Primary Light**: #60a5fa - 강조 색상
- **Secondary**: #7c3aed (Purple) - 보조 색상
- **Text Primary**: #0f172a - 주요 텍스트
- **Text Secondary**: #64748b - 보조 텍스트
- **Text Light**: #cbd5e1 - 연한 텍스트
- **Background**: #000f1d - 다크 테마 배경

### 타이포그래피

- **Primary Font**: Pretendard Variable (한국어 최적화)
- **Font Weights**: 300, 400, 500, 600, 700
- **Font Sizes**: xs(0.75rem) ~ 5xl(3rem)

### SCSS 아키텍처

프로젝트는 모듈화된 SCSS 구조를 사용합니다:

- **`_variables.scss`**: 디자인 토큰 (색상, 폰트, 간격, 브레이크포인트)
- **`_mixins.scss`**: 재사용 가능한 믹스인 (flex-center, button-style, responsive)
- **`_base.scss`**: 기본 스타일 (리셋, 컨테이너, 버튼, 플렉스 그리드)
- **`_components.scss`**: 공통 컴포넌트 스타일 (카드, 아이템, 폼)
- **`_layouts.scss`**: 레이아웃 스타일 (헤더, 푸터, 네비게이션)
- **`_pages.scss`**: 페이지별 고유 스타일
- **`_utilities.scss`**: 유틸리티 클래스

## 📱 반응형 브레이크포인트

- **Small**: < 480px (모바일)
- **Medium**: 480px - 768px (태블릿)
- **Large**: 768px - 1400px (데스크톱)
- **Extra Large**: > 1400px (대형 화면)

## 🔧 개발 가이드

### 컴포넌트 작성 규칙

1. **PascalCase**로 컴포넌트명 작성
2. **Composition API** 사용
3. **TypeScript** 타입 정의
4. **SCSS** 모듈 사용

### 스타일 가이드

1. **SCSS 모듈화**: 각 기능별로 파일 분리
2. **변수 활용**: `_variables.scss`의 디자인 토큰 사용
3. **믹스인 활용**: `_mixins.scss`의 재사용 가능한 스타일 사용
4. **반응형 디자인**: 모바일 퍼스트 접근법
5. **접근성**: ARIA 라벨, 키보드 네비게이션 고려
6. **성능**: 불필요한 중첩 최소화

## 📊 성능 최적화

- **이미지 최적화**: WebP, AVIF 포맷 지원, 지연 로딩
- **코드 분할**: 자동 코드 분할 및 번들 최적화
- **압축**: Gzip, Brotli 압축 설정
- **캐싱**: 적절한 캐시 헤더 설정
- **애니메이션**: GSAP + ScrollTrigger 최적화
- **스크롤**: Lenis 부드러운 스크롤 성능 최적화
- **폰트**: Pretendard Variable 웹폰트 최적화

## 🧪 테스트 및 품질 관리

### 코드 품질
- **TypeScript**: 엄격한 타입 검사
- **ESLint**: 코드 스타일 및 품질 검사
- **Prettier**: 코드 포맷팅 자동화

### 성능 모니터링
- **Lighthouse**: 웹 성능 점수 모니터링
- **Core Web Vitals**: 사용자 경험 지표 추적
- **번들 분석**: 번들 크기 최적화

### 브라우저 호환성
- **Modern Browsers**: Chrome, Firefox, Safari, Edge 최신 버전
- **Mobile**: iOS Safari, Chrome Mobile 지원

## 🚀 배포 전략

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 정적 사이트 생성 (SEO 파일 포함)
npm run generate

# 빌드 결과 미리보기
npm run preview
```

### 호스팅 옵션

- **Vercel**: 권장 (Nuxt.js 최적화, 자동 배포)
- **Netlify**: 정적 사이트 호스팅, 폼 처리 지원
- **AWS S3 + CloudFront**: 클라우드 호스팅, CDN 활용
- **GitHub Pages**: 무료 호스팅, 간단한 설정

### 환경 설정

프로덕션 배포 시 환경 변수 설정:

```bash
# .env.production
NUXT_PUBLIC_BASE_URL=https://leenstar.dothome.co.kr
NUXT_PUBLIC_SITE_NAME=FinGate
NUXT_PUBLIC_SITE_DESCRIPTION=혁신적인 금융 솔루션
```

## 📈 모니터링 및 분석

### 웹 분석
- **Google Analytics 4**: 사용자 행동 분석
- **Google Search Console**: SEO 성능 모니터링
- **Google Tag Manager**: 태그 관리

### 성능 모니터링
- **Lighthouse CI**: 자동 성능 검사
- **Web Vitals**: Core Web Vitals 추적
- **Sentry**: 에러 모니터링 및 성능 추적

### SEO 모니터링
- **사이트맵**: 자동 생성 및 제출
- **robots.txt**: 크롤링 규칙 관리
- **구조화된 데이터**: 스키마 마크업 검증

## 🤝 기여하기

### 개발 환경 설정
1. 저장소 포크
2. 기능 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치 푸시 (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

### 코딩 컨벤션
- **컴포넌트**: PascalCase 사용
- **파일명**: kebab-case 사용
- **스타일**: SCSS 모듈화 구조 준수
- **타입**: TypeScript 엄격 모드 사용
- **커밋**: Conventional Commits 규칙 준수

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처 및 지원

- **이메일**: info@fingate.co.kr
- **웹사이트**: https://leenstar.dothome.co.kr
- **프로젝트 상태**: ✅ 프로덕션 레디
- **최종 업데이트**: 2025년 1월 23일

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 라이브러리들의 도움으로 만들어졌습니다:

- [Nuxt.js](https://nuxtjs.org/) - Vue.js 메타 프레임워크
- [Vue.js](https://vuejs.org/) - 프로그레시브 JavaScript 프레임워크
- [GSAP](https://greensock.com/gsap/) - 고성능 애니메이션 라이브러리
- [Lenis](https://github.com/studio-freight/lenis) - 부드러운 스크롤 라이브러리
- [Pretendard](https://github.com/orioncactus/pretendard) - 한국어 최적화 웹폰트