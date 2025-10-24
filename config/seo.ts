/* ========================================
   단순화된 SEO Configuration
   ======================================== */

import { SITE_CONFIG } from '~/config/site'

// SEO 기본값
export const SEO_DEFAULTS = {
  title: `${SITE_CONFIG.name} - 보험을 가장 잘 아는 인슈어테크 기업`,
  description: '실무에서 검증된 IT 경험과 혁신 기술로 고객의 비즈니스 가치를 높입니다. Cloud, MSA, 통합시스템 등 보험 IT 전문 솔루션을 제공합니다.',
  keywords: '인슈어테크, 보험IT, 핀게이트, 보험시스템, Cloud, MSA, 통합시스템, GA시스템, 원스톱상담솔루션',
  image: SITE_CONFIG.defaultImage,
  type: 'website',
  robots: 'index,follow',
  locale: 'ko_KR'
} as const

// 페이지별 SEO 설정
export const PAGE_SEO = {
  index: {
    title: '핀게이트 - 보험을 가장 잘 아는 인슈어테크 기업',
    description: '실무에서 검증된 IT 경험과 혁신 기술로 고객의 비즈니스 가치를 높입니다. GA 통합운영시스템, 원스톱상담솔루션, Cloud, MSA, 통합시스템 등 보험 IT 전문 솔루션을 제공합니다.',
    keywords: '인슈어테크, 보험IT솔루션, 핀게이트, GA시스템, 원스톱상담솔루션, Cloud보안, MSA, 보험인하우스, 통합시스템, IT인프라, 보험시스템개발'
  },
  company: {
    title: '회사 소개 - 핀게이트',
    description: '핀게이트는 보험 IT 전문 인슈어테크 기업입니다. 실무에서 검증된 기술력과 보험 도메인 전문성으로 고객의 디지털 혁신을 지원합니다.',
    keywords: '핀게이트, 회사소개, 인슈어테크기업, 보험IT전문, 금융기술, 디지털혁신, 보험시스템전문'
  },
  'services/service1': {
    title: 'GA 통합 운영 시스템 - 핀게이트',
    description: '보험 영업조직 관리를 위한 GA 통합 운영 시스템입니다. 위촉지원, 인사관리, DB관리, 영업관리, 수수료관리, 제휴정산, 평가관리, 준법관리, 교육관리, 리포트, 권한관리, 어드민, 공통지원 등 13개 핵심 서비스를 통합 제공합니다.',
    keywords: 'GA시스템, 통합운영시스템, 영업지원솔루션, 보험영업관리, 위촉지원, 인사관리, DB관리, 영업관리, 수수료관리, 제휴정산, 평가관리, 준법관리, 교육관리, 리포트시스템, 권한관리, 어드민시스템, 공통지원, 핀게이트'
  },
  'services/service2': {
    title: '원스톱 상담지원 솔루션 - 핀게이트',
    description: '보험 상담을 위한 원스톱 솔루션입니다. 템플릿 기반 자동화, 맞춤형 비교·분석 리포트, 인사/위촉후보자 관리, 임차/자산 관리, 채권추심, 준법 등 경영지원 및 통합지원 솔루션을 제공합니다.',
    keywords: '원스톱상담솔루션, 보험상담시스템, 템플릿자동화, 비교분석리포트, 경영지원솔루션, 통합지원시스템, 인사관리, 자산관리, 고객관리, 핀게이트'
  },
  newvision: {
    title: '새로운 비전 - 핀게이트',
    description: '핀게이트의 인슈어테크 비전과 보험 IT 트렌드를 확인하세요. GA, 보험설계사, 가입고객을 위한 가치 창출과 핀테크, 디지털 금융, 보험 기술 혁신에 대한 전문 인사이트를 제공합니다.',
    keywords: '핀게이트비전, 인슈어테크트렌드, 보험IT혁신, GA가치, 보험설계사지원, 고객가치창출, 디지털금융, 핀테크인사이트, 보험기술, 금융혁신'
  },
  contact: {
    title: '문의하기 - 핀게이트',
    description: '핀게이트에 문의하세요. 보험 IT 솔루션, 인슈어테크 서비스에 대한 상담이 필요하시면 언제든지 연락주세요. 고객의 비즈니스 고민을 함께 해결하겠습니다.',
    keywords: '핀게이트문의, 보험IT상담, 인슈어테크문의, 시스템도입상담, 고객지원, 비즈니스상담'
  }
} as const

// 페이지 키 타입
export type SeoKey = keyof typeof PAGE_SEO

// 기본 구조화된 데이터 (필수적인 것만)
export const DEFAULT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_CONFIG.name,
  "url": SITE_CONFIG.baseUrl,
  "logo": `${SITE_CONFIG.baseUrl}/favicon.svg`,
  "description": SITE_CONFIG.description,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KR",
    "addressLocality": "서울"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": SITE_CONFIG.office.email
  }
}