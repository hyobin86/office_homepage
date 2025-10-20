<template>
  <div class="service1-service">
    <!-- 히어로 섹션 -->
    <Service1Hero />

    <!-- 이유 섹션 -->
    <Service1Reason />

    <!-- 솔루션 섹션 -->
    <Service1Solution />

    <!-- 통합 솔루션 섹션 -->
    <Service1Total />

    <!-- 혁신 섹션 -->
    <Service1Revolution />
  </div>
  <!-- 맞춤형 솔루션 섹션 -->
  <Service1Custom />

  <!-- 연락 섹션 -->
  <Service1Contact />
</template>

<script setup lang="ts">
// 컴포넌트 import
import Service1Hero from '~/components/pages/services/Service1Hero.vue'
import Service1Reason from '~/components/pages/services/Service1Reason.vue'
import Service1Solution from '~/components/pages/services/Service1Solution.vue'
import Service1Total from '~/components/pages/services/Service1Total.vue'
import Service1Revolution from '~/components/pages/services/Service1Revolution.vue'
import Service1Custom from '~/components/pages/services/Service1Custom.vue'
import Service1Contact from '~/components/pages/services/Service1Contact.vue'

// SEO 메타데이터
const seoData = useSEO('services/service1')
useHead(seoData)
</script>