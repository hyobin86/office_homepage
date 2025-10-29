<template>
  <div class="app">
    <a href="#main" class="skip-link">본문으로 건너뛰기</a>
    <AppHeader />
    <main id="main" class="main">
      <slot />
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import ScrollToTop from '~/components/common/ScrollToTop.vue'
</script>

