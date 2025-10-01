/* ========================================
   SEO Constants
   ======================================== */

import { SITE_CONFIG } from './site'

export const SEO_DEFAULTS = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  ogTitle: SITE_CONFIG.title,
  ogDescription: SITE_CONFIG.description,
  ogImage: SITE_CONFIG.defaultImage
} as const

export const PAGE_SEO_CONFIG = {
  home: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords
  },
  company: {
    title: 'Company - FinGate',
    description: 'FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다.',
    keywords: 'FinGate Company, 금융기술기업, 핀테크회사, 금융솔루션, 회사미션, 핵심가치, 팀소개'
  },
  services: {
    title: '서비스 - FinGate',
    description: 'FinGate의 전문적인 금융 솔루션 서비스를 확인하세요. 맞춤형 개발, 투자 관리, 컨설팅, 기술 지원을 제공합니다.',
    keywords: 'FinGate 서비스, 금융솔루션, 디지털뱅킹, 투자관리, 금융컨설팅, 핀테크서비스'
  },
  newvision: {
    title: 'New Vision - FinGate',
    description: 'FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 혁신적인 접근 방식을 확인하세요.',
    keywords: 'FinGate New Vision, 금융기술 트렌드, 핀테크 인사이트, 디지털뱅킹, 투자전략'
  },
  contact: {
    title: '연락처 - FinGate',
    description: 'FinGate와 연락하세요. 전문적인 금융 솔루션에 대한 문의나 상담을 받으실 수 있습니다.',
    keywords: 'FinGate 연락처, 금융솔루션 문의, 핀테크 상담, 고객지원'
  }
} as const

export const SCHEMA_TYPES = {
  ORGANIZATION: 'Organization',
  WEBSITE: 'WebSite',
  ABOUT_PAGE: 'AboutPage',
  SERVICE: 'Service',
  BLOG: 'Blog',
  CONTACT_PAGE: 'ContactPage'
} as const
