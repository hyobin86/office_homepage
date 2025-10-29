<template>
  <header class="header" :class="{ 'header--hidden': !isHeaderVisible }" role="banner">
    <div class="header-container">
      <NuxtLink to="/" aria-label="홈페이지로 이동">
        <img src="/images/logos/fingate-logo.svg" alt="FINGATE 로고" loading="eager"/>
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
const showServicesDropdown = ref<boolean>(false)
const isHeaderVisible = ref<boolean>(true)
const lastScrollY = ref<number>(0)

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

// 스크롤 이벤트 리스너 등록/해제
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

