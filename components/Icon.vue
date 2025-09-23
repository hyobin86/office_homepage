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
    
    <!-- 페이스북 아이콘 -->
    <path 
      v-else-if="name === 'facebook'" 
      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    
    <!-- 트위터 아이콘 -->
    <path 
      v-else-if="name === 'twitter'" 
      d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61172 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61199 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39525C5.36074 6.60469 4.01032 5.43266 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    
    <!-- 링크드인 아이콘 -->
    <path 
      v-else-if="name === 'linkedin'" 
      d="M16 8C18.2091 8 20 9.79086 20 12V21H16V12C16 11.4696 15.7893 10.9609 15.4142 10.5858C15.0391 10.2107 14.5304 10 14 10C13.4696 10 12.9609 10.2107 12.5858 10.5858C12.2107 10.9609 12 11.4696 12 12V21H8V8H12V9.5C12.5 8.5 13.5 8 14.5 8H16Z" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    <rect 
      v-if="name === 'linkedin'" 
      x="2" 
      y="9" 
      width="4" 
      height="12" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    <circle 
      v-if="name === 'linkedin'" 
      cx="4" 
      cy="4" 
      r="2" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    
    <!-- 인스타그램 아이콘 -->
    <rect 
      v-else-if="name === 'instagram'" 
      x="2" 
      y="2" 
      width="20" 
      height="20" 
      rx="5" 
      ry="5" 
      stroke="currentColor" 
      stroke-width="2"
    />
    <path 
      v-if="name === 'instagram'" 
      d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21485 14.7852C8.61993 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7616 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79366 10.2009 8.40618C10.9477 8.0187 11.7977 7.87658 12.63 8C13.4789 8.12591 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" 
      stroke="currentColor" 
      stroke-width="2"
    />
    <line 
      v-if="name === 'instagram'" 
      x1="17.5" 
      y1="6.5" 
      x2="17.51" 
      y2="6.5" 
      stroke="currentColor" 
      stroke-width="2"
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