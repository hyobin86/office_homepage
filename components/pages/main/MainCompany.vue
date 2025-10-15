<template>
  <section class="main-company" aria-labelledby="company-heading">
    <div class="container">
      <div class="hero-header">
        <div class="hero-subtitle fade-in-delayed">COMPANY</div>
        <h2 id="company-heading" class="hero-title mt-20 fade-in">보험을 가장 잘 아는 인슈어테크 기업</h2>
        <p class="hero-desc mt-40 fade-out-delayed">실무에서 검증된 IT 경험과 혁신 기술로 고객의 비즈니스 가치를 높입니다.</p>
      </div>
      
      <div 
        class="company-cards cards-spread-out" 
        role="list" 
        aria-label="회사 주요 서비스"
        @mouseover="handleCardHover"
        @mouseleave="hideCustomCursor"
      >
        <NuxtLink 
          v-for="(card, index) in companyCards" 
          :key="index"
          :to="card.link"
          class="company-card"
          :class="cardClasses[index]"
          :aria-label="`${cleanTitles[index]} 서비스 상세보기`"
          role="listitem"
        >
          <div class="card-image">
            <NuxtImg 
              :src="card.image"
              :alt="`${cleanTitles[index]} 이미지`"
              format="webp"
              loading="lazy"
              :width="288"
              :height="372"
              quality="85"
              sizes="sm:228px md:288px"
            />
          </div>
          <div class="card-title" v-html="card.title" aria-hidden="true"></div>
        </NuxtLink>
      </div>

      <div class="custom-cursor" ref="customCursor" aria-hidden="true">
        <div class="cursor-text">MORE VIEW</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP 플러그인 등록
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// 회사 카드 데이터
const companyCards = [
  {
    title: 'Cloud · 보안성 강화',
    image: '/images/main/main-card1.png',
    link: '/company'
  },
  {
    title: 'MSA',
    image: '/images/main/main-card2.png',
    link: '/company'
  },
  {
    title: '보험 인하우스 <br/>IT 전문가',
    image: '/images/main/main-card3.png',
    link: '/company'
  },
  {
    title: '통합시스템',
    image: '/images/main/main-card4.png',
    link: '/company'
  },
  {
    title: 'IT 인프라',
    image: '/images/main/main-card5.png',
    link: '/company'
  }
]

// 카드 제목에서 HTML 태그 제거 (빌드 타임 계산)
const cleanTitles = companyCards.map(card => card.title.replace(/<br\/?>/g, ' '))

// 카드 클래스명 미리 계산
const cardClasses = companyCards.map((_, index) => `company-card-${index + 1}`)

// 커스텀 커서 관련
const customCursor = ref<HTMLElement | null>(null)

// 이벤트 위임을 통한 커서 표시 (카드에 마우스 진입 시)
const handleCardHover = (e: Event) => {
  const target = e.target as HTMLElement
  const card = target.closest('.company-card')
  
  if (card && customCursor.value) {
    customCursor.value.classList.add('show')
  } else if (!card && customCursor.value) {
    customCursor.value.classList.remove('show')
  }
}

// 커스텀 커서 숨기기
const hideCustomCursor = () => {
  if (customCursor.value) {
    customCursor.value.classList.remove('show')
  }
}

// 마우스 이동 이벤트 - requestAnimationFrame으로 최적화
let rafId: number | null = null
const handleMouseMove = (e: MouseEvent) => {
  if (!customCursor.value) return
  
  // 이전 RAF가 실행 중이면 취소
  if (rafId !== null) return
  
  // RAF를 사용하여 브라우저 렌더링 사이클에 맞춰 업데이트
  rafId = requestAnimationFrame(() => {
    if (customCursor.value) {
      // 커서 중앙 정렬: 커서 크기(20rem = 200px)의 절반(100px)을 빼줌
      customCursor.value.style.transform = 
        `translate3d(${e.clientX - 100}px, ${e.clientY - 100}px, 0)`
    }
    rafId = null
  })
}

// GSAP Context (자동 클린업)
let gsapContext: gsap.Context | null = null
let observer: IntersectionObserver | null = null

// GSAP 애니메이션 초기화 함수
const initGsapAnimations = () => {
  if (gsapContext) return // 이미 초기화되었으면 리턴
  
  gsapContext = gsap.context(() => {
    // cards-spread-out 애니메이션
    (gsap.utils.toArray('.cards-spread-out') as Element[]).forEach((container) => {
      const cards = Array.from(container.querySelectorAll('.company-card'))

      const finalPositions = [
        { x: 486,  y: -410 },
        { x: 341,  y: 100  },
        { x: -580, y: 80   },
        { x: -780, y: -300 },
        { x: -360, y: -440 }
      ]

      cards.forEach((card, i) => {
        gsap.set(card, { opacity: 0, force3D: true })
        
        gsap.to(card, {
          x: finalPositions[i].x,
          y: finalPositions[i].y,
          opacity: 1,
          duration: 0.7,
          ease: 'power1.out',
          force3D: true,
          immediateRender: false,
          delay: 0.7 + (i * 0.05),
          overwrite: 'auto',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          },
        })
      })
    })
  })
}

// 컴포넌트 마운트 시 이벤트 리스너 추가
onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove, { passive: true })
  
  if (process.client) {
    // Intersection Observer로 뷰포트 진입 시 애니메이션 초기화
    const section = document.querySelector('.main-company')
    if (section) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              initGsapAnimations()
              // 한 번만 실행하고 observer 해제
              observer?.disconnect()
            }
          })
        },
        { rootMargin: '100px' } // 뷰포트 100px 전에 미리 초기화
      )
      observer.observe(section)
    }
  }
})

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  
  // RAF 취소
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
  }
  
  // Intersection Observer 정리
  if (observer) {
    observer.disconnect()
  }
  
  // GSAP Context로 모든 애니메이션/ScrollTrigger 자동 제거
  if (gsapContext) {
    gsapContext.revert()
  }
})
</script>
