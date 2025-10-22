import { SITE_CONFIG } from './config/site'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss'
  ],
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxt/image'],
  
  // 이미지 최적화 설정
  image: {
    formats: ['avif'],
    quality: 85,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    // 정적 이미지 처리 설정
    static: {
      // 정적 이미지도 최적화하되 원본 경로 유지
      baseURL: '/images/',
      // 빌드 시 이미지 복사 설정
      dir: 'public/images'
    },
    // IPX 설정 (이미지 최적화 엔진)
    ipx: {
      // 정적 이미지 처리 시 원본 경로 유지
      modifiers: {
        // 기본 설정 유지
      }
    },
    // 이미지 최적화 비활성화 옵션 (개발 중 문제 해결용)
    presets: {
      default: {
        modifiers: {
          quality: 85
        }
      }
    }
  },
  
  app: {
    head: {
      title: SITE_CONFIG.title,
      titleTemplate: `%s | ${SITE_CONFIG.name}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=1920, user-scalable=yes' },
        { name: 'robots', content: SITE_CONFIG.seo.robots },
        { name: 'theme-color', content: SITE_CONFIG.themeColor },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: SITE_CONFIG.favicon },
        // 폰트 preload로 성능 향상
        { rel: 'preload', as: 'style', href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },
  
  runtimeConfig: {
    public: {
      baseUrl: SITE_CONFIG.baseUrl,
      siteName: SITE_CONFIG.name,
      siteDescription: SITE_CONFIG.description,
      contactEmail: SITE_CONFIG.office.email,
      contactPhone: SITE_CONFIG.office.phone,
      contactAddress: SITE_CONFIG.office.address,
      emailjsServiceId: SITE_CONFIG.emailjs.serviceId,
      emailjsTemplateId: SITE_CONFIG.emailjs.templateId,
      emailjsPublicKey: SITE_CONFIG.emailjs.publicKey,
      emailjsToEmail: SITE_CONFIG.emailjs.toEmail
    }
  },
  
  nitro: {
    compatibilityDate: '2025-10-13',
    compressPublicAssets: {
      gzip: true,
      brotli: true
    },
    prerender: { 
      routes: ['/', '/company', '/services/service1', '/services/service2', '/newvision', '/contact'],
      failOnError: false
    },
    output: { dir: 'dist' },
    // 정적 자산 복사 설정
    publicAssets: [
      {
        baseURL: '/images',
        dir: 'public/images',
        maxAge: 60 * 60 * 24 * 7 // 7일 캐시
      }
    ]
  },
  
  experimental: { 
    payloadExtraction: false 
  },
  
  // Vite 빌드 최적화 (vendor 분리)
  vite: { 
    build: { 
      rollupOptions: { 
        output: { 
          manualChunks(id) {
            // node_modules의 패키지들만 분리 (SSR 안전)
            if (id.includes('node_modules')) {
              if (id.includes('@emailjs/browser')) {
                return 'vendor-emailjs'
              }
              if (id.includes('lenis')) {
                return 'vendor-lenis'
              }
              if (id.includes('gsap')) {
                return 'vendor-gsap'
              }
              if (id.includes('vue')) {
                return 'vendor-vue'
              }
            }
          }
        } 
      } 
    } 
  }
})

