# FinGate Office Homepage

핀게이트 오피스 홈페이지 프로젝트입니다.

## 🚀 프로젝트 개요

- **프레임워크**: Nuxt.js 3
- **스타일링**: SCSS (모듈화된 구조)
- **애니메이션**: GSAP + ScrollTrigger
- **타입**: TypeScript 지원
- **SEO**: 자동 사이트맵/robots.txt 생성

## 📁 프로젝트 구조

```
office_homepage/
├── assets/scss/           # SCSS 스타일 시스템
├── components/           # Vue 컴포넌트
│   ├── layout/          # 레이아웃 컴포넌트
│   └── pages/           # 페이지별 컴포넌트
├── config/              # 설정 파일
│   ├── site.ts         # 사이트 정보 (중앙 관리)
│   └── seo.ts          # SEO 설정
├── composables/         # Vue 컴포저블
├── constants/           # 상수 정의
├── docs/               # 문서
├── layouts/            # 레이아웃
├── pages/              # 페이지
├── plugins/            # 플러그인
├── scripts/            # 빌드 스크립트
└── public/             # 정적 파일
```

## 🎯 주요 기능

### 중앙 집중식 설정 관리
- **`config/site.ts`**: 모든 사이트 정보를 한 곳에서 관리
- **연락처 정보**: Footer, ContactInfo에서 동일한 정보 사용
- **도메인 관리**: 모든 파일에서 일관된 도메인 사용

### SEO 최적화
- **자동 사이트맵 생성**: `scripts/generate-sitemap.js`
- **자동 robots.txt 생성**: `scripts/generate-robots.js`
- **페이지별 SEO 설정**: `config/seo.ts`
- **구조화된 데이터**: JSON-LD 스키마

### Contact 페이지
- **ContactHero**: 히어로 섹션
- **ContactInfo**: 연락처 정보 (중앙 관리)
- **ContactForm**: EmailJS 연동 문의 폼

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

### SEO 파일 생성
```bash
npm run generate:seo
```

## 📧 EmailJS 설정

### 1. EmailJS 계정 설정
1. [EmailJS](https://www.emailjs.com/) 계정 생성
2. 이메일 서비스 연결 (Gmail, Outlook 등)
3. 템플릿 생성

### 2. 환경 변수 설정
`.env` 파일 생성:
```env
EMAILJS_SERVICE_ID=your_service_id_here
EMAILJS_TEMPLATE_ID=your_template_id_here
EMAILJS_PUBLIC_KEY=your_public_key_here
EMAILJS_TO_EMAIL=your_email@example.com
```

### 3. EmailJS 템플릿 변수
템플릿에서 사용할 변수들:
- `{{name}}` - 사용자 이름
- `{{email}}` - 사용자 이메일
- `{{company}}` - 회사명
- `{{phone}}` - 연락처
- `{{inquiryType}}` - 문의유형
- `{{message}}` - 문의사항
- `{{time}}` - 전송시간

## 📋 코드 품질

### 검수 결과
- ✅ **린터 오류**: 없음
- ✅ **코드 일관성**: 우수
- ✅ **모듈화**: 체계적인 구조
- ✅ **성능**: 최적화 완료
- ✅ **접근성**: 고려됨
- ✅ **중앙 관리**: 사이트 정보 통합 관리

### 주요 개선사항
1. **중앙 집중식 설정**: 모든 사이트 정보를 `site.ts`에서 관리
2. **SEO 최적화**: 자동 사이트맵/robots.txt 생성
3. **일관성**: 네비게이션과 SEO 설정의 서비스명 일치
4. **애니메이션 최적화**: GSAP + ScrollTrigger 연동

## 📚 문서

- **[SCSS 스타일 가이드](./docs/SCSS_GUIDE.md)** - 디자인 시스템과 SCSS 사용법
- **[컴포넌트 가이드](./docs/COMPONENTS.md)** - 컴포넌트 사용법 (예정)
- **[SEO 가이드](./docs/SEO_GUIDE.md)** - SEO 설정 가이드 (예정)

## 🎯 다음 단계

- [ ] 다른 페이지 컴포넌트 개발
- [ ] 성능 모니터링
- [ ] 접근성 테스트
- [ ] 문서화 완성

---

**개발 완료일**: 2024년  
**버전**: 1.0.0  
**상태**: Contact 페이지 완료, 전체 프로젝트 진행 중

## 📝 프로젝트 목적

본 프로젝트는 개인 포트폴리오 및 사내 웹사이트 구축을 목적으로 제작되었습니다.

- **포트폴리오**: 현대적인 웹 개발 기술과 모범 사례를 보여주는 프로젝트
- **사내 웹사이트**: FinGate의 실제 업무용 홈페이지로 활용
- **학습 목적**: Nuxt.js 3, TypeScript, SCSS, GSAP 등 최신 기술 스택 학습 및 적용