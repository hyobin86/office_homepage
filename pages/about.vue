<template>
  <div class="about">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">회사소개</h1>
    </div>

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
import AboutHero from '~/components/pages/about/AboutHero.vue'
import AboutValues from '~/components/pages/about/AboutValues.vue'
import AboutTeam from '~/components/pages/about/AboutTeam.vue'

// SEO 메타데이터 (중앙화된 관리)
const seoData = useSEO('about')
useHead(seoData)
</script>
