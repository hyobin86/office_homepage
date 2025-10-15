<template>
  <section class="company-team">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">리더십 팀</h2>
        <p class="section-subtitle">FinGate를 이끌어가는 전문가들입니다.</p>
      </div>
      
      <div class="flex-grid flex-grid--3">
        <div class="team-member">
          <div class="team-member-photo">
            <NuxtImg 
              src="/images/blog-2.jpg" 
              alt="CEO 김대표"
              format="webp"
              loading="lazy"
              :width="400"
              :height="400"
              quality="85"
            />
          </div>
          <h3 class="team-member-name">김대표</h3>
          <p class="team-member-position">CEO & Founder</p>
          <p class="team-member-bio">
            15년 금융 업계 경험을 바탕으로 FinGate를 설립하고 이끌어가고 있습니다.
          </p>
        </div>
        
        <div class="team-member">
          <div class="team-member-photo">
            <NuxtImg 
              src="/images/blog-3.jpg" 
              alt="CTO 이기술"
              format="webp"
              loading="lazy"
              :width="400"
              :height="400"
              quality="85"
            />
          </div>
          <h3 class="team-member-name">이기술</h3>
          <p class="team-member-position">CTO</p>
          <p class="team-member-bio">
            핀테크 기술 전문가로 혁신적인 금융 솔루션 개발을 주도하고 있습니다.
          </p>
        </div>
        
        <div class="team-member">
          <div class="team-member-photo">
            <NuxtImg 
              src="/images/blog-4.jpg" 
              alt="CFO 박재무"
              format="webp"
              loading="lazy"
              :width="400"
              :height="400"
              quality="85"
            />
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
</template>

<script setup lang="ts">
</script>
