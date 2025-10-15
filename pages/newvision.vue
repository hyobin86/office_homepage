<template>
  <div class="newvision">
    
    <!-- 히어로 섹션 -->
    <section class="hero-section">
      <NewvisionHero />
    </section>
    
    <!-- 컨텐츠 섹션 -->
    <section class="content-section">
      <!-- 아젠다 섹션 -->
      <NewvisionAgenda />
      
      <!-- 넥스트스텝 섹션 -->
      <NewvisionNextstep />

      <!-- 가치 섹션 -->
      <NewvisionValue />

      <!-- 연락 섹션 -->
      <NewvisionContact />
    </section>
  </div>
</template>

<script setup lang="ts">
// 컴포넌트 import
import NewvisionHero from '~/components/pages/newvision/NewvisionHero.vue'
import NewvisionAgenda from '~/components/pages/newvision/NewvisionAgenda.vue'
import NewvisionNextstep from '~/components/pages/newvision/NewvisionNextstep.vue'
import NewvisionValue from '~/components/pages/newvision/NewvisionValue.vue'
import NewvisionContact from '~/components/pages/newvision/NewvisionContact.vue'

// SEO 메타데이터 (중앙화된 관리)
const seoData = useSEO('newvision')
useHead(seoData)
</script>
