<template>
  <svg 
    :width="size" 
    :height="size" 
    :class="className"
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- 메뉴 아이콘 -->
    <path 
      v-if="name === 'menu'" 
      d="M3 12H21M3 6H21M3 18H21" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    
    <!-- 닫기 아이콘 -->
    <path 
      v-else-if="name === 'close'" 
      d="M18 6L6 18M6 6L18 18" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    
    <!-- 화살표 아이콘 -->
    <path 
      v-else-if="name === 'arrow-right'" 
      d="M5 12H19M12 5L19 12L12 19" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    
    <!-- 체크 아이콘 -->
    <path 
      v-else-if="name === 'check'" 
      d="M20 6L9 17L4 12" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    
    <!-- 아래 화살표 아이콘 -->
    <path 
      v-else-if="name === 'chevron-down'" 
      d="M6 9L12 15L18 9" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    
    <!-- 기본 아이콘 (사각형) -->
    <rect 
      v-else 
      x="3" 
      y="3" 
      width="18" 
      height="18" 
      rx="2" 
      ry="2" 
      stroke="currentColor" 
      stroke-width="2"
    />
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string
  size?: string | number
  className?: string
}>(), {
  size: '24',
  className: ''
})
</script>