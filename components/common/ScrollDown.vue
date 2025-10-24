<template>
  <div class="scroll-down-container" aria-label="아래로 스크롤">
    <div class="scroll-down" role="presentation">
      <div class="scroll-dot scroll-dot-bounce"></div>
    </div>
    <div class="scroll-down-text mt-16" aria-hidden="true">SCROLL DOWN</div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

let gsapContext: gsap.Context | null = null

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      const container = document.querySelector('.scroll-down-container')
      if (container) {
        gsap.set(container, { opacity: 0 })
        
        gsap.to(container, {
          opacity: 1,
          duration: 1,
          delay: 0.7,
          ease: "power2.inOut",
          onComplete: () => {
            const dot = container.querySelector('.scroll-dot-bounce')
            if (dot) {
              gsap.to(dot, {
                y: 18, 
                duration: 1.2,
                ease: "power2.out",
                yoyo: true,
                repeat: -1
              })
            }
          }
        })
      }
    })
  }
})

onUnmounted(() => {
  if (gsapContext) {
    gsapContext.revert()
  }
})
</script>
