/* ========================================
   Site Constants
   ======================================== */

export const SITE_CONFIG = {
  name: 'FINGATE',
  title: 'FinGate - 혁신적인 금융 솔루션',
  description: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.',
  keywords: '금융솔루션, 핀테크, 디지털뱅킹, 투자관리, 금융컨설팅, FinGate',
  author: 'FinGate',
  language: 'ko',
  locale: 'ko_KR',
  baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://leenstar.dothome.co.kr',
  defaultImage: '/images/blog-1.jpg',
  themeColor: '#2563eb'
} as const

export const CONTACT_INFO = {
  email: 'info@fingate.co.kr',
  phone: '+82-2-1234-5678',
  address: {
    country: 'KR',
    city: '서울',
    full: '서울특별시 강남구 테헤란로 123'
  },
  coordinates: {
    latitude: 37.5665,
    longitude: 126.9780
  }
} as const

export const COMPANY_STATS = [
  { number: '500+', label: '고객사' },
  { number: '99.9%', label: '서비스 가동률' },
  { number: '24/7', label: '기술 지원' },
  { number: '10+', label: '년 경험' }
] as const

export const SERVICE_FEATURES = {
  service1: [
    { icon: 'cloud', text: '클라우드 솔루션' },
    { icon: 'analytics', text: '데이터 분석' },
    { icon: 'security', text: '보안 관리' }
  ],
  service2: [
    { icon: 'speed', text: '고속 인터넷' },
    { icon: 'shield', text: '안정적인 연결' },
    { icon: 'support', text: '24/7 지원' }
  ]
} as const
