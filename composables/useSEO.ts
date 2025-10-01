/* ========================================
   SEO Composable
   ======================================== */

import { seoConfig } from '~/config/seo'

export const useSEO = (pageKey: string) => {
  const config = useRuntimeConfig()
  const seoData = seoConfig[pageKey]
  
  if (!seoData) {
    console.warn(`SEO config not found for page: ${pageKey}`)
    return {}
  }

  return {
    title: seoData.title,
    meta: [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords },
      
      // Open Graph
      { property: 'og:title', content: seoData.ogTitle },
      { property: 'og:description', content: seoData.ogDescription },
      { property: 'og:image', content: seoData.ogImage },
      { property: 'og:url', content: config.public.baseUrl }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(seoData.schemaData)
      }
    ]
  }
}
