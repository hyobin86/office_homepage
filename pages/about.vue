<template>
  <div class="about">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">회사소개</h1>
    </div>

    <!-- 히어로 섹션 -->
    <section class="about-hero">
      <div class="container">
        <div class="about-hero-content">
          <h2>FinGate를 소개합니다</h2>
          <p>
            FinGate는 2020년 설립된 혁신적인 금융 기술 기업입니다. 
            우리는 최첨단 기술과 풍부한 금융 경험을 바탕으로 
            고객의 비즈니스 성장을 지원하는 다양한 솔루션을 제공합니다.
          </p>
          <p>
            고객 중심의 서비스와 지속적인 혁신을 통해 
            금융 산업의 새로운 패러다임을 제시하고 있습니다.
          </p>
        </div>
        <div class="about-hero-image">
          <img src="/images/blog-1.jpg" alt="FinGate 회사 소개" />
        </div>
      </div>
    </section>

    <!-- 핵심 가치 섹션 -->
    <section class="about-values">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">핵심 가치</h2>
          <p class="section-subtitle">
            FinGate가 추구하는 핵심 가치와 원칙입니다.
          </p>
        </div>
        
        <div class="flex-grid flex-grid--3">
          <div class="value-item">
            <div class="value-item-icon">💡</div>
            <h3 class="value-item-title">혁신</h3>
            <p class="value-item-description">
              지속적인 기술 혁신을 통해 금융 서비스의 새로운 가능성을 제시합니다.
            </p>
          </div>
          
          <div class="value-item">
            <div class="value-item-icon">🤝</div>
            <h3 class="value-item-title">신뢰</h3>
            <p class="value-item-description">
              투명하고 정직한 서비스로 고객과의 신뢰 관계를 구축합니다.
            </p>
          </div>
          
          <div class="value-item">
            <div class="value-item-icon">🎯</div>
            <h3 class="value-item-title">전문성</h3>
            <p class="value-item-description">
              풍부한 경험과 전문 지식을 바탕으로 최고의 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 팀 섹션 -->
    <section class="about-team">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">리더십 팀</h2>
          <p class="section-subtitle">
            FinGate를 이끌어가는 전문가들입니다.
          </p>
        </div>
        
        <div class="flex-grid flex-grid--3">
          <div class="team-member">
            <div class="team-member-photo">
              <img src="/images/blog-2.jpg" alt="CEO 김대표" />
            </div>
            <h3 class="team-member-name">김대표</h3>
            <p class="team-member-position">CEO & Founder</p>
            <p class="team-member-bio">
              15년 금융 업계 경험을 바탕으로 FinGate를 설립하고 이끌어가고 있습니다.
            </p>
          </div>
          
          <div class="team-member">
            <div class="team-member-photo">
              <img src="/images/blog-3.jpg" alt="CTO 이기술" />
            </div>
            <h3 class="team-member-name">이기술</h3>
            <p class="team-member-position">CTO</p>
            <p class="team-member-bio">
              핀테크 기술 전문가로 혁신적인 금융 솔루션 개발을 주도하고 있습니다.
            </p>
          </div>
          
          <div class="team-member">
            <div class="team-member-photo">
              <img src="/images/blog-4.jpg" alt="CFO 박재무" />
            </div>
            <h3 class="team-member-name">박재무</h3>
            <p class="team-member-position">CFO</p>
            <p class="team-member-bio">
              재무 관리 전문가로 안정적인 성장과 투자 전략을 수립하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO 메타데이터
useHead({
  title: '회사소개 - FinGate',
  meta: [
    { name: 'description', content: 'FinGate는 혁신적인 금융 기술 기업으로, 고객의 성공을 지원하는 다양한 솔루션을 제공합니다.' }
  ]
})
</script>
