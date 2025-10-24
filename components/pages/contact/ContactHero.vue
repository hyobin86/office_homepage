<template>
  <section class="contact-hero" aria-labelledby="contact-heading">
    <div class="container">
      <div class="hero-header" ref="heroRef">
        <div class="hero-subtitle">Contact Us</div>
        <h1 id="contact-heading" class="hero-title mt-24">소통으로 찾는 비즈니스 해답</h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref<HTMLElement | null>(null)
let gsapContext: gsap.Context | null = null

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      if (heroRef.value) {
        gsap.fromTo(heroRef.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heroRef.value,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        )
      }
    })
  }
})

onBeforeUnmount(() => {
  gsapContext?.revert()
})
</script> 
