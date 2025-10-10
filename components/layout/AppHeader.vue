<template>
  <header class="header" :class="{ 'header--hidden': !isHeaderVisible }">
    <div class="header-container">
      <NuxtLink to="/">
        <img src="/images/logos/fingate-logo.svg" alt="FINGATE 로고"/>
      </NuxtLink>
      <nav class="header-nav">
        <ul class="nav-list">
          <li 
            v-for="item in MAIN_NAVIGATION" 
            :key="item.path"
            class="nav-item"
            :class="{ 'nav-item--dropdown': item.hasDropdown }"
            @mouseenter="item.hasDropdown && (showServicesDropdown = true)"
            @mouseleave="item.hasDropdown && (showServicesDropdown = false)"
          >
            <!-- 일반 메뉴 아이템 -->
            <NuxtLink 
              v-if="!item.hasDropdown"
              :to="item.path" 
              class="nav-link" 
              :class="{ active: $route.path === item.path }"
            >
              {{ item.name }}
            </NuxtLink>
            <!-- 드롭다운 메뉴 아이템 -->
            <template v-else>
              <button 
                class="nav-link nav-link--button" 
                :class="{ active: $route.path.startsWith(item.path) }"
                @click="toggleServicesDropdown"
              >
                {{ item.name }}
              </button>
              <div class="nav-dropdown">
                <div class="nav-dropdown-content">
                  <div 
                    v-for="child in item.children" 
                    :key="child.path"
                    class="nav-dropdown-item"
                  >
                    <NuxtLink 
                      :to="child.path" 
                      class="nav-dropdown-link" 
                      @click="closeServicesDropdown"
                    >
                      {{ child.name }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </template>
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
          <NuxtLink to="/company" class="mobile-menu-link" @click="closeMobileMenu">Company</NuxtLink>
          
          <!-- Services 드롭다운 -->
          <div class="mobile-menu-dropdown">
            <button 
              class="mobile-menu-dropdown-toggle" 
              @click="toggleMobileServicesDropdown"
              :class="{ active: isMobileServicesDropdownOpen }"
            >
              Services
              <Icon name="chevron-down" class="mobile-menu-arrow" />
            </button>
            <ul v-if="isMobileServicesDropdownOpen" class="mobile-menu-dropdown-content">
              <li>
                <NuxtLink to="/services/service1" class="mobile-menu-sublink" @click="closeMobileMenu">Service1</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/service2" class="mobile-menu-sublink" @click="closeMobileMenu">Service2</NuxtLink>
              </li>
            </ul>
          </div>
          
          <NuxtLink to="/newvision" class="mobile-menu-link" @click="closeMobileMenu">New Vision</NuxtLink>
          <NuxtLink to="/contact" class="mobile-menu-link" @click="closeMobileMenu">Contact Us</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import Icon from '~/components/Icon.vue'
import { MAIN_NAVIGATION } from '~/constants/navigation'

// ========================================
// 반응형 상태
// ========================================
const isMobileMenuOpen = ref(false)
const showServicesDropdown = ref(false)
const isMobileServicesDropdownOpen = ref(false)
const isHeaderVisible = ref(true)
const lastScrollY = ref(0)

// ========================================
// 모바일 메뉴 제어
// ========================================
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isMobileServicesDropdownOpen.value = false
}

const toggleMobileServicesDropdown = () => {
  isMobileServicesDropdownOpen.value = !isMobileServicesDropdownOpen.value
}

// ========================================
// 데스크톱 드롭다운 제어
// ========================================
const closeServicesDropdown = () => {
  showServicesDropdown.value = false
}

const toggleServicesDropdown = () => {
  showServicesDropdown.value = !showServicesDropdown.value
}

// ========================================
// 스크롤 기반 헤더 숨김/표시
// ========================================
const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // 스크롤 다운 시 헤더 숨김 (100px 이상)
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isHeaderVisible.value = false
  } 
  // 스크롤 업 시 헤더 표시
  else if (currentScrollY < lastScrollY.value) {
    isHeaderVisible.value = true
  }
  
  lastScrollY.value = currentScrollY
}

// ========================================
// 라이프사이클 훅
// ========================================
// 라우트 변경 시 모바일 메뉴 닫기
watch(() => useRoute().path, () => {
  closeMobileMenu()
})

// 스크롤 이벤트 리스너 등록/해제
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

