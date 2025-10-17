<template>
  <section class="company-contact" aria-labelledby="contact-heading">
    <div class="container">
      <div class="section-header">
        <div class="section-subtitle">Contact Us</div>
        <h2 id="contact-heading" class="section-title mt-24">
          함께 성장할 파트너를 찾습니다
        </h2>
        <p class="section-desc mt-32">
          보험업계의 디지털 전환을 함께 이끌어갈 파트너가 되세요.
        </p>
      </div>
      
      <div class="contact-content mt-80">
        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">
              <NuxtImg 
                src="/images/company/contact-phone.svg"
                alt="전화 아이콘"
                loading="lazy"
                format="webp"
                width="32"
                height="32"
                quality="85"
              />
            </div>
            <div class="info-content">
              <h3 class="info-title">전화 문의</h3>
              <p class="info-desc">070-7954-2241</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <NuxtImg 
                src="/images/company/contact-email.svg"
                alt="이메일 아이콘"
                loading="lazy"
                format="webp"
                width="32"
                height="32"
                quality="85"
              />
            </div>
            <div class="info-content">
              <h3 class="info-title">이메일 문의</h3>
              <p class="info-desc">withus@fingate.co.kr</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <NuxtImg 
                src="/images/company/contact-location.svg"
                alt="위치 아이콘"
                loading="lazy"
                format="webp"
                width="32"
                height="32"
                quality="85"
              />
            </div>
            <div class="info-content">
              <h3 class="info-title">사무실 위치</h3>
              <p class="info-desc">서울특별시 마포구 월드컵북로2길 19, 7층</p>
            </div>
          </div>
        </div>
        
        <div class="contact-action mt-80">
          <NuxtLink to="/contact" class="button button--primary" aria-label="연락 페이지로 이동">
            문의하기
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

let gsapContext: gsap.Context | null = null

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      // container 바로 아래 3개 덩어리 순차 등장
      const container = document.querySelector('.company-contact .container')
      if (container) {
        const children = Array.from(container.children)
        
        children.forEach((child, index) => {
          gsap.fromTo(child,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: '.company-contact',
                start: "top 80%",
              }
            }
          )
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
