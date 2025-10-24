<template>
  <section class="company-business" aria-labelledby="business-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <div class="section-subtitle">Comprehensive Insurance IT Business</div>
        <h2 class="section-title mt-24">
          SI와 솔루션까지, 보험 IT의 모든 것을 제공합니다.
        </h2>
      </div>
      
      <!-- 버튼 영역 -->
      <div class="business-buttons" ref="buttonsRef">
        <button 
          v-for="(button, index) in businessButtons" 
          :key="index"
          :class="['button','button-small', { active: activeButton === index }]"
          @click="setActiveButton(index)"
        >
          {{ button.label }}
        </button>
      </div>
      
      <!-- 콘텐츠 영역 -->
      <div class="business-content" ref="contentRef">
        <div class="content-wrapper" :key="`content-${activeButton}`">
          <div class="content-background">
            <img 
              :src="currentContent.backgroundImage"
              :alt="currentContent.title"
              loading="lazy"
              width="1400"
              height="648"
            />
          </div>
          <div class="content-overlay">
            <h3 class="content-title">{{ currentContent.title }}</h3>
            <div class="content-cards">
              <div 
                v-for="(card, index) in currentContent.cards" 
                :key="`card-${activeButton}-${index}`"
                class="business-card"
              >
                <div class="card-icon">
                  <img 
                    :src="card.icon"
                    :alt="card.title"
                    loading="lazy"
                    width="48"
                    height="48"
                  />
                </div>
                <h4 class="card-title" v-html="card.title"></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="business-container" ref="containerRef">
      <div class="business-image">
        <img 
          src="/images/company/company-card8.png"
          alt="business Visual"
          loading="lazy"
          width="1680"
          height="320"
        />
        <div class="business-visual">
          <div class="business-visual-content">
            <h2 id="business-heading" class="business-title">
              핀게이트만의 강점으로 완성된 보험 IT 솔루션을 소개합니다.
            </h2>
            <p class="business-description mt-24">차별화된 솔루션으로 보험 비즈니스 성공을 함께 이끕니다.</p>
          </div>
          <NuxtLink to="/services/service1" class="button" aria-label="서비스 페이지로 이동">
            MORE VIEW
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

let gsapContext: gsap.Context | null = null
const activeButton = ref(0)

// refs
const headerRef = ref<HTMLElement | null>(null)
const buttonsRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)

const businessButtons = [
  { label: '시스템 통합·관리' },
  { label: '보험 솔루션 개발' },
  { label: '솔루션 유통' },
  { label: 'IT 아웃소싱 및 컨설팅' }
]

const businessContents = [
  {
    title: '시스템 통합 · 관리',
    backgroundImage: '/images/company/company-card4.png',
    cards: [
      {
        icon: '/images/company/company-icon5.svg',
        title: '보험금융 시스템<br>개발 및 통합',
      },
      {
        icon: '/images/company/company-icon6.svg',
        title: '정보자원 통합<br>관리 및 운영',
      },
      {
        icon: '/images/company/company-icon7.svg',
        title: '시스템 위탁운영 및<br>유지보수',
      },
      {
        icon: '/images/company/company-icon8.svg',
        title: '모바일 / 하이브리드<br>앱 플랫폼',
      },
      {
        icon: '/images/company/company-icon9.svg',
        title: '온라인<br>플랫폼 개발',
      },
      {
        icon: '/images/company/company-icon10.svg',
        title: '기술 지원',
      }
    ]
  },
  {
    title: '보험 솔루션 개발',
    backgroundImage: '/images/company/company-card5.png',
    cards: [
      {
        icon: '/images/company/company-icon11.svg',
        title: 'GA 영업 및<br>정산관리',
      },
      {
        icon: '/images/company/company-icon12.svg',
        title: 'GA 경영 및<br>리스트 관리',
      },
      {
        icon: '/images/company/company-icon13.svg',
        title: 'DB 마케팅',
      },
      {
        icon: '/images/company/company-icon14.svg',
        title: '설계사 상담지원',
      },
      {
        icon: '/images/company/company-icon15.svg',
        title: 'TM Call 관리',
      },
      {
        icon: '/images/company/company-icon16.svg',
        title: 'Scraping 및 RPA',
      }
    ]
  },
  {
    title: '솔루션 유통',
    backgroundImage: '/images/company/company-card6.png',
    cards: [
      {
        icon: '/images/company/company-icon17.svg',
        title: '자사 솔루션<br>SaaS 유통',
      },
      {
        icon: '/images/company/company-icon18.svg',
        title: '자사 솔루션<br>ASP 구축',
      },
      {
        icon: '/images/company/company-icon19.svg',
        title: '기업 및 보안<br>솔루션 유통',
      },
      {
        icon: '/images/company/company-icon20.svg',
        title: '설계사 플랫폼<br>서비스 공급',
      }
    ]
  },
  {
    title: 'IT 아웃소싱 및 컨설팅',
    backgroundImage: '/images/company/company-card7.png',
    cards: [
      {
        icon: '/images/company/company-icon21.svg',
        title: 'IT 인력 파견 공급',
      },
      {
        icon: '/images/company/company-icon22.svg',
        title: '정보전략계획(ISP)',
      },
      {
        icon: '/images/company/company-icon23.svg',
        title: '시스템 도입 지원<br>인프라도입 컨설팅',
      },
      {
        icon: '/images/company/company-icon24.svg',
        title: 'ISTM 도입 컨설팅',
      },
      {
        icon: '/images/company/company-icon25.svg',
        title: '시스템 유지보수 최적화',
      }
    ]
  }
]

const currentContent = computed(() => businessContents[activeButton.value])

const setActiveButton = (index: number) => {
  if (activeButton.value === index) return
  
  // 즉시 콘텐츠 변경 (key 변경으로 자동 리렌더링)
  activeButton.value = index
}

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
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.value,
              start: "top 60%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      }
      
      // 버튼 애니메이션
      if (buttonsRef.value) {
        gsap.fromTo(buttonsRef.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: buttonsRef.value,
              start: "top 60%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      }
      
      // 콘텐츠 애니메이션
      if (contentRef.value) {
        gsap.fromTo(contentRef.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.value,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      }
      
      // 컨테이너 애니메이션
      if (containerRef.value) {
        gsap.fromTo(containerRef.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.value,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
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