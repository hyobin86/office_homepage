<template>
  <section class="company-business" aria-labelledby="business-heading">
    <div class="container">
      <div class="section-header">
        <div class="section-subtitle">Our Business</div>
        <h2 id="business-heading" class="section-title mt-24">
          핀게이트의 핵심 사업 영역
        </h2>
        <p class="section-desc mt-32">
          보험업계의 디지털 전환을 위한 종합적인 IT 솔루션을 제공합니다.
        </p>
      </div>
      
      <div class="business-content mt-80">
        <div class="business-cards">
          <div 
            v-for="(business, index) in businesses" 
            :key="index"
            class="business-card"
          >
            <div class="card-image">
              <NuxtImg 
                :src="business.image"
                :alt="business.title"
                loading="lazy"
                format="webp"
                width="400"
                height="280"
                quality="85"
              />
            </div>
            <div class="card-content">
              <h3 class="card-title mt-24">{{ business.title }}</h3>
              <p class="card-desc mt-16">{{ business.description }}</p>
              <ul class="card-features mt-24">
                <li 
                  v-for="(feature, featureIndex) in business.features" 
                  :key="featureIndex"
                  class="feature-item"
                >
                  {{ feature }}
                </li>
              </ul>
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

const businesses = [
  {
    title: '보험 시스템 개발',
    description: '보험업계 특화 시스템 개발 및 운영',
    image: '/images/company/business-system.jpg',
    features: [
      '보험 상품 관리 시스템',
      '청약 및 계약 관리',
      '보험금 지급 시스템',
      '고객 관리 시스템'
    ]
  },
  {
    title: '데이터 분석 솔루션',
    description: '빅데이터를 활용한 보험업계 인사이트 제공',
    image: '/images/company/business-data.jpg',
    features: [
      '고객 행동 분석',
      '리스크 예측 모델',
      '시장 트렌드 분석',
      '성과 지표 대시보드'
    ]
  },
  {
    title: '클라우드 인프라',
    description: '안정적이고 확장 가능한 클라우드 환경 구축',
    image: '/images/company/business-cloud.jpg',
    features: [
      'AWS/Azure 클라우드 구축',
      '마이크로서비스 아키텍처',
      '자동 스케일링',
      '보안 및 모니터링'
    ]
  }
]

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      // container 바로 아래 2개 덩어리 순차 등장
      const container = document.querySelector('.company-business .container')
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
                trigger: '.company-business',
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
