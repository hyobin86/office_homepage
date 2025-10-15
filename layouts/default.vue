<template>
  <div class="app">
    <AppHeader />
    <main class="main">
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

