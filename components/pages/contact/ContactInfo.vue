<template>
  <div class="contact-info">
    <div class="container">
      <div class="section-header fade-in">
        <div class="section-title text-center">
          고객의 비즈니스 고민을<br/>
          핀게이트가 함께 해결하겠습니다.
        </div>
      </div>
      <div class="d-flex gap-24 mt-120 fade-in">
        <div class="info-item map-img"></div>
        <div class="info-item">
          <div class="info-title">
            오시는 길
          </div>
          <div class="info-item-title mt-48">TEL</div>
          <div class="info-item-content mt-16">
            {{ SITE_CONFIG.office.phone }}
          </div>
          <div class="info-item-title mt-40">E-mail</div>
          <div class="info-item-content mt-16">
            {{ SITE_CONFIG.office.email }}
          </div>
          <div class="info-item-title mt-40">Address.</div>
          <div class="info-item-content mt-16">{{ SITE_CONFIG.office.address }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SITE_CONFIG } from '~/config/site'
</script>