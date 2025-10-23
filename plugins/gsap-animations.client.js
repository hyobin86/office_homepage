// plugins/gsap-animations.client.js
export default defineNuxtPlugin(() => {
  if (process.client) {
    const initAnimations = () => {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger
      
      if (!gsap || !ScrollTrigger) return
      
      // fade-in 애니메이션
      gsap.utils.toArray('.fade-in').forEach((element, index) => {
        const parentSection = element.closest('.company-business')
        const isInCompanyBusiness = !!parentSection
        
        if (isInCompanyBusiness) return
        
        const mainServicesSection = element.closest('.main-services')
        const isInServicesSection = !!mainServicesSection
        
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            y: 50 ,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.5,
            scrollTrigger: {
              trigger: element,
              start: "top 60%",
              end: isInServicesSection ? () => mainServicesSection.offsetTop + mainServicesSection.offsetHeight : undefined,
              toggleActions: isInServicesSection ? "play reverse play reverse" : "play reverse play reverse",
              invalidateOnRefresh: false
            }
          }
        )
      })

      // fade-in-left
      gsap.utils.toArray('.fade-in-left').forEach((element, index) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            x: -30 
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      })

      // fade-in-right
      gsap.utils.toArray('.fade-in-right').forEach((element, index) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            x: 30 
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      })

      // fade-in-scale
      gsap.utils.toArray('.fade-in-scale').forEach((element, index) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            scale: 0.9 
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      })


    }

    // 페이지 로드 시 실행
    const runAnimations = () => {
      setTimeout(initAnimations, 100)
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runAnimations)
    } else {
      runAnimations()
    }

    // 페이지 전환 시 실행
    const router = useRouter()
    router.afterEach(() => {
      setTimeout(() => {
        ScrollTrigger.refresh()
        initAnimations()
      }, 100)
    })
  }
})
