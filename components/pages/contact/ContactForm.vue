<template>
  <div class="contact-form">
    <div class="container">
      <div class="form-wrap">
        <div class="form-item">
          <div class="form-title-text">
            궁금하신 사항을 문의 주시면,<br/>
            빠르게 답변 드리겠습니다.
          </div>
          <div class="form-title-subtext mt-40">
            <em class="form-dot mr-8"/>
            필수 입력 항목
          </div>
        </div>
        <div class="form-item mt-80">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label class="form-label" for="company">
                회사명
                <em class="form-dot"/>
              </label>
              <input 
                id="company"
                v-model="form.company"
                type="text" 
                class="form-input mt-20" 
                required
                placeholder="소속된 회사 또는 기관명을 입력해 주세요."
              />
            </div>
            <div class="d-flex gap-24 mt-40">
              <div class="form-group">
                <label class="form-label" for="name">
                  이름
                  <em class="form-dot"/>
                </label>
                <input 
                  id="name"
                  v-model="form.name"
                  type="text" 
                  class="form-input mt-20" 
                  required
                  placeholder="담당자 이름을 입력해 주세요."
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="phone">연락처</label>
                <input 
                  id="phone"
                  v-model="form.phone"
                  type="tel" 
                  class="form-input mt-20" 
                  placeholder="010-0000-0000"
                />
              </div>
            </div>
            <div class="form-group mt-40">
              <label class="form-label" for="email">
                이메일 주소
                <em class="form-dot"/>
              </label>
              <input 
                id="email"
                v-model="form.email"
                type="email" 
                class="form-input mt-20" 
                required
                placeholder="답변 받을 이메일을 입력해 주세요."
              />
            </div>
            <div class="form-group mt-40">
              <div>
                <label class="form-label">
                  문의유형
                  <em class="form-dot"/>
                </label>
                <span class="form-label-subtext ml-40">문의 유형을 선택해 주세요.</span>
              </div>
              <div class="radio-group mt-20">
                <input 
                  id="inquiry-general"
                  v-model="form.inquiryType"
                  type="radio" 
                  value="estimate"
                  class="radio-input" 
                  required
                />
                <label for="inquiry-general" class="radio-button">견적문의</label>
                <input 
                  id="inquiry-service"
                  v-model="form.inquiryType"
                  type="radio" 
                  value="trial"
                  class="radio-input" 
                  required
                />
                <label for="inquiry-service" class="radio-button">시연요청</label>
                <input 
                  id="inquiry-partnership"
                  v-model="form.inquiryType"
                  type="radio" 
                  value="consulting"
                  class="radio-input" 
                  required
                />
                <label for="inquiry-partnership" class="radio-button">컨설팅 문의</label>
                <input 
                  id="inquiry-technical"
                  v-model="form.inquiryType"
                  type="radio" 
                  value="etc"
                  class="radio-input" 
                  required
                />
                <label for="inquiry-technical" class="radio-button">기타</label>
              </div>
            </div>
            <div class="form-group mt-40">
              <label class="form-label" for="message">문의 사항</label>
              <div class="textarea-wrapper">
                <textarea 
                  id="message"
                  v-model="form.message"
                  class="form-textarea mt-20" 
                  required
                  placeholder="문의내용을 입력하세요"
                  maxlength="1000"
                ></textarea>
                <div class="char-counter">
                  <span class="char-count">{{ form.message.length }}</span>
                  <span class="char-max">/ 1000</span>
                </div>
              </div>
            </div>
            <button type="submit" class="submit-btn mt-48">
              문의하기
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 폼 데이터
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  inquiryType: '',
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

