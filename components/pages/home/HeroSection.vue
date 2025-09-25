<template>
  <section class="home-hero">
    <!-- Video 배경 -->
    <div class="hero-video-container">
      <video 
        class="hero-video" 
        autoplay 
        muted 
        loop 
        playsinline
        preload="metadata"
        aria-label="FinGate 금융 솔루션 소개 영상"
      >
        <source src="/videos/test.mp4" type="video/mp4">
        <!-- Video가 지원되지 않는 경우 대체 텍스트 -->
        <div class="video-fallback">
          <p>Video를 지원하지 않는 브라우저입니다.</p>
        </div>
      </video>
    </div>
    
    <!-- 콘텐츠 -->
    <div class="hero-content">
      <div class="container">
        <h1>FinGate - 혁신적인 금융 솔루션</h1>
        <p class="hero-subtitle">최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다</p>
        <div class="home-hero-actions">
          <NuxtLink to="/about" class="btn btn--primary btn--large">회사소개</NuxtLink>
          <NuxtLink to="/services" class="btn btn--secondary btn--large">서비스</NuxtLink>
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
    // 히어로 섹션 애니메이션
    $gsap.fromTo('.home-hero h1', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-hero',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    $gsap.fromTo('.home-hero p', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-hero',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    $gsap.fromTo('.home-hero-actions', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-hero',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})
</script>
