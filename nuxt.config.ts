import { SITE_CONFIG } from './config/site'

// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss'
  ],
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
  
  app: {
    baseURL: '/',
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
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
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
    baseURL: '/',
    compressPublicAssets: {
      gzip: false,
      brotli: false
    },
    prerender: { 
      routes: ['/', '/company', '/services/service1', '/services/service2', '/newvision', '/contact'],
      failOnError: false
    },
    output: { dir: 'dist' }
  },
  
  experimental: { 
    payloadExtraction: false 
  },
  
  // Vite 빌드 최적화 (vendor 분리)
  vite: { 
    build: { 
      rollupOptions: { 
        output: { 
          manualChunks(id: string) {
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

