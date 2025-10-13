/* ========================================
   통합 사이트 설정 (중앙 관리)
   ======================================== */

export const SITE_CONFIG = {
  // 기본 정보
  name: 'FinGate',
  title: 'FinGate - 혁신적인 금융 솔루션',
  description: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.',
  keywords: '금융솔루션, 핀테크, 디지털뱅킹, 투자관리, 금융컨설팅, FinGate',
  author: 'FinGate',
  
  // 언어 및 지역
  language: 'ko',
  locale: 'ko_KR',
  
  // URL 및 이미지
  baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://leenstar.dothome.co.kr',
  defaultImage: '/images/blog-1.jpg',
  favicon: '/favicon.svg',
  
  // 테마
  themeColor: '#2563eb',
  
  // 기업 정보
  office: {
    name: '한형규',
    registrationNumber: '349-81-02732',
    email: 'withus@fingate.co.kr',
    phone: '070-7954-2241',
    address: '서울 마포구 월드컵북로2길 19 7층 (동교동, W위더스빌딩)',
    reserved: 'FINGATE @ 2023. All rights reserved.'
  },
  
  // EmailJS 설정
  emailjs: {
    serviceId: process.env.EMAILJS_SERVICE_ID || 'your_service_id_here',
    templateId: process.env.EMAILJS_TEMPLATE_ID || 'your_template_id_here',
    publicKey: process.env.EMAILJS_PUBLIC_KEY || 'your_public_key_here',
    toEmail: process.env.EMAILJS_TO_EMAIL || 'your_email@example.com'
  },
  
  // SEO 기본값
  seo: {
    type: 'website',
    robots: 'index,follow',
    image: '/images/blog-1.jpg'
  }

} as const

// 하위 호환성을 위한 별칭
export const CONTACT_INFO = SITE_CONFIG.office
