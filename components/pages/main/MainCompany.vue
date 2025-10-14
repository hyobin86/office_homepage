<template>
  <section class="main-company">
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="hero-header">
        <div class="hero-subtitle fade-in-delayed">COMPANY</div>
        <div class="hero-title mt-20 fade-in">보험을 가장 잘 아는 인슈어테크 기업</div>
        <div class="hero-desc mt-40 fade-out-delayed">실무에서 검증된 IT 경험과 혁신 기술로 고객의 비즈니스 가치를 높입니다.</div>
      </div>
      
      <!-- 회사 카드들 -->
      <div class="company-cards cards-spread-out">
        <NuxtLink 
          v-for="(card, index) in companyCards" 
          :key="index"
          :to="card.link"
          class="company-card"
          :class="`company-card-${index + 1}`"
          @mouseenter="showCustomCursor"
          @mouseleave="hideCustomCursor"
        >
          <div class="card-image" :style="{ backgroundImage: `url(${card.image})` }"></div>
          <div class="card-title" v-html="card.title"></div>
        </NuxtLink>
      </div>

       <!-- 커스텀 커서 -->
      <div class="custom-cursor" ref="customCursor">
        <div class="cursor-text">MORE VIEW</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP 플러그인 등록
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// 회사 카드 데이터
const companyCards = ref([
  {
    title: 'Cloud · 보안성 강화',
    image: '/images/main/main-card1.png',
    link: '/services/service2'
  },
  {
    title: 'MSA',
    image: '/images/main/main-card2.png',
    link: '/services/service2'
  },
  {
    title: '보험 인하우스 <br/>IT 전문가',
    image: '/images/main/main-card3.png',
    link: '/services/service2'
  },
  {
    title: '통합시스템',
    image: '/images/main/main-card4.png',
    link: '/services/service2'
  },
  {
    title: 'IT 인프라',
    image: '/images/main/main-card5.png',
    link: '/services/service2'
  }
])

// 커스텀 커서 관련
const customCursor = ref(null)

// 커스텀 커서 표시
const showCustomCursor = () => {
  if (customCursor.value) {
    customCursor.value.classList.add('show')
  }
}

// 커스텀 커서 숨기기
const hideCustomCursor = () => {
  if (customCursor.value) {
    customCursor.value.classList.remove('show')
  }
}

// 마우스 이동 이벤트 - 간단하게
const handleMouseMove = (e) => {
  if (customCursor.value) {
    customCursor.value.style.left = e.clientX + 'px'
    customCursor.value.style.top = e.clientY + 'px'
  }
}

// 컴포넌트 마운트 시 이벤트 리스너 추가
onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  
  if (process.client) {
    // cards-spread-out 애니메이션
    gsap.utils.toArray('.cards-spread-out').forEach((container) => {
      const cards = Array.from(container.querySelectorAll('.company-card'))

      const finalPositions = [
        { x: 486,  y: -410 },
        { x: 341,  y: 100  },
        { x: -580, y: 80   },
        { x: -780, y: -300 },
        { x: -360, y: -440 }
      ]

      cards.forEach((card, i) => {
        gsap.set(card, { opacity: 0 })
        
        gsap.to(card, {
          x: finalPositions[i].x,
          y: finalPositions[i].y,
          opacity: 1,
          duration: 0.8,
          ease: 'power1.out',
          immediateRender: false,
          delay: 0.3 + (i * 0.05),
          overwrite: 'auto',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          },
        })
      })
    })
  }
})

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  
  if (process.client) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})
</script>
