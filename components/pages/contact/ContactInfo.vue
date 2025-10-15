<template>
  <div class="contact-info">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title text-center">
          고객의 비즈니스 고민을<br/>
          핀게이트가 함께 해결하겠습니다.
        </h2>
      </div>
      <div class="d-flex gap-24 mt-120 fade-in">
        <div class="info-item map-img" role="img" aria-label="핀게이트 위치 지도"></div>
        <div class="info-item">
          <h3 class="info-title">
            오시는 길
          </h3>
          <div class="info-item-title mt-48">TEL</div>
          <div class="info-item-content mt-16">
            <a :href="`tel:${SITE_CONFIG.office.phone}`" aria-label="전화 걸기">
              {{ SITE_CONFIG.office.phone }}
            </a>
          </div>
          <div class="info-item-title mt-40">E-mail</div>
          <div class="info-item-content mt-16">
            <a :href="`mailto:${SITE_CONFIG.office.email}`" aria-label="이메일 보내기">
              {{ SITE_CONFIG.office.email }}
            </a>
          </div>
          <div class="info-item-title mt-40">Address.</div>
          <address class="info-item-content mt-16">{{ SITE_CONFIG.office.address }}</address>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SITE_CONFIG } from '~/config/site'
</script>