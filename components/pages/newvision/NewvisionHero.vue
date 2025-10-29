<template>
  <section class="newvision-hero" aria-label="뉴비전 히어로">
    <!-- Video 배경 -->
    <div class="hero-video-container">
      <video 
        class="hero-video" 
        autoplay 
        muted 
        loop 
        playsinline
        preload="none"
        aria-hidden="true"
      >
        <source src="/videos/sub.mp4" type="video/mp4">
        <!-- Video가 지원되지 않는 경우 대체 텍스트 -->
        <div class="video-fallback">
          <p>Video를 지원하지 않는 브라우저입니다.</p>
        </div>
      </video>
    </div>
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="hero-header fade-in">
        <h1 class="hero-title">
          보험 IT, AI로 새롭게 정의하다
        </h1>
        <p class="hero-desc mt-48">
          핀게이트는 보험의 복잡한 업무를 AI와 IT 기술로 혁신하기 위해<br/>
          오늘도 미래를 준비하고 있습니다.
        </p>
      </div>
      
    </div>

    <!-- 스크롤 다운 -->
    <ScrollDown />
  </section>
</template>

<script setup lang="ts">
import ScrollDown from '~/components/common/ScrollDown.vue'
</script>

