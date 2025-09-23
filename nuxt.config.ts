// https://nuxt.com/docs/api/configuration/nuxt-config
declare const defineNuxtConfig: (config: any) => any

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-09-23',
  
  // CSS 프레임워크 설정
  css: [
    '~/assets/scss/main.scss'
  ],
  
  // 모듈 설정
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/seo'
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
        { property: 'og:url', content: 'https://fingate.co.kr' },
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
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'FinGate' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  
  // 런타임 설정
  runtimeConfig: {
    public: {
      // 필요시 여기에 공개 설정 추가
    }
  },
  
  // 빌드 설정
  nitro: {
    compressPublicAssets: true
  },
  
  // 성능 최적화
  experimental: {
    payloadExtraction: false
  },
  
  // 이미지 최적화
  image: {
    quality: 80,
    format: ['webp', 'avif']
  },
  
  // SEO 설정
  site: {
    url: 'https://fingate.co.kr',
    name: 'FinGate',
    description: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.',
    defaultLocale: 'ko'
  },
  
  // 사이트맵 설정
  sitemap: {
    hostname: 'https://fingate.co.kr',
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
  
  // 구조화된 데이터
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'FinGate',
      url: 'https://fingate.co.kr',
      logo: 'https://fingate.co.kr/favicon.svg',
      description: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.'
    }
  }
})

