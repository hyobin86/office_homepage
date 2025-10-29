<template>
  <section class="service2-onestop" aria-labelledby="onestop-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="onestop-heading" class="section-title">
          설계사의 모든 고민, ISP 하나로 끝!
        </h2>
        <p class="section-desc mt-32">
          고객 관리부터 보장 분석, 설계 · 추천까지 설계사의 전 과정을 원스톱으로 지원합니다.
        </p>
      </div>
    </div>

    <div class="dashboard-cards">
      <div 
        v-for="(card, index) in cardsData" 
        :key="index"
        :class="`card card-${index + 1}`"
        :ref="(el) => setCardRef(el, index)"
      >
        <img 
          :src="card.image"
          :alt="card.alt"
          :width="card.width"
          :height="card.height"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, type ComponentPublicInstance } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CardData {
  image: string
  alt: string
  delay: number  // 등장 딜레이 (초 단위)
  width: number
  height: number
}

const cardsData: CardData[] = [
  {
    image: '/images/services/service2-card1.png',
    alt: '카드1',
    delay: 0.7,
    width: 343,
    height: 61
  },
  {
    image: '/images/services/service2-card2.png',
    alt: '카드2',
    delay: 0.8,
    width: 342,
    height: 263
  },
  {
    image: '/images/services/service2-card3.png',
    alt: '카드3',
    delay: 0.9,
    width: 342,
    height: 105
  },
  {
    image: '/images/services/service2-card4.png',
    alt: '카드4',
    delay: 1,
    width: 342,
    height: 90
  },
  {
    image: '/images/services/service2-card5.png',
    alt: '카드5',
    delay: 0.5,
    width: 192,
    height: 612
  },
  {
    image: '/images/services/service2-card6.png',
    alt: '카드6',
    delay: 0,
    width: 688,
    height: 56
  },
  {
    image: '/images/services/service2-card7.png',
    alt: '카드7',
    delay: 0.1,
    width: 689,
    height: 572
  },
  {
    image: '/images/services/service2-card8.png',
    alt: '카드 8',
    delay: 0.5,
    width: 560,
    height: 191
  },
  {
    image: '/images/services/service2-card9.png',
    alt: '카드 9',
    delay: 0.6,
    width: 268,
    height: 174
  },
  {
    image: '/images/services/service2-card10.png',
    alt: '카드 10',
    delay: 0.7,
    width: 268,
    height: 174
  },
  {
    image: '/images/services/service2-card11.png',
    alt: '카드 11',
    delay: 0.8,
    width: 559,
    height: 204
  }
]

// Refs
const headerRef = ref<HTMLElement>()
const cardRefs = ref<(HTMLElement | ComponentPublicInstance)[]>([])

const setCardRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) {
    cardRefs.value[index] = el as HTMLElement | ComponentPublicInstance
  }
}

onMounted(() => {
  // 타이틀 애니메이션 (더 간단하고 확실한 방법)
  if (headerRef.value) {
    gsap.fromTo(headerRef.value, 
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service2-onestop',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  }
  
  // 카드들 애니메이션 - 등장해서 고정 위치로 이동
  cardRefs.value.forEach((cardRef, index) => {
    const element = cardRef as HTMLElement
    if (element) {
      // 초기 위치 설정 (최종 위치에서 50px 아래)
      gsap.set(element, { 
        marginTop: 150, 
        opacity: 0,
      })
      
      // 최종 위치로 애니메이션 (각 카드의 개별 delay 사용)
      gsap.to(element, {
        marginTop: 0,
        opacity: 1,
        duration: 1,
        delay: cardsData[index].delay,  // 각 카드의 개별 delay 사용
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.dashboard-cards',  // dashboard-cards 전체를 트리거로 사용
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })
    }
  })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>
