<template>
  <section ref="agendaSection" class="newvision-agenda" aria-labelledby="agenda-heading">
    <div class="container">
      <!-- 카드 컨테이너 (스크롤 고정 영역) -->
      <div class="agenda-cards-container">
        <div class="section-header fade-in">
          <div class="section-subtitle">Agenda for Change</div>
          <h2 id="agenda-heading" class="section-title mt-24">보험 현장에는 아직 풀어야할 과제가 있습니다.</h2>
          <p class="section-desc mt-32">아직 해결되지 않은 문제는 새로운 혁신의 기회가 됩니다.</p>
        </div>
        <!-- 중앙 고정 텍스트 영역 -->
        <div class="center-text-wrapper">
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

        <!-- 이미지 카드 영역 -->
        <div class="agenda-cards mt-120">
          <article class="agenda-card-pair">
            <template v-for="(card, index) in agendaCards" :key="index">
              <!-- 왼쪽 이미지 -->
              <div 
                class="card-image" 
                :class="`card-image-${index * 2 + 1}`"
              >
                <NuxtImg 
                  :src="card.imageLeft"
                  :alt="`${card.title} 왼쪽 이미지`"
                  loading="lazy"
                  :width="332"
                  :height="360"
                  quality="85"
                />
              </div>
              
              <!-- 오른쪽 이미지 -->
              <div 
                class="card-image" 
                :class="`card-image-${index * 2 + 2}`"
              >
                <NuxtImg 
                  :src="card.imageRight"
                  :alt="`${card.title} 오른쪽 이미지`"
                  loading="lazy"
                  :width="332"
                  :height="360"
                  quality="85"
                />
              </div>
            </template>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const agendaSection = ref<HTMLElement | null>(null)

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
  if (process.client) {
    gsapContext = gsap.context(() => {
      const cardsContainer = document.querySelector('.agenda-cards')
      const totalImages = agendaCards.length * 2 // 6개
      
      // 각 이미지별 애니메이션 (6개)
      // 이미지 높이 360px + 간격 160px = 520px
      const imageHeight = 360
      const gap = 160
      const pairGap = imageHeight + gap // 520px
      
      for (let i = 1; i <= totalImages; i++) {
        const image = document.querySelector(`.card-image-${i}`)
        if (!image) continue

        // 쌍 인덱스: 1,2 → 0 / 3,4 → 1 / 5,6 → 2
        const pairIndex = Math.floor((i - 1) / 2)

        // 초기 위치 설정 (쌍으로 같은 위치, 520px 간격)
        gsap.set(image, { y: `${pairIndex * pairGap}px` })

        // 각 쌍별로 순차적으로 mask reveal - 첫 번째 pair는 천천히
        const imgElement = image.querySelector('img')
        if (imgElement) {
          if (pairIndex === 0) {
            // 첫 번째 pair: top 도달 후 delay로 천천히 시작
            gsap.fromTo(imgElement, 
              { clipPath: 'inset(0 0 100% 0)' },
              {
                clipPath: 'inset(0 0 0% 0)',
                delay: 1,  // top 도달 후 0.5초 delay
                scrollTrigger: {
                  trigger: cardsContainer,
                  start: "top 60%",  // top에 도달하면
                  end: "top 30%",    
                  scrub: false,      // scrub 비활성화 (delay 사용)
                }
              }
            )
          } else {
            // 나머지 pair들: 기존 속도
            gsap.fromTo(imgElement, 
              { clipPath: 'inset(0 0 100% 0)' },
              {
                clipPath: 'inset(0 0 0% 0)',
                scrollTrigger: {
                  trigger: cardsContainer,
                  start: `top+=${pairIndex * pairGap - 800}px top`,
                  end: `top+=${pairIndex * pairGap - 400}px top`,
                  scrub: 1,
                }
              }
            )
          }
        }
      }

      // 텍스트 애니메이션 (3개) - 순차적으로 등장하고 사라짐
      agendaCards.forEach((_, index) => {
        const centerText = document.querySelector(`.card-text-${index + 1}`)
        if (!centerText) return

        const pairIndex = index // 0, 1, 2

        // 텍스트 등장
        if (index === 0) {
          // 첫 번째 텍스트: 아래에서 위로 등장
          gsap.fromTo(centerText,
            { 
              opacity: 0,
              y: 50  // 아래에서 시작
            },
            {
              opacity: 1,
              y: 0,  // 위로 이동
              delay: 1.3,  // top 도달 후 1.3초 delay
              duration: 1.1,  // 1.1초 동안 애니메이션
              ease: "power2.out",  // 부드러운 ease
              scrollTrigger: {
                trigger: cardsContainer,
                start: "top 60%",  // top에 도달하면
                end: "top 30%",    
                scrub: false,      // scrub 비활성화 (delay 사용)
              }
            }
          )
        } else {
          // 나머지 텍스트들: 순차적으로 등장
          gsap.fromTo(centerText,
            { opacity: 0 },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: cardsContainer,
                start: `top+=${pairIndex * pairGap - 400}px top`, // 더 늦게 등장 (200px 늦춤)
                end: `top+=${pairIndex * pairGap - 200}px top`,
                scrub: 1,
              }
            }
          )
        }
        gsap.to(centerText,
            {
              opacity: 0,
              scrollTrigger: {
                trigger: cardsContainer,
                start: `top+=${(pairIndex + 1) * pairGap - 450}px top`, // 더 늦게 사라지기 시작 (200px 늦춤)
                end: `top+=${(pairIndex + 1) * pairGap - 350}px top`,   // 더 늦게 완전히 사라짐 (200px 늦춤)
                scrub: 1,
              }
            }
          )
      })
    })
  }
})

onUnmounted(() => {
  if (gsapContext) {
    gsapContext.revert()
  }
})
</script>

