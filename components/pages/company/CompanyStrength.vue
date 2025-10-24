<template>
  <section class="company-strength" aria-labelledby="strength-heading">
    <div class="container" ref="containerRef">
      <div class="section-header">
        <div class="section-subtitle">Our Strength</div>
        <p class="section-title mt-24">
          우리가 세운 가치는<br>
          우리의 경쟁력이 되었습니다.</p>
      </div>
      <div class="carousel-nav-container">
        <button 
          class="carousel-nav prev" 
          @click="prev"
          aria-label="이전 슬라이드"
          type="button"
        >
          <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.599 16.0004H5.88956M5.88956 16.0004L14.4829 7.11914M5.88956 16.0004L14.4829 24.8814" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>
        <button 
          class="carousel-nav next" 
          @click="next"
          aria-label="다음 슬라이드"
          type="button"
        >
          <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.88953 16.0004H27.599M27.599 16.0004L19.0056 7.11914M27.599 16.0004L19.0056 24.8814" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <section 
      class="carousel" 
      ref="carouselRef"
      role="region"
      aria-label="회사 강점 슬라이더"
      aria-live="polite"
    >
      <div class="carousel-viewport">
        <div class="carousel-track" role="group" aria-label="슬라이드 목록">
          <!-- 데이터 기반 복제: tail + original + head -->
          <div
            v-for="(s, i) in renderSlides"
            :key="`${i}-${s.src}`"
            class="carousel-slide"
            :aria-hidden="i < clones || i >= clones + n"
            :aria-current="i === index ? 'true' : 'false'"
            role="group"
            :aria-label="`슬라이드 ${(i - clones + n) % n + 1} / ${n}`"
          >
            <img 
              :src="s.src" 
              :alt="s.title"
              width="1210"
              loading="lazy"
            />
            <div class="slide-content">
              <h3 class="slide-title">{{ s.title }}</h3>
              <p class="slide-desc mt-24" v-html="s.desc"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>


<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'

interface SlideItem {
  src: string
  title: string
  desc: string
}
interface CarouselControl {
  next: () => void
  prev: () => void
}

const containerRef = ref<HTMLElement | null>(null)
const carouselRef = ref<HTMLElement | null>(null)

// 원본 슬라이드 데이터 (3장)
const slides: SlideItem[] = [
  {
    src: '/images/company/company-card1.png',
    title: '금융 IT에 최적화된 기술력',
    desc:
      '핀게이트는 MSA 아키텍처, IAM·SSO 기반 보안, CDP와 빅데이터 분석, 실시간 보험 상품 설계, 딥러닝 추천,<br/> 소켓 메시징 처리 등 금융 IT 환경에 특화된 핵심 기술 역량을 보유하고 있습니다.',
  },
  {
    src: '/images/company/company-card2.png',
    title: '인하우스 경험 기반 전문성',
    desc:
      'GA 보험 인하우스 경험이 있는 IT 전문가들이 함께 참여하여 고객사의 요구사항을 정확하게 파악하고<br/> 효과적인 IT솔루션을 제시합니다.',
  },
  {
    src: '/images/company/company-card3.png',
    title: '다수의 보험 IT 프로젝트 수행 경험',
    desc:
      'GA 보험 차세대 시스템 구축 및 다수의 대형 프로젝트를 수행하며 시스템 구축 및 관리 노하우를 쌓아왔습니다.',
  },
]

// ===== 내부 상태 =====
const animating = ref(false)
const index = ref(0)                // 렌더 배열 기준 인덱스
const clones = ref(0)               // 앞뒤 복제 개수(원본 개수와 동일)
const n = ref(slides.length)        // 원본 개수
const track = ref<HTMLElement | null>(null)
const viewport = ref<HTMLElement | null>(null)
const ro = ref<ResizeObserver | null>(null)

// 레이아웃 계산
const cardPx = ref(0)
const gapPx = ref(0)
const unit = ref(0)

// ===== 렌더용 배열: [tail clones] + [original] + [head clones] =====
const renderSlides = computed(() => {
  const tail = slides.slice(-n.value)
  const head = slides.slice(0, n.value)
  return [...tail, ...slides, ...head]
})

const next = () => { if (!animating.value) moveTo(index.value + 1) }
const prev = () => { if (!animating.value) moveTo(index.value - 1) }

function remToPx(rem: number) {
  const fs = parseFloat(getComputedStyle(document.documentElement).fontSize || '16')
  return rem * fs
}

