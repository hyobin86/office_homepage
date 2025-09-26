const fs = require('fs')
const path = require('path')

// 환경 변수에서 도메인 가져오기
const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || 'https://leenstar.dothome.co.kr'

const robotsTxt = `User-agent: *
Allow: /

# 주요 페이지들
Allow: /about
Allow: /services
Allow: /blog
Allow: /contact

# 정적 파일들
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /fonts/
Allow: /videos/

# 사이트맵 위치
Sitemap: ${baseUrl}/sitemap.xml

# 크롤링 지연 (선택사항)
Crawl-delay: 1

# 금지할 디렉토리 (필요시)
# Disallow: /admin/
# Disallow: /private/`

// public 폴더에 robots.txt 생성
const publicDir = path.join(__dirname, '..', 'public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt)
console.log(`✅ Robots.txt generated with base URL: ${baseUrl}`)
console.log(`📁 Generated file: ${path.join(publicDir, 'robots.txt')}`)
