<template>
  <section class="company-contact" aria-labelledby="contact-heading">
    <div class="container fade-in">
      <!-- 왼쪽 연락처 정보 -->
      <div class="contact-info">
        <div class="section-header mt-60">
          <div class="section-subtitle">Contact Us</div>
          <h2 id="contact-heading" class="section-title mt-24">
            핀게이트와 함께 혁신을 경험할<br/>
            소중한 인연을 기다립니다.
          </h2>
        </div>
        <div class="contact-list mt-120">
          <div class="contact-item-wrapper">
            <div class="contact-item">
              <div class="contact-label">TEL</div>
              <div class="contact-value">{{ SITE_CONFIG.office.phone }}</div>
            </div>
            <div class="contact-item">
              <div class="contact-label">E-mail</div>
              <div class="contact-value">{{ SITE_CONFIG.office.email }}</div>
            </div>
          </div>
          <div class="contact-item mt-40">
            <div class="contact-label">Address.</div>
            <div class="contact-value">{{ SITE_CONFIG.office.address }}</div>
          </div>
        </div>
      </div>
      <!-- 오른쪽 지도 영역 -->
      <div class="contact-map">
        <NuxtImg 
          src="/images/company/company-map.png" 
          alt="핀게이트 위치 지도 - 서울 마포구 월드컵북로2길 19 7층 (동교동, W위더스빌딩)"
          loading="lazy"
          format="webp"
          width="640"
          height="608"
          quality="80"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SITE_CONFIG } from '~/config/site'
</script>