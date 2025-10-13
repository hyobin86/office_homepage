<template>
  <section class="main-company">
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="hero-header ">
        <div class="hero-subtitle fade-in-delayed">COMPANY</div>
        <div class="hero-title mt-20 fade-in">보험을 가장 잘 아는 인슈어테크 기업</div>
        <div class="hero-desc mt-40 fade-out-delayed">실무에서 검증된 IT 경험과 혁신 기술로 고객의 비즈니스 가치를 높입니다.</div>
      </div>
      
      <!-- 회사 카드들 -->
      <div class="company-cards cards-spread-out">
        <div 
          v-for="(card, index) in companyCards" 
          :key="index"
          class="company-card"
          :class="`company-card-${index + 1}`"
          @click="navigateToCard(card.link)"
        >
          <div class="card-image" :style="{ backgroundImage: `url(${card.image})` }"></div>
          <div class="card-title" v-html="card.title"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 회사 카드 데이터
const companyCards = ref([
  {
    title: 'Cloud · 보안성 강화',
    image: '/images/main/main-card1.png',
    link: '/services/service2'
  },
  {
    title: 'MSA',
    image: '/images/main/main-card2.png',
    link: '/services/service2'
  },
  {
    title: '보험 인하우스 <br/>IT 전문가',
    image: '/images/main/main-card3.png',
    link: '/services/service2'
  },
  {
    title: '통합시스템',
    image: '/images/main/main-card4.png',
    link: '/services/service2'
  },
  {
    title: 'IT 인프라',
    image: '/images/main/main-card5.png',
    link: '/services/service2'
  }
])

// 카드 클릭 시 페이지 이동
const navigateToCard = (link) => {
  navigateTo(link)
}
</script>