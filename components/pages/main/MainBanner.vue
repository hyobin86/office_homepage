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

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

let gsapContext: gsap.Context | null = null

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      gsap.fromTo('.testimonial-card', 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: '.main-banner',
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })
  }
})

onUnmounted(() => {
  if (gsapContext) {
    gsapContext.revert()
  }
})
</script>
