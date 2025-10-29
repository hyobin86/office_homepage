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

    lenis.on('scroll', () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.update()
      }
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    if (window.ScrollTrigger) {
      window.ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length) {
            lenis.scrollTo(value, { immediate: true })
          } else {
            return window.scrollY || window.pageYOffset
          }
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        },
        pinType: document.body.style.transform ? 'transform' : 'fixed'
      })

      window.ScrollTrigger.addEventListener('refresh', () => {
        requestAnimationFrame((time) => lenis.raf(time))
      })
      window.ScrollTrigger.refresh()
    }

    const resetScrollPosition = () => {
      lenis.stop()
      lenis.scrollTo(0, { immediate: true, force: true })
      window.scrollTo(0, 0)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.documentElement.scrollLeft = 0
      document.body.scrollTop = 0
      document.body.scrollLeft = 0
      setTimeout(() => lenis.start(), 0)
    }

    const router = useRouter()
    router.beforeEach((to, from) => {
      if (to.path !== from.path) {
        resetScrollPosition()
      }
    })

    nuxtApp.hook('page:finish', () => {
      nextTick(resetScrollPosition)
    })

    window.lenis = lenis
    nuxtApp.provide('lenis', lenis)
  }
})
