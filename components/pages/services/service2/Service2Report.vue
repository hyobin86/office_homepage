<template>
  <section class="service2-report" aria-labelledby="report-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="report-heading" class="section-title text-black">
          리포트로 완성하는 전문 설계
        </h2>
        <p class="section-desc text-gray mt-32">
          정확한 비교와 최적의 제안을 리포트로 제공해 설계사의 전문성을 강화합니다.
        </p>
      </div>

      <div class="report-buttons mt-80">
        <button 
          v-for="(button, index) in topButtons"
          :key="button.id"
          @click="setActiveTopButton(index)"
          class="button button-small button-default"
          :class="{ active: activeTopButtonIndex === index }"
        >
          {{ button.label }}
        </button>
      </div>
    </div>
    
    <!-- 컨텐츠 영역 -->
    <div class="report-content-wrapper pt-56" ref="contentRef">
      <div class="report-content-section">
        <div class="report-content-info">
          <h3 class="report-content-title">{{ currentSection.title }}</h3>
          <div class="report-feature-cards mt-64">
            <div 
              v-for="feature in currentSection.features"
              :key="feature.id"
              class="report-feature-card"
            >
               <div class="report-feature-icon">
                 <img 
                   :src="feature.icon" 
                   :alt="`${feature.title} 아이콘`"
                   width="48"
                   height="48"
                   loading="lazy"
                 />
               </div>
              <div class="report-feature-content">
                <h4>{{ feature.title }}</h4>
                <p class="mt-16">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <img 
          :src="currentSection.dashboardImage" 
          :alt="`${currentSection.title} 인터페이스`"
          width="849"
          height="596"
          loading="lazy"
          class="report-dashboard-image"
        />
      </div>
    </div>
    
    <!-- 하단 배너 섹션 -->
    <div class="service2-contact-banner" ref="bannerRef">
      <div class="contact-container">
        <div class="contact-image">
          <img 
            src="/images/newvision/newvision-card11.png"
            alt="Contact Banner"
            loading="lazy"
            width="1722"
            height="320"
          />
        </div>
        <div class="contact-visual">
          <h2 class="contact-title">
            보험 비즈니스 고민, 핀게이트가 해결합니다.
          </h2>
          <NuxtLink to="/contact" class="button" aria-label="연락페이지로 이동">
            CONTACT US
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Refs
const headerRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const bannerRef = ref<HTMLElement>()

// 상태 관리
const activeTopButtonIndex = ref(0)

// 상단 버튼 데이터
const topButtons = [
  { id: 'template', label: '템플릿 기반 자동화' },
  { id: 'analysis', label: '맞춤형 비교·분석 리포트' }
]

// 컨텐츠 데이터
const sectionsData = [
  {
    id: 'template',
    title: '템플릿 기반 자동화',
    dashboardImage: '/images/services/service2-card21.png',
    features: [
      {
        id: 'template',
        icon: '/images/services/service2-icon5.png',
        title: '손쉬운 리포트 템플릿 작성',
        description: '표준화된 리포트 템플릿으로 손쉽게 작성할 수 있습니다.'
      },
      {
        id: 'time',
        icon: '/images/services/service2-icon6.png',
        title: '제작 시간 단축',
        description: '리포트 제작 시간을 단축하여 반복 업무를 줄입니다.'
      }
    ]
  },
  {
    id: 'analysis',
    title: '맞춤형 비교·분석 리포트',
    dashboardImage: '/images/services/service2-card20.png',
    features: [
      {
        id: 'analysis',
        icon: '/images/services/service2-icon7.png',
        title: '고객별 공력, 중복 확인',
        description: '고객별 보장 공백, 중복을 한눈에 파악할 수 있습니다.'
      },
      {
        id: 'proposal',
        icon: '/images/services/service2-icon8.png',
        title: '최적의 상품 제안',
        description: '객관적으로 비교 분석한 결과를 제공하여 최적의 상품을 제안합니다.'
      }
    ]
  }
]

// 현재 활성 섹션 가져오기
const currentSection = computed(() => {
  return sectionsData[activeTopButtonIndex.value]
})

// 버튼 클릭 핸들러
const setActiveTopButton = (index: number) => {
  activeTopButtonIndex.value = index
}

onMounted(() => {
  // 1. 헤더 애니메이션 (첫 번째)
  if (headerRef.value) {
    gsap.fromTo('.section-header', 
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service2-report',
          start: 'top 60%',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  }
  
  // 2. 상단 버튼들 애니메이션 (두 번째)
  gsap.fromTo('.report-buttons', 
    { 
      opacity: 0, 
      y: 50 
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.service2-report',
        start: 'top 60%',
        toggleActions: 'play reverse play reverse'
      }
    }
  )
  
  // 3. 컨텐츠 영역 애니메이션 (세 번째)
  if (contentRef.value) {
    gsap.fromTo(contentRef.value, 
      { 
        opacity: 0, 
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service2-report',
          start: 'top 60%',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  }
  
  // 4. 하단 배너 애니메이션 (마지막)
  if (bannerRef.value) {
    gsap.fromTo(bannerRef.value, 
      { 
        opacity: 0, 
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service2-contact-banner',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  }
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>
