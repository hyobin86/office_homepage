<template>
  <div class="services">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">서비스</h1>
    </div>

    <!-- 히어로 섹션 -->
    <ServicesHero />

    <!-- 서비스 목록 -->
    <ServicesList />

    <!-- CTA 섹션 -->
    <ServicesCta />
  </div>
</template>

<script setup>
// 컴포넌트 import
import ServicesHero from '~/components/pages/services/ServicesHero.vue'
import ServicesList from '~/components/pages/services/ServicesList.vue'
import ServicesCta from '~/components/pages/services/ServicesCta.vue'

// SEO 메타데이터 (중앙화된 관리)
const seoData = useSEO('services')
useHead(seoData)
</script>
