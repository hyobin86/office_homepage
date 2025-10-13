/* ========================================
   단순화된 SEO Configuration
   ======================================== */

import { SITE_CONFIG } from '~/config/site'

// SEO 기본값
export const SEO_DEFAULTS = {
  title: `${SITE_CONFIG.name} - 혁신적인 금융 솔루션`,
  description: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.',
  keywords: '금융솔루션, 핀테크, 디지털뱅킹, 투자관리, 금융컨설팅, FinGate',
  image: SITE_CONFIG.defaultImage,
  type: 'website',
  robots: 'index,follow',
  locale: 'ko_KR'
} as const

// 페이지별 SEO 설정
export const PAGE_SEO = {
  index: {
    title: 'FinGate - 혁신적인 금융 솔루션',
    description: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다. 디지털 뱅킹, 투자 관리, 보안 솔루션을 제공합니다.',
    keywords: '금융솔루션, 핀테크, 디지털뱅킹, 투자관리, 금융컨설팅, FinGate'
  },
  company: {
    title: '회사소개 | FinGate',
    description: 'FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다. 우리의 미션, 비전, 핵심 가치를 알아보세요.',
    keywords: 'FinGate Company, 금융기술기업, 핀테크회사, 금융솔루션, 회사미션, 핵심가치, 팀소개'
  },
  'services/service1': {
    title: 'GA 통합 운영 시스템 | FinGate',
    description: 'GA 통합 운영 시스템은 최신 기술을 활용한 혁신적인 디지털 플랫폼으로, 기업의 디지털 전환을 지원하는 종합 솔루션을 제공합니다.',
    keywords: 'GA 통합 운영 시스템, 디지털플랫폼, 클라우드솔루션, 데이터분석, 사이버보안, 디지털전환, FinGate GA 시스템'
  },
  'services/service2': {
    title: '원스톱 상담지원 솔루션 | FinGate',
    description: 'FinGate의 원스톱 상담지원 솔루션은 최신 기술과 안정적인 인프라를 바탕으로 고객에게 빠르고 안정적인 인터넷 연결을 제공합니다.',
    keywords: '원스톱 상담지원 솔루션, 인터넷서비스, 인터넷제공업체, 고속인터넷, 안정적인연결, FinGate 상담솔루션'
  },
  newvision: {
    title: 'New Vision | FinGate',
    description: 'FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 혁신적인 접근 방식을 확인하세요. 핀테크, 디지털뱅킹, 투자전략, 금융규제에 대한 전문적인 콘텐츠를 제공합니다.',
    keywords: 'FinGate New Vision, 금융기술 트렌드, 핀테크 인사이트, 디지털뱅킹, 투자전략, 금융규제, 금융기술 비전'
  },
  contact: {
    title: '연락처 | FinGate',
    description: 'FinGate에 문의하세요. 궁금한 점이나 상담이 필요하시면 언제든지 연락주세요. 전문적인 금융 솔루션에 대한 문의나 상담을 받으실 수 있습니다.',
    keywords: 'FinGate 연락처, 금융솔루션 문의, 핀테크 상담, 고객지원, 문의하기'
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