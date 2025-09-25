// https://nuxt.com/docs/api/configuration/nuxt-config
declare const defineNuxtConfig: (config: any) => any

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-09-25',
  
  // CSS 프레임워크 설정
  css: [
    '~/assets/scss/main.scss'
  ],
  
  // 모듈 설정
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  
  // Google Fonts 설정
  googleFonts: {
    families: {
      'Noto+Sans+KR': [300, 400, 500, 700],
      'Roboto': [300, 400, 500, 700]
    },
    display: 'swap',
    preload: true
  },
  
  // 앱 설정
  app: {
    baseURL: '/',
    buildAssetsDir: '_nuxt',
    head: {
      title: 'FinGate - 혁신적인 금융 솔루션',
      titleTemplate: '%s | FinGate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다. 디지털 뱅킹, 투자 관리, 보안 솔루션을 제공합니다.' },
        { name: 'keywords', content: '금융솔루션, 핀테크, 디지털뱅킹, 투자관리, 금융컨설팅, FinGate' },
        { name: 'author', content: 'FinGate' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'ko' },
        
        // Open Graph 태그
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'FinGate' },
        { property: 'og:title', content: 'FinGate - 혁신적인 금융 솔루션' },
        { property: 'og:description', content: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.' },
        { property: 'og:image', content: '/images/blog-1.jpg' },
        { property: 'og:url', content: process.env.NUXT_PUBLIC_BASE_URL },
        { property: 'og:locale', content: 'ko_KR' },
        
        // Twitter Card 태그
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@FinGate' },
        { name: 'twitter:title', content: 'FinGate - 혁신적인 금융 솔루션' },
        { name: 'twitter:description', content: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.' },
        { name: 'twitter:image', content: '/images/blog-1.jpg' },
        
        // 추가 메타 태그
        { name: 'theme-color', content: '#2563eb' },
        { name: 'msapplication-TileColor', content: '#2563eb' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'FinGate' },
        { name: 'application-name', content: 'FinGate' },
        { name: 'msapplication-tooltip', content: 'FinGate - 혁신적인 금융 솔루션' },
        { name: 'msapplication-starturl', content: '/' },
        { name: 'msapplication-navbutton-color', content: '#2563eb' },
        { name: 'msapplication-TileImage', content: '/favicon.svg' },
        
        // 추가 SEO 메타 태그
        { name: 'geo.region', content: 'KR' },
        { name: 'geo.placename', content: '서울' },
        { name: 'geo.position', content: '37.5665;126.9780' },
        { name: 'ICBM', content: '37.5665, 126.9780' },
        { name: 'DC.title', content: 'FinGate - 혁신적인 금융 솔루션' },
        { name: 'DC.description', content: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.' },
        { name: 'DC.subject', content: '금융솔루션, 핀테크, 디지털뱅킹' },
        { name: 'DC.creator', content: 'FinGate' },
        { name: 'DC.publisher', content: 'FinGate' },
        { name: 'DC.date.created', content: '2024-01-01' },
        { name: 'DC.date.modified', content: '2025-01-23' },
        { name: 'DC.language', content: 'ko' },
        { name: 'DC.coverage', content: '대한민국' },
        { name: 'DC.rights', content: 'Copyright FinGate' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: process.env.NUXT_PUBLIC_BASE_URL }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FinGate",
            "url": process.env.NUXT_PUBLIC_BASE_URL,
            "logo": `${process.env.NUXT_PUBLIC_BASE_URL}/favicon.svg`,
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
            "sameAs": [
              process.env.NUXT_PUBLIC_BASE_URL
            ],
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
            ],
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "홈",
                  "item": process.env.NUXT_PUBLIC_BASE_URL
                }
              ]
            }
          })
        }
      ]
    }
  },
  
  // 런타임 설정
  runtimeConfig: {
    public: {
      // 도메인 설정 (기본값 추가)
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://leenstar.dothome.co.kr',
      siteName: 'FinGate',
      siteDescription: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.'
    }
  },
  
  // 빌드 설정
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: [
        '/',
        '/about',
        '/services',
        '/blog',
        '/contact',
        '/privacy',
        '/terms',
        '/cookies'
      ]
    },
    output: {
      dir: 'dist'
    },
  },
  
  // 성능 최적화
  experimental: {
    payloadExtraction: false
  },
  
  // 번들 통합 설정 (관리 편의성 우선)
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: () => 'app'
        }
      }
    }
  },
  
  // 이미지 최적화
  image: {
    quality: 80,
    format: ['webp', 'avif']
  },
  
  // SEO 설정
  site: {
    url: process.env.NUXT_PUBLIC_BASE_URL,
    name: 'FinGate',
    description: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.',
    defaultLocale: 'ko'
  },
  
  // 사이트맵 설정
  sitemap: {
    hostname: process.env.NUXT_PUBLIC_BASE_URL,
    gzip: true,
    routes: [
      '/',
      '/about',
      '/services',
      '/blog',
      '/contact',
      '/privacy',
      '/terms',
      '/cookies'
    ]
  },
  
  // robots.txt 자동 생성
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${process.env.NUXT_PUBLIC_BASE_URL}/sitemap.xml`
  },
  
  // 구조화된 데이터
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'FinGate',
      url: process.env.NUXT_PUBLIC_BASE_URL,
      logo: `${process.env.NUXT_PUBLIC_BASE_URL}/favicon.svg`,
      description: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.',
      address: {
        type: 'PostalAddress',
        addressCountry: 'KR',
        addressLocality: '서울'
      },
      contactPoint: {
        type: 'ContactPoint',
        contactType: 'customer service',
        email: 'info@fingate.co.kr'
      },
      sameAs: [
        process.env.NUXT_PUBLIC_BASE_URL
      ]
    }
  }
})

