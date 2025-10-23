<template>
  <section class="main-services" aria-labelledby="services-heading">
    <div class="container">
      <div class="services-header">
        <div class="hero-header" ref="heroHeaderRef">
          <div class="hero-subtitle">SERVICES</div>
          <h2 id="services-heading" class="hero-title mt-20">보험의 비즈니스<br>가치를 높이는<br>디지털 솔루션</h2>
          <p class="hero-desc mt-40">우리의 서비스로 고객의 성공을 앞당깁니다.</p>
          <NuxtLink to="/services/service1" class="button mt-120" aria-label="서비스 상세 페이지로 이동">MORE VIEW</NuxtLink>
        </div>
      </div>

      <div class="services-cards" role="list" aria-label="주요 서비스 목록">
        <article 
          v-for="(card, index) in serviceCards" 
          :key="index"
          class="service-card"
          :class="`service-card-${index + 1}`"
          role="listitem"
          :aria-label="`${card.title} 서비스`"
        >
          <div class="card-image">
            <img 
              :src="card.image"
              :alt="`${card.title} 이미지`"
              loading="lazy"
              width="400"
              height="500"
            />
          </div>
          <div class="card-text">
            <h3 class="card-title">{{ card.title }}</h3>
            <div class="card-desc mt-24" v-html="card.desc"></div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const serviceCards = [
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
]

let gsapContext: gsap.Context | null = null

// 헤더 ref
const heroHeaderRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (typeof window !== 'undefined') {
    gsapContext = gsap.context(() => {
      // 헤더 애니메이션
      if (heroHeaderRef.value) {
        gsap.fromTo(heroHeaderRef.value, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.main-services',
              start: 'top 60%',
              toggleActions: 'play reverse play reverse'
            }
          }
        )
      }

      // 각 카드에 대해 개별 애니메이션 설정
      serviceCards.forEach((_, index) => {
        const cardElement = document.querySelector(`.service-card-${index + 1}`)
        
        if (cardElement) {
          // 각 카드마다 다른 트리거 시작점 설정
          const triggerStart = [
            "top 80%", // 카드 1: 가장 일찍
            "top 90%", // 카드 2: 조금 늦게
            "top 90%", // 카드 3: 더 늦게
            "top 90%"  // 카드 4: 가장 늦게
          ]
          
          gsap.fromTo(cardElement, 
            { 
              opacity: 0, 
              y: "+=150",
              force3D: true
            },
            {
              opacity: 1,
              y: "-=150",
              duration: 0.5,
              ease: "power3.out",
              force3D: true,
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
    })
  }
})

onUnmounted(() => {
  if (gsapContext) {
    gsapContext.revert()
  }
})
</script>