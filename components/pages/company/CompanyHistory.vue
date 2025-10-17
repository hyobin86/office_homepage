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
        <div
          class="timeline-scroll"
          ref="timelineRef"
          data-lenis-prevent
          aria-label="연혁 스크롤 목록"
        >
          <article
            v-for="y in historyData"
            :key="y.year"
            class="year-block mb-120"
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
import { ref, onMounted, onUnmounted } from 'vue'
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

const timelineRef = ref<HTMLElement | null>(null)
let ctx: gsap.Context | undefined
let ro: ResizeObserver | undefined

onMounted(() => {
  if (!process.client) return
  const scroller = timelineRef.value
  
  if (!scroller) return // scroller가 null이면 종료

  // 스크롤 이벤트 제어 함수 (내부 스크롤 영역 제외)
  const preventScroll = (e: Event) => {
    // 내부 스크롤 영역에서는 막지 않음
    if (scroller.contains(e.target as Node)) {
      return
    }
    e.preventDefault()
    e.stopPropagation()
    return false
  }

  const enableScrollPrevention = () => {
    document.addEventListener('wheel', preventScroll, { passive: false })
    document.addEventListener('touchmove', preventScroll, { passive: false })
  }

  const disableScrollPrevention = () => {
    document.removeEventListener('wheel', preventScroll)
    document.removeEventListener('touchmove', preventScroll)
  }

  // 스크롤 전환 로직
  let isScrollPreventionActive = false
  let lastScrollTop = scroller.scrollTop
  
  scroller.addEventListener('mouseenter', () => {
    if (!isScrollPreventionActive) {
      enableScrollPrevention()
      isScrollPreventionActive = true
    }
  })
  
  scroller.addEventListener('mouseleave', () => {
    if (isScrollPreventionActive) {
      disableScrollPrevention()
      isScrollPreventionActive = false
    }
    // 영역을 벗어나면 스크롤을 맨 위로 초기화
    scroller.scrollTo({ top: 0 })
  })
  
  // 상단/하단 도달 시 외부 스크롤 허용
  scroller.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = scroller
    const isAtTop = scrollTop <= 3
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 3
    const scrollDirection = scrollTop > lastScrollTop ? 1 : -1
    
    if (isScrollPreventionActive) {
      if ((isAtTop && scrollDirection === -1) || (isAtBottom && scrollDirection === 1)) {
        disableScrollPrevention()
        isScrollPreventionActive = false
      }
    }
    
    lastScrollTop = scrollTop
  }, { passive: true })

  ctx = gsap.context(() => {
    // 섹션에 진입하면 좌측 헤더 pin
    ScrollTrigger.create({
      trigger: '.company-history',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.company-history .section-header',
      pinSpacing: true,
    })

    // 내부 스크롤 컨테이너 기준으로 year-block 활성화
    gsap.utils.toArray<HTMLElement>('.company-history .year-block').forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        scroller,
        start: 'top 30%',
        end: 'bottom 30%',
        toggleClass: { targets: el, className: 'active' },
      })
    })
  })

  // 내부 스크롤 높이 변동 대응
  ro = new ResizeObserver(() => ScrollTrigger.refresh())
  ro.observe(scroller)
})

onUnmounted(() => {
  ctx?.revert()
  ro?.disconnect()
})
</script>
