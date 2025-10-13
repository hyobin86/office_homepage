<template>
  <section class="main-vision vision-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">NEW VISION</h2>
        <p class="section-subtitle">
          AI와 함께 만드는 보험 IT의 새로운 기준
        </p>
        <p class="section-description">
          AI와 클라우드 기반의 혁신적인 기술로 미래를 만듭니다.
        </p>
      </div>
      
      <div class="flex-grid flex-grid--3">
        <div class="vision-card">
          <div class="vision-icon">
            <div class="icon-placeholder">📊</div>
          </div>
          <h3>데이터 분석</h3>
          <p>AI 기반의 고급 데이터 분석으로 인사이트를 제공합니다.</p>
        </div>
        
        <div class="vision-card">
          <div class="vision-icon">
            <div class="icon-placeholder">🔍</div>
          </div>
          <h3>스마트 검증</h3>
          <p>머신러닝을 활용한 자동화된 검증 시스템을 구축합니다.</p>
        </div>
        
        <div class="vision-card">
          <div class="vision-icon">
            <div class="icon-placeholder">⚙️</div>
          </div>
          <h3>자동화 솔루션</h3>
          <p>AI와 클라우드 기술로 업무 프로세스를 혁신합니다.</p>
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
    // 비전 섹션 애니메이션
    $gsap.fromTo('.vision-card', 
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.main-vision',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})
</script>
