<template>
  <section class="main-company" aria-labelledby="company-heading">
    <div class="container">
      <div class="hero-header">
        <div class="hero-subtitle" ref="subtitleRef">COMPANY</div>
        <h2 id="company-heading" class="hero-title mt-20" ref="titleRef">보험을 가장 잘 아는 인슈어테크 기업</h2>
        <p class="hero-desc mt-40" ref="descRef">실무에서 검증된 IT 경험과 혁신 기술로 고객의 비즈니스 가치를 높입니다.</p>
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
            <img 
              :src="card.image"
              :alt="`${cleanTitles[index]} 이미지`"
              loading="lazy"
              width="288"
              height="372"
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
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP 플러그인 등록
if (typeof window !== 'undefined') {
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

// 헤더 요소들 ref
const subtitleRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)

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

// 컴포넌트 마운트 시 이벤트 리스너 추가
onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove, { passive: true })
  
  if (typeof window !== 'undefined') {
    gsapContext = gsap.context(() => {
      // 헤더 애니메이션 - 각각 개별적으로
      if (subtitleRef.value) {
        gsap.fromTo(subtitleRef.value, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            delay: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.main-company',
              start: 'top 50%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
      
      if (titleRef.value) {
        gsap.fromTo(titleRef.value, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.main-company',
              start: 'top 50%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
      
      if (descRef.value) {
        gsap.fromTo(descRef.value, 
          { opacity: 0, y: -30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            delay: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.main-company',
              start: 'top 50%',
              toggleActions: 'play none none none'
            }
          }
        )
      }

      // cards-spread-out 애니메이션
      (gsap.utils.toArray('.cards-spread-out') as Element[]).forEach((container) => {
        const cards = Array.from(container.querySelectorAll('.company-card'))

        // 화면 크기에 따른 위치 계산 (1920px 기준으로 확장)
        const screenWidth = window.innerWidth
        const scaleFactor = Math.min(screenWidth / 1920, 1.33) // 최대 2560px까지
        
        const basePositions = [
          { x: 486,  y: -410 },
          { x: 341,  y: 100  },
          { x: -580, y: 80   },
          { x: -780, y: -300 },
          { x: -360, y: -440 }
        ]
        
        const finalPositions = basePositions.map(pos => ({
          x: pos.x * scaleFactor,
          y: pos.y * scaleFactor
        }))

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
              toggleActions: 'play none none none',
            },
          })
        })
      })
    })
  }
})

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  
  // RAF 취소
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
  }
  
  // GSAP Context로 모든 애니메이션/ScrollTrigger 자동 제거
  if (gsapContext) {
    gsapContext.revert()
  }
})
</script>
