<template>
  <section class="newvision-value" aria-labelledby="value-heading">
    <div class="container">
      <div class="section-header">
        <div class="section-subtitle">Beyond IT, Toward Value</div>
        <h2 id="value-heading" class="section-title mt-24">
          기술로 연결되는 보험산업, 모두에게 더 큰 가치를 제공합니다.
        </h2>
        <p class="section-desc mt-32">
          더 쉽고 빠르게, 더 스마트하게 보험의 경험을 바꿉니다.
        </p>
      </div>
      
      <!-- 버튼 영역 -->
      <div class="value-buttons mt-80">
        <button 
          v-for="(button, index) in valueButtons" 
          :key="index"
          :class="['button','button-small', { active: activeButton === index }]"
          @click="setActiveButton(index)"
        >
          {{ button.label }}
        </button>
      </div>
      
      <!-- 콘텐츠 영역 -->
      <div class="value-content mt-120">
        <div class="content-wrapper">
        <div class="content-image">
          <NuxtImg 
            :src="currentContent.image"
            :alt="currentContent.title"
            loading="lazy"
            width="565"
            height="580"
            quality="85"
          />
        </div>
        <div class="content-text">
          <h3 class="content-title mt-40">{{ currentContent.title }}</h3>
          <div class="content-points mt-80">
            <div 
              v-for="(point, index) in currentContent.points" 
              :key="index"
              class="content-point"
            >
              <h4 class="point-title">{{ point.title }}</h4>
              <p class="point-desc mt-16">{{ point.description }}</p>
            </div>
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
const activeButton = ref(0)

const valueButtons = [
  { label: 'GA' },
  { label: '보험설계사' },
  { label: '가입 고객' }
]

const valueContents = [
  {
    title: 'GA',
    image: '/images/newvision/newvision-card8.png',
    points: [
      {
        title: '운영 효율성 증대',
        description: '문서 자동화, 수수료 정산 자동화로 관리 비용 절감'
      },
      {
        title: '조직 안정성 강화',
        description: '신규 설계사 온보딩·정착 지원, 이탈을 감소'
      },
      {
        title: '데이터 자산 확보',
        description: '업무 과정에서 축적된 데이터를 활용해 새로운 서비스/상품 기획 가능'
      }
    ]
  },
  {
    title: '보험설계사',
    image: '/images/newvision/newvision-card9.png',
    points: [
      {
        title: '상담 효율성 향상',
        description: 'AI 보장분석과 상품 비교 자동화로 상담 준비 시간을 절반으로'
      },
      {
        title: '전문성 강화',
        description: '판매자가 아닌 보험 전문 컨설턴트로 포지셔닝 가능'
      }
    ]
  },
  {
    title: '가입 고객',
    image: '/images/newvision/newvision-card10.png',
    points: [
      {
        title: '개인 맞춤형 보장 제공',
        description: '불필요한 중복 보장 제거, 부족한 보장 채워줌'
      },
      {
        title: '신뢰할 수 있는 상담 경험',
        description: '데이터 기반 분석 리포트로 설계사 추천을 투명하게 확인 가능'
      }
    ]
  }
]

const currentContent = computed(() => valueContents[activeButton.value])

const setActiveButton = (index: number) => {
  if (activeButton.value === index) return
  
  // 콘텐츠 영역 fade out
  gsap.to('.content-wrapper', {
    opacity: 0,
    duration: 0.3,
    ease: "power2.inOut",
    onComplete: () => {
      // 콘텐츠 변경
      activeButton.value = index
      
      // 콘텐츠 영역 fade in
      gsap.fromTo('.content-wrapper', 
        { opacity: 0,  },
        {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out"
        }
      )
    }
  })
}

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      // container 바로 아래 3개 덩어리 순차 등장
      const container = document.querySelector('.newvision-value .container')
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
                trigger: '.newvision-value',
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

