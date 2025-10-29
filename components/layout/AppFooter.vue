<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <img src="/images/logos/fingate-logo.svg" alt="FINGATE 로고" class="footer-logo" loading="eager"/>
        <div class="footer-section mt-40">
          <div>
            <div class="d-flex">
              <div class="footer-section-item">
                <div>대표자</div>
                <div>{{ SITE_CONFIG.office.name }}</div>
              </div>
              <div class="footer-section-item">
                <div>사업자등록번호</div>
                <div>{{ SITE_CONFIG.office.registrationNumber }}</div>
              </div>
            </div>
            <div class="d-flex mt-8">
              <div class="footer-section-item">
                <div>TEL</div>
                <div><a :href="`tel:${SITE_CONFIG.office.phone}`">{{ SITE_CONFIG.office.phone }}</a></div>
              </div>
              <div class="footer-section-item">
                <div>E-mail</div>
                <div><a :href="`mailto:${SITE_CONFIG.office.email}`">{{ SITE_CONFIG.office.email }}</a></div>
              </div>
              <div class="footer-section-item">
                <div>주소</div>
                <div>{{ SITE_CONFIG.office.address }}</div>
              </div>
            </div>
          </div>
          <div class="footer-section-item">
            <div></div>
            <div>{{ SITE_CONFIG.office.reserved }}</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { SITE_CONFIG } from '~/config/site'
</script>

