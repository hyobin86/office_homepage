<template>
  <section class="company-contact" aria-labelledby="contact-heading">
    <!-- 상단 히어로 섹션 -->
    <div class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <div class="section-subtitle">NEXT STEP with AI</div>
          <h2 id="contact-heading" class="section-title">
            AI와 함께 보험 산업의 새로운 IT 혁신을 만들어갑니다.
          </h2>
          <NuxtLink to="/contact" class="button button--outline" aria-label="연락 페이지로 이동">
            MORE VIEW
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 하단 연락처 정보 섹션 -->
    <div class="contact-info-section ">
      <div class="container">
        <div class="contact-layout fade-in">
          <!-- 왼쪽 연락처 정보 -->
          <div class="contact-details">
            <div class="section-subtitle">Contact Us</div>
            <h3 class="contact-title">
              핀게이트와 함께 혁신을 경험할 소중한 인연을 기다립니다.
            </h3>
            <div class="contact-list">
              <div class="contact-item">
                <span class="contact-label">TEL</span>
                <span class="contact-value">{{ SITE_CONFIG.office.phone }}</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">E-mail</span>
                <span class="contact-value">{{ SITE_CONFIG.office.email }}</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">Address.</span>
                <span class="contact-value">{{ SITE_CONFIG.office.address }}</span>
              </div>
            </div>
          </div>

          <!-- 오른쪽 지도 -->
          <div class="contact-map">
            <div class="map-container">
              <NuxtImg 
                src="/images/company/comapny-map.png"
                alt="핀게이트 사무실 위치 지도"
                loading="lazy"
                format="webp"
                width="640"
                height="608"
                quality="85"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SITE_CONFIG } from '~/config/site'
</script>