<template>
  <section class="main-hero" aria-label="메인 히어로">
    <!-- Video 배경 -->
    <div class="hero-video-container">
      <video 
        class="hero-video" 
        autoplay 
        muted 
        loop 
        playsinline
        preload="metadata"
        aria-label="FinGate 메인 배경 영상"
        role="presentation"
      >
        <source src="/videos/main.mp4" type="video/mp4">
        <!-- Video가 지원되지 않는 경우 대체 텍스트 -->
        <div class="video-fallback">
          <p>Video를 지원하지 않는 브라우저입니다.</p>
        </div>
      </video>
    </div>
    <div class="hero-content">
      <div class="container">
        <h1 class="hero-title mask-reveal-up">
          Gateway to Financial
        </h1>
        <h1 class="hero-title mask-reveal-up">
          IT Innovation
        </h1>
        <p class="hero-subtitle mt-78 mask-reveal-up">
          보험의 미래를 함께 여는 디지털 IT 파트너
        </p>
      </div>
    </div>
    
    <!-- 스크롤 다운 -->
    <ScrollDown />
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollDown from '~/components/common/ScrollDown.vue'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

let gsapContext: gsap.Context | null = null

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      (gsap.utils.toArray('.mask-reveal-up') as Element[]).forEach((element) => {
        gsap.fromTo(element, 
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none none"
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