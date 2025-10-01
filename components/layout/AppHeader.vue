<template>
  <header class="header">
    <div class="header-container">
      <NuxtLink to="/" class="header-logo">
        {{ SITE_CONFIG.name }}
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
                <Icon name="chevron-down" class="nav-arrow" :class="{ 'nav-arrow--rotated': showServicesDropdown }" />
              </button>
              <ul v-if="showServicesDropdown" class="nav-dropdown">
                <li 
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
                </li>
              </ul>
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
import { MAIN_NAVIGATION, SERVICES_DROPDOWN } from '~/constants/navigation'
import { SITE_CONFIG } from '~/constants/site'

const isMobileMenuOpen = ref(false)
const showServicesDropdown = ref(false)
const isMobileServicesDropdownOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isMobileServicesDropdownOpen.value = false
}

const closeServicesDropdown = () => {
  showServicesDropdown.value = false
}

const toggleServicesDropdown = () => {
  showServicesDropdown.value = !showServicesDropdown.value
}

const toggleMobileServicesDropdown = () => {
  isMobileServicesDropdownOpen.value = !isMobileServicesDropdownOpen.value
}

// 라우트 변경 시 모바일 메뉴 닫기
watch(() => useRoute().path, () => {
  closeMobileMenu()
})
</script>

