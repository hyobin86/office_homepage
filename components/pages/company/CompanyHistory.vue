<template>
  <section class="company-history" aria-labelledby="history-heading">
    <div class="container">
      <div class="section-header">
        <div class="section-subtitle">Our History</div>
        <h2 id="history-heading" class="section-title mt-24">
          핀게이트의 성장 여정
        </h2>
        <p class="section-desc mt-32">
          지난 10년간 보험업계의 디지털 전환을 이끌어온 핀게이트의 발자취를 확인해보세요.
        </p>
      </div>
      
      <div class="history-content mt-80">
        <div class="timeline">
          <div 
            v-for="(event, index) in historyEvents" 
            :key="index"
            class="timeline-item"
            :class="{ 'timeline-item--right': index % 2 === 1 }"
          >
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-year">{{ event.year }}</div>
            </div>
            <div class="timeline-content">
              <h3 class="event-title">{{ event.title }}</h3>
              <p class="event-desc mt-16">{{ event.description }}</p>
            </div>
          </div>
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

const historyEvents = [
  {
    year: '2014',
    title: '핀게이트 설립',
    description: '보험업계 IT 전문 기업으로 출발, 첫 번째 보험 시스템 개발 프로젝트 시작'
  },
  {
    year: '2016',
    title: '클라우드 전환',
    description: '보험업계 최초 클라우드 기반 시스템 구축, 확장성과 안정성 확보'
  },
  {
    year: '2018',
    title: 'AI 기술 도입',
    description: '머신러닝 기반 리스크 분석 시스템 개발, 보험업계 혁신 선도'
  },
  {
    year: '2020',
    title: '디지털 전환 가속화',
    description: '코로나19 대응 원격 업무 시스템 구축, 디지털 전환 가속화'
  },
  {
    year: '2022',
    title: '글로벌 진출',
    description: '해외 보험사와의 파트너십 체결, 글로벌 시장 진출'
  },
  {
    year: '2024',
    title: '미래 준비',
    description: 'AI와 블록체인 기술 융합, 보험업계 미래 기술 선도'
  }
]

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      // container 바로 아래 2개 덩어리 순차 등장
      const container = document.querySelector('.company-history .container')
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
                trigger: '.company-history',
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
