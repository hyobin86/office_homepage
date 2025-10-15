<template>
  <section class="company-hero">
    <div class="container">
      <div class="company-hero-content">
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
      <div class="company-hero-image">
        <NuxtImg 
          src="/images/blog-1.jpg" 
          alt="FinGate 회사 소개"
          format="webp"
          loading="lazy"
          :width="800"
          :height="600"
          quality="85"
          sizes="sm:400px md:600px lg:800px"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
