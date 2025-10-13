import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // 섹션 인덱스 관리
    let currentSectionIndex = 0
    let isScrolling = false
    const sections = ['hero', 'company', 'services', 'partners', 'banner'] // 섹션들

    // 휠 이벤트로 섹션 이동 제어
    const handleWheel = (e) => {
      if (isScrolling) {
        e.preventDefault()
        return false
      }

      const deltaY = e.deltaY
      const isScrollingDown = deltaY > 0
      const isScrollingUp = deltaY < 0

      if (isScrollingDown && currentSectionIndex < sections.length - 1) {
        // 다음 섹션으로
        currentSectionIndex++
        scrollToSection(currentSectionIndex)
      } else if (isScrollingUp && currentSectionIndex > 0) {
        // 이전 섹션으로
        currentSectionIndex--
        scrollToSection(currentSectionIndex)
      }
    }

    // 특정 섹션으로 스크롤
    const scrollToSection = (index) => {
      if (isScrolling) return
      
      isScrolling = true
      const targetSection = document.querySelector(`.${sections[index]}-section`) || 
                           document.querySelector(`.main-${sections[index]}`)
      
      if (targetSection) {
        lenis.scrollTo(targetSection, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })
      }

      // 스크롤 완료 후 잠금 해제
      setTimeout(() => {
        isScrolling = false
      }, 1200)
    }

    // GSAP과 연동
    lenis.on('scroll', (e) => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.update()
      }
    })

    // 휠 이벤트 리스너 추가
    window.addEventListener('wheel', handleWheel, { passive: false })

    // 애니메이션 프레임에서 업데이트
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // 전역에서 접근 가능하도록 설정
    window.lenis = lenis
    window.scrollToSection = scrollToSection

    // 컴포넌트에서 사용할 수 있도록 provide
    nuxtApp.provide('lenis', lenis)
    nuxtApp.provide('scrollToSection', scrollToSection)
  }
})
