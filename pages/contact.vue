<template>
  <div class="contact">
    <!-- 페이지 헤더 -->
    <PageHeader title="연락처" />

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
import PageHeader from '~/components/shared/PageHeader.vue'
import ContactHero from '~/components/pages/contact/ContactHero.vue'
import ContactInfo from '~/components/pages/contact/ContactInfo.vue'
import ContactForm from '~/components/pages/contact/ContactForm.vue'

// SEO 메타데이터
useHead({
  title: '연락처 - FinGate',
  meta: [
    { name: 'description', content: 'FinGate에 문의하세요. 궁금한 점이나 상담이 필요하시면 언제든지 연락주세요.' }
  ]
})
</script>
