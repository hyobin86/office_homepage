<template>
  <section class="service2-manage" aria-labelledby="manage-heading">
    <div class="container">
      <div class="section-header" ref="headerRef">
        <h2 id="manage-heading" class="section-title">
          언제 어디서든 이어지는 고객 관리
        </h2>
        <p class="section-desc mt-32">
          한 번 등록한 고객정보는 언제든지 끊김없이 안전하게 이어집니다.
        </p>
      </div>
      
      <div class="manage-content">
        <!-- 첫 번째 영역: 고객 현황 관리 -->
        <div class="manage-area manage-area-1" ref="area1Ref">
          <div class="area-details-image">
            <img 
              src="/images/services/service2-card12.png" 
              alt="고객 현황 상세 정보"
              width="688"
              height="444"
              loading="lazy"
            />
            <div class="area-details-image-overlay" ref="img1Ref">
              <img 
                src="/images/services/service2-card13.png" 
                alt="예시1"
                width="608"
                height="99"
                loading="lazy"
                class="overlay-image1"
              />
            </div>
          </div>
          <h3 class="area-title mt-64">고객 현황 관리</h3>
          <p class="area-desc mt-24">
            설계사의 이직이나 소속 이동과 상관없이 고객의 보험 현황, 건강, 가족·재무 정보가<br/> 안정적으로 보관·관리되어 지속적인 고객 관리가 가능합니다.
          </p>
        </div>
        
        <!-- 두 번째 영역: 고객 일정 관리 -->
        <div class="manage-area manage-area-2" ref="area2Ref">
          <div class="area-details-image">
            <img 
              src="/images/services/service2-card14.png" 
              alt="고객 일정 관리 캘린더"
              width="688"
              height="444"
              loading="lazy"
            />
            <div class="area-details-image-overlay" ref="img2Ref">
              <img 
                src="/images/services/service2-card15.png" 
                alt="예시2"
                width="384"
                height="37"
                loading="lazy"  
                class="overlay-image2"
              />
              <img 
                src="/images/services/service2-card16.png" 
                alt="예시3"
                width="390"
                height="37"
                loading="lazy"
                class="overlay-image3"
              />
            </div>
          </div>
          <h3 class="area-title mt-64">고객 일정 관리</h3>
          <p class="area-desc mt-24">
            고객 미팅, 보험금 청구 등 주요 일정과 이력 역시 함께 관리되어 고객과의 관계를 끊김<br/> 없이 이어갈 수 있습니다.
          </p>
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

// Refs
const headerRef = ref<HTMLElement>()
const area1Ref = ref<HTMLElement>()
const area2Ref = ref<HTMLElement>()
const img1Ref = ref<HTMLElement>()
const img2Ref = ref<HTMLElement>()

onMounted(() => {
  // 1. 타이틀 애니메이션
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
          trigger: '.service2-manage',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  }
  
  // 2. 첫 번째 영역 등장 (아래에서 위로)
  if (area1Ref.value) {
    gsap.fromTo(area1Ref.value, 
      { 
        opacity: 0, 
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service2-manage',
          start: 'top 60%',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  }
  
  // 3. 첫 번째 영역 이미지 등장 (아래에서 위로)
  if (img1Ref.value) {
    gsap.fromTo(img1Ref.value, 
      { 
        opacity: 0, 
        y: 70,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 1.0, // area1Ref 등장 완료 후
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service2-manage',
          start: 'top 60%',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  }
  
  // 4. 두 번째 영역 등장 (아래에서 위로)
  if (area2Ref.value) {
    gsap.fromTo(area2Ref.value, 
      { 
        opacity: 0, 
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: 1.8, // img1Ref 등장 완료 후
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service2-manage',
          start: 'top 60%',
          toggleActions: 'play reverse play reverse'
        }
      }
    )
  }
  
  // 5. 두 번째 영역 이미지 등장 (아래에서 위로)
  if (img2Ref.value) {
    gsap.fromTo(img2Ref.value, 
      { 
        opacity: 0, 
        y: 70,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 2.6, // area2Ref 등장 완료 후
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service2-manage',
          start: 'top 60%',
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
