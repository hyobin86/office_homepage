<template>
  <header class="header">
    <div class="header-container">
      <NuxtLink to="/" class="header-logo">
        FinGate
      </NuxtLink>
      
      <nav class="header-nav">
        <ul class="nav-list">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link" :class="{ active: $route.path === '/' }">
              홈
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link" :class="{ active: $route.path === '/about' }">
              회사소개
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/services" class="nav-link" :class="{ active: $route.path === '/services' }">
              서비스
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/blog" class="nav-link" :class="{ active: $route.path === '/blog' }">
              블로그
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact" class="nav-link" :class="{ active: $route.path === '/contact' }">
              연락처
            </NuxtLink>
          </li>
        </ul>
      </nav>
      
      <button 
        class="header-mobile-menu btn btn--secondary"
        @click="toggleMobileMenu"
        aria-label="메뉴 열기"
      >
        <Icon name="menu" />
      </button>
    </div>
    
    <!-- 모바일 메뉴 -->
    <div v-if="isMobileMenuOpen" class="mobile-menu">
      <div class="mobile-menu-overlay" @click="closeMobileMenu"></div>
      <div class="mobile-menu-content">
        <div class="mobile-menu-header">
          <h3>메뉴</h3>
          <button @click="closeMobileMenu" aria-label="메뉴 닫기">
            <Icon name="close" />
          </button>
        </div>
        <nav class="mobile-menu-nav">
          <NuxtLink to="/" class="mobile-menu-link" @click="closeMobileMenu">홈</NuxtLink>
          <NuxtLink to="/about" class="mobile-menu-link" @click="closeMobileMenu">회사소개</NuxtLink>
          <NuxtLink to="/services" class="mobile-menu-link" @click="closeMobileMenu">서비스</NuxtLink>
          <NuxtLink to="/blog" class="mobile-menu-link" @click="closeMobileMenu">블로그</NuxtLink>
          <NuxtLink to="/contact" class="mobile-menu-link" @click="closeMobileMenu">연락처</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import Icon from '~/components/Icon.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 라우트 변경 시 모바일 메뉴 닫기
watch(() => useRoute().path, () => {
  closeMobileMenu()
})
</script>

