<template>
  <section class="service1-total" aria-labelledby="total-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="total-heading" class="section-title">
          GA 보험 업무, 이제 EPIKA 하나면 됩니다.
        </h2>
        <p class="section-desc mt-32">
          계약과 수수료, 분산된 고객 데이터, 까다로운 준법관리까지<br/> 하나의 플랫폼에서 통합적으로 관리해 업무 효율성과 정확성을 높입니다.
        </p>
      </div>
    </div>

    <div class="total-services mt-120" ref="servicesRef">
      <div 
        v-for="(service, index) in services" 
        :key="service.title"
        class="service-card"
      >
        <img 
          :src="`/images/services/${service.image}`"
          :alt="service.title"
          loading="lazy"
          width="402"
          height="230"
        />
        <div class="card-text">준비중 입니다</div>
        <div class="card-label mt-32">{{ service.title }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Service {
  title: string
  image: string
}

const headerRef = ref<HTMLElement | null>(null)
const servicesRef = ref<HTMLElement | null>(null)
let gsapContext: gsap.Context | null = null

const services: Service[] = [
  { title: '위촉지원', image: 'temp-img.png' },
  { title: '인사', image: 'temp-img.png' },
  { title: 'DB관리', image: 'temp-img.png' },
  { title: '영업', image: 'temp-img.png' }
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
            toggleActions: 'play reverse play reverse'
          }
        })
      }

      // 전체 서비스 섹션 애니메이션
      if (servicesRef.value) {
        gsap.set(servicesRef.value, { opacity: 0, y: 50 })
        
        gsap.to(servicesRef.value, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.value,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse'
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
