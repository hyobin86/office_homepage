<template>
  <div class="main">
    
    <!-- 히어로 섹션 (비디오 배경) -->
    <section class="hero-section">
      <MainHero />
    </section>
    
    <!-- 컨텐츠 섹션  -->
    <section class="content-section">
      <!-- 회사 소개 섹션 -->
      <MainCompany />
      
      <!-- 서비스 섹션 -->
      <MainServices />

      <!-- 파트너 섹션 -->
      <MainPartners />

      <!-- 비전 섹션 -->
      <MainVision />

      <!-- 배너 섹션 -->
      <!-- <MainBanner /> -->
    </section>
  </div>
</template>

<script setup>
// 컴포넌트 import
import MainHero from '~/components/pages/main/MainHero.vue'
import MainCompany from '~/components/pages/main/MainCompany.vue'
import MainServices from '~/components/pages/main/MainServices.vue'
import MainPartners from '~/components/pages/main/MainPartners.vue'
import MainVision from '~/components/pages/main/MainVision.vue'
import MainBanner from '~/components/pages/main/MainBanner.vue'

// SEO 메타데이터 (중앙화된 관리)
const seoData = useSEO('index')
useHead(seoData)

// 페이지 전환 로직 제거 - 단순한 구조로 변경
</script>



