<template>
  <section class="service1-reason" aria-labelledby="reason-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="reason-heading" class="section-title">
          보험 비즈니스 본질에 집중하기 어려운 이유
        </h2>
        <p class="section-desc mt-32">GA 보험이 성장할수록 기존 업무방식은 비효율적으로 느껴집니다.</p>
      </div>
    </div>
    
    <section 
      class="carousel mt-90" 
      ref="carouselRef"
    >
      <div class="carousel-viewport">
        <div class="carousel-track">
          <div
            v-for="(problem, i) in renderProblems"
            :key="`${i}-${problem.text}`"
            class="carousel-slide"
          >
            <div class="problem-card">
              <p class="card-text" v-html="problem.text"></p>
              <div class="card-icon">
                <img 
                  :src="`/images/services/${problem.icon}.svg`"
                  :alt="problem.text"
                  loading="lazy"
                  width="40"
                  height="40"
                />
              </div>
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

interface ProblemItem {
  icon: string
  text: string
}

const carouselRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
let gsapContext: gsap.Context | null = null

// 원본 문제 데이터 (5개)
const problems: ProblemItem[] = [
  {
    icon: 'service1_icon1',
    text: '"설계사들이 많아지니<br/> 관리가 힘들어요."'
  },
  {
    icon: 'service1_icon2',
    text: '"보험사마다 다른 수수료 정<br/>산, 매번 힘듭니다."'
  },
  {
    icon: 'service1_icon3',
    text: '"계약·상담 내역을<br/> 통합해 보기 어려워요."'
  },
  {
    icon: 'service1_icon4',
    text: '"수작업이 많아 업무 실수와<br/> 지연이 반복됩니다."'
  },
  {
    icon: 'service1_icon5',
    text: '"업무 시스템이 제각각이라<br/> 너무 비효율적이에요."'
  }
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
const renderProblems = computed(() => {
  // 무한 스크롤을 위해 충분한 복제본 (5배 복제)
  return [...problems, ...problems, ...problems, ...problems, ...problems]
})

function remToPx(rem: number) {
  const fs = parseFloat(getComputedStyle(document.documentElement).fontSize || '16')
  return rem * fs
}

const recalc = () => {
  if (!viewport.value || !track.value) return
  const CARD_W_REM = 32  // 카드 너비를 더 작게 조정
  const GAP_REM = 2.4
  const PEEK_REM = 6

  const vpW = viewport.value.clientWidth
  const maxCard = remToPx(CARD_W_REM)
  gapPx.value = Math.round(remToPx(GAP_REM))
  const desiredPeek = Math.round(remToPx(PEEK_REM))

  const minCardToKeepPeek = Math.max(0, vpW - 2 * desiredPeek)
  cardPx.value = Math.min(maxCard, Math.max(280, minCardToKeepPeek))
  unit.value = cardPx.value + gapPx.value

  // 높이 설정 (카드 비율에 맞춰)
  const heightPx = Math.round(cardPx.value * 1.2) // 카드 높이 비율
  ;(viewport.value as HTMLElement).style.height = `${heightPx}px`

  const root = carouselRef.value as HTMLElement
  // 정수 픽셀로 고정하여 sub-pixel 정밀도 문제 방지
  root?.style.setProperty('--card-w', `${Math.round(cardPx.value)}px`)
  root?.style.setProperty('--gap', `${Math.round(gapPx.value)}px`)
  root?.style.setProperty('--unit', `${Math.round(unit.value)}px`)
  root?.style.setProperty('--period-items', '5')
  root?.style.setProperty('--period', `calc(var(--unit) * var(--period-items))`)
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
          trigger: '.service1-reason',
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      })

      // 캐러셀 애니메이션 (헤더 다음에)
      gsap.set(carouselRef.value, { 
        opacity: 0, 
        force3D: true
      })
      
      // blur 클래스 추가
      if (carouselRef.value) {
        carouselRef.value.classList.add('blur-effect')
      }
      
      const carouselAnimation = gsap.to(carouselRef.value, {
        opacity: 1,
        delay: 0.2,
        duration: 1.0,
        ease: "power4.out",
        force3D: true,
        scrollTrigger: {
          trigger: '.service1-reason',
          start: 'top 60%',
          toggleActions: 'play none none none'
        },
        onStart: () => {
          carouselRef.value?.classList.remove('blur-effect')
          if (track.value && unit.value > 0) {
            track.value.style.animationPlayState = 'running'
          }
        },
        onReverseStart: () => {
          carouselRef.value?.classList.add('blur-effect')
          if (track.value) {
            track.value.style.animationPlayState = 'paused'
          }
        }
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