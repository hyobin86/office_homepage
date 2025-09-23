<template>
  <div class="services">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">서비스</h1>
    </div>

    <!-- 히어로 섹션 -->
    <section class="services-hero">
      <div class="container">
        <h2>전문적인 금융 솔루션</h2>
        <p>
          FinGate는 고객의 다양한 요구사항을 충족하는 
          맞춤형 금융 솔루션을 제공합니다.
        </p>
      </div>
    </section>

    <!-- 서비스 목록 -->
    <section class="services-list">
      <div class="container">
        <div class="service-item">
          <div class="service-item-header">
            <h3 class="service-item-title">금융 솔루션 개발</h3>
            <span class="service-item-price">맞춤형 견적</span>
          </div>
          <p class="service-item-description">
            고객의 비즈니스 모델에 최적화된 금융 솔루션을 개발합니다. 
            최신 기술과 보안 표준을 적용하여 안정적이고 확장 가능한 시스템을 구축합니다.
          </p>
          <ul class="service-item-features">
            <li>맞춤형 금융 플랫폼 개발</li>
            <li>결제 시스템 통합</li>
            <li>보안 및 규정 준수</li>
            <li>24/7 기술 지원</li>
          </ul>
          <NuxtLink to="/contact" class="btn btn--primary">
            상담 신청
          </NuxtLink>
        </div>

        <div class="service-item">
          <div class="service-item-header">
            <h3 class="service-item-title">투자 관리 서비스</h3>
            <span class="service-item-price">월 100만원부터</span>
          </div>
          <p class="service-item-description">
            전문적인 투자 전략과 리스크 관리를 통해 
            안정적이고 지속 가능한 수익을 창출합니다.
          </p>
          <ul class="service-item-features">
            <li>포트폴리오 분석 및 최적화</li>
            <li>리스크 관리 시스템</li>
            <li>실시간 투자 모니터링</li>
            <li>정기 투자 리포트</li>
          </ul>
          <NuxtLink to="/contact" class="btn btn--primary">
            상담 신청
          </NuxtLink>
        </div>

        <div class="service-item">
          <div class="service-item-header">
            <h3 class="service-item-title">금융 컨설팅</h3>
            <span class="service-item-price">시간당 20만원</span>
          </div>
          <p class="service-item-description">
            풍부한 경험과 전문 지식을 바탕으로 
            최적의 금융 전략과 솔루션을 제안합니다.
          </p>
          <ul class="service-item-features">
            <li>비즈니스 모델 분석</li>
            <li>금융 전략 수립</li>
            <li>규정 준수 가이드</li>
            <li>성장 전략 컨설팅</li>
          </ul>
          <NuxtLink to="/contact" class="btn btn--primary">
            상담 신청
          </NuxtLink>
        </div>

        <div class="service-item">
          <div class="service-item-header">
            <h3 class="service-item-title">기술 지원 서비스</h3>
            <span class="service-item-price">월 50만원부터</span>
          </div>
          <p class="service-item-description">
            금융 시스템의 안정적인 운영을 위한 
            포괄적인 기술 지원 서비스를 제공합니다.
          </p>
          <ul class="service-item-features">
            <li>시스템 모니터링</li>
            <li>성능 최적화</li>
            <li>보안 업데이트</li>
            <li>긴급 기술 지원</li>
          </ul>
          <NuxtLink to="/contact" class="btn btn--primary">
            상담 신청
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA 섹션 -->
    <section class="home-cta">
      <div class="container">
        <h2>맞춤형 솔루션이 필요하신가요?</h2>
        <p>고객의 특별한 요구사항에 맞는 맞춤형 솔루션을 제공합니다.</p>
        <NuxtLink to="/contact" class="btn btn--primary btn--large">
          무료 상담 신청
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO 메타데이터
useHead({
  title: '서비스 - FinGate',
  meta: [
    { name: 'description', content: 'FinGate의 전문적인 금융 솔루션 서비스를 확인하세요. 맞춤형 개발, 투자 관리, 컨설팅, 기술 지원을 제공합니다.' }
  ]
})
</script>
