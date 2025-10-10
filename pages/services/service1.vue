<template>
  <div class="service1-service">
    <!-- Service1 히어로 섹션 -->
    <section class="service1-hero">
      <div class="container">
        <div class="service1-hero-content">
          <h2>Service1 Platform</h2>
          <p>
            Service1는 최신 기술을 활용한 혁신적인 디지털 플랫폼으로, 
            기업의 디지털 전환을 지원하는 종합 솔루션을 제공합니다.
          </p>
          <div class="service1-features">
            <div class="feature-item">
              <Icon name="cloud" />
              <span>클라우드 솔루션</span>
            </div>
            <div class="feature-item">
              <Icon name="analytics" />
              <span>데이터 분석</span>
            </div>
            <div class="feature-item">
              <Icon name="security" />
              <span>보안 관리</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service1 서비스 상세 -->
    <section class="service1-details">
      <div class="container">
        <div class="flex-grid flex-grid--2">
          <div class="service1-visual">
            <div class="visual-placeholder">
              <Icon name="platform" />
              <p>Service1 플랫폼 아키텍처</p>
            </div>
          </div>
          <div class="service1-info">
            <h3>플랫폼 특징</h3>
            <ul>
              <li>확장 가능한 클라우드 인프라</li>
              <li>실시간 데이터 분석 및 시각화</li>
              <li>엔터프라이즈급 보안</li>
              <li>API 기반 통합 솔루션</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Service1 서비스 카드 -->
    <section class="service1-services">
      <div class="container">
        <h3>Service1 서비스 영역</h3>
        <div class="flex-grid flex-grid--3">
          <div class="service-card">
            <div class="service-icon">
              <Icon name="cloud-computing" />
            </div>
            <h4>클라우드 컴퓨팅</h4>
            <p>확장 가능하고 안정적인 클라우드 인프라 서비스</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <Icon name="data-analytics" />
            </div>
            <h4>데이터 분석</h4>
            <p>빅데이터 분석 및 비즈니스 인텔리전스</p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <Icon name="cyber-security" />
            </div>
            <h4>사이버 보안</h4>
            <p>종합적인 보안 솔루션 및 위협 관리</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 문의 섹션 -->
    <section class="service1-contact">
      <div class="container">
        <h3>Service1 서비스 문의</h3>
        <p>Service1 플랫폼에 대한 자세한 정보나 상담을 원하시면 언제든 연락주세요.</p>
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
const seoData = useSEO('services/service1')
useHead(seoData)
</script>

<style scoped lang="scss">
// 외부 SCSS 파일 사용 (assets/scss/pages/_services.scss)
</style>
