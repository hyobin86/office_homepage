<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>FinGate</h3>
          <p>
            혁신적인 금융 기술로 더 나은 미래를 만들어가는 기업입니다.
            고객의 성공이 우리의 성공입니다.
          </p>
          <div class="social-links">
            <a href="#" aria-label="페이스북">
              <Icon name="facebook" />
            </a>
            <a href="#" aria-label="트위터">
              <Icon name="twitter" />
            </a>
            <a href="#" aria-label="링크드인">
              <Icon name="linkedin" />
            </a>
            <a href="#" aria-label="인스타그램">
              <Icon name="instagram" />
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>서비스</h3>
          <ul>
            <li><NuxtLink to="/services">금융 솔루션</NuxtLink></li>
            <li><NuxtLink to="/services">투자 관리</NuxtLink></li>
            <li><NuxtLink to="/services">리스크 관리</NuxtLink></li>
            <li><NuxtLink to="/services">컨설팅</NuxtLink></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>회사</h3>
          <ul>
            <li><NuxtLink to="/about">회사소개</NuxtLink></li>
            <li><NuxtLink to="/about">팀</NuxtLink></li>
            <li><NuxtLink to="/about">채용</NuxtLink></li>
            <li><NuxtLink to="/contact">연락처</NuxtLink></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>고객지원</h3>
          <ul>
            <li><NuxtLink to="/contact">도움말</NuxtLink></li>
            <li><NuxtLink to="/contact">FAQ</NuxtLink></li>
            <li><NuxtLink to="/contact">문의하기</NuxtLink></li>
            <li><NuxtLink to="/contact">기술지원</NuxtLink></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 FinGate. All rights reserved.</p>
        <div class="footer-links">
          <NuxtLink to="/privacy">개인정보처리방침</NuxtLink>
          <NuxtLink to="/terms">이용약관</NuxtLink>
          <NuxtLink to="/cookies">쿠키정책</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 푸터 컴포넌트
import Icon from '~/components/Icon.vue'
</script>