const applyTransform = (i: number, animate = true) => {
  if (!track.value || !viewport.value) return
  const vpW = viewport.value.clientWidth
  
  // CSS에서 실제 슬라이드 너비 가져오기
  const slideElement = track.value.querySelector('.carousel-slide') as HTMLElement
  const actualSlideWidth = slideElement ? slideElement.offsetWidth : 0
  
  const centerOffset = (vpW - actualSlideWidth) / 2
  const gap = gapPx.value
  const tx = Math.round(centerOffset - i * (actualSlideWidth + gap))
  animating.value = animate
  track.value.style.transition = animate ? 'transform 600ms cubic-bezier(.22,.61,.36,1)' : 'none'
  track.value.style.transform = `translate3d(${tx}px,0,0)`
}

const moveTo = (i: number, animate = true) => {
  index.value = i
  applyTransform(index.value, animate)
  
  // 접근성: 현재 슬라이드 정보를 스크린 리더에 알림
  announceSlideChange()
}

// 접근성: 슬라이드 변경 알림
const announceSlideChange = () => {
  const currentSlideIndex = (index.value - clones.value + n.value) % n.value
  const currentSlide = slides[currentSlideIndex]
  if (currentSlide) {
    const announcement = `슬라이드 ${currentSlideIndex + 1} / ${n}: ${currentSlide.title}`
    // 스크린 리더에 알림 (aria-live="polite"로 처리됨)
    const announcementEl = document.createElement('div')
    announcementEl.setAttribute('aria-live', 'polite')
    announcementEl.setAttribute('aria-atomic', 'true')
    announcementEl.className = 'sr-only'
    announcementEl.textContent = announcement
    document.body.appendChild(announcementEl)
    
    // 잠시 후 제거
    setTimeout(() => {
      document.body.removeChild(announcementEl)
    }, 1000)
  }
}

const onTransitionEnd = (e: TransitionEvent) => {
  if (e.target !== track.value) return
  const max = clones.value + n.value
  if (index.value >= max) moveTo(index.value - n.value, false)
  else if (index.value < clones.value) moveTo(index.value + n.value, false)
  animating.value = false
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

const recalc = () => {
  if (!viewport.value || !track.value) return
  const CARD_W_REM = 121
  const GAP_REM = 2.4
  const PEEK_REM = 6

  const vpW = viewport.value.clientWidth
  const maxCard = remToPx(CARD_W_REM)
  gapPx.value = Math.round(remToPx(GAP_REM))
  const desiredPeek = Math.round(remToPx(PEEK_REM))

  const minCardToKeepPeek = Math.max(0, vpW - 2 * desiredPeek)
  cardPx.value = Math.min(maxCard, Math.max(320, minCardToKeepPeek))
  unit.value = cardPx.value + gapPx.value

  // 높이는 CSS aspect-ratio로 처리
  // const heightPx = Math.round(cardPx.value * (420 / 1210))
  // ;(viewport.value as HTMLElement).style.height = `${heightPx}px`

  // CSS 변수 설정 제거 - 이제 CSS에서 반응형으로 처리
  // root?.style.setProperty('--card-w', `${cardPx.value}px`)
  const root = carouselRef.value as HTMLElement
  root?.style.setProperty('--gap', `${gapPx.value}px`)

  applyTransform(index.value, false)
}

onMounted(() => {
  const root = carouselRef.value
  if (!root) return
  viewport.value = root.querySelector('.carousel-viewport')
  track.value = root.querySelector('.carousel-track')
  if (!viewport.value || !track.value) return

  // 초기 값
  n.value = slides.length
  clones.value = n.value           // 앞/뒤 복제 수 = 원본 수
  index.value = clones.value       // 시작 위치 = 원본 첫 장

  // 초기 렌더 후 레이아웃 계산
  recalc()

  // 이벤트
  track.value.addEventListener('transitionend', onTransitionEnd)
  window.addEventListener('keydown', handleKeydown)

  ro.value = new ResizeObserver(() => recalc())
  ro.value.observe(viewport.value)

  // GSAP 애니메이션
  if (typeof window !== 'undefined') {
    import('gsap').then(({ gsap }) => {
      // 컨테이너 애니메이션
      if (containerRef.value) {
        gsap.set(containerRef.value, { opacity: 0, y: 50 })
        gsap.to(containerRef.value, {
          opacity: 1,
          y: 0,
          delay: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.value,
            start: 'top 50%',
            toggleActions: 'play reverse play reverse'
          }
        })
      }

      // 캐러셀 애니메이션
      if (carouselRef.value) {
        gsap.set(carouselRef.value, { opacity: 0, y: 50 })
        gsap.to(carouselRef.value, {
          opacity: 1,
          y: 0,
          duration: 1.0,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: carouselRef.value,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        })
      }
    })
  }
})

onBeforeUnmount(() => {
  track.value?.removeEventListener('transitionend', onTransitionEnd)
  window.removeEventListener('keydown', handleKeydown)
  ro.value?.disconnect()
})
</script>

