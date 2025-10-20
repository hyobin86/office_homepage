<template>
  <div class="contact">
    <ContactHero />
    <ContactInfo />
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
import ContactHero from '~/components/pages/contact/ContactHero.vue'
import ContactInfo from '~/components/pages/contact/ContactInfo.vue'
import ContactForm from '~/components/pages/contact/ContactForm.vue'

const seoData = useSEO('contact')
useHead(seoData)
</script>