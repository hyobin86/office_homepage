<template>
  <section class="company-contact" aria-labelledby="contact-heading">
    <div class="container" ref="containerRef">
      <div class="contact-info">
        <div class="section-header mt-60">
          <div class="section-subtitle">Contact Us</div>
          <h2 id="contact-heading" class="section-title mt-24">
            핀게이트와 함께 혁신을 경험할<br/>
            소중한 인연을 기다립니다.
          </h2>
        </div>
        <div class="contact-list mt-120">
          <div class="contact-item-wrapper">
            <div class="contact-item">
              <div class="contact-label">Tel</div>
              <div class="contact-value">{{ SITE_CONFIG.office.phone }}</div>
            </div>
            <div class="contact-item">
              <div class="contact-label">E-mail</div>
              <div class="contact-value">{{ SITE_CONFIG.office.email }}</div>
            </div>
          </div>
          <div class="contact-item mt-40">
            <div class="contact-label">Address</div>
            <div class="contact-value">{{ SITE_CONFIG.office.address }}</div>
          </div>
        </div>
      </div>
      <div class="contact-map">
        <img 
          src="/images/company/company-map.png" 
          alt="핀게이트 위치 지도"
          loading="lazy"
          width="640"
          height="608"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SITE_CONFIG } from '~/config/site'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const containerRef = ref<HTMLElement | null>(null)
let gsapContext: gsap.Context | null = null

onMounted(() => {
  if (typeof window !== 'undefined') {
    gsapContext = gsap.context(() => {
      if (containerRef.value) {
        gsap.fromTo(containerRef.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.value,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          }
        )
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
