<template>
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
</script>
