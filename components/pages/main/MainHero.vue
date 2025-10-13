<template>
  <section class="main-hero">
    <!-- Video 배경 -->
    <div class="hero-video-container">
      <video 
        class="hero-video" 
        autoplay 
        muted 
        loop 
        playsinline
        preload="metadata"
        aria-label="영상"
      >
        <source src="/videos/main.mp4" type="video/mp4">
        <!-- Video가 지원되지 않는 경우 대체 텍스트 -->
        <div class="video-fallback">
          <p>Video를 지원하지 않는 브라우저입니다.</p>
        </div>
      </video>
    </div>
    <div class="hero-content">
      <div class="container">
        <div class="hero-title mask-reveal-up">
          Gateway to Financial<br/>
          IT Innovation
        </div>
        <div class="hero-subtitle mt-78 mask-reveal-up">
          보험의 미래를 함께 여는 디지털 IT 파트너
        </div>
      </div>
    </div>
    
    <!-- 스크롤 다운 -->
    <div class="scroll-down-container">
      <div class="scroll-down">
        <div class="scroll-dot scroll-dot-bounce"></div>
      </div>
      <div class="scroll-down-text mt-16">SCROLL DOWN</div>
    </div>
  </section>
</template>
