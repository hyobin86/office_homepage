<template>
  <div class="contact-info">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 class="section-title text-black text-center">
          고객의 비즈니스 고민을<br/>
          핀게이트가 함께 해결하겠습니다.
        </h2>
      </div>
      <div class="d-flex gap-24 mt-120" ref="infoRef">
        <div class="info-item map-img" role="img" aria-label="핀게이트 위치 지도"></div>
        <div class="info-item">
          <h3 class="info-title">
            오시는 길
          </h3>
          <div class="info-item-title mt-48">TEL</div>
          <div class="info-item-content mt-16">
            <a :href="`tel:${SITE_CONFIG.office.phone}`" aria-label="전화 걸기">
              {{ SITE_CONFIG.office.phone }}
            </a>
          </div>
          <div class="info-item-title mt-40">E-mail</div>
          <div class="info-item-content mt-16">
            <a :href="`mailto:${SITE_CONFIG.office.email}`" aria-label="이메일 보내기">
              {{ SITE_CONFIG.office.email }}
            </a>
          </div>
          <div class="info-item-title mt-40">Address.</div>
          <address class="info-item-content mt-16">{{ SITE_CONFIG.office.address }}</address>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SITE_CONFIG } from '~/config/site'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref<HTMLElement | null>(null)
const infoRef = ref<HTMLElement | null>(null)
let gsapContext: gsap.Context | null = null

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      if (headerRef.value) {
        gsap.fromTo(headerRef.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.value,
              start: "top 60%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      }

      if (infoRef.value) {
        gsap.fromTo(infoRef.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: infoRef.value,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
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