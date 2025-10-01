/* ========================================
   Sitemap Generator
   ======================================== */

const fs = require('fs')
const path = require('path')

// 사이트맵 생성 함수
function generateSitemap() {
  const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || 'https://leenstar.dothome.co.kr'
  
  // 사이트맵에 포함할 페이지들
  const routes = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/company', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/service1', priority: '0.7', changefreq: 'monthly' },
    { url: '/services/service2', priority: '0.7', changefreq: 'monthly' },
    { url: '/newvision', priority: '0.7', changefreq: 'weekly' },
    { url: '/contact', priority: '0.6', changefreq: 'monthly' }
  ]

  // XML 사이트맵 생성
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  routes.forEach(route => {
    sitemap += '  <url>\n'
    sitemap += `    <loc>${baseUrl}${route.url}</loc>\n`
    sitemap += `    <lastmod>${new Date().toISOString()}</lastmod>\n`
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`
    sitemap += `    <priority>${route.priority}</priority>\n`
    sitemap += '  </url>\n'
  })

  sitemap += '</urlset>'

  // public 폴더에 사이트맵 저장
  const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  fs.writeFileSync(sitemapPath, sitemap, 'utf8')
  
  console.log('✅ Sitemap generated successfully:', sitemapPath)
}

// 스크립트 실행
if (require.main === module) {
  generateSitemap()
}

module.exports = { generateSitemap }
