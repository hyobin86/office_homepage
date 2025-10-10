<template>
  <div class="contact-form">
    <div class="container">
      <div class="form-wrap fade-in">
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
                :class="{ 'error': formErrors.company }"
                placeholder="소속된 회사 또는 기관명을 입력해 주세요."
              />
              <div v-if="formErrors.company" class="error-message mt-8">
                {{ formErrors.company }}
              </div>
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
                  :class="{ 'error': formErrors.name }"
                  placeholder="담당자 이름을 입력해 주세요."
                />
                <div v-if="formErrors.name" class="error-message mt-8">
                  {{ formErrors.name }}
                </div>
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
                :class="{ 'error': formErrors.email }"
                placeholder="답변 받을 이메일을 입력해 주세요."
              />
              <div v-if="formErrors.email" class="error-message mt-8">
                {{ formErrors.email }}
              </div>
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
                  value="견적문의"
                  class="radio-input" 
                />
                <label for="inquiry-general" class="radio-button">견적문의</label>
                <input 
                  id="inquiry-service"
                  v-model="form.inquiryType"
                  type="radio" 
                  value="시연요청"
                  class="radio-input" 
                />
                <label for="inquiry-service" class="radio-button">시연요청</label>
                <input 
                  id="inquiry-partnership"
                  v-model="form.inquiryType"
                  type="radio" 
                  value="컨설팅 문의"
                  class="radio-input" 
                />
                <label for="inquiry-partnership" class="radio-button">컨설팅 문의</label>
                <input 
                  id="inquiry-technical"
                  v-model="form.inquiryType"
                  type="radio" 
                  value="기타"
                  class="radio-input" 
                />
                <label for="inquiry-technical" class="radio-button">기타</label>
              </div>
              <div v-if="formErrors.inquiryType" class="error-message mt-8">
                {{ formErrors.inquiryType }}
              </div>
            </div>
            <div class="form-group mt-40">
              <label class="form-label" for="message">문의 사항</label>
              <div class="textarea-wrapper">
                <textarea 
                  id="message"
                  v-model="form.message"
                  class="form-textarea mt-20" 
                  :class="{ 'error': formErrors.message }"
                  placeholder="문의내용을 입력하세요"
                  maxlength="1000"
                ></textarea>
                <div class="char-counter">
                  <span class="char-count">{{ form.message.length }}</span>
                  <span class="char-max">/ 1000</span>
                </div>
              </div>
              <div v-if="formErrors.message" class="error-message mt-8">
                {{ formErrors.message }}
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
// EmailJS import
import emailjs from '@emailjs/browser'

// 폼 데이터
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  inquiryType: '',
  message: ''
})

// 폼 에러 상태
const formErrors = reactive({
  name: '',
  email: '',
  company: '',
  inquiryType: '',
  message: ''
})

// 폼 검증 함수
const validateForm = () => {
  // 에러 초기화
  Object.keys(formErrors).forEach(key => {
    formErrors[key] = ''
  })
  
  let isValid = true
  
  // 이름 검증
  if (!form.name.trim()) {
    formErrors.name = '이름을 입력해주세요.'
    isValid = false
  }
  
  // 회사명 검증
  if (!form.company.trim()) {
    formErrors.company = '회사명을 입력해주세요.'
    isValid = false
  }
  
  // 이메일 검증
  if (!form.email.trim()) {
    formErrors.email = '이메일을 입력해주세요.'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    formErrors.email = '올바른 이메일 형식을 입력해주세요.'
    isValid = false
  }
  
  // 문의유형 검증
  if (!form.inquiryType) {
    formErrors.inquiryType = '문의유형을 선택해주세요.'
    isValid = false
  }
  
  // 문의사항 검증
  if (!form.message.trim()) {
    formErrors.message = '문의사항을 입력해주세요.'
    isValid = false
  } else if (form.message.trim().length < 10) {
    formErrors.message = '문의사항을 10자 이상 입력해주세요.'
    isValid = false
  }
  
  return isValid
}

// 폼 제출 처리
const submitForm = async () => {
  // 폼 검증
  if (!validateForm()) {
    alert('입력 정보를 확인해주세요.')
    return
  }
  
  try {
    // EmailJS 설정 (Nuxt 런타임 설정 사용)
    const config = useRuntimeConfig()
    const serviceId = config.public.emailjsServiceId
    const templateId = config.public.emailjsTemplateId
    const publicKey = config.public.emailjsPublicKey
    const toEmail = config.public.emailjsToEmail
    
    // 이메일 전송
    await emailjs.send(
      serviceId,
      templateId,
      {
        name: form.name,
        email: form.email,
        company: form.company,
        phone: form.phone,
        inquiryType: form.inquiryType,
        message: form.message,
        to_email: toEmail,
        time: new Date().toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      },
      publicKey
    )
    
    alert('문의가 정상적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.')
    
    // 폼 초기화
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
  } catch (error) {
    console.error('EmailJS Error:', error)
    alert('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
  }
}
</script>

