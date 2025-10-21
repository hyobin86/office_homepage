<template>
  <section class="service1-custom" aria-labelledby="custom-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="custom-heading" class="section-title text-black">
          고객사의 니즈에 맞춰 솔루션을 커스터마이징합니다.
        </h2>
        <p class="section-desc text-gray mt-32">
          고객 요구에 유연하게 대응하는 전문 커스터마이징 서비스를 제공합니다.
        </p>
      </div>
      <div class="custom-points mt-120">
        <div 
          v-for="(point, index) in customPoints" 
          :key="point.title"
          class="point-card"
          :ref="(el) => setPointRef(el, index)"
        >
          <div class="point-label">POINT {{ String(index + 1).padStart(2, '0') }}</div>
          <h3 class="point-title mt-16">{{ point.title }}</h3>
          <p class="point-description mt-32">{{ point.description }}</p>
          <div class="point-icon">
            <NuxtImg 
              :src="`/images/services/${point.icon}.png`"
              :alt="point.title"
              loading="lazy"
              width="104"
              height="104"
              format="webp"
            />
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

interface CustomPoint {
  title: string
  description: string
  icon: string
}

const headerRef = ref<HTMLElement | null>(null)
const pointRefs = ref<(HTMLElement | null)[]>([])
let gsapContext: gsap.Context | null = null

// ref 설정 함수
const setPointRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el && 'tagName' in el) {
    pointRefs.value[index] = el as HTMLElement
  }
}

const customPoints: CustomPoint[] = [
  {
    title: '맞춤형 보안 설계',
    description: '패키지 기반 운영으로 외부 노출 없이 데이터를 안전하게 보호하며, 고객사 환경에 맞춘 보안 체계를 제공합니다.',
    icon: 'service1_icon6'
  },
  {
    title: '원하는 메뉴만 구성 가능',
    description: '고객사 업무 프로세스에 최적화된 기능을 커스터마이징하여 불필요한 절차를 줄이고, 빠른 생산성을 실현합니다.',
    icon: 'service1_icon7'
  },
  {
    title: '유연한 확장성',
    description: '기업의 성장과 변화에 맞춰 자유롭게 기능을 확장할 수 있어 장기적인 경쟁력과 운영 효율성을 확보할 수 있습니다.',
    icon: 'service1_icon8'
  }
]

onMounted(() => {
  if (process.client) {
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
            toggleActions: 'play reverse play reverse'
          }
        })
      }

      // POINT 카드들 차례대로 올라오는 애니메이션
      const cardsContainer = document.querySelector('.custom-points')
      if (cardsContainer) {
        pointRefs.value.forEach((pointRef, index) => {
          if (pointRef) {
            gsap.set(pointRef, { opacity: 0, y: 80 })
            
            gsap.to(pointRef, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsContainer,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse'
              }
            })
          }
        })
      }
    })
  }
})

onBeforeUnmount(() => {
  gsapContext?.revert()
})
</script>
