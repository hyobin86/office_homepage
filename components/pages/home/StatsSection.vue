<template>
  <section class="home-stats">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">FinGate의 성과</h2>
        <p class="section-subtitle">
          고객과 함께 만들어가는 성공 스토리
        </p>
      </div>
      
      <div class="flex-grid flex-grid--4">
        <div class="stat-item">
          <div class="stat-number">500+</div>
          <div class="stat-label">고객사</div>
        </div>
        
        <div class="stat-item">
          <div class="stat-number">₩1조+</div>
          <div class="stat-label">관리 자산</div>
        </div>
        
        <div class="stat-item">
          <div class="stat-number">99.9%</div>
          <div class="stat-label">시스템 가동률</div>
        </div>
        
        <div class="stat-item">
          <div class="stat-number">24/7</div>
          <div class="stat-label">고객 지원</div>
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
    // 통계 섹션 애니메이션
    $gsap.fromTo('.stat-item', 
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-stats',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})
</script>

<!-- 스타일은 assets/css/main.css에서 관리 -->
