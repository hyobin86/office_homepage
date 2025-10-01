/* ========================================
   Robots.txt Generator
   ======================================== */

const fs = require('fs')
const path = require('path')

// robots.txt 생성 함수
function generateRobots() {
  const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || 'https://leenstar.dothome.co.kr'
  
  const robotsTxt = `User-agent: *
Allow: /

# 주요 페이지들
Allow: /company
Allow: /services
Allow: /newvision
Allow: /contact

# 정적 파일들
Allow: /images/
Allow: /favicon.svg
Allow: /_nuxt/

# 사이트맵
Sitemap: ${baseUrl}/sitemap.xml

# 크롤링 지연 (선택사항)
Crawl-delay: 1
`

  // public 폴더에 robots.txt 저장
  const publicDir = path.join(__dirname, '../public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  const robotsPath = path.join(publicDir, 'robots.txt')
  fs.writeFileSync(robotsPath, robotsTxt, 'utf8')
  
  console.log('✅ Robots.txt generated successfully:', robotsPath)
}

// 스크립트 실행
if (require.main === module) {
  generateRobots()
}

module.exports = { generateRobots }
