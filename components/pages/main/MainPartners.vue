<template>
  <section class="main-partners" aria-labelledby="partners-heading">
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="hero-header" ref="heroHeaderRef">
        <div class="hero-subtitle">PARTNERS</div>
        <h2 id="partners-heading" class="hero-title mt-20">고객의 비즈니스 성공과 함께 지켜온 신뢰</h2>
        <p class="hero-desc mt-40">고객의 성공과 함께 쌓아온 신뢰가 핀게이트의 성장을 이끕니다.</p>
      </div>
      <div class="d-flex gap-24 mt-120" role="list" aria-label="파트너사 로고">
        <NuxtImg 
          v-for="(logo, index) in partnerLogos"
          :key="logo.id"
          :src="logo.src" 
          :alt="logo.alt"
          :class="['partner-logo', `partner-logo-${index + 1}`]"
          role="listitem"
          loading="lazy"
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

// 헤더 ref
const heroHeaderRef = ref<HTMLElement | null>(null)

// 파트너 로고 데이터
const partnerLogos = [
  {
    id: 'kakao',
    src: '/images/logos/kakao-logo.png',
    alt: '카카오 로고'
  },
  {
    id: 'aia',
    src: '/images/logos/aia-logo.png',
    alt: 'AIA 생명보험 로고'
  },
  {
    id: 'best',
    src: '/images/logos/best-logo.png',
    alt: 'BEST 생명보험 로고'
  }
]

// 파트너 로고 애니메이션 설정
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
              trigger: '.main-partners',
              start: 'top 40%',
              toggleActions: 'play reverse play reverse'
            }
          }
        )
      }

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
            start: 'top 50%',
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
