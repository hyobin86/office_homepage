# FinGate Homepage

FinGate의 공식 홈페이지입니다. 혁신적인 금융 솔루션을 제공하는 기업의 웹사이트로, Vue.js와 Nuxt.js를 기반으로 구축되었습니다.

## 🚀 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **SEO 최적화**: 검색 엔진 최적화를 위한 메타 태그 및 구조화된 데이터
- **동적 SEO 파일**: 환경 변수 기반 사이트맵 및 robots.txt 자동 생성
- **성능 최적화**: 빠른 로딩 속도와 효율적인 리소스 관리
- **접근성**: 웹 접근성 가이드라인 준수
- **다국어 지원**: 한국어 기본 지원

## 🛠 기술 스택

- **프레임워크**: Nuxt.js 3
- **언어**: TypeScript, Vue.js 3
- **스타일링**: SCSS
- **폰트**: Google Fonts (Noto Sans KR, Roboto)
- **애니메이션**: GSAP, Lenis
- **상태 관리**: Pinia
- **유틸리티**: VueUse

## 📁 프로젝트 구조

```
fingate_homepage/
├── assets/                 # SCSS 스타일 파일
│   └── scss/
├── components/            # Vue 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   └── pages/           # 페이지별 컴포넌트
├── composables/          # Vue 컴포저블
├── config/               # 설정 파일
├── layouts/              # 레이아웃 템플릿
├── pages/                # 페이지 라우트
├── plugins/              # 플러그인
├── public/               # 정적 파일 (동적 생성 파일 포함)
├── scripts/              # 빌드 스크립트
│   ├── generate-sitemap.js  # 사이트맵 동적 생성
│   └── generate-robots.js   # robots.txt 동적 생성
└── nuxt.config.ts        # Nuxt 설정
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone <repository-url>
   cd fingate_homepage
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

- **Primary**: #2563eb (Blue)
- **Secondary**: #64748b (Slate)
- **Accent**: #f59e0b (Amber)
- **Success**: #10b981 (Emerald)
- **Warning**: #f59e0b (Amber)
- **Error**: #ef4444 (Red)

### 타이포그래피

- **Primary Font**: Noto Sans KR
- **Secondary Font**: Roboto
- **Font Weights**: 300, 400, 500, 700

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 개발 가이드

### 컴포넌트 작성 규칙

1. **PascalCase**로 컴포넌트명 작성
2. **Composition API** 사용
3. **TypeScript** 타입 정의
4. **SCSS** 모듈 사용

### 스타일 가이드

1. **BEM 방법론** 사용
2. **SCSS 변수** 활용
3. **반응형 디자인** 우선
4. **접근성** 고려

## 📊 성능 최적화

- **이미지 최적화**: WebP, AVIF 포맷 지원
- **코드 분할**: 자동 코드 분할
- **압축**: Gzip, Brotli 압축
- **캐싱**: 적절한 캐시 헤더 설정

## 🧪 테스트

```bash
# 단위 테스트
npm run test

# E2E 테스트
npm run test:e2e

# 테스트 커버리지
npm run test:coverage
```

## 📦 빌드 최적화

### 번들 분석

```bash
npm run analyze
```

### 성능 모니터링

- **Lighthouse** 점수 모니터링
- **Core Web Vitals** 최적화
- **번들 크기** 최적화

## 🚀 배포 전략

### CI/CD 파이프라인

1. **코드 품질 검사**
2. **자동 테스트 실행**
3. **빌드 및 최적화**
4. **배포 자동화**

### 호스팅 옵션

- **Vercel**: 권장 (Nuxt.js 최적화)
- **Netlify**: 정적 사이트 호스팅
- **AWS S3**: 클라우드 호스팅
- **GitHub Pages**: 무료 호스팅

## 📈 모니터링

### 분석 도구

- **Google Analytics**: 사용자 분석
- **Google Search Console**: SEO 모니터링
- **Sentry**: 에러 모니터링

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **이메일**: info@fingate.co.kr
- **웹사이트**: https://leenstar.dothome.co.kr

## 🙏 감사의 말

- [Nuxt.js](https://nuxtjs.org/) - Vue.js 프레임워크
- [Vue.js](https://vuejs.org/) - JavaScript 프레임워크
- [GSAP](https://greensock.com/gsap/) - 애니메이션 라이브러리
- [Lenis](https://github.com/studio-freight/lenis) - 부드러운 스크롤