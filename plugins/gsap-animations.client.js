// plugins/gsap-animations.client.js
export default defineNuxtPlugin(() => {
  if (process.client) {
    // 애니메이션 초기화 함수
    const initAnimations = () => {
      // window에서 gsap과 ScrollTrigger 가져오기
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger
      
      if (!gsap || !ScrollTrigger) return
      // fade-in 애니메이션
      gsap.utils.toArray('.fade-in').forEach((element, index) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            y: 30 ,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: element,
              start: "top 60%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      })

      // fade-in-delayed 애니메이션 (hero-title 이후 실행)
      gsap.utils.toArray('.fade-in-delayed').forEach((element, index) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            y: 30 ,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.7 + (index * 0.2), // hero-title 완료 후 시작
            scrollTrigger: {
              trigger: element,
              start: "top 60%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      })
      // fade-out 애니메이션
      gsap.utils.toArray('.fade-out-delayed').forEach((element, index) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            y: -30 ,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.7 + (index * 0.2), // hero-title 완료 후 시작
            scrollTrigger: {
              trigger: element,
              start: "top 60%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      })

      // fade-in-left 애니메이션
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

      // fade-in-right 애니메이션
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

      // fade-in-scale 애니메이션
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

    // Nuxt 페이지 전환 시에도 실행
    const router = useRouter()
    router.afterEach(() => {
      setTimeout(() => {
        ScrollTrigger.refresh()
        initAnimations()
      }, 100)
    })
  }
})
