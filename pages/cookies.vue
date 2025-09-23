<template>
  <div class="cookies">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">쿠키정책</h1>
    </div>

    <!-- 콘텐츠 -->
    <div class="page-content">
      <div class="container">
        <div class="cookies-content">
          <h2>쿠키란?</h2>
          <p>
            쿠키는 웹사이트를 방문할 때 브라우저에 저장되는 작은 텍스트 파일입니다.
            쿠키는 웹사이트가 사용자의 기기를 "기억"하도록 도와주어, 사용자 경험을 개선하고 웹사이트의 기능을 향상시킵니다.
          </p>

          <h2>FinGate에서 사용하는 쿠키</h2>
          <p>우리는 다음과 같은 유형의 쿠키를 사용합니다:</p>

          <h3>필수 쿠키</h3>
          <p>
            웹사이트의 기본 기능을 제공하는 데 필요한 쿠키입니다.
            이러한 쿠키는 웹사이트가 제대로 작동하는 데 필수적이며 비활성화할 수 없습니다.
          </p>

          <h3>성능 쿠키</h3>
          <p>
            웹사이트의 성능을 측정하고 개선하는 데 도움이 되는 쿠키입니다.
            이러한 쿠키는 방문자가 웹사이트와 어떻게 상호작용하는지에 대한 정보를 수집합니다.
          </p>

          <h3>기능 쿠키</h3>
          <p>
            웹사이트의 기능을 향상시키고 개인화를 제공하는 쿠키입니다.
            이러한 쿠키는 사용자가 선택한 언어나 지역 설정과 같은 정보를 기억합니다.
          </p>

          <h3>마케팅 쿠키</h3>
          <p>
            사용자에게 관련성 높은 광고를 제공하는 데 사용되는 쿠키입니다.
            이러한 쿠키는 사용자의 관심사에 따라 맞춤형 광고를 표시하는 데 도움이 됩니다.
          </p>

          <h2>쿠키 관리</h2>
          <p>
            대부분의 웹 브라우저는 쿠키를 자동으로 허용하도록 설정되어 있습니다.
            그러나 쿠키 설정을 변경하여 쿠키를 차단하거나 삭제할 수 있습니다.
          </p>

          <h3>브라우저별 쿠키 설정 방법</h3>
          <ul>
            <li><strong>Chrome:</strong> 설정 > 개인정보 보호 및 보안 > 쿠키 및 기타 사이트 데이터</li>
            <li><strong>Firefox:</strong> 설정 > 개인정보 보호 및 보안 > 쿠키 및 사이트 데이터</li>
            <li><strong>Safari:</strong> 환경설정 > 개인정보 보호 > 쿠키 및 웹사이트 데이터</li>
            <li><strong>Edge:</strong> 설정 > 쿠키 및 사이트 권한 > 쿠키 및 사이트 데이터</li>
          </ul>

          <h2>쿠키 사용 목적</h2>
          <p>우리가 쿠키를 사용하는 주요 목적은 다음과 같습니다:</p>
          <ul>
            <li>웹사이트 기능 향상 및 개인화</li>
            <li>사용자 경험 개선</li>
            <li>웹사이트 성능 분석</li>
            <li>마케팅 및 광고 최적화</li>
            <li>보안 강화</li>
          </ul>

          <h2>제3자 쿠키</h2>
          <p>
            일부 쿠키는 제3자 서비스 제공업체에서 설정할 수 있습니다.
            이러한 쿠키는 해당 서비스 제공업체의 개인정보처리방침에 따라 관리됩니다.
          </p>

          <h2>쿠키 정책 변경</h2>
          <p>
            이 쿠키 정책은 필요에 따라 업데이트될 수 있습니다.
            중요한 변경사항이 있는 경우 웹사이트를 통해 알려드리겠습니다.
          </p>

          <h2>문의사항</h2>
          <p>
            쿠키 정책에 대한 질문이나 우려사항이 있으시면 언제든지 연락해 주세요.
          </p>
          <p><strong>연락처:</strong> privacy@fingate.com</p>

          <div class="cookies-footer">
            <p><strong>시행일자:</strong> 2024년 1월 1일</p>
            <p><strong>최종 수정일:</strong> 2024년 1월 1일</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO 메타데이터
useHead({
  title: '쿠키정책 - FinGate',
  meta: [
    { name: 'description', content: 'FinGate의 쿠키정책입니다. 웹사이트에서 사용하는 쿠키에 대해 자세히 알아보세요.' }
  ]
})
</script>

<style scoped>
.cookies-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.cookies-content h2 {
  color: #2563eb;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.cookies-content h2:first-child {
  margin-top: 0;
}

.cookies-content h3 {
  color: #374151;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.cookies-content p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #374151;
}

.cookies-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.cookies-content li {
  margin-bottom: 0.5rem;
  color: #374151;
}

.cookies-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.cookies-footer p {
  margin-bottom: 0.5rem;
  color: #6b7280;
}
</style>
