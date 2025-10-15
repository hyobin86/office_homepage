<template>
  <section class="main-partners" aria-labelledby="partners-heading">
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="hero-header fade-in">
        <div class="hero-subtitle">PARTNERS</div>
        <h2 id="partners-heading" class="hero-title mt-20">고객의 비즈니스 성공과 함께 지켜온 신뢰</h2>
        <p class="hero-desc mt-40">고객의 성공과 함께 쌓아온 신뢰가 핀게이트의 성장을 이끕니다.</p>
      </div>
      <div class="d-flex gap-24 mt-120" role="list" aria-label="파트너사 로고">
        <NuxtImg 
          src="/images/logos/best-logo.png" 
          alt="BEST 생명보험 로고"
          class="partner-logo partner-logo-1"
          role="listitem"
          loading="lazy"
          format="webp"
          width="450"
          height="140"
          fit="inside"
          quality="90"
        />
        <NuxtImg 
          src="/images/logos/aia-logo.png" 
          alt="AIA 생명보험 로고"
          class="partner-logo partner-logo-2"
          role="listitem"
          loading="lazy"
          format="webp"
          width="450"
          height="140"
          fit="inside"
          quality="90"
        />
        <NuxtImg 
          src="/images/logos/kakao-logo.png" 
          alt="카카오 로고"
          class="partner-logo partner-logo-3"
          role="listitem"
          loading="lazy"
          format="webp"
          width="450"
          height="140"
          fit="inside"
          quality="90"
        />
      </div>
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

// 파트너 로고 애니메이션 설정
onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      // 각 로고에 대해 개별 애니메이션 설정
      const logos = document.querySelectorAll('.partner-logo')
      
      logos.forEach((logo, index) => {
        // 초기 상태 설정
        gsap.set(logo, { 
          opacity: 0, 
          y: 30,
          force3D: true
        })
        
        // 애니메이션 실행
        gsap.to(logo, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          force3D: true,
          delay: 1 + (index * 0.2),
          scrollTrigger: {
            trigger: '.main-partners',
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        })
      })
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
