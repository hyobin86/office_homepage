<template>
  <section class="service1-total" aria-labelledby="total-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="total-heading" class="section-title">
          GA 보험 업무, 이제 EPIKA 하나면 됩니다.
        </h2>
        <p class="section-desc mt-32">
          계약과 수수료, 분산된 고객 데이터, 까다로운 준법관리까지<br/> 하나의 플랫폼에서 통합적으로 관리해 업무 효율성과 정확성을 높입니다.
        </p>
      </div>
    </div>

    <section 
      class="carousel mt-120" 
      ref="carouselRef"
    >
      <div class="carousel-viewport">
        <div class="carousel-track">
          <div
            v-for="(service, i) in renderServices"
            :key="`${i}-${service.title}`"
            class="carousel-slide"
          >
            <div class="service-card">
              <img 
                :src="`/images/services/${service.image}`"
                :alt="service.title"
                loading="lazy"
                width="402"
                height="230"
              />
              <div class="card-label mt-32">{{ service.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Service {
  title: string
  image: string
}

const carouselRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
let gsapContext: gsap.Context | null = null

// 원본 서비스 데이터 (13개)
const services: Service[] = [
  { title: '위촉지원', image: 'service1-epika-01-apntm.png' },
  { title: '인사', image: 'service1-epika-02-hr.png' },
  { title: 'DB관리', image: 'service1-epika-03-dballot.png' },
  { title: '영업', image: 'service1-epika-04-sales.png' },
  { title: '수수료', image: 'service1-epika-05-cmsn.png' },
  { title: '제휴정산', image: 'service1-epika-06-income.png' },
  { title: '평가관리', image: 'service1-epika-07-evltn.png' },
  { title: '준법', image: 'service1-epika-08-cmpln.png' },
  { title: '교육관리', image: 'service1-epika-09-edctn.png' },
  { title: '리포트', image: 'service1-epika-10-report.png' },
  { title: '권한', image: 'service1-epika-11-auth.png' },
  { title: '어드민', image: 'service1-epika-12-admin.png' },
  { title: '공통지원', image: 'service1-epika-13-comsprt.png' }
]

// ===== 내부 상태 =====
const track = ref<HTMLElement | null>(null)
const viewport = ref<HTMLElement | null>(null)
const ro = ref<ResizeObserver | null>(null)

// 레이아웃 계산
const cardPx = ref(0)
const gapPx = ref(0)
const unit = ref(0)

// ===== 렌더용 배열: 무한 루프를 위한 복제 =====
const renderServices = computed(() => {
  // 더 많은 복제본을 만들어서 자연스러운 흐름 구현
  return [...services, ...services]
})

function remToPx(rem: number) {
  const fs = parseFloat(getComputedStyle(document.documentElement).fontSize || '16')
  return rem * fs
}

const recalc = () => {
  if (!viewport.value || !track.value) return
  
  // 원본 이미지 사이즈 고정 (402px)
  cardPx.value = 402
  gapPx.value = Math.round(remToPx(2.4))
  unit.value = cardPx.value + gapPx.value

  // 높이 설정 (원본 이미지 비율 402:230에 맞춰)
  const heightPx = Math.round(cardPx.value * (230 / 402)) // 원본 비율 적용
  ;(viewport.value as HTMLElement).style.height = `${heightPx}px`

  const root = carouselRef.value as HTMLElement
  root?.style.setProperty('--card-w', `${cardPx.value}px`)
  root?.style.setProperty('--gap', `${gapPx.value}px`)
  root?.style.setProperty('--unit', `${unit.value}px`)
}

onMounted(() => {
  const root = carouselRef.value
  if (!root) return
  viewport.value = root.querySelector('.carousel-viewport')
  track.value = root.querySelector('.carousel-track')
  if (!viewport.value || !track.value) return

  // 초기 렌더 후 레이아웃 계산
  recalc()

  // GSAP ScrollTrigger 애니메이션 설정
  if (typeof window !== 'undefined') {
    gsapContext = gsap.context(() => {
      // 헤더 애니메이션
      gsap.set(headerRef.value, { 
        opacity: 0, 
        y: 60,
        force3D: true
      })
      
      gsap.to(headerRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        force3D: true,
        scrollTrigger: {
          trigger: '.service1-total',
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      })

      // 캐러셀 애니메이션 (헤더 다음에)
      gsap.set(carouselRef.value, { 
        opacity: 0, 
        force3D: true
      })
      
      const carouselAnimation = gsap.to(carouselRef.value, {
        opacity: 1,
        delay: 0.2,
        duration: 1.0,
        ease: "power4.out",
        force3D: true,
        scrollTrigger: {
          trigger: '.service1-total',
          start: 'top 60%',
          toggleActions: 'play none none none'
        },
      })
    })
  }

  ro.value = new ResizeObserver(() => recalc())
  ro.value.observe(viewport.value)
})

onBeforeUnmount(() => {
  gsapContext?.revert()
  ro.value?.disconnect()
})
</script>
