<template>
  <div class="privacy">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">개인정보처리방침</h1>
    </div>

    <!-- 콘텐츠 -->
    <div class="page-content">
      <div class="container">
        <div class="privacy-content">
          <h2>1. 개인정보 수집 및 이용 목적</h2>
          <p>
            FinGate는 고객의 개인정보를 다음과 같은 목적으로 수집 및 이용합니다:
          </p>
          <ul>
            <li>서비스 제공 및 계약 이행</li>
            <li>고객 상담 및 문의 응답</li>
            <li>마케팅 및 광고 활용</li>
            <li>법령에 따른 의무 이행</li>
          </ul>

          <h2>2. 수집하는 개인정보 항목</h2>
          <p>필수항목: 이름, 이메일, 연락처</p>
          <p>선택항목: 회사명, 직책, 관심 서비스</p>

          <h2>3. 개인정보 보유 및 이용 기간</h2>
          <p>
            수집된 개인정보는 수집 및 이용 목적이 달성된 후에는 지체 없이 파기됩니다.
            단, 관련 법령에 의해 보존이 필요한 경우에는 해당 기간 동안 보관합니다.
          </p>

          <h2>4. 개인정보 제3자 제공</h2>
          <p>
            FinGate는 원칙적으로 고객의 개인정보를 외부에 제공하지 않습니다.
            다만, 다음의 경우에는 예외로 합니다:
          </p>
          <ul>
            <li>고객이 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>

          <h2>5. 개인정보 보호책임자</h2>
          <p>
            개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <p><strong>개인정보 보호책임자:</strong> 김대표 (CEO)</p>
          <p><strong>연락처:</strong> privacy@fingate.com</p>

          <div class="privacy-footer">
            <p><strong>시행일자:</strong> 2024년 1월 1일</p>
            <p><strong>최종 수정일:</strong> 2024년 1월 1일</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO 메타데이터 (중앙화된 관리)
const seoData = useSEO('privacy')
useHead(seoData)
</script>

