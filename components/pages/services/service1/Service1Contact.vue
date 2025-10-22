<template>
  <section class="service1-contact" aria-labelledby="contact-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="contact-heading" class="section-title text-black">
          고객사의 신뢰가 우리의 강점을 증명합니다.
        </h2>
        <p class="section-desc text-gray mt-32">
          핀게이트만의 보험 IT 솔루션으로 고객사의 성장을 지원하며 함께 미래를 열어갑니다.
        </p>
      </div>
      
      <div class="contact-logos mt-120" ref="logosRef">
        <div 
          v-for="(logo, index) in clientLogos" 
          :key="logo.name"
          class="logo-item"
          :ref="(el) => setLogoRef(el, index)"
        >
          <NuxtImg 
            :src="`/images/logos/${logo.image}`"
            :alt="logo.name"
            loading="lazy"
            width="450"
            height="140"
            quality="85"
          />
        </div>
      </div>
    </div>

    <div class="contact-container" ref="visualRef">
      <div class="contact-image">
        <NuxtImg 
          src="/images/newvision/newvision-card11.png"
          alt="Contact Visual"
          loading="lazy"
          width="1722"
          height="320"
          quality="85"
        />
      </div>
      <div class="contact-visual">
        <h2 id="contact-heading" class="contact-title">
          보험 IT의 미래, 핀게이트와 함께 시작하세요.
        </h2>
        <NuxtLink to="/contact" class="button" aria-label="연락페이지로 이동">
          CONTACT US
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, type ComponentPublicInstance } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ClientLogo {
  name: string
  image: string
}

const headerRef = ref<HTMLElement | null>(null)
const logosRef = ref<HTMLElement | null>(null)
const visualRef = ref<HTMLElement | null>(null)
const logoRefs = ref<(HTMLElement | null)[]>([])
let gsapContext: gsap.Context | null = null

// ref 설정 함수
const setLogoRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el && 'tagName' in el) {
    logoRefs.value[index] = el as HTMLElement
  }
}

const clientLogos: ClientLogo[] = [
  { name: '카카오페이인슈어런스', image: 'kakao-logo-w.png' },
  { name: 'AIA프리미어파트너스', image: 'aia-logo-w.png' },
  { name: '더베스트', image: 'best-logo-w.png' },
]

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      // 헤더 애니메이션
      if (headerRef.value) {
        gsap.set(headerRef.value, { opacity: 0, y: 50 })
        gsap.to(headerRef.value, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.value,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        })
      }

      // 로고들 순차적으로 등장 애니메이션
      if (logosRef.value) {
        logoRefs.value.forEach((logoRef, index) => {
          if (logoRef) {
            gsap.set(logoRef, { opacity: 0, y: 30 })
            
            gsap.to(logoRef, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: logosRef.value,
                start: 'top 70%',
                toggleActions: 'play reverse play reverse'
              }
            })
          }
        })
      }

      // 하단 이미지 애니메이션
      if (visualRef.value) {
        gsap.set(visualRef.value, { opacity: 0, y: 50 })
        
        gsap.to(visualRef.value, {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visualRef.value,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse'
          }
        })
      }
    })
  }
})

onBeforeUnmount(() => {
  gsapContext?.revert()
})
</script>