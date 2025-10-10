<template>
  <div class="service2-service">
    <!-- Service2 히어로 섹션 -->
    <section class="service2-hero">
      <div class="container">
        <div class="service2-hero-content">
          <h2>Service2 (Internet Service Provider)</h2>
          <p>
            FinGate의 Service2는 최신 기술과 안정적인 인프라를 바탕으로 
            고객에게 빠르고 안정적인 인터넷 연결을 제공합니다.
          </p>
          <div class="service2-features">
            <div class="feature-item">
              <Icon name="speed" />
              <span>고속 인터넷</span>
            </div>
            <div class="feature-item">
              <Icon name="shield" />
              <span>안정적인 연결</span>
            </div>
            <div class="feature-item">
              <Icon name="support" />
              <span>24/7 지원</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service2 서비스 상세 -->
    <section class="service2-details">
      <div class="container">
        <div class="flex-grid flex-grid--2">
          <div class="service2-info">
            <h3>서비스 특징</h3>
            <ul>
              <li>최대 1Gbps 초고속 인터넷</li>
              <li>99.9% 업타임 보장</li>
              <li>전국 광역 네트워크</li>
              <li>전문 기술 지원</li>
            </ul>
          </div>
          <div class="service2-visual">
            <div class="visual-placeholder">
              <Icon name="network" />
              <p>Service2 네트워크 다이어그램</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 문의 섹션 -->
    <section class="service2-contact">
      <div class="container">
        <h3>Service2 서비스 문의</h3>
        <p>Service2 서비스에 대한 자세한 정보나 상담을 원하시면 언제든 연락주세요.</p>
        <NuxtLink to="/contact" class="btn btn--primary btn--large">
          문의하기
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import Icon from '~/components/Icon.vue'

// SEO 메타데이터 (중앙화된 관리)
const seoData = useSEO('services/service2')
useHead(seoData)
</script>

<style scoped lang="scss">
// 외부 SCSS 파일 사용 (assets/scss/pages/_services.scss)
</style>
