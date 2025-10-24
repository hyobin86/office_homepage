<template>
  <section class="service1-revolution" aria-labelledby="revolution-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="revolution-heading" class="section-title">
          EPIKA가 만드는 새로운 변화
        </h2>
        <p class="section-desc mt-32">
          비효율적인 업무 방식은 사라지고 성과를 높이는 혁신이 시작됩니다.
        </p>
      </div>
      
      <div class="feature-grid">
        <div 
          v-for="(block, index) in revolutionBlocks" 
          :key="block.title"
          class="feature-card"
          :ref="(el) => setCardRef(el, index)"
        >
          <div class="card-image">
            <img 
              :src="`/images/services/${block.image}`"
              :alt="block.title"
              loading="lazy"
              width="475"
              height="640"
            />
            <div class="card-overlay">
              <h3 class="card-title">{{ block.title }}</h3>
              <p class="card-text mt-20" v-html="block.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, type ComponentPublicInstance } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevolutionBlock {
  title: string
  description: string
  image: string
}

const headerRef = ref<HTMLElement | null>(null)
const cardRefs = ref<(HTMLElement | null)[]>([])
let gsapContext: gsap.Context | null = null

// ref 설정 함수
const setCardRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el && 'tagName' in el) {
    cardRefs.value[index] = el as HTMLElement
  }
}

const revolutionBlocks: RevolutionBlock[] = [
  {
    title: '설계사 업무 성과 극대화',
    description: '고객 정보의 통합관리와 상담, 계약, 마케팅 기능의<br/> 유기적 연동을 통해 업무 효율성을 높입니다.',
    image: 'service1-card5.png'
  },
  {
    title: '효율적인 DB 관리 운영',
    description: '다채널로 유입되는 DB를 통합 관리하여,<br/> 체계적이고 정밀한 DB운영을 지원합니다.',
    image: 'service1-card6.png'
  },
  {
    title: '신속하고 정확한 정산',
    description: '계약정보 기반으로 실시간 지급액을 산출하고,<br/> 2개월분 마감·지급·환수 수수료까지 집계해<br/>정확한 정산을 제공합니다.',
    image: 'service1-card7.png'
  },
  {
    title: '강력한 보안',
    description: '글로벌 대형 보험사의 보안 기준을 충족하며,<br/> 최신 기술로 최고 수준의 보안을 제공합니다.',
    image: 'service1-card8.png'
  }
]

onMounted(() => {
  if (typeof window !== 'undefined') {
    gsapContext = gsap.context(() => {
      // 헤더 애니메이션
      if (headerRef.value) {
        gsap.set(headerRef.value, { opacity: 0, y: 50 })
        gsap.to(headerRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.value,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        })
      }

      // 카드들 순차적으로 등장 애니메이션
      cardRefs.value.forEach((cardRef, index) => {
        if (cardRef) {
          gsap.fromTo(cardRef, 
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardRef,
                start: 'top 70%',
                toggleActions: 'play none none none'
              }
            }
          )
        }
      })

    })
  }
})

onBeforeUnmount(() => {
  gsapContext?.revert()
})
</script>
