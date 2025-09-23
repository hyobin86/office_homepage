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

    // GSAP과 연동
    lenis.on('scroll', (e) => {
      // GSAP ScrollTrigger 업데이트
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

    // 전역에서 접근 가능하도록 설정
    window.lenis = lenis

    // 컴포넌트에서 사용할 수 있도록 provide
    nuxtApp.provide('lenis', lenis)
  }
})
