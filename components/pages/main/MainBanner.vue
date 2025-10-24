<template>
  <section class="main-banner">
    <div class="container" ref="heroHeaderRef">
      <div class="hero-header" >
        <h2 class="hero-title">비즈니스 성장을 위한 해답,<br>핀게이트에서 찾으세요.</h2>
        <p class="hero-desc mt-60">고객의 가치와 함께 성장하는 디지털 파트너</p>
      </div>
      <NuxtLink to="/contact" class="button" aria-label="연락페이지로 이동">CONTACT US</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP 플러그인 등록
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// GSAP Context (자동 클린업)
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
            delay: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.main-banner',
              start: 'top 30%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
    })
  }
})

onUnmounted(() => {
  // GSAP Context로 모든 애니메이션/ScrollTrigger 자동 제거
  if (gsapContext) {
    gsapContext.revert()
  }
})
</script>
