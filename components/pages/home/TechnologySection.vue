<template>
  <section class="home-technology">
    <div class="container">
      <div class="flex-grid flex-grid--2">
        <div class="tech-content">
          <h2 class="section-title">최첨단 기술</h2>
          <p class="section-subtitle">
            AI와 블록체인 기술을 활용한 혁신적인 금융 솔루션
          </p>
          
          <div class="tech-features">
            <div class="tech-feature">
              <div class="tech-icon" aria-label="AI 기반 분석 아이콘">🤖</div>
              <div class="tech-text">
                <h3>AI 기반 분석</h3>
                <p>머신러닝을 통한 실시간 리스크 분석과 투자 추천</p>
              </div>
            </div>
            
            <div class="tech-feature">
              <div class="tech-icon" aria-label="블록체인 보안 아이콘">🔗</div>
              <div class="tech-text">
                <h3>블록체인 보안</h3>
                <p>분산원장 기술로 최고 수준의 보안과 투명성 보장</p>
              </div>
            </div>
            
            <div class="tech-feature">
              <div class="tech-icon" aria-label="클라우드 인프라 아이콘">☁️</div>
              <div class="tech-text">
                <h3>클라우드 인프라</h3>
                <p>확장 가능하고 안정적인 클라우드 기반 시스템</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="tech-visual">
          <div class="tech-card">
            <div class="tech-card-header">
              <div class="tech-card-title">실시간 대시보드</div>
              <div class="tech-card-status">● 활성</div>
            </div>
            <div class="tech-card-content">
              <div class="tech-metric">
                <span class="metric-label">포트폴리오 성과</span>
                <span class="metric-value">+12.5%</span>
              </div>
              <div class="tech-chart">
                <div class="chart-bar" style="height: 60%"></div>
                <div class="chart-bar" style="height: 80%"></div>
                <div class="chart-bar" style="height: 45%"></div>
                <div class="chart-bar" style="height: 90%"></div>
                <div class="chart-bar" style="height: 75%"></div>
              </div>
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
    // 기술 섹션 애니메이션
    $gsap.fromTo('.tech-content', 
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-technology',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    $gsap.fromTo('.tech-visual', 
      { x: 50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-technology',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})
</script>
