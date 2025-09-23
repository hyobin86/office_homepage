<template>
  <div class="contact">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">연락처</h1>
    </div>

    <!-- 히어로 섹션 -->
    <section class="contact-hero">
      <div class="container">
        <h2>문의하기</h2>
        <p>
          궁금한 점이 있으시거나 상담이 필요하시면 언제든지 연락주세요.
        </p>
      </div>
    </section>

    <!-- 연락처 정보 및 폼 -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-info">
          <h3>연락처 정보</h3>
          
          <div class="info-item">
            <div class="info-item-icon">
              <Icon name="check" />
            </div>
            <div class="info-item-content">
              <h4>주소</h4>
              <p>서울특별시 강남구 테헤란로 123, FinGate 빌딩 10층</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-item-icon">
              <Icon name="check" />
            </div>
            <div class="info-item-content">
              <h4>전화번호</h4>
              <p>02-1234-5678</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-item-icon">
              <Icon name="check" />
            </div>
            <div class="info-item-content">
              <h4>이메일</h4>
              <p>contact@fingate.co.kr</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-item-icon">
              <Icon name="check" />
            </div>
            <div class="info-item-content">
              <h4>운영시간</h4>
              <p>평일 09:00 - 18:00 (토, 일, 공휴일 휴무)</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form class="form" @submit.prevent="submitForm">
            <h3>문의하기</h3>
            
            <div class="form-group">
              <label class="form-label" for="name">이름 *</label>
              <input 
                id="name"
                v-model="form.name"
                type="text" 
                class="form-input" 
                required
                placeholder="이름을 입력하세요"
              />
            </div>
            
            <div class="form-group">
              <label class="form-label" for="email">이메일 *</label>
              <input 
                id="email"
                v-model="form.email"
                type="email" 
                class="form-input" 
                required
                placeholder="이메일을 입력하세요"
              />
            </div>
            
            <div class="form-group">
              <label class="form-label" for="phone">전화번호</label>
              <input 
                id="phone"
                v-model="form.phone"
                type="tel" 
                class="form-input" 
                placeholder="전화번호를 입력하세요"
              />
            </div>
            
            <div class="form-group">
              <label class="form-label" for="company">회사명</label>
              <input 
                id="company"
                v-model="form.company"
                type="text" 
                class="form-input" 
                placeholder="회사명을 입력하세요"
              />
            </div>
            
            <div class="form-group">
              <label class="form-label" for="subject">제목 *</label>
              <input 
                id="subject"
                v-model="form.subject"
                type="text" 
                class="form-input" 
                required
                placeholder="문의 제목을 입력하세요"
              />
            </div>
            
            <div class="form-group">
              <label class="form-label" for="message">문의내용 *</label>
              <textarea 
                id="message"
                v-model="form.message"
                class="form-textarea" 
                required
                placeholder="문의내용을 입력하세요"
              ></textarea>
            </div>
            
            <button type="submit" class="btn btn--primary btn--large">
              문의하기
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 폼 데이터
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
})

// 폼 제출 처리
const submitForm = () => {
  // 실제 구현에서는 API 호출
  alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
  
  // 폼 초기화
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
}

// SEO 메타데이터
useHead({
  title: '연락처 - FinGate',
  meta: [
    { name: 'description', content: 'FinGate에 문의하세요. 궁금한 점이나 상담이 필요하시면 언제든지 연락주세요.' }
  ]
})
</script>
