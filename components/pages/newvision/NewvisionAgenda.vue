<template>
  <section ref="agendaSection" class="newvision-agenda" aria-labelledby="agenda-heading">
    <div class="container">
      <!-- 카드 컨테이너 (스크롤 고정 영역) -->
      <div class="agenda-cards-container" ref="agendaCardsContainer">
        <div class="section-header" ref="headerRef">
          <div class="section-subtitle">Agenda for Change</div>
          <h2 id="agenda-heading" class="section-title mt-24">보험 현장에는 아직 풀어야할 과제가 있습니다.</h2>
          <p class="section-desc mt-32">아직 해결되지 않은 문제는 새로운 혁신의 기회가 됩니다.</p>
        </div>
        
        <!-- 통합 영역: 텍스트 + 카드 -->
        <div class="agenda-unified-area" ref="agendaUnifiedArea">
          <!-- 중앙 고정 텍스트 -->
          <div class="center-text-wrapper" ref="centerTextWrapper">
            <div 
              v-for="(card, index) in agendaCards" 
              :key="`text-${index}`"
              class="card-center-text"
              :class="`card-text-${index + 1}`"
            >
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-desc mt-32" v-html="card.desc"></p>
            </div>
          </div>

          <!-- 이미지 카드 -->
          <div class="card-images-wrapper" ref="cardImagesWrapper">
            <div 
              v-for="(card, index) in agendaCards" 
              :key="`card-${index}`"
              class="agenda-card-pair"
              :class="`card-pair-${index + 1}`"
            >
              <div class="card-image">
                <img 
                  :src="card.imageLeft"
                  :alt="`${card.title} 왼쪽 이미지`"
                  loading="lazy"
                  width="332"
                  height="360"
                />
              </div>
              <div class="card-image">
                <img 
                  :src="card.imageRight"
                  :alt="`${card.title} 오른쪽 이미지`"
                  loading="lazy"
                  width="332"
                  height="360"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const agendaSection = ref<HTMLElement | null>(null)
const agendaCardsContainer = ref<HTMLElement | null>(null)
const agendaUnifiedArea = ref<HTMLElement | null>(null)
const centerTextWrapper = ref<HTMLElement | null>(null)
const cardImagesWrapper = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const activeCardIndex = ref(0)

const agendaCards = [
  {
    title: '복잡한 보장 분석',
    desc: '보험사별로 흩어진 정보를 확인하기 위해 설계사는 여러 전산을<br/>오가야 하므로, 한 번에 비교 · 분석이 어렵습니다.',
    imageLeft: '/images/newvision/newvision-card1.png',
    imageRight: '/images/newvision/newvision-card4.png',
  },
  {
    title: '불안정한 신규 설계사 온보딩',
    desc: '신규 설계사는 경험 부족으로 초기 실수가 잦아 안정적인<br/>고객 관리와 정착에 어려움을 겪습니다.',
    imageLeft: '/images/newvision/newvision-card2.png',
    imageRight: '/images/newvision/newvision-card5.png',
  },
  {
    title: '비효율적인 반복업무',
    desc: '각 보험사 사이트에서 계약 · 수수료 데이터를 다운받아<br/>다시 등록해야하는 비효율적인 업무가 여전히 존재합니다.',
    imageLeft: '/images/newvision/newvision-card3.png',
    imageRight: '/images/newvision/newvision-card6.png',
  }
]

let gsapContext: gsap.Context | null = null

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
              toggleActions: "play none none none"
            }
          }
        )
      }

      // 초기에는 숨김
      activeCardIndex.value = -1

      // 마스터 타임라인: 영역 내부 3분할로 텍스트와 카드 동시 표시/숨김 제어
      if (agendaUnifiedArea.value) {
        // 모든 텍스트와 카드 초기 상태
        gsap.set('.card-center-text, .agenda-card-pair', { opacity: 0 })

        // 되감기 방지용 진행도 상한
        let maxProgress = 0

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          duration: 1,
          scrollTrigger: {
            trigger: agendaUnifiedArea.value,
            start: 'top 80%',
            end: 'bottom 0%',
            scrub: true,
            onUpdate: (self) => {
              // 역스크롤 시 되감기 방지
              if (self.progress < maxProgress && self.animation) {
                self.animation.progress(maxProgress)
                return
              }
              const p = self.progress
              maxProgress = p
              // activeCardIndex는 더 이상 사용하지 않음 (gsap timeline으로 직접 제어)
            }
          }
        })

        // 첫 번째: 0~0.15 (15% 구간)
        tl.to('.card-text-1, .card-pair-1', { opacity: 1, duration: 0.2 }, 0)
          .to('.card-text-1, .card-pair-1', { opacity: 0, duration: 0.1 }, 0.40)
        // 두 번째: 0.15~0.30 (15% 구간)
          .to('.card-text-2, .card-pair-2', { opacity: 1, duration: 0.1 }, 0.40)
          .to('.card-text-2, .card-pair-2', { opacity: 0, duration: 0.1 }, 0.70)
        // 세 번째: 0.30부터 끝까지 (70% 구간)
          .to('.card-text-3, .card-pair-3', { opacity: 1, duration: 0.1 }, 0.70)
      }

      // 섹션 내부에서만 고정 요소 표시/숨김 (유출 방지) - opacity만 제어
      if (agendaUnifiedArea.value) {
        gsap.set([centerTextWrapper.value, cardImagesWrapper.value], { opacity: 0 })

        // sticky로 자동 해제되므로 간단하게 표시만 제어
        ScrollTrigger.create({
          trigger: headerRef.value,
          start: 'bottom 20%',
          toggleActions: 'play reverse none none',
          onEnter: () => {
            gsap.to([centerTextWrapper.value, cardImagesWrapper.value], { opacity: 1, overwrite: 'auto' })
            activeCardIndex.value = 0
          },
          onLeaveBack: () => {
            gsap.to([centerTextWrapper.value, cardImagesWrapper.value], { opacity: 0, duration: 0.3, overwrite: 'auto' })
            gsap.to('.card-center-text', { opacity: 0, duration: 0.3, overwrite: 'auto' })
            activeCardIndex.value = -1
          }
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

