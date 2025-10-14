<template>
  <section class="main-services">
    <div class="container">
      <!-- 왼쪽 헤더 섹션 (고정) -->
      <div class="services-header">
        <div class="hero-header fade-in">
          <div class="hero-subtitle">SERVICES</div>
          <div class="hero-title mt-20">보험의 비즈니스<br>가치를 높이는<br>디지털 솔루션</div>
          <div class="hero-desc mt-40">우리의 서비스로 고객의 성공을 앞당깁니다</div>
          <NuxtLink to="/services" class="button mt-120">MORE VIEW</NuxtLink>
        </div>
      </div>

      <!-- 오른쪽 카드 섹션 (스크롤 애니메이션) -->
      <div class="services-cards">
        <div 
          v-for="(card, index) in serviceCards" 
          :key="index"
          class="service-card"
          :class="`service-card-${index + 1}`"
        >
          <div class="card-image" :style="{ backgroundImage: `url(${card.image})` }"></div>
          <div class="card-text">
            <div class="card-title">{{ card.title }}</div>
            <div class="card-desc mt-24" v-html="card.desc"></div>
          </div>
        </div>
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

// 서비스 카드 데이터
const serviceCards = ref([
  {
    title: '영업지원 솔루션',
    desc: '배정 DB 관리<br/>상담/계약관리<br/>교육/영업 평가 관리<br/>수수료',
    image: '/images/main/main-card6.png',
  },
  {
    title: '경영지원 솔루션',
    desc: '인사/위촉후보자 관리<br/>임차/자산 관리<br/>채권추심<br/>준법',
    image: '/images/main/main-card7.png',
  },
  {
    title: '통합지원 솔루션',
    desc: 'DB 운영<br/>권한/상품 관리<br/>통합 고객 관리<br/>캠페인/민원 관리',
    image: '/images/main/main-card8.png',
  },
  {
    title: '인슈어테크 솔루션',
    desc: '보장분석<br/>보험추천<br/>상품설계<br/>보험비교',
    image: '/images/main/main-card9.png',
  }
])

// 스크롤 애니메이션 설정
onMounted(() => {
  if (process.client) {
    // 각 카드에 대해 개별 애니메이션 설정
    serviceCards.value.forEach((_, index) => {
      const cardElement = document.querySelector(`.service-card-${index + 1}`)
      
      if (cardElement) {
        // 각 카드마다 다른 트리거 시작점 설정
        const triggerStart = [
          "top 68%", // 카드 1: 가장 일찍
          "top 67%", // 카드 2: 조금 늦게
          "top 66%", // 카드 3: 더 늦게
          "top 65%"  // 카드 4: 가장 늦게
        ]
        
        gsap.fromTo(cardElement, 
          { 
            opacity: 0, 
            y: "+=150" // 기존 transform에 추가
          },
          {
            opacity: 1,
            y: "-=150", // 기존 transform에서 빼기
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardElement,
              start: triggerStart[index],
              end: "bottom 0%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      }
    })
  }
})

onUnmounted(() => {
  if (process.client) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})
</script>