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
            duration: 2,
            ease: "power3.out",
            delay: index * 0.3,
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse"
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
            delay: 1.0 + (index * 0.2), // hero-title 완료 후 시작
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse"
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
            delay: 1.0 + (index * 0.2), // hero-title 완료 후 시작
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
            ease: "power2.inOut",
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
            ease: "power2.inOut",
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
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // mask-reveal-up 애니메이션 - 마스크가 아래에서 위로 올라가며 드러남
      gsap.utils.toArray('.mask-reveal-up').forEach((element, index) => {
        gsap.fromTo(element, 
          { 
            clipPath: 'inset(100% 0 0 0)' 
          },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            ease: "power3.inOut",
            delay: 0.5,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // scroll-dot-bounce 애니메이션 - 스크롤 다운 dot이 위아래로 움직임
      gsap.utils.toArray('.scroll-dot-bounce').forEach((element) => {
        gsap.to(element, {
          y: 18, 
          duration: 1.2,
          delay: 1.2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        })
      })

      // cards-spread-out 애니메이션 - 모든 카드 (0,0)에서 출발 후 CSS 좌표로 이동
      gsap.utils.toArray('.cards-spread-out').forEach((container) => {
        const cards = Array.from(container.querySelectorAll('.company-card'))

        // 1) 각 카드의 최종점만 정의 (시작점은 SCSS에서 관리)
        const finalPositions = [
          { x: 486,  y: -410 }, // company-card-1 최종점
          { x: 341,  y: 100  }, // company-card-2 최종점
          { x: -580, y: 80   }, // company-card-3 최종점
          { x: -780, y: -300 }, // company-card-4 최종점
          { x: -360, y: -440 }  // company-card-5 최종점
        ]

        // 2) 각 카드를 SCSS 시작점에서 최종 위치로 애니메이션
        cards.forEach((card, i) => {
          // SCSS의 transform 값을 시작점으로 사용하고 숨김
          gsap.set(card, { 
            opacity: 0 
          })
          
          // 최종 위치로 애니메이션
          gsap.to(card, {
            x: finalPositions[i].x,
            y: finalPositions[i].y,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out', // 바운스 없이 부드럽게
            delay: 0.7, // 동시 실행
            overwrite: 'auto',
            scrollTrigger: {
              trigger: container,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          })
          
          // 디버깅: 각 카드의 최종점 확인
          console.log(`Card ${i} (${card.className}): Start: SCSS transform -> End: (${finalPositions[i].x}, ${finalPositions[i].y})`)
        })
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
