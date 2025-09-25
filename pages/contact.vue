<template>
  <div class="contact">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">연락처</h1>
    </div>

    <!-- 히어로 섹션 -->
    <ContactHero />

    <!-- 연락처 정보 및 폼 -->
    <section class="contact-content">
      <div class="container">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script setup>
// 컴포넌트 import
import ContactHero from '~/components/pages/contact/ContactHero.vue'
import ContactInfo from '~/components/pages/contact/ContactInfo.vue'
import ContactForm from '~/components/pages/contact/ContactForm.vue'

// SEO 메타데이터 (중앙화된 관리)
const seoData = useSEO('contact')
useHead(seoData)
</script>
