/* ========================================
   GitHub Pages 배포 준비 스크립트
   dist/public의 내용을 dist로 이동
   ======================================== */

const fs = require('fs')
const path = require('path')

function prepareDeploy() {
  const distDir = path.join(__dirname, '../dist')
  const publicDir = path.join(distDir, 'public')

  if (!fs.existsSync(publicDir)) {
    console.log('✅ dist/public이 없습니다. 이미 준비된 상태입니다.')
    return
  }

  console.log('📦 배포 준비 중...')

  // dist/public의 모든 파일과 폴더를 dist로 복사
  function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src)
    const stats = exists && fs.statSync(src)
    const isDirectory = exists && stats.isDirectory()

    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true })
      }
      fs.readdirSync(src).forEach(childItemName => {
        copyRecursiveSync(
          path.join(src, childItemName),
          path.join(dest, childItemName)
        )
      })
    } else {
      const destDir = path.dirname(dest)
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true })
      }
      fs.copyFileSync(src, dest)
    }
  }

  // public 폴더의 모든 내용을 dist로 복사
  const publicContents = fs.readdirSync(publicDir)
  
  publicContents.forEach(item => {
    const srcPath = path.join(publicDir, item)
    const destPath = path.join(distDir, item)
    
    // 이미 존재하는 파일이면 덮어쓰기
    if (fs.existsSync(destPath)) {
      const stats = fs.statSync(destPath)
      if (stats.isDirectory()) {
        fs.rmSync(destPath, { recursive: true, force: true })
      } else {
        fs.unlinkSync(destPath)
      }
    }
    
    copyRecursiveSync(srcPath, destPath)
  })
  
  // .nojekyll 파일 생성 (GitHub Pages에서 _nuxt 폴더 인식용)
  const publicNojekyll = path.join(__dirname, '../public/.nojekyll')
  const distNojekyll = path.join(distDir, '.nojekyll')
  
  if (fs.existsSync(publicNojekyll)) {
    fs.copyFileSync(publicNojekyll, distNojekyll)
  } else {
    fs.writeFileSync(distNojekyll, '', 'utf8')
  }

  // dist/public 폴더 삭제
  fs.rmSync(publicDir, { recursive: true, force: true })

  console.log('✅ 배포 준비 완료!')
}

// 스크립트 실행
if (require.main === module) {
  prepareDeploy()
}

module.exports = { prepareDeploy }

