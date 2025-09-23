<template>
  <div class="about">
    <!-- 페이지 헤더 -->
    <PageHeader title="회사소개" />

    <!-- 히어로 섹션 -->
    <AboutHero />

    <!-- 핵심 가치 섹션 -->
    <AboutValues />

    <!-- 팀 섹션 -->
    <AboutTeam />
  </div>
</template>

<script setup>
// 컴포넌트 import
import PageHeader from '~/components/shared/PageHeader.vue'
import AboutHero from '~/components/pages/about/AboutHero.vue'
import AboutValues from '~/components/pages/about/AboutValues.vue'
import AboutTeam from '~/components/pages/about/AboutTeam.vue'

// SEO 메타데이터
useHead({
  title: '회사소개 - FinGate',
  meta: [
    { name: 'description', content: 'FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다.' }
  ]
})
</script>
