/* ========================================
   SEO Configuration
   ======================================== */

export interface SEOConfig {
  title: string
  description: string
  keywords: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  schemaType: string
  schemaData: any
}

export const seoConfig: Record<string, SEOConfig> = {
  // 홈페이지
  index: {
    title: 'FinGate - 혁신적인 금융 솔루션',
    description: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다. 디지털 뱅킹, 투자 관리, 보안 솔루션을 제공합니다.',
    keywords: '금융솔루션, 핀테크, 디지털뱅킹, 투자관리, 금융컨설팅, FinGate',
    ogTitle: 'FinGate - 혁신적인 금융 솔루션',
    ogDescription: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.',
    ogImage: '/images/blog-1.jpg',
    schemaType: 'WebSite',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "FinGate",
      "url": process.env.NUXT_PUBLIC_BASE_URL,
      "description": "FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.",
      "publisher": {
        "@type": "Organization",
        "name": "FinGate"
      }
    }
  },

  // 회사소개
  company: {
    title: 'Company - FinGate',
    description: 'FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다. 우리의 미션, 비전, 핵심 가치를 알아보세요.',
    keywords: 'FinGate Company, 금융기술기업, 핀테크회사, 금융솔루션, 회사미션, 핵심가치, 팀소개',
    ogTitle: 'Company - FinGate',
    ogDescription: 'FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다.',
    ogImage: '/images/blog-1.jpg',
    schemaType: 'AboutPage',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Company - FinGate",
      "description": "FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다.",
      "mainEntity": {
        "@type": "Organization",
        "name": "FinGate",
        "description": "FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "KR",
          "addressLocality": "서울"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@fingate.co.kr"
        }
      }
    }
  },

  // Service1 (기존 Epika)
  'services/service1': {
    title: 'Service1 - FinGate',
    description: 'Service1는 최신 기술을 활용한 혁신적인 디지털 플랫폼으로, 기업의 디지털 전환을 지원하는 종합 솔루션을 제공합니다.',
    keywords: 'Service1, 디지털플랫폼, 클라우드솔루션, 데이터분석, 사이버보안, 디지털전환, FinGate Service1',
    ogTitle: 'Service1 - FinGate',
    ogDescription: 'Service1는 최신 기술을 활용한 혁신적인 디지털 플랫폼으로, 기업의 디지털 전환을 지원하는 종합 솔루션을 제공합니다.',
    ogImage: '/images/blog-1.jpg',
    schemaType: 'Service',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Service1 Platform",
      "description": "Service1는 최신 기술을 활용한 혁신적인 디지털 플랫폼으로, 기업의 디지털 전환을 지원하는 종합 솔루션을 제공합니다.",
      "provider": {
        "@type": "Organization",
        "name": "FinGate"
      },
      "serviceType": "디지털 플랫폼",
      "areaServed": "대한민국"
    }
  },

  // Service2 (기존 ISP)
  'services/service2': {
    title: 'Service2 - FinGate',
    description: 'FinGate의 Service2는 최신 기술과 안정적인 인프라를 바탕으로 고객에게 빠르고 안정적인 인터넷 연결을 제공합니다.',
    keywords: 'Service2, 인터넷서비스, 인터넷제공업체, 고속인터넷, 안정적인연결, FinGate Service2',
    ogTitle: 'Service2 - FinGate',
    ogDescription: 'FinGate의 Service2는 최신 기술과 안정적인 인프라를 바탕으로 고객에게 빠르고 안정적인 인터넷 연결을 제공합니다.',
    ogImage: '/images/blog-1.jpg',
    schemaType: 'Service',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Service2",
      "description": "FinGate의 Service2는 최신 기술과 안정적인 인프라를 바탕으로 고객에게 빠르고 안정적인 인터넷 연결을 제공합니다.",
      "provider": {
        "@type": "Organization",
        "name": "FinGate"
      },
      "serviceType": "인터넷 서비스",
      "areaServed": "대한민국"
    }
  },

  // New Vision
  newvision: {
    title: 'New Vision - FinGate',
    description: 'FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 혁신적인 접근 방식을 확인하세요. 핀테크, 디지털뱅킹, 투자전략, 금융규제에 대한 전문적인 콘텐츠를 제공합니다.',
    keywords: 'FinGate New Vision, 금융기술 트렌드, 핀테크 인사이트, 디지털뱅킹, 투자전략, 금융규제, 금융기술 비전',
    ogTitle: 'New Vision - FinGate',
    ogDescription: 'FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 혁신적인 접근 방식을 확인하세요.',
    ogImage: '/images/blog-1.jpg',
    schemaType: 'Blog',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "FinGate New Vision",
      "description": "FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 혁신적인 접근 방식을 확인하세요.",
      "publisher": {
        "@type": "Organization",
        "name": "FinGate"
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "핀테크의 미래: AI와 블록체인의 융합",
          "description": "인공지능과 블록체인 기술이 결합하여 만들어낼 금융 서비스의 새로운 패러다임에 대해 알아봅니다.",
          "datePublished": "2024-01-15",
          "author": {
            "@type": "Organization",
            "name": "FinGate"
          },
          "image": "/images/blog-1.jpg"
        },
        {
          "@type": "BlogPosting",
          "headline": "디지털 뱅킹의 진화와 고객 경험",
          "description": "디지털 뱅킹이 어떻게 발전해왔는지, 그리고 향후 어떤 방향으로 나아갈지 살펴봅니다.",
          "datePublished": "2024-01-10",
          "author": {
            "@type": "Organization",
            "name": "FinGate"
          },
          "image": "/images/blog-2.jpg"
        }
      ]
    }
  },

  // 연락처
  contact: {
    title: '연락처 - FinGate',
    description: 'FinGate에 문의하세요. 궁금한 점이나 상담이 필요하시면 언제든지 연락주세요. 전문적인 금융 솔루션에 대한 문의나 상담을 받으실 수 있습니다.',
    keywords: 'FinGate 연락처, 금융솔루션 문의, 핀테크 상담, 고객지원, 문의하기',
    ogTitle: '연락처 - FinGate',
    ogDescription: 'FinGate에 문의하세요. 궁금한 점이나 상담이 필요하시면 언제든지 연락주세요.',
    ogImage: '/images/blog-1.jpg',
    schemaType: 'ContactPage',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "연락처 - FinGate",
      "description": "FinGate에 문의하세요. 궁금한 점이나 상담이 필요하시면 언제든지 연락주세요.",
      "mainEntity": {
        "@type": "Organization",
        "name": "FinGate",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@fingate.co.kr",
          "telephone": "+82-2-1234-5678"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "KR",
          "addressLocality": "서울"
        }
      }
    }
  }
}
