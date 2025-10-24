<template>
  <section class="company-history" aria-labelledby="history-heading">
    <div class="container" ref="historyContainerRef">
      <div class="section-header" ref="historyHeaderRef">
        <div class="section-subtitle">Trust First, Grow Always</div>
        <h2 id="history-heading" class="section-title mt-24">
          신뢰를 우선으로 끊임없이<br>성장합니다.
        </h2>
      </div>

      <div class="timeline-shell" ref="timelineShellRef">
        <div class="timeline-scroll" aria-label="연혁 목록">
          <article
            v-for="y in historyData"
            :key="y.year"
            class="year-block"
            :data-year="y.year"
          >
            <h3 class="year-label" :aria-label="`${y.year} 연혁`">{{ y.year }}</h3>
            <ul class="year-events">
              <li v-for="(e, i) in y.events" :key="i" class="event-item">
                <span class="event-month">{{ e.month }}</span>
                <span class="event-text" v-html="e.text"></span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
    <div class="next-step" ref="nextStepRef">
      <div class="section-header" ref="nextStepHeaderRef">
        <div class="section-subtitle">NEXT STEP with AI</div>
        <h2 id="contact-heading" class="section-title mt-24">
          AI와 함께 보험 산업의 새로운 IT 혁신을 만들어갑니다.
        </h2>
        <NuxtLink to="/newvision" class="button mt-60" aria-label="newvision 페이지로 이동">
          MORE VIEW
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type YearData = { year: string; events: { month: string; text: string }[] }

const historyData: YearData[] = [
  {
    year: '2025',
    events: [
      { month: '09', text: '<b>GA통합지원솔루션</b> EPIKA 2.0 출시' },
      { month: '08', text: '<b>카카오페이</b> GA KP보험서비스 GA통합지원시스템 구축' },
      { month: '06', text: '<b>더베스트파트너스</b> GA영업지원시스템 구축' },
      { month: '04', text: '<b>AIA프리미어파트너스</b> AIMS Improvement 구축' }
    ]
  },
  {
    year: '2024',
    events: [
      { month: '11', text: '<b>AIA프리미어파트너스</b> IFRS15 시스템 구축' },
    ]
  },
  {
    year: '2023',
    events: [
      { month: '12', text: '<b>AIA프리미어파트너스</b> GA통합지원시스템 구축' },
      { month: '12', text: '<b>하쿠호도제일</b> DB마케팅 제휴' },
      { month: '12', text: '<b>GA통합지원솔루션</b> EPIKA 출시' },
      { month: '06', text: '<b>핀게이트</b> 창립' }
    ]
  },
]

// refs
const historyContainerRef = ref<HTMLElement | null>(null)
const historyHeaderRef = ref<HTMLElement | null>(null)
const timelineShellRef = ref<HTMLElement | null>(null)
const nextStepRef = ref<HTMLElement | null>(null)
const nextStepHeaderRef = ref<HTMLElement | null>(null)

let ctx: gsap.Context | undefined

onMounted(() => {
  if (typeof window === 'undefined') return

  ctx = gsap.context(() => {
    // 히스토리 헤더 애니메이션
    if (historyHeaderRef.value) {
      gsap.fromTo(historyHeaderRef.value,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: historyHeaderRef.value,
            start: "top 60%",
            toggleActions: "play none none none"
          }
        }
      )
    }

    // 타임라인 셸 애니메이션
    if (timelineShellRef.value) {
      gsap.fromTo(timelineShellRef.value,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineShellRef.value,
            start: "top 60%",
            toggleActions: "play none none none"
          }
        }
      )
    }

    // Next Step 헤더 애니메이션
    if (nextStepHeaderRef.value) {
      gsap.fromTo(nextStepHeaderRef.value,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: nextStepHeaderRef.value,
            start: "top 60%",
            toggleActions: "play none none none"
          }
        }
      )
    }

    // 좌측 헤더 pin (윈도우 스크롤 기준)
    ScrollTrigger.create({
      trigger: '.company-history',
      start: 'top top',
      end: 'bottom bottom',
    })

    // 각 연도 블록이 "뷰포트 중앙"을 지날 때 active 토글
    gsap.utils.toArray<HTMLElement>('.company-history .year-block').forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        toggleClass: { targets: el, className: 'active' },
        // markers: true,
      })
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

