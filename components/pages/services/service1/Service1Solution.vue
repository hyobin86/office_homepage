<template>
  <section class="service1-solution" aria-labelledby="solution-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="solution-heading" class="section-title">
          최신 IT 기술이 만든 차세대 보험 솔루션
        </h2>
        <p class="section-desc mt-32">안정성과 효율성을 갖춘 인프라, 데이터 기반의 지능형 서비스, 그리고 스마트 RPA로 보험 업무를 혁신합니다.</p>
      </div>
      
      <div class="solution-features mt-120">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.title"
          class="feature-item"
          :ref="(el) => setFeatureRef(el, index)"
        >
          <div class="feature-content">
            <div class="feature-text mt-80">
              <h3 class="feature-title">{{ feature.title }}</h3>
              <ul class="feature-description mt-40">
                <li v-for="desc in feature.description" :key="desc" v-html="desc"></li>
              </ul>
            </div>
            <div class="feature-image">
              <img 
                :src="`/images/services/${feature.image}`"
                :alt="feature.title"
                loading="lazy"
                width="688"
                height="380"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, type ComponentPublicInstance } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FeatureItem {
  title: string
  description: string[]
  image: string
}

const headerRef = ref<HTMLElement | null>(null)
const featureRefs = ref<(HTMLElement | null)[]>([])
let gsapContext: gsap.Context | null = null

// ref 설정 함수
const setFeatureRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el && 'tagName' in el) {
    featureRefs.value[index] = el as HTMLElement
  }
}

const features: FeatureItem[] = [
  {
    title: '안정적이고 유연한 인프라',
    description: [
      'MSA 아키텍처 기반으로 확장성과 모듈화를 지원합니다.',
      'IAM · SSO 보안 체계로 안전한 사용자 인증과 접근 제어를 보장합니다.'
    ],
    image: 'service1-card1.png'
  },
  {
    title: '데이터 기반의 지능형 서비스',
    description: [
      'CDP(Customer Data Platform) 와 빅데이터 분석으로 고객 행동과<br/> 패턴을 파악합니다.',
      '딥러닝 추천 알고리즘으로 개인화된 상품을 제안합니다.'
    ],
    image: 'service1-card2.png'
  },
  {
    title: '보험 비즈니스 최적화',
    description: [
      '실시간 보험상품 설계 기능으로 시장변화에 즉각 대응합니다.',
      '웹 기반 실시간 소켓 메시징 처리로 빠른 알림과 거래를 반영합니다.'
    ],
    image: 'service1-card3.png'
  },
  {
    title: '스마트 RPA 자동화',
    description: [
      'AI 기반 RPA 기술을 통해 반복적인 문서 업무를 자동화해 보험 업무 생<br>산성을 높입니다.',
      '이미지 패턴 인식 기반의 문서 자동화를 통해 정확한 데이터 구조화를 지원합니다.'
    ],
    image: 'service1-card4.png'
  }
]

onMounted(() => {
  if (typeof window !== 'undefined') {
    gsapContext = gsap.context(() => {
      // 헤더 애니메이션
      if (headerRef.value) {
        gsap.fromTo(headerRef.value, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.service1-solution',
              start: 'top 60%',
              toggleActions: 'play reverse play reverse'
            }
          }
        )
      }

      // 각 피처 아이템 개별 트리거 애니메이션
      featureRefs.value.forEach((featureRef, index) => {
        if (featureRef) {
          gsap.set(featureRef, { opacity: 0})
          
          gsap.to(featureRef, {
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featureRef,
              start: 'top 70%',
              toggleActions: 'play reverse play reverse'
            }
          })
        }
      })
    })
  }
})

onBeforeUnmount(() => {
  gsapContext?.revert()
})
</script>
