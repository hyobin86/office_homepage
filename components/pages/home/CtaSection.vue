<template>
  <section class="home-cta">
    <div class="container">
      <h2>지금 시작하세요</h2>
      <p>FinGate와 함께 금융의 새로운 경험을 시작해보세요</p>
      <NuxtLink to="/contact" class="btn btn--primary btn--large">문의하기</NuxtLink>
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
    // CTA 섹션 애니메이션
    $gsap.fromTo('.home-cta h2', 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-cta',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    $gsap.fromTo('.home-cta p', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-cta',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    $gsap.fromTo('.home-cta .btn', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-cta',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})
</script>
