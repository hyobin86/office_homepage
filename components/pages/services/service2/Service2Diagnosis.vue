<template>
  <section class="service2-diagnosis" aria-labelledby="diagnosis-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="diagnosis-heading" class="section-title">
          간편하고 신속한 보험 진단
        </h2>
        <p class="section-desc mt-32">
          빠른 분석과 명확한 결과로 고객에게는 신뢰를, 설계사에게는 전문성을 더합니다.
        </p>
      </div>

      <div class="diagnosis-content" ref="areaRef">
        <!-- 좌측 버튼 영역 -->
        <div class="diagnosis-buttons" >
          <div 
            v-for="(button, index) in diagnosisButtons" 
            :key="index"
            :class="['diagnosis-button', { active: activeButton === index }]"
            @click="setActiveButton(index)"
            @keydown.enter="setActiveButton(index)"
            @keydown.space.prevent="setActiveButton(index)"
            role="button"
            :tabindex="0"
          >
            <div>
              <div class="button-title">{{ button.title }}</div>
              <div v-if="activeButton === index" class="button-subtitle">
                {{ button.subtitle }}
              </div>
            </div>
          </div>
        </div>
        
        <div class="diagnosis-card">
          <img 
            :src="diagnosisButtons[activeButton].image"
            :alt="diagnosisButtons[activeButton].title"
            width="569"
            height="680"
            loading="lazy"
            class="card-image"
            :key="activeButton"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const diagnosisButtons = [
  {
    title: '초간단 보장진단',
    subtitle: '고객의 현재 보험 보장상태를 종합적으로 분석하고 평가할 수 있는 기능 제공',
    image: '/images/services/service2-card17.png'
  },
  {
    title: '한 눈에 보는 상품비교',
    subtitle: '여러 보험사의 상품을 동일한 보장 기준으로 한 화면에서 직관적으로 비교 분석',
    image: '/images/services/service2-card18.png'
  },
  {
    title: '고객별 맞춤제안',
    subtitle: '고객의 현재 보험과 제안된 보험 플랜을 한 눈에 비교 분석할 수 있는 대시보드',
    image: '/images/services/service2-card19.png'
  }
]

const activeButton = ref(0)
const headerRef = ref<HTMLElement>()
const areaRef = ref<HTMLElement>()

const setActiveButton = (index: number) => {
  activeButton.value = index
}

onMounted(() => {
  if (headerRef.value) {
    gsap.fromTo('.section-header', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service2-diagnosis',
          start: 'top 50%',
          end: 'bottom 10%',
          toggleActions: 'play none none none'
        }
      }
    )
  }
  
  if (areaRef.value) {
    gsap.fromTo(areaRef.value, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service2-diagnosis',
          start: 'top 50%',
          toggleActions: 'play none none none'
        }
      }
    )
  }
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>
