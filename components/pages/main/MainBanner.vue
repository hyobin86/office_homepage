<template>
  <section class="main-banner banner-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">고객 후기</h2>
        <p class="section-subtitle">
          FinGate와 함께한 고객들의 생생한 경험담
        </p>
      </div>
      
      <div class="flex-grid flex-grid--3">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"FinGate의 투자 관리 솔루션 덕분에 포트폴리오 수익률이 크게 향상되었습니다. 특히 AI 기반 분석 기능이 정말 유용해요."</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">👨‍💼</div>
            <div class="author-info">
              <div class="author-name">김대표</div>
              <div class="author-title">ABC 투자 대표</div>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"보안이 정말 탄탄하고 시스템이 안정적이에요. 24시간 모니터링 서비스 덕분에 안심하고 업무할 수 있습니다."</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">👩‍💻</div>
            <div class="author-info">
              <div class="author-name">이부장</div>
              <div class="author-title">XYZ 은행 IT부장</div>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"디지털 뱅킹 솔루션 도입 후 고객 만족도가 크게 높아졌습니다. 사용자 인터페이스가 직관적이고 편리해요."</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar">👨‍💼</div>
            <div class="author-info">
              <div class="author-name">박이사</div>
              <div class="author-title">DEF 금융 이사</div>
            </div>
          </div>
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
    // 고객 후기 섹션 애니메이션
    $gsap.fromTo('.testimonial-card', 
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.main-testimonials',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})
</script>
