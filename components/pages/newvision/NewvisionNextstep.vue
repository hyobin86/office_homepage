<template>
  <section class="newvision-nextstep" aria-labelledby="nextstep-heading">
    <div class="container">
      <div class="section-header">
        <div class="section-subtitle">Our Next Step with AI</div>
        <h2 id="nextstep-heading" class="section-title mt-24">
          핀게이트는 보험 IT의 미래를 AI와 함께 준비하겠습니다.
        </h2>
        <p class="section-desc mt-32">
          AI 기반의 새로운 기술로 보험 업무를 혁신하고 미래를 열어갑니다.
        </p>
      </div>
      
      <NuxtImg 
        src="/images/newvision/newvision-card7.png"
        alt="Our Next Step with AI"
        loading="lazy"
        format="webp"
        width="1400"
        height="380"
        quality="85"
        class="mt-120"
      />
      <div class="point-cards mt-64">
        <div 
          v-for="(point, index) in pointCards" 
          :key="index"
          class="point-card"
        >
          <div class="point-number">{{ point.number }}</div>
          <h3 class="point-title mt-16">{{ point.title }}</h3>
          <p class="point-desc mt-32">{{ point.description }}</p>
          <div class="point-icon">
            <NuxtImg 
              :src="point.icon"
              :alt="`${point.title} 아이콘`"
              loading="lazy"
              format="webp"
              width="48"
              height="48"
              quality="85"
            />
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

const pointCards = [
  {
    number: 'POINT 01',
    title: 'AI 챗봇 어드바이저',
    description: '설계사의 업무 질문에 실시간으로 답변하고, 복잡한 보험 약관을 쉽게 설명해주는 지능형 AI 어시스턴트입니다.',
    icon: '/images/newvision/newvision-icon1.svg'
  },
  {
    number: 'POINT 02',
    title: '시장 트렌드 자동예측',
    description: '보험 시장의 트렌드 변화를 실시간으로 분석하고, 인기 상품과 신규 출시 상품의 성공 가능성을 예측합니다.',
    icon: '/images/newvision/newvision-icon2.svg'
  },
  {
    number: 'POINT 03',
    title: '예측 분석 엔진',
    description: '고객의 라이프스타일과 건강 데이터를 분석하여 미래 보험 니즈와 위험도를 예측하는 머신러닝 기반 분석 시스템입니다.',
    icon: '/images/newvision/newvision-icon3.svg'
  },
  {
    number: 'POINT 04',
    title: '개인화 학습 시스템',
    description: '설계사의 업무 패턴을 학습하여 개인별 맞춤형 워크플로우를 제안하고, 지속적인 성과 향상을 지원합니다.',
    icon: '/images/newvision/newvision-icon4.svg'
  },
  {
    number: 'POINT 05',
    title: '스마트 타겟팅',
    description: '빅데이터 분석을 통해 고객별 최적의 접촉 시점과 방법을 제안하며, 성공률 높은 영업 전략을 자동으로 추천합니다.',
    icon: '/images/newvision/newvision-icon5.svg'
  },
  {
    number: 'POINT 06',
    title: '리스크 관리 AI',
    description: '고객의 보험금 청구 이력과 패턴을 분석하여 잠재적 리스크를 사전에 감지하고, 예방 조치를 제안합니다.',
    icon: '/images/newvision/newvision-icon6.svg'
  }
]

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      // container 바로 아래 3개 덩어리 순차 등장
      const container = document.querySelector('.newvision-nextstep .container')
      if (container) {
        const children = Array.from(container.children)
        
        children.forEach((child, index) => {
          gsap.fromTo(child,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.7 + (index * 0.6), // 첫 번째는 1초, 그 다음은 0.6초씩 지연
              ease: "power2.out",
              scrollTrigger: {
                trigger: '.newvision-nextstep',
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

