<template>
  <section class="company-history" aria-labelledby="history-heading">
    <div class="container fade-in">
      <div class="section-header">
        <div class="section-subtitle">Trust First, Grow Always</div>
        <h2 id="history-heading" class="section-title mt-24">
          신뢰를 우선으로 끊임없이<br>성장합니다.
        </h2>
      </div>

      <div class="timeline-shell">
        <div class="timeline-scroll" aria-label="연혁 목록">
          <article
            v-for="y in historyData"
            :key="y.year"
            class="year-block"
            :data-year="y.year"
          >
            <h3 class="year-label" :aria-label="`${y.year} 연혁`">{{ y.year }}</h3>
            <ul class="year-events mt-40">
              <li v-for="(e, i) in y.events" :key="i" class="event-item mt-24">
                <span class="event-month">{{ e.month }}</span>
                <span class="event-text ml-40" v-html="e.text"></span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) gsap.registerPlugin(ScrollTrigger)

type YearData = { year: string; events: { month: string; text: string }[] }

const historyData: YearData[] = [
  {
    year: '2025',
    events: [
      { month: '06', text: '<b>더베스트파트너스</b> GA 보험설계사 인프라 구축 프로젝트 진행' },
      { month: '06', text: '<b>카카오페이보험</b> GA 보험설계사 인프라 구축 프로젝트 진행' },
      { month: '06', text: '<b>AIA 프리미어 파트너스</b> GA 보험설계사 인프라 구축 프로젝트 (3차)' }
    ]
  },
  {
    year: '2024',
    events: [
      { month: '06', text: '<b>더베스트파트너스</b> GA 보험설계사 인프라 구축 프로젝트 진행' },
      { month: '06', text: '<b>카카오페이보험</b> GA 보험설계사 인프라 구축 프로젝트 진행' },
      { month: '06', text: '<b>AIA 프리미어 파트너스</b> GA 보험설계사 인프라 구축 프로젝트 (3차)' }
    ]
  },
  {
    year: '2023',
    events: [
      { month: '06', text: '(주)핀게이트 설립' },
      { month: '06', text: 'GA 보험 통합시스템 EPIKA v.1 오픈' }
    ]
  },
]

let ctx: gsap.Context | undefined

onMounted(() => {
  if (!process.client) return

  ctx = gsap.context(() => {
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

