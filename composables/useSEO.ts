import { seoConfig, commonMeta, type SEOConfig } from '~/config/seo'

export const useSEO = (pageKey: string, customConfig?: Partial<SEOConfig>) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.baseUrl
  
  // 기본 설정 가져오기
  const pageConfig = seoConfig[pageKey] || seoConfig.index
  
  // 커스텀 설정 병합
  const finalConfig = { ...pageConfig, ...customConfig }
  
  // URL 생성
  const getPageUrl = (path: string = '') => {
    return path ? `${baseUrl}${path}` : baseUrl
  }
  
  // 브레드크럼 생성
  const generateBreadcrumb = (currentPage: string, currentTitle: string) => {
    return {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "홈",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": currentTitle,
          "item": getPageUrl(`/${currentPage}`)
        }
      ]
    }
  }
  
  // 스키마 데이터 생성
  const generateSchemaData = () => {
    if (!finalConfig.schemaData) return null
    
    const schema = { ...finalConfig.schemaData }
    
    // URL 업데이트
    if (schema.url) {
      schema.url = getPageUrl(`/${pageKey}`)
    }
    
    // 로고 URL 업데이트
    if (schema.logo) {
      schema.logo = `${baseUrl}/favicon.svg`
    }
    
    // 퍼블리셔 URL 업데이트
    if (schema.publisher?.url) {
      schema.publisher.url = baseUrl
    }
    
    // 메인 엔티티 URL 업데이트
    if (schema.mainEntity?.url) {
      schema.mainEntity.url = baseUrl
    }
    
    // 이미지 URL 업데이트
    if (schema.image) {
      schema.image = `${baseUrl}${schema.image}`
    }
    
    if (schema.blogPost) {
      schema.blogPost = schema.blogPost.map((post: any) => ({
        ...post,
        image: `${baseUrl}${post.image}`
      }))
    }
    
    // 브레드크럼 추가
    if (pageKey !== 'index') {
      schema.breadcrumb = generateBreadcrumb(pageKey, finalConfig.title)
    }
    
    return schema
  }
  
  // 메타데이터 생성
  const meta = [
    { charset: commonMeta.charset },
    { name: 'viewport', content: commonMeta.viewport },
    { name: 'description', content: finalConfig.description },
    { name: 'keywords', content: finalConfig.keywords },
    { name: 'author', content: commonMeta.author },
    { name: 'robots', content: commonMeta.robots },
    { name: 'language', content: commonMeta.language },
    
    // Open Graph 태그
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'FinGate' },
    { property: 'og:title', content: finalConfig.ogTitle || finalConfig.title },
    { property: 'og:description', content: finalConfig.ogDescription || finalConfig.description },
    { property: 'og:image', content: `${baseUrl}${finalConfig.ogImage || '/images/blog-1.jpg'}` },
    { property: 'og:url', content: getPageUrl(`/${pageKey}`) },
    { property: 'og:locale', content: 'ko_KR' },
    
    // Twitter Card 태그
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@FinGate' },
    { name: 'twitter:title', content: finalConfig.twitterTitle || finalConfig.title },
    { name: 'twitter:description', content: finalConfig.twitterDescription || finalConfig.description },
    { name: 'twitter:image', content: `${baseUrl}${finalConfig.twitterImage || '/images/blog-1.jpg'}` },
    
    // 추가 메타 태그
    { name: 'theme-color', content: commonMeta.themeColor },
    { name: 'msapplication-TileColor', content: commonMeta.msapplicationTileColor },
    { name: 'format-detection', content: commonMeta.formatDetection },
    { name: 'mobile-web-app-capable', content: commonMeta.mobileWebAppCapable },
    { name: 'apple-mobile-web-app-capable', content: commonMeta.appleMobileWebAppCapable },
    { name: 'apple-mobile-web-app-status-bar-style', content: commonMeta.appleMobileWebAppStatusBarStyle },
    { name: 'apple-mobile-web-app-title', content: commonMeta.appleMobileWebAppTitle },
    { name: 'application-name', content: commonMeta.applicationName },
    { name: 'msapplication-tooltip', content: commonMeta.msapplicationTooltip },
    { name: 'msapplication-starturl', content: commonMeta.msapplicationStarturl },
    { name: 'msapplication-navbutton-color', content: commonMeta.msapplicationNavbuttonColor },
    { name: 'msapplication-TileImage', content: `${baseUrl}${commonMeta.msapplicationTileImage}` },
    
    // 추가 SEO 메타 태그
    { name: 'geo.region', content: commonMeta.geoRegion },
    { name: 'geo.placename', content: commonMeta.geoPlacename },
    { name: 'geo.position', content: commonMeta.geoPosition },
    { name: 'ICBM', content: commonMeta.ICBM },
    { name: 'DC.title', content: commonMeta.DCTitle },
    { name: 'DC.description', content: commonMeta.DCDescription },
    { name: 'DC.subject', content: commonMeta.DCSubject },
    { name: 'DC.creator', content: commonMeta.DCCreator },
    { name: 'DC.publisher', content: commonMeta.DCPublisher },
    { name: 'DC.date.created', content: commonMeta.DCDateCreated },
    { name: 'DC.date.modified', content: commonMeta.DCDateModified },
    { name: 'DC.language', content: commonMeta.DCLanguage },
    { name: 'DC.coverage', content: commonMeta.DCCoverage },
    { name: 'DC.rights', content: commonMeta.DCRights }
  ]
  
  // 링크 생성
  const link = [
    { rel: 'icon', type: 'image/svg+xml', href: `${baseUrl}/favicon.svg` },
    { rel: 'canonical', href: getPageUrl(`/${pageKey}`) }
  ]
  
  // 스크립트 생성
  const script = []
  const schemaData = generateSchemaData()
  if (schemaData) {
    script.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schemaData)
    })
  }
  
  return {
    title: finalConfig.title,
    meta,
    link,
    script
  }
}
