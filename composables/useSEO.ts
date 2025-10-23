/* ========================================
   단순화된 SEO Composable
   ======================================== */

import { PAGE_SEO, SEO_DEFAULTS, DEFAULT_SCHEMA, type SeoKey } from '~/config/seo'
import { SITE_CONFIG } from '~/config/site'

export const useSEO = (pageKey: SeoKey, customData?: Partial<typeof PAGE_SEO[SeoKey]>) => {
  const config = useRuntimeConfig()
  const route = useRoute()
  
  // 페이지별 SEO 설정 가져오기
  const seoData = PAGE_SEO[pageKey]
  
  if (!seoData) {
    console.warn(`SEO config not found for page: ${pageKey}`)
    return {
      title: SEO_DEFAULTS.title,
      meta: [],
      script: []
    }
  }

  // 커스텀 데이터가 있으면 병합
  const finalSeoData = customData ? { ...seoData, ...customData } : seoData
  
  // 현재 URL 생성
  const currentUrl = `${config.public.baseUrl}${route.path}`
  
  // 메타데이터 생성
  const meta = [
    // 기본 메타 태그
    { name: 'description', content: finalSeoData.description },
    { name: 'keywords', content: finalSeoData.keywords },
    { name: 'author', content: SITE_CONFIG.author },
    
    // Open Graph 태그 (카카오톡 공유용)
    { property: 'og:type', content: SEO_DEFAULTS.type },
    { property: 'og:site_name', content: SITE_CONFIG.name },
    { property: 'og:title', content: finalSeoData.title },
    { property: 'og:description', content: finalSeoData.description },
    { property: 'og:image', content: `${config.public.baseUrl}${SEO_DEFAULTS.image}` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:url', content: currentUrl },
    { property: 'og:locale', content: SEO_DEFAULTS.locale },
    
    // 카카오톡 전용 메타태그
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: finalSeoData.title },
    { property: 'twitter:description', content: finalSeoData.description },
    { property: 'twitter:image', content: `${config.public.baseUrl}${SEO_DEFAULTS.image}` },
    
    // 추가 SEO 메타 태그
    { name: 'robots', content: SEO_DEFAULTS.robots },
    { name: 'geo.region', content: 'KR' },
    { name: 'geo.placename', content: '서울' },
    { name: 'DC.title', content: finalSeoData.title },
    { name: 'DC.description', content: finalSeoData.description },
    { name: 'DC.subject', content: finalSeoData.keywords },
    { name: 'DC.creator', content: SITE_CONFIG.author },
    { name: 'DC.publisher', content: SITE_CONFIG.name },
    { name: 'DC.language', content: SITE_CONFIG.language },
    { name: 'DC.coverage', content: '대한민국' }
  ]

  // 링크 태그 생성
  const link = [
    { rel: 'canonical', href: currentUrl }
  ]

  // 구조화된 데이터 스크립트 (기본 스키마만 사용)
  const script = [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(DEFAULT_SCHEMA)
    }
  ]

  return {
    title: finalSeoData.title,
    meta,
    link,
    script
  }
}
