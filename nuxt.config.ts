import { SITE_CONFIG } from './config/site'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxt/image'],
  
  // 이미지 최적화 설정
  image: {
    formats: ['webp', 'avif'],
    quality: 85,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  
  app: {
    head: {
      title: SITE_CONFIG.title,
      titleTemplate: `%s | ${SITE_CONFIG.name}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
      routes: ['/', '/company', '/services/service1', '/services/service2', '/newvision', '/contact'] 
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
          manualChunks: {
            'vendor-gsap': ['gsap'],
            'vendor-lenis': ['lenis'],
            'vendor-emailjs': ['@emailjs/browser'],
            'vendor-vue': ['vue']
          }
        } 
      } 
    } 
  }
})

