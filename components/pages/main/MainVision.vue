<template>
  <section class="main-vision">
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="hero-header fade-in">
        <div class="hero-subtitle">NEW VISION</div>
        <div class="hero-title mt-20">AI와 함께 만드는 보험 IT의 새로운 기준</div>
        <div class="hero-desc mt-40">복잡한 보험 업무를 데이터와 AI로 혁신적인 경험을 만듭니다.</div>
      </div>
      <div class="d-flex gap-24 mt-120">
        <div 
          v-for="(card, index) in visionCards"
          :key="index"
          :class="`vision-card-${index + 1}`"
          class="vision-card"
        >
          <div class="vision-card-title">{{ card.title }}</div>
          <div class="vision-card-desc mt-24" v-html="card.desc"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// GSAP과 ScrollTrigger 접근
const { $gsap, $ScrollTrigger } = useNuxtApp()

// 비전 카드 데이터
const visionCards = ref([
  {
    title: '맞춤형 AI 보장 컨설팅',
    desc: '고객의 라이프스타일과 건강 데이터를 AI로<br>분석하여 최적의 보장 조합을 제안합니다.'
  },
  {
    title: 'AI 어드바이저',
    desc: '설계사의 업무를 데이터 기반으로 지원하여<br>상담의 정확성과 신뢰성을 강화합니다.'
  },
  {
    title: 'AI RPA',
    desc: '이미지 패턴 인식 기술로 반복적인 문서 업무를<br>자동화하여 더 가치있는 업무에 집중합니다.'
  }
])

// 컴포넌트 마운트 후 애니메이션 설정
onMounted(() => {
  // 클라이언트에서만 실행되도록 추가 체크
  if (typeof window !== 'undefined' && $gsap && $ScrollTrigger) {
    // 비전 섹션 애니메이션 (헤더 이후 카드 순차 등장, 역스크롤 시 역재생)
    $gsap.fromTo('.vision-card', 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.18,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.main-vision',
          start: 'top 78%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  }
})
</script>
