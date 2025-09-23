<template>
  <div class="home">
    <!-- 히어로 섹션 -->
    <HeroSection />
    
    <!-- 주요 기능 섹션 -->
    <FeaturesSection />
    
    <!-- 통계 섹션 -->
    <StatsSection />

    <!-- 기술 섹션 -->
    <TechnologySection />

    <!-- 고객 후기 섹션 -->
    <TestimonialsSection />
    
    <!-- CTA 섹션 -->
    <CtaSection />
  </div>
</template>

<script setup>
// 컴포넌트 import
import HeroSection from '~/components/home/HeroSection.vue'
import FeaturesSection from '~/components/home/FeaturesSection.vue'
import StatsSection from '~/components/home/StatsSection.vue'
import TechnologySection from '~/components/home/TechnologySection.vue'
import TestimonialsSection from '~/components/home/TestimonialsSection.vue'
import CtaSection from '~/components/home/CtaSection.vue'

// SEO 메타데이터
useHead({
  title: 'FinGate - 혁신적인 금융 솔루션',
  meta: [
    { name: 'description', content: 'FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.' }
  ]
})
</script>

<style scoped>
/* 홈페이지 전체 레이아웃 */
.home {
  min-height: 100vh;
}
</style>


