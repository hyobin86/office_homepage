<template>
  <div class="company">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">Company</h1>
    </div>

    <!-- 히어로 섹션 -->
    <CompanyHero />

    <!-- 핵심 가치 섹션 -->
    <CompanyValues />

    <!-- 팀 섹션 -->
    <CompanyTeam />
  </div>
</template>

<script setup>
// 컴포넌트 import
import CompanyHero from '~/components/pages/company/CompanyHero.vue'
import CompanyValues from '~/components/pages/company/CompanyValues.vue'
import CompanyTeam from '~/components/pages/company/CompanyTeam.vue'

// SEO 메타데이터 (중앙화된 관리)
const seoData = useSEO('company')
useHead(seoData)
</script>
