<template>
  <section class="home-features">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">핵심 서비스</h2>
        <p class="section-subtitle">
          FinGate가 제공하는 혁신적인 금융 솔루션을 만나보세요
        </p>
      </div>
      
      <div class="flex-grid flex-grid--3">
        <div class="feature-card">
          <div class="feature-card-icon" aria-label="디지털 뱅킹 아이콘">💳</div>
          <h3 class="feature-card-title">디지털 뱅킹</h3>
          <p class="feature-card-description">
            최신 기술을 활용한 안전하고 편리한 디지털 뱅킹 서비스를 제공합니다.
          </p>
        </div>
        
        <div class="feature-card">
          <div class="feature-card-icon" aria-label="투자 관리 아이콘">📊</div>
          <h3 class="feature-card-title">투자 관리</h3>
          <p class="feature-card-description">
            전문적인 투자 분석과 포트폴리오 관리로 최적의 투자 전략을 제안합니다.
          </p>
        </div>
        
        <div class="feature-card">
          <div class="feature-card-icon" aria-label="보안 솔루션 아이콘">🔒</div>
          <h3 class="feature-card-title">보안 솔루션</h3>
          <p class="feature-card-description">
            최고 수준의 보안 기술로 고객의 자산과 정보를 안전하게 보호합니다.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// GSAP과 ScrollTrigger 접근
const { $gsap, $ScrollTrigger } = useNuxtApp()

// 컴포넌트 마운트 후 애니메이션 설정
onMounted(() => {
  // 클라이언트에서만 실행되도록 추가 체크
  if (typeof window !== 'undefined' && $gsap && $ScrollTrigger) {
    // 기능 카드 애니메이션
    $gsap.fromTo('.feature-card', 
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-features',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // 섹션 헤더 애니메이션
    $gsap.fromTo('.section-header', 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-features',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})
</script>
