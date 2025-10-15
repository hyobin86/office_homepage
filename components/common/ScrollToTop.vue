<template>
  <Transition name="fade-up">
    <button
      v-if="isVisible"
      class="scroll-to-top"
      :style="buttonStyle"
      @click="scrollToTop"
      aria-label="맨 위로 이동"
      title="맨 위로"
    >
      <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7435 26.8555L16.7435 5.14603M16.7435 5.14603L7.8623 13.7394M16.7435 5.14603L25.6246 13.7394" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
const isVisible = ref<boolean>(false)
const buttonStyle = ref<Record<string, string>>({})

const handleScroll = () => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  
  // 300px 이상 스크롤 시 버튼 표시
  isVisible.value = scrollY > 300
  
  // 푸터 요소 찾기
  const footer = document.querySelector('.footer') as HTMLElement
  if (!footer) return
  
  const footerHeight = footer.offsetHeight
  const scrollBottom = scrollY + windowHeight
  const documentBottom = documentHeight
  
  // 페이지 하단까지 남은 거리
  const distanceToBottom = documentBottom - scrollBottom
  
  // 푸터까지 8rem(80px) 여유
  const footerMargin = 40
  
  // 푸터 영역에 도달하면
  if (distanceToBottom < footerHeight) {
    // 푸터 높이 + 여유값으로 bottom 설정
    const bottomValue = footerHeight - distanceToBottom + footerMargin
    buttonStyle.value = {
      bottom: `${bottomValue}px`
    }
  } else {
    buttonStyle.value = {}
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  // 초기 위치 계산
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

