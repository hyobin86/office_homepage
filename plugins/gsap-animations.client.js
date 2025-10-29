export default defineNuxtPlugin(() => {
  if (process.client) {
    const initAnimations = () => {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger
      if (!gsap || !ScrollTrigger) return

      gsap.utils.toArray('.fade-in').forEach((element) => {
        const isInCompanyBusiness = !!element.closest('.company-business')
        if (isInCompanyBusiness) return
        const mainServicesSection = element.closest('.main-services')
        const isInServicesSection = !!mainServicesSection

        gsap.fromTo(element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.5,
            scrollTrigger: {
              trigger: element,
              start: 'top 60%',
              end: isInServicesSection ? () => mainServicesSection.offsetTop + mainServicesSection.offsetHeight : undefined,
              toggleActions: 'play none none none',
              invalidateOnRefresh: false,
            }
          }
        )
      })

      gsap.utils.toArray('.fade-in-left').forEach((element) => {
        gsap.fromTo(element,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none none' }
          }
        )
      })

      gsap.utils.toArray('.fade-in-right').forEach((element) => {
        gsap.fromTo(element,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none none' }
          }
        )
      })

      gsap.utils.toArray('.fade-in-scale').forEach((element) => {
        gsap.fromTo(element,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none none' }
          }
        )
      })
    }

    const runAnimations = () => { setTimeout(initAnimations, 100) }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runAnimations)
    } else {
      runAnimations()
    }

    const router = useRouter()
    router.afterEach(() => {
      setTimeout(() => {
        window.ScrollTrigger?.refresh()
        initAnimations()
      }, 100)
    })
  }
})
