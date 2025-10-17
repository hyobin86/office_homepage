import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) { // Lenis 다시 활성화
    // 스냅 동작 관련 상수
    const SNAP_BOTTOM_TOUCH = 0.3
    const SNAP_TOP_TOUCH = 0.7
    const MIN_DURATION = 0.55
    const MAX_DURATION = 0.75

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

    // 섹션 인덱스 관리
    let currentSectionIndex = 0
    let isScrolling = false
    let currentPage = ''
    const mainSections = ['hero', 'company', 'services', 'partners', 'vision', 'banner']
    const newvisionSections = ['hero', 'agenda', 'nextstep', 'value', 'contact']
    const companySections = ['hero', 'growth', 'strength', 'business', 'history', 'contact']

    // 현재 페이지와 섹션 배열 결정
    const getCurrentSections = () => {
      const path = window.location.pathname
      if (path === '/newvision') {
        currentPage = 'newvision'
        return newvisionSections
      } else if (path === '/company') {
        currentPage = 'company'
        return [] // Company 페이지는 스냅 비활성화
      } else {
        currentPage = 'main'
        return mainSections
      }
    }

    // 뷰포트에 보이는 섹션과 인덱스를 동기화
    const updateCurrentSectionIndex = () => {
      const sections = getCurrentSections()
      const selectors = sections.map((name) => {
        if (currentPage === 'newvision') {
          return `.newvision-${name}, .${name}-section`
        } else if (currentPage === 'company') {
          return `.company-${name}, .${name}-section`
        } else {
          return `.${name}-section, .main-${name}`
        }
      })
      
      const nodes = selectors
        .map((sel) => document.querySelector(sel))
        .map((el) => (el && el.getBoundingClientRect ? el : null))
      
      let bestIndex = currentSectionIndex
      let bestDistance = Infinity
      
      nodes.forEach((el, idx) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const distance = Math.abs(rect.top)
        if (distance < bestDistance) {
          bestDistance = distance
          bestIndex = idx
        }
      })
      
      currentSectionIndex = bestIndex
    }

    // 휠 이벤트로 섹션 이동 제어
    const handleWheel = (e) => {
      if (isScrolling) {
        e.preventDefault()
        return false
      }

      const sections = getCurrentSections()
      
      // Company 페이지는 스냅 비활성화 - 자연스러운 스크롤 허용
      if (currentPage === 'company') {
        return true
      }
      
      const deltaY = e.deltaY
      const isScrollingDown = deltaY > 0
      const isScrollingUp = deltaY < 0

      // MainServices 섹션 특별 처리
      if (currentPage === 'main' && currentSectionIndex === 2) {
        const servicesSection = document.querySelector('.main-services')
        
        if (servicesSection) {
          const cardsContainer = document.querySelector('.services-cards')
          const lastCard = document.querySelector('.services-cards .service-card:last-child')
          const targetRect = (lastCard || cardsContainer || servicesSection).getBoundingClientRect()
          const vh = window.innerHeight || 1

          const atSectionEnd = targetRect.bottom <= vh * SNAP_BOTTOM_TOUCH
          const atSectionStart = (cardsContainer ? cardsContainer.getBoundingClientRect().top : servicesSection.getBoundingClientRect().top) >= vh * SNAP_TOP_TOUCH

          if (isScrollingDown && atSectionEnd) {
            if (currentSectionIndex < sections.length - 1) {
              currentSectionIndex++
              scrollToSection(currentSectionIndex)
            }
          } else if (isScrollingUp && atSectionStart) {
            if (currentSectionIndex > 0) {
              currentSectionIndex--
              scrollToSection(currentSectionIndex)
            }
          }
          return
        }
      }

      // NewvisionAgenda 섹션 특별 처리
      if (currentPage === 'newvision' && currentSectionIndex === 1) {
        const agendaSection = document.querySelector('.newvision-agenda')
        
        if (agendaSection) {
          const currentScrollY = window.scrollY || window.pageYOffset
          const sectionTop = agendaSection.offsetTop
          const sectionHeight = agendaSection.offsetHeight
          const sectionBottom = sectionTop + sectionHeight
          const vh = window.innerHeight || 1

          const atSectionEnd = currentScrollY >= sectionBottom - 200
          const atSectionStart = agendaSection.getBoundingClientRect().top >= vh * SNAP_TOP_TOUCH

          if (isScrollingDown && atSectionEnd) {
            if (currentSectionIndex < sections.length - 1) {
              currentSectionIndex++
              scrollToSection(currentSectionIndex)
            }
          } else if (isScrollingUp && atSectionStart) {
            if (currentSectionIndex > 0) {
              currentSectionIndex--
              scrollToSection(currentSectionIndex)
            }
          }
          return
        }
      }

      // NewvisionNextstep 섹션 특별 처리
      if (currentPage === 'newvision' && currentSectionIndex === 2) {
        const nextstepSection = document.querySelector('.newvision-nextstep')
        
        if (nextstepSection) {
          const currentScrollY = window.scrollY || window.pageYOffset
          const sectionTop = nextstepSection.offsetTop
          const sectionHeight = nextstepSection.offsetHeight
          const sectionBottom = sectionTop + sectionHeight
          const vh = window.innerHeight || 1

          const atSectionEnd = currentScrollY >= sectionBottom - 200
          const atSectionStart = nextstepSection.getBoundingClientRect().top >= vh * SNAP_TOP_TOUCH

          if (isScrollingDown && atSectionEnd) {
            if (currentSectionIndex < sections.length - 1) {
              currentSectionIndex++
              scrollToSection(currentSectionIndex)
            }
          } else if (isScrollingUp && atSectionStart) {
            if (currentSectionIndex > 0) {
              currentSectionIndex--
              scrollToSection(currentSectionIndex)
            }
          }
          return
        }
      }

      // 일반 섹션들 처리
      if (isScrollingDown && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++
        scrollToSection(currentSectionIndex)
      } else if (isScrollingUp && currentSectionIndex > 0) {
        currentSectionIndex--
        scrollToSection(currentSectionIndex)
      }
    }

    // 특정 섹션으로 스크롤
    const scrollToSection = (index) => {
      if (isScrolling) return
      
      isScrolling = true
      const sections = getCurrentSections()
      
      // 마지막 섹션으로 이동하는 경우, 페이지 맨 아래로 스크롤
      if (index === sections.length - 1) {
        const scrollToBottom = document.documentElement.scrollHeight - window.innerHeight
        const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5)
        
        lenis.scrollTo(scrollToBottom, {
          duration: 0.95,
          easing: easeOutQuint
        })
        
        setTimeout(() => {
          isScrolling = false
        }, 1100)
        return
      }
      
      // 페이지별 섹션 선택자 생성
      let targetSection
      if (currentPage === 'newvision') {
        targetSection = document.querySelector(`.newvision-${sections[index]}`) || 
                      document.querySelector(`.${sections[index]}-section`)
      } else if (currentPage === 'company') {
        targetSection = document.querySelector(`.company-${sections[index]}`) || 
                      document.querySelector(`.${sections[index]}-section`)
      } else {
        targetSection = document.querySelector(`.${sections[index]}-section`) || 
                       document.querySelector(`.main-${sections[index]}`)
      }
      
      if (targetSection) {
        const rect = targetSection.getBoundingClientRect()
        const distance = Math.abs(rect.top)
        const vh = window.innerHeight || 1
        const ratio = Math.max(0, Math.min(distance / (2 * vh), 1))
        const dynamicDuration = MIN_DURATION + ((MAX_DURATION - MIN_DURATION) * ratio)
        const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5)

        lenis.scrollTo(targetSection, {
          duration: dynamicDuration,
          easing: easeOutQuint
        })
      }

      // 스크롤 완료 후 잠금 해제
      setTimeout(() => {
        isScrolling = false
      }, 1100)
    }

    // GSAP과 연동
    lenis.on('scroll', (e) => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.update()
      }
      if (!isScrolling) updateCurrentSectionIndex()
    })

    // 휠 이벤트 리스너 추가
    window.addEventListener('wheel', handleWheel, { passive: false })
    updateCurrentSectionIndex()

    // 라우트 변경 시 섹션 인덱스 초기화
    const handleRouteChange = () => {
      currentSectionIndex = 0
      updateCurrentSectionIndex()
    }
    
    // 라우트 변경 감지
    window.addEventListener('popstate', handleRouteChange)
    
    // Nuxt 라우터 변경 감지
    if (window.$nuxt && window.$nuxt.$router) {
      window.$nuxt.$router.afterEach(handleRouteChange)
    }

    // 애니메이션 프레임에서 업데이트
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // 전역 접근 및 provide
    window.lenis = lenis
    window.scrollToSection = scrollToSection
    nuxtApp.provide('lenis', lenis)
    nuxtApp.provide('scrollToSection', scrollToSection)
  }
})
