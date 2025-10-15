import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // 스냅 동작 관련 상수
    const SNAP_BOTTOM_TOUCH = 0.995  // 마지막 카드 바닥이 거의 완전히 뷰포트 하단에 닿았을 때
    const SNAP_TOP_TOUCH = 0.05      // 카드 상단이 상단에 충분히 근접했을 때
    const MIN_DURATION = 0.55
    const MAX_DURATION = 0.75

    const lenis = new Lenis({
      duration: 0.85,
      // easeOutCubic: 부드러운 감속 (계산 간단)
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
    const sections = ['hero', 'company', 'services', 'partners', 'vision', 'banner']

    // 뷰포트에 보이는 섹션과 인덱스를 동기화
    const updateCurrentSectionIndex = () => {
      const selectors = sections.map((name) => `.${name}-section, .main-${name}`)
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

      const deltaY = e.deltaY
      const isScrollingDown = deltaY > 0
      const isScrollingUp = deltaY < 0

      // MainServices 섹션 (index 2) 특별 처리
      if (currentSectionIndex === 2) {
        const servicesSection = document.querySelector('.main-services')
        
        if (servicesSection) {
          const sectionRect = servicesSection.getBoundingClientRect()

          // 카드 컨테이너(또는 마지막 카드)의 끝을 기준으로 스냅 시점 판정
          const cardsContainer = document.querySelector('.services-cards')
          const lastCard = document.querySelector('.services-cards .service-card:last-child')
          const targetRect = (lastCard || cardsContainer || servicesSection).getBoundingClientRect()

          const vh = window.innerHeight || 1
          const atSectionEnd = targetRect.bottom <= vh * SNAP_BOTTOM_TOUCH // 마지막 카드의 바닥이 거의 뷰포트 끝에 닿았을 때
          const atSectionStart = (cardsContainer ? cardsContainer.getBoundingClientRect().top : sectionRect.top) >= vh * SNAP_TOP_TOUCH // 카드 상단이 거의 뷰포트 상단 부근일 때

          if (isScrollingDown && atSectionEnd) { // 카드 끝에 닿으면 다음 섹션으로
            if (currentSectionIndex < sections.length - 1) {
              currentSectionIndex++
              scrollToSection(currentSectionIndex)
            }
          } else if (isScrollingUp && atSectionStart) { // 카드 상단이 다시 위로 충분히 올라왔을 때만 이전 섹션으로
            if (currentSectionIndex > 0) {
              currentSectionIndex--
              scrollToSection(currentSectionIndex)
            }
          }
          return
        }
      }

      // 일반 섹션들 (100vh)
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
      
      // Banner 섹션(마지막 섹션)으로 이동하는 경우, 페이지 맨 아래로 스크롤
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
      
      const targetSection = document.querySelector(`.${sections[index]}-section`) || 
                           document.querySelector(`.main-${sections[index]}`)
      
      if (targetSection) {
        // 남은 거리 기반 동적 duration (짧은 거리 더 짧게, 긴 거리 조금 더 길게)
        const rect = targetSection.getBoundingClientRect()
        const distance = Math.abs(rect.top)
        const vh = window.innerHeight || 1
        const ratio = Math.max(0, Math.min(distance / (2 * vh), 1))
        const dynamicDuration = MIN_DURATION + ((MAX_DURATION - MIN_DURATION) * ratio) // 0.7s ~ 1.05s

        // 더 또렷한 긴장감의 easeOutQuint
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
