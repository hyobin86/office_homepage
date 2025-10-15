<template>
  <header class="header" :class="{ 'header--hidden': !isHeaderVisible }" role="banner">
    <div class="header-container">
      <NuxtLink to="/" aria-label="홈페이지로 이동">
        <img src="/images/logos/fingate-logo.svg" alt="FINGATE 로고"/>
      </NuxtLink>
      <nav class="header-nav" aria-label="주요 네비게이션">
        <ul class="nav-list" role="menubar">
          <li 
            v-for="item in MAIN_NAVIGATION" 
            :key="item.path"
            class="nav-item"
            :class="{ 'nav-item--dropdown': item.hasDropdown }"
            role="none"
            @mouseenter="item.hasDropdown && (showServicesDropdown = true)"
            @mouseleave="item.hasDropdown && (showServicesDropdown = false)"
          >
            <!-- 일반 메뉴 아이템 -->
            <NuxtLink 
              v-if="!item.hasDropdown"
              :to="item.path" 
              class="nav-link" 
              :class="{ active: $route.path === item.path }"
              role="menuitem"
              :aria-label="`${item.name} 페이지로 이동`"
            >
              {{ item.name }}
            </NuxtLink>
            <!-- 드롭다운 메뉴 아이템 -->
            <template v-else>
              <button 
                class="nav-link nav-link--button" 
                :class="{ active: $route.path.startsWith(item.path) }"
                role="menuitem"
                :aria-expanded="showServicesDropdown"
                aria-haspopup="true"
                :aria-label="`${item.name} 메뉴 열기`"
                @click="toggleServicesDropdown"
              >
                {{ item.name }}
              </button>
              <div class="nav-dropdown" role="menu" :aria-hidden="!showServicesDropdown">
                <div class="nav-dropdown-content">
                  <div 
                    v-for="child in item.children" 
                    :key="child.path"
                    class="nav-dropdown-item"
                  >
                    <NuxtLink 
                      :to="child.path" 
                      class="nav-dropdown-link"
                      role="menuitem"
                      :aria-label="`${child.name} 페이지로 이동`"
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
    <div v-if="isMobileMenuOpen" class="mobile-menu" role="dialog" aria-modal="true" aria-label="모바일 메뉴">
      <div class="mobile-menu-overlay" @click="closeMobileMenu" aria-hidden="true"></div>
      <div class="mobile-menu-content">
        <div class="mobile-menu-header">
          <h3>메뉴</h3>
          <button @click="closeMobileMenu" aria-label="메뉴 닫기">
            <Icon name="close" />
          </button>
        </div>
        <nav class="mobile-menu-nav" aria-label="모바일 네비게이션">
          <NuxtLink 
            to="/company" 
            class="mobile-menu-link" 
            aria-label="Company 페이지로 이동"
            @click="closeMobileMenu"
          >
            Company
          </NuxtLink>
          
          <!-- Services 드롭다운 -->
          <div class="mobile-menu-dropdown">
            <button 
              class="mobile-menu-dropdown-toggle" 
              :class="{ active: isMobileServicesDropdownOpen }"
              :aria-expanded="isMobileServicesDropdownOpen"
              aria-haspopup="true"
              aria-label="Services 메뉴 열기"
              @click="toggleMobileServicesDropdown"
            >
              Services
              <Icon name="chevron-down" class="mobile-menu-arrow" aria-hidden="true" />
            </button>
            <ul 
              v-if="isMobileServicesDropdownOpen" 
              class="mobile-menu-dropdown-content"
              role="menu"
            >
              <li role="none">
                <NuxtLink 
                  to="/services/service1" 
                  class="mobile-menu-sublink"
                  role="menuitem"
                  aria-label="GA 통합 운영 시스템 페이지로 이동"
                  @click="closeMobileMenu"
                >
                  Service1
                </NuxtLink>
              </li>
              <li role="none">
                <NuxtLink 
                  to="/services/service2" 
                  class="mobile-menu-sublink"
                  role="menuitem"
                  aria-label="원스톱 상담지원 솔루션 페이지로 이동"
                  @click="closeMobileMenu"
                >
                  Service2
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <NuxtLink 
            to="/newvision" 
            class="mobile-menu-link"
            aria-label="New Vision 페이지로 이동"
            @click="closeMobileMenu"
          >
            New Vision
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="mobile-menu-link"
            aria-label="Contact Us 페이지로 이동"
            @click="closeMobileMenu"
          >
            Contact Us
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Icon from '~/components/Icon.vue'
import { MAIN_NAVIGATION } from '~/constants/navigation'
import { throttle } from '~/utils/performance'

// ========================================
// 반응형 상태
// ========================================
const isMobileMenuOpen = ref<boolean>(false)
const showServicesDropdown = ref<boolean>(false)
const isMobileServicesDropdownOpen = ref<boolean>(false)
const isHeaderVisible = ref<boolean>(true)
const lastScrollY = ref<number>(0)

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
// 스크롤 기반 헤더 숨김/표시 (성능 최적화)
// ========================================
const handleScrollInternal = () => {
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

// throttle 적용: 100ms마다 실행 (초당 10회로 제한)
const handleScroll = throttle(handleScrollInternal, 100)

// ========================================
// 라이프사이클 훅
// ========================================
// 라우트 변경 시 모바일 메뉴 닫기
watch(() => useRoute().path, () => {
  closeMobileMenu()
})

// 스크롤 이벤트 리스너 등록/해제
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

