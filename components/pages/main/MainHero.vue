<template>
  <section class="main-hero">
    <!-- Video 배경 -->
    <div class="hero-video-container">
      <video 
        class="hero-video" 
        autoplay 
        muted 
        loop 
        playsinline
        preload="metadata"
        aria-label="영상"
      >
        <source src="/videos/main.mp4" type="video/mp4">
        <!-- Video가 지원되지 않는 경우 대체 텍스트 -->
        <div class="video-fallback">
          <p>Video를 지원하지 않는 브라우저입니다.</p>
        </div>
      </video>
    </div>
    <div class="hero-content">
      <div class="container">
        <div class="hero-title mask-reveal-up">
          Gateway to Financial<br/>
          IT Innovation
        </div>
        <div class="hero-subtitle mt-78 mask-reveal-up">
          보험의 미래를 함께 여는 디지털 IT 파트너
        </div>
      </div>
    </div>
    
    <!-- 스크롤 다운 -->
    <div class="scroll-down-container">
      <div class="scroll-down">
        <div class="scroll-dot scroll-dot-bounce"></div>
      </div>
      <div class="scroll-down-text mt-16">SCROLL DOWN</div>
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

// 스크롤 애니메이션 설정
onMounted(() => {
  if (process.client) {
    // mask-reveal-up 애니메이션 - 마스크가 아래에서 위로 올라가며 드러남
    gsap.utils.toArray('.mask-reveal-up').forEach((element, index) => {
      gsap.fromTo(element, 
        { 
          clipPath: 'inset(100% 0 0 0)' 
        },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          ease: "power3.inOut",
          delay: 0.5,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      )
    })

    // scroll-down-container 애니메이션 - 처음에 숨김, 등장 후 dot 애니메이션
    gsap.utils.toArray('.scroll-down-container').forEach((container) => {
      // 처음에 숨김
      gsap.set(container, { opacity: 0 })
      
      // 등장 애니메이션
      gsap.to(container, {
        opacity: 1,
        duration: 1,
        delay: 0.9, // hero 애니메이션 완료 후
        ease: "power2.inOut",
        onComplete: () => {
          // 등장 완료 후 dot 애니메이션 시작
          const dot = container.querySelector('.scroll-dot-bounce')
          if (dot) {
            gsap.to(dot, {
              y: 18, 
              duration: 1.2,
              ease: "power2.out",
              yoyo: true,
              repeat: -1
            })
          }
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