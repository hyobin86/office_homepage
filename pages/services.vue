<template>
  <div class="services">
    <!-- 페이지 헤더 -->
    <PageHeader title="서비스" />

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
import PageHeader from '~/components/shared/PageHeader.vue'
import ServicesHero from '~/components/pages/services/ServicesHero.vue'
import ServicesList from '~/components/pages/services/ServicesList.vue'
import ServicesCta from '~/components/pages/services/ServicesCta.vue'

// SEO 메타데이터
useHead({
  title: '서비스 - FinGate',
  meta: [
    { name: 'description', content: 'FinGate의 전문적인 금융 솔루션 서비스를 확인하세요. 맞춤형 개발, 투자 관리, 컨설팅, 기술 지원을 제공합니다.' }
  ]
})
</script>
