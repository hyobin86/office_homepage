<template>
  <section class="main-partners">
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="hero-header fade-in">
        <div class="hero-subtitle">PARTNERS</div>
        <div class="hero-title mt-20">고객의 비즈니스 성공과 함께 지켜온 신뢰</div>
        <div class="hero-desc mt-40">고객의 성공과 함께 쌓아온 신뢰가 핀게이트의 성장을 이끕니다.</div>
      </div>
      <div class="d-flex gap-24 mt-120">
        <img 
          src="/images/logos/best-logo.png" 
          alt="best-logo"
          class="partner-logo partner-logo-1"
        >
        <img 
          src="/images/logos/aia-logo.png" 
          alt="aia-logo"
          class="partner-logo partner-logo-2"
        >
        <img 
          src="/images/logos/kakao-logo.png" 
          alt="kakao-logo"
          class="partner-logo partner-logo-3"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP 플러그인 등록
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// 파트너 로고 애니메이션 설정
onMounted(() => {
  if (process.client) {
    // 각 로고에 대해 개별 애니메이션 설정
    const logos = document.querySelectorAll('.partner-logo')
    
    logos.forEach((logo, index) => {
      // 초기 상태 설정
      gsap.set(logo, { 
        opacity: 0, 
        y: 30,
      })
      
      // 애니메이션 실행
      gsap.to(logo, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 1 + (index * 0.2), // 헤더 등장 후 0.3초 + 각 로고마다 0.2초씩 지연
        scrollTrigger: {
          trigger: '.main-partners',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse'
        }
      })
    })
  }
})

onUnmounted(() => {
  if (process.client) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})
</script>
