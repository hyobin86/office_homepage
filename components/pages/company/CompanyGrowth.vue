<template>
  <section class="company-growth" aria-labelledby="growth-heading">
    <div class="container">
      <div class="section-header">
        <div class="section-subtitle">Rooted in Values, Built for Growth</div>
        <h2 id="growth-heading" class="section-title mt-24">
          핀게이트가 지향하는 가치는<br/>
          모든 활동의 출발점이자 성장의 기반입니다.
        </h2>
      </div>
      
      <div class="growth-content mt-120">
        <div class="value-cards">
          <div 
            v-for="(value, index) in valueCards" 
            :key="index"
            class="value-card"
          >
            <div class="card-icon">
              <NuxtImg 
                :src="value.icon"
                :alt="`${value.title} 아이콘`"
                loading="lazy"
                format="webp"
                width="64"
                height="64"
                quality="85"
              />
            </div>
            <h3 class="card-title mt-40">{{ value.title }}</h3>
            <p class="card-desc mt-20" v-html="value.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

let gsapContext: gsap.Context | null = null

const valueCards = [
  {
    title: 'TRUST',
    description: '고객과의 신뢰를<br/>최우선으로 생각합니다.',
    icon: '/images/company/company-icon1.svg'
  },
  {
    title: 'EXPERTISE',
    description: '보험 산업에 대한 깊은 이해와<br/>풍부한 경험을 보유합니다.',
    icon: '/images/company/company-icon2.svg'
  },
  {
    title: 'INNOVATION',
    description: '끊임없는 IT 연구로<br/>보험 산업의 혁신을 실현합니다.',
    icon: '/images/company/company-icon3.svg'
  },
  {
    title: 'PARTNERSHIP',
    description: '고객과 함께 성장을 도모하는<br/>IT 파트너입니다.',
    icon: '/images/company/company-icon4.svg'
  }
]

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      // 섹션 헤더 애니메이션 (양방향)
      gsap.fromTo('.section-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.section-header',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      )
      
      // 가치 카드들 순차 등장 (양방향)
      const cards = document.querySelectorAll('.value-card')
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5 + (index * 0.2),
            ease: "power2.out",
            scrollTrigger: {
              trigger: '.section-header',
              start: "top 60%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
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
