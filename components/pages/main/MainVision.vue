<template>
  <section class="main-vision" aria-labelledby="vision-heading">
    <div class="container">
      <div class="hero-header" ref="heroHeaderRef">
        <div class="hero-subtitle">NEW VISION</div>
        <h2 id="vision-heading" class="hero-title mt-20">AI와 함께 만드는 보험 IT의 새로운 기준</h2>
        <p class="hero-desc mt-40">복잡한 보험 업무를 데이터와 AI로 혁신적인 경험을 만듭니다.</p>
      </div>
      <div class="vision-cards-wrapper" role="list" aria-label="비전 카드 목록">
        <NuxtLink 
          v-for="(card, index) in visionCards"
          :key="index"
          :to="card.link"
          :class="`vision-card-${index + 1}`"
          class="vision-card"
          :aria-label="`${card.title} 페이지로 이동`"
        >
          <h3 class="vision-card-title">{{ card.title }}</h3>
          <p class="vision-card-desc mt-24" v-html="card.desc"></p>
        </NuxtLink>
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

const visionCards = [
  {
    title: '맞춤형 AI 보장 컨설팅',
    desc: '고객의 라이프스타일과 건강 데이터를 AI로<br>분석하여 최적의 보장 조합을 제안합니다.',
    link: '/newvision'
  },
  {
    title: 'AI 어드바이저',
    desc: '설계사의 업무를 데이터 기반으로 지원하여<br>상담의 정확성과 신뢰성을 강화합니다.',
    link: '/newvision'
  },
  {
    title: 'AI RPA',
    desc: '이미지 패턴 인식 기술로 반복적인 문서 업무를<br>자동화하여 더 가치있는 업무에 집중합니다.',
    link: '/newvision'
  }
]

let gsapContext: gsap.Context | null = null

// 헤더 ref
const heroHeaderRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (process.client) {
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
              trigger: '.main-vision',
              start: 'top 50%',
              toggleActions: 'play none none none'
            }
          }
        )
      }

      const cards = document.querySelectorAll('.vision-card')
      
      cards.forEach((card, index) => {
        gsap.set(card, { 
          opacity: 0, 
          y: 50,
          force3D: true
        })
        
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          force3D: true,
          delay: 1 + (index * 0.2),
          scrollTrigger: {
            trigger: '.main-vision',
            start: 'top 60%',
            toggleActions: 'play none none none'
          },
          onComplete: function() {
            const element = card as HTMLElement
            element.style.transform = ''
            element.classList.add('animate-complete')
          }
        })
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
