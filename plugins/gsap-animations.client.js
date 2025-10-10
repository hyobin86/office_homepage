// plugins/gsap-animations.client.js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    // 애니메이션 초기화 함수
    const initAnimations = () => {
      // fade-in 애니메이션
      gsap.utils.toArray('.fade-in').forEach((element, index) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            y: 30 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse"
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
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
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
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
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
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })
    }

    // 페이지 로드 시 실행 (약간의 지연으로 버벅거림 방지)
    const runAnimations = () => {
      setTimeout(initAnimations, 100) // 100ms 지연
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
