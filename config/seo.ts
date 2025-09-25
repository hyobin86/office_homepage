export interface SEOConfig {
  title: string
  description: string
  keywords: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonical?: string
  schemaType?: string
  schemaData?: any
}

export const seoConfig: Record<string, SEOConfig> = {
  // 홈페이지
  index: {
    title: 'FinGate - 혁신적인 금융 솔루션',
    description: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다. 디지털 뱅킹, 투자 관리, 보안 솔루션을 제공합니다.',
    keywords: '금융솔루션, 핀테크, 디지털뱅킹, 투자관리, 금융컨설팅, FinGate, 금융서비스, 투자분석, 포트폴리오관리',
    ogTitle: 'FinGate - 혁신적인 금융 솔루션',
    ogDescription: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.',
    ogImage: '/images/blog-1.jpg',
    twitterTitle: 'FinGate - 혁신적인 금융 솔루션',
    twitterDescription: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.',
    twitterImage: '/images/blog-1.jpg',
    schemaType: 'Organization',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FinGate",
      "description": "FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KR",
        "addressLocality": "서울"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@fingate.co.kr"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "디지털 뱅킹",
          "description": "최신 기술을 활용한 안전하고 편리한 디지털 뱅킹 서비스"
        },
        {
          "@type": "Offer",
          "name": "투자 관리",
          "description": "전문적인 투자 분석과 포트폴리오 관리로 최적의 투자 전략 제안"
        },
        {
          "@type": "Offer",
          "name": "보안 솔루션",
          "description": "최고 수준의 보안 기술로 고객의 자산과 정보를 안전하게 보호"
        }
      ]
    }
  },

  // 회사소개
  about: {
    title: '회사소개 - FinGate',
    description: 'FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다. 우리의 미션, 비전, 핵심 가치를 알아보세요.',
    keywords: 'FinGate 회사소개, 금융기술기업, 핀테크회사, 금융솔루션, 회사미션, 핵심가치, 팀소개',
    ogTitle: '회사소개 - FinGate',
    ogDescription: 'FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다.',
    ogImage: '/images/blog-1.jpg',
    twitterTitle: '회사소개 - FinGate',
    twitterDescription: 'FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다.',
    twitterImage: '/images/blog-1.jpg',
    schemaType: 'AboutPage',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "회사소개 - FinGate",
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

  // 서비스
  services: {
    title: '서비스 - FinGate',
    description: 'FinGate의 전문적인 금융 솔루션 서비스를 확인하세요. 맞춤형 개발, 투자 관리, 컨설팅, 기술 지원을 제공합니다.',
    keywords: 'FinGate 서비스, 금융솔루션, 디지털뱅킹, 투자관리, 금융컨설팅, 핀테크서비스, 맞춤형개발, 기술지원',
    ogTitle: '서비스 - FinGate',
    ogDescription: 'FinGate의 전문적인 금융 솔루션 서비스를 확인하세요. 맞춤형 개발, 투자 관리, 컨설팅, 기술 지원을 제공합니다.',
    ogImage: '/images/blog-1.jpg',
    twitterTitle: '서비스 - FinGate',
    twitterDescription: 'FinGate의 전문적인 금융 솔루션 서비스를 확인하세요. 맞춤형 개발, 투자 관리, 컨설팅, 기술 지원을 제공합니다.',
    twitterImage: '/images/blog-1.jpg',
    schemaType: 'Service',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "FinGate 금융 솔루션 서비스",
      "description": "FinGate의 전문적인 금융 솔루션 서비스를 확인하세요. 맞춤형 개발, 투자 관리, 컨설팅, 기술 지원을 제공합니다.",
      "provider": {
        "@type": "Organization",
        "name": "FinGate"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "디지털 뱅킹",
          "description": "최신 기술을 활용한 안전하고 편리한 디지털 뱅킹 서비스",
          "category": "금융서비스"
        },
        {
          "@type": "Offer",
          "name": "투자 관리",
          "description": "전문적인 투자 분석과 포트폴리오 관리로 최적의 투자 전략 제안",
          "category": "투자서비스"
        },
        {
          "@type": "Offer",
          "name": "보안 솔루션",
          "description": "최고 수준의 보안 기술로 고객의 자산과 정보를 안전하게 보호",
          "category": "보안서비스"
        }
      ]
    }
  },

  // 블로그
  blog: {
    title: '블로그 - FinGate',
    description: 'FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 인사이트를 확인하세요. 핀테크, 디지털뱅킹, 투자전략, 금융규제에 대한 전문적인 콘텐츠를 제공합니다.',
    keywords: 'FinGate 블로그, 금융기술 트렌드, 핀테크 인사이트, 디지털뱅킹, 투자전략, 금융규제, 금융기술 블로그',
    ogTitle: '블로그 - FinGate',
    ogDescription: 'FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 인사이트를 확인하세요.',
    ogImage: '/images/blog-1.jpg',
    twitterTitle: '블로그 - FinGate',
    twitterDescription: 'FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 인사이트를 확인하세요.',
    twitterImage: '/images/blog-1.jpg',
    schemaType: 'Blog',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "FinGate 블로그",
      "description": "FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 인사이트를 확인하세요.",
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
    description: 'FinGate에 문의하세요. 궁금한 점이나 상담이 필요하시면 언제든지 연락주세요. 금융 솔루션 문의, 기술 지원, 비즈니스 상담을 제공합니다.',
    keywords: 'FinGate 연락처, 금융솔루션 문의, 핀테크 상담, 기술지원, 비즈니스상담, 고객지원',
    ogTitle: '연락처 - FinGate',
    ogDescription: 'FinGate에 문의하세요. 궁금한 점이나 상담이 필요하시면 언제든지 연락주세요.',
    ogImage: '/images/blog-1.jpg',
    twitterTitle: '연락처 - FinGate',
    twitterDescription: 'FinGate에 문의하세요. 궁금한 점이나 상담이 필요하시면 언제든지 연락주세요.',
    twitterImage: '/images/blog-1.jpg',
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
          "availableLanguage": "Korean"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "KR",
          "addressLocality": "서울"
        }
      }
    }
  },

  // 개인정보처리방침
  privacy: {
    title: '개인정보처리방침 - FinGate',
    description: 'FinGate의 개인정보처리방침입니다. 고객의 개인정보 보호를 위해 최선을 다하고 있습니다.',
    keywords: 'FinGate 개인정보처리방침, 개인정보보호, 데이터보호, 프라이버시정책',
    ogTitle: '개인정보처리방침 - FinGate',
    ogDescription: 'FinGate의 개인정보처리방침입니다. 고객의 개인정보 보호를 위해 최선을 다하고 있습니다.',
    ogImage: '/images/blog-1.jpg',
    twitterTitle: '개인정보처리방침 - FinGate',
    twitterDescription: 'FinGate의 개인정보처리방침입니다. 고객의 개인정보 보호를 위해 최선을 다하고 있습니다.',
    twitterImage: '/images/blog-1.jpg',
    schemaType: 'WebPage',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "개인정보처리방침 - FinGate",
      "description": "FinGate의 개인정보처리방침입니다. 고객의 개인정보 보호를 위해 최선을 다하고 있습니다.",
      "mainEntity": {
        "@type": "Organization",
        "name": "FinGate"
      }
    }
  },

  // 이용약관
  terms: {
    title: '이용약관 - FinGate',
    description: 'FinGate 서비스 이용약관입니다. 서비스 이용 시 준수해야 할 사항들을 확인하세요.',
    keywords: 'FinGate 이용약관, 서비스약관, 이용조건, 서비스정책',
    ogTitle: '이용약관 - FinGate',
    ogDescription: 'FinGate 서비스 이용약관입니다. 서비스 이용 시 준수해야 할 사항들을 확인하세요.',
    ogImage: '/images/blog-1.jpg',
    twitterTitle: '이용약관 - FinGate',
    twitterDescription: 'FinGate 서비스 이용약관입니다. 서비스 이용 시 준수해야 할 사항들을 확인하세요.',
    twitterImage: '/images/blog-1.jpg',
    schemaType: 'WebPage',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "이용약관 - FinGate",
      "description": "FinGate 서비스 이용약관입니다. 서비스 이용 시 준수해야 할 사항들을 확인하세요.",
      "mainEntity": {
        "@type": "Organization",
        "name": "FinGate"
      }
    }
  },

  // 쿠키정책
  cookies: {
    title: '쿠키정책 - FinGate',
    description: 'FinGate의 쿠키정책입니다. 웹사이트에서 사용하는 쿠키에 대해 자세히 알아보세요.',
    keywords: 'FinGate 쿠키정책, 쿠키사용, 웹쿠키, 쿠키관리',
    ogTitle: '쿠키정책 - FinGate',
    ogDescription: 'FinGate의 쿠키정책입니다. 웹사이트에서 사용하는 쿠키에 대해 자세히 알아보세요.',
    ogImage: '/images/blog-1.jpg',
    twitterTitle: '쿠키정책 - FinGate',
    twitterDescription: 'FinGate의 쿠키정책입니다. 웹사이트에서 사용하는 쿠키에 대해 자세히 알아보세요.',
    twitterImage: '/images/blog-1.jpg',
    schemaType: 'WebPage',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "쿠키정책 - FinGate",
      "description": "FinGate의 쿠키정책입니다. 웹사이트에서 사용하는 쿠키에 대해 자세히 알아보세요.",
      "mainEntity": {
        "@type": "Organization",
        "name": "FinGate"
      }
    }
  }
}

// 공통 메타데이터
export const commonMeta = {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  author: 'FinGate',
  robots: 'index, follow',
  language: 'ko',
  themeColor: '#2563eb',
  msapplicationTileColor: '#2563eb',
  formatDetection: 'telephone=no',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'default',
  appleMobileWebAppTitle: 'FinGate',
  applicationName: 'FinGate',
  msapplicationTooltip: 'FinGate - 혁신적인 금융 솔루션',
  msapplicationStarturl: '/',
  msapplicationNavbuttonColor: '#2563eb',
  msapplicationTileImage: '/favicon.svg',
  geoRegion: 'KR',
  geoPlacename: '서울',
  geoPosition: '37.5665;126.9780',
  ICBM: '37.5665, 126.9780',
  DCTitle: 'FinGate - 혁신적인 금융 솔루션',
  DCDescription: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.',
  DCSubject: '금융솔루션, 핀테크, 디지털뱅킹',
  DCCreator: 'FinGate',
  DCPublisher: 'FinGate',
  DCDateCreated: '2024-01-01',
  DCDateModified: '2025-01-23',
  DCLanguage: 'ko',
  DCCoverage: '대한민국',
  DCRights: 'Copyright FinGate'
}
