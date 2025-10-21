<template>
  <!-- Service2 Hero 섹션 -->
  <Service2Hero />
  <!-- Service2 Recommend 섹션 -->
  <Service2Recommend />
  <div class="service2-service">
    <!-- Service2 Onestop 섹션 -->
    <Service2Onestop />
    <!-- Service2 Manage 섹션 -->
    <Service2Manage />
    <!-- Service2 Diagnosis 섹션 -->
    <Service2Diagnosis />
  </div>
  <!-- Service2 Report 섹션 -->
  <Service2Report />
</template>

<script setup lang="ts">
// 컴포넌트 import
import Service2Hero from '~/components/pages/services/service2/Service2Hero.vue'
import Service2Recommend from '~/components/pages/services/service2/Service2Recommend.vue'
import Service2Onestop from '~/components/pages/services/service2/Service2Onestop.vue'
import Service2Manage from '~/components/pages/services/service2/Service2Manage.vue'
import Service2Diagnosis from '~/components/pages/services/service2/Service2Diagnosis.vue'
import Service2Report from '~/components/pages/services/service2/Service2Report.vue'

// SEO 메타데이터
const seoData = useSEO('services/service2')
useHead(seoData)
</script>
