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
import HeroSection from '~/components/pages/home/HeroSection.vue'
import FeaturesSection from '~/components/pages/home/FeaturesSection.vue'
import StatsSection from '~/components/pages/home/StatsSection.vue'
import TechnologySection from '~/components/pages/home/TechnologySection.vue'
import TestimonialsSection from '~/components/pages/home/TestimonialsSection.vue'
import CtaSection from '~/components/pages/home/CtaSection.vue'

// SEO 메타데이터 (중앙화된 관리)
const seoData = useSEO('index')
useHead(seoData)
</script>



