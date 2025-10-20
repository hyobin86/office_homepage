<template>
  <div class="company">
    <!-- 히어로 섹션 -->
    <CompanyHero />

    <!-- 성장 섹션 -->
    <CompanyGrowth />

    <!-- 강점 섹션 -->
    <CompanyStrength />

    <!-- 사업 영역 섹션 -->
    <CompanyBusiness />

    <!-- 연혁 섹션 -->
    <CompanyHistory />
  </div>
  
  <!-- 연락 섹션 (별도 섹션으로 분리) -->
  <CompanyContact />
</template>

<script setup lang="ts">
// 컴포넌트 import
import CompanyHero from '~/components/pages/company/CompanyHero.vue'
import CompanyGrowth from '~/components/pages/company/CompanyGrowth.vue'
import CompanyStrength from '~/components/pages/company/CompanyStrength.vue'
import CompanyBusiness from '~/components/pages/company/CompanyBusiness.vue'
import CompanyHistory from '~/components/pages/company/CompanyHistory.vue'
import CompanyContact from '~/components/pages/company/CompanyContact.vue'

// SEO 메타데이터 (중앙화된 관리)
const seoData = useSEO('company')
useHead(seoData)
</script>
