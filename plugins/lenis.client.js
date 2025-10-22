import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // GSAP과 연동
    lenis.on('scroll', (e) => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.update()
      }
    })

    // 애니메이션 프레임에서 업데이트
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // 전역 접근 및 provide
    window.lenis = lenis
    nuxtApp.provide('lenis', lenis)
  }
})
