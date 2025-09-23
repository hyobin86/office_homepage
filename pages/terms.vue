<template>
  <div class="terms">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">이용약관</h1>
    </div>

    <!-- 콘텐츠 -->
    <div class="page-content">
      <div class="container">
        <div class="terms-content">
          <h2>제1조 (목적)</h2>
          <p>
            이 약관은 FinGate(이하 "회사")가 제공하는 금융 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>

          <h2>제2조 (정의)</h2>
          <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
          <ul>
            <li><strong>"서비스"</strong>란 회사가 제공하는 모든 금융 관련 서비스를 의미합니다.</li>
            <li><strong>"이용자"</strong>란 서비스에 접속하여 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
            <li><strong>"회원"</strong>이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
          </ul>

          <h2>제3조 (약관의 효력 및 변경)</h2>
          <p>
            이 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.
            회사는 필요한 경우 관련 법령을 위반하지 않는 범위에서 이 약관을 변경할 수 있습니다.
          </p>

          <h2>제4조 (서비스의 제공 및 변경)</h2>
          <p>회사는 다음과 같은 서비스를 제공합니다:</p>
          <ul>
            <li>디지털 뱅킹 서비스</li>
            <li>투자 관리 서비스</li>
            <li>리스크 관리 서비스</li>
            <li>금융 컨설팅 서비스</li>
            <li>기타 회사가 정하는 서비스</li>
          </ul>

          <h2>제5조 (서비스의 중단)</h2>
          <p>
            회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
          </p>

          <h2>제6조 (회원가입)</h2>
          <p>
            이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
            회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
          </p>

          <h2>제7조 (회원 탈퇴 및 자격 상실 등)</h2>
          <p>
            회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.
            회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.
          </p>

          <h2>제8조 (개인정보보호)</h2>
          <p>
            회사는 관련법령이 정하는 바에 따라서 이용자 등록정보를 포함한 이용자의 개인정보를 보호하기 위하여 노력합니다.
            이용자의 개인정보보호에 관해서는 관련법령 및 회사가 정하는 개인정보처리방침에 정한 바에 의합니다.
          </p>

          <h2>제9조 (회사의 의무)</h2>
          <p>
            회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하는데 최선을 다하여야 합니다.
          </p>

          <h2>제10조 (이용자의 의무)</h2>
          <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
          <ul>
            <li>신청 또는 변경시 허위 내용의 등록</li>
            <li>타인의 정보 도용</li>
            <li>회사가 게시한 정보의 변경</li>
            <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
            <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
            <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
            <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
          </ul>

          <div class="terms-footer">
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
  title: '이용약관 - FinGate',
  meta: [
    { name: 'description', content: 'FinGate 서비스 이용약관입니다. 서비스 이용 시 준수해야 할 사항들을 확인하세요.' }
  ]
})
</script>

<style scoped>
.terms-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.terms-content h2 {
  color: #2563eb;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.terms-content h2:first-child {
  margin-top: 0;
}

.terms-content p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #374151;
}

.terms-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.terms-content li {
  margin-bottom: 0.5rem;
  color: #374151;
}

.terms-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.terms-footer p {
  margin-bottom: 0.5rem;
  color: #6b7280;
}
</style>
