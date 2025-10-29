<template>
  <section class="service2-recommend" aria-labelledby="recommend-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="recommend-heading" class="section-title text-black">
          좋은 보험 하나만 추천해 주세요.
        </h2>
        <p class="section-desc text-gray mt-32">
          간단해 보이는 고객 요청, 설계사에게는 가장 어려운 과제입니다.
        </p>
      </div>
      
      <div class="speech-bubbles mt-80">
        <div class="bubble-content"
          v-for="(bubble, index) in bubblesData" 
          :key="index"
          :data-index="index"
          :ref="(el) => setBubbleRef(el, index)"
        >
          <p class="bubble-text" v-html="bubble.text"></p>
          <div class="bubble-icon">
            <img 
              :src="bubble.icon"
              :alt="`아이콘 ${index + 1}`"
              loading="lazy"
              width="80"
              height="80"
            />
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

interface BubbleData {
  text: string
  icon: string
}

const bubblesData: BubbleData[] = [
  {
    text: '“고객님이 가입하신 보험 보장이 겹치거나 빠진 부분이 없는지, 또 보험료가 어떻게 변동되는지 하나 하나 꼼꼼히 확인해야합니다.”',
    icon: '/images/services/service2-icon1.png'
  },
  {
    text: '“좋은 보험을 비교해보고 찾으려면 보험사 전산에 일일이 접속해야 하다보니 고객님께 빠르게 비교 결과를 보여드리기 어렵습니다.”',
    icon: '/images/services/service2-icon2.png'
  },
  {
    text: '“보험 상품이 계속 새로 출시되고 특약이 워낙 복잡하고 조건이 자주 바뀌다보니 최신 상품 정보를 빠르게 파악해야하는게 큰 부담입니다.”',
    icon: '/images/services/service2-icon3.png'
  },
  {
    text: '“고객님이 이해하실 때까지 어려운 보험 용어를 쉽게 풀어서 반복 설명해드려야 하는 이 과정이 단순하지 않아요.”',
    icon: '/images/services/service2-icon4.png'
  }
]

// Refs
const headerRef = ref<HTMLElement>()
const bubbleRefs = ref<(HTMLElement | ComponentPublicInstance)[]>([])

const setBubbleRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) {
    bubbleRefs.value[index] = el as HTMLElement | ComponentPublicInstance
  }
}

onMounted(() => {
  // 타이틀 애니메이션
  if (headerRef.value) {
    gsap.fromTo(headerRef.value, 
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
          trigger: '.service2-recommend',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    )
  }
  
  // 말풍선들 애니메이션
  bubbleRefs.value.forEach((bubbleRef, index) => {
    const element = bubbleRef as HTMLElement
    if (element) {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.8, // 각 말풍선마다 0.2초씩 딜레이
          ease: 'back.out(1.8)',
          scrollTrigger: {
            trigger: '.speech-bubbles',
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      )
    }
  })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>
