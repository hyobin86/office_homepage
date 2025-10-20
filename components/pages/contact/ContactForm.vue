<template>
  <div class="contact-form">
    <div class="container">
      <div class="form-wrap" ref="formRef">
        <div class="form-item">
          <h2 class="form-title-text">
            궁금하신 사항을 문의 주시면,<br/>
            빠르게 답변 드리겠습니다.
          </h2>
          <p class="form-title-subtext mt-40">
            <em class="form-dot mr-8" aria-hidden="true"/>
            필수 입력 항목
          </p>
        </div>
        <div class="form-item mt-80">
          <form @submit.prevent="submitForm" aria-label="문의 폼">
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
                required
                :aria-required="true"
                :aria-invalid="!!formErrors.company"
                :aria-describedby="formErrors.company ? 'company-error' : undefined"
              />
              <div v-if="formErrors.company" id="company-error" class="error-message mt-8" role="alert">
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
                  required
                  :aria-required="true"
                  :aria-invalid="!!formErrors.name"
                  :aria-describedby="formErrors.name ? 'name-error' : undefined"
                />
                <div v-if="formErrors.name" id="name-error" class="error-message mt-8" role="alert">
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
                required
                :aria-required="true"
                :aria-invalid="!!formErrors.email"
                :aria-describedby="formErrors.email ? 'email-error' : undefined"
              />
              <div v-if="formErrors.email" id="email-error" class="error-message mt-8" role="alert">
                {{ formErrors.email }}
              </div>
            </div>
            <div class="form-group mt-40">
              <fieldset>
                <legend class="form-label">
                  문의유형
                  <em class="form-dot" aria-hidden="true"/>
                  <span class="form-label-subtext ml-40">문의 유형을 선택해 주세요.</span>
                </legend>
              <div class="radio-group mt-20" role="radiogroup" aria-required="true">
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
              <div v-if="formErrors.inquiryType" id="inquiryType-error" class="error-message mt-8" role="alert">
                {{ formErrors.inquiryType }}
              </div>
              </fieldset>
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
                  :aria-invalid="!!formErrors.message"
                  :aria-describedby="formErrors.message ? 'message-error' : 'message-counter'"
                ></textarea>
                <div id="message-counter" class="char-counter" aria-live="polite">
                  <span class="char-count">{{ form.message.length }}</span>
                  <span class="char-max">/ 1000</span>
                </div>
              </div>
              <div v-if="formErrors.message" id="message-error" class="error-message mt-8" role="alert">
                {{ formErrors.message }}
              </div>
            </div>
            <button 
              type="submit" 
              class="submit-btn mt-48" 
              :disabled="isSubmitting"
              :aria-label="isSubmitting ? '전송 중...' : '문의 내용 전송'"
            >
              {{ isSubmitting ? '전송 중...' : '문의하기' }}
            </button>
          </form>
        </div>
      </div>
    </div>
    
    <div 
      v-if="showToast" 
      class="toast-notification" 
      :class="[`toast-${toastType}`, { 'toast-show': showToast }]"
      role="alert"
      aria-live="polite"
    >
      <div class="toast-content">
        <span class="toast-icon">{{ toastType === 'success' ? '✓' : '✕' }}</span>
        <span class="toast-message">{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  inquiryType: string
  message: string
}

interface FormErrors {
  name: string
  email: string
  company: string
  inquiryType: string
  message: string
  [key: string]: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  company: '',
  inquiryType: '',
  message: ''
})

const formErrors = reactive<FormErrors>({
  name: '',
  email: '',
  company: '',
  inquiryType: '',
  message: ''
})

const isSubmitting = ref<boolean>(false)
const showToast = ref<boolean>(false)
const toastMessage = ref<string>('')
const toastType = ref<'success' | 'error'>('success')

const formRef = ref<HTMLElement | null>(null)
let gsapContext: gsap.Context | null = null

const validateForm = () => {
  Object.keys(formErrors).forEach(key => {
    formErrors[key] = ''
  })
  
  let isValid = true
  
  if (!form.name.trim()) {
    formErrors.name = '이름을 입력해주세요.'
    isValid = false
  }
  
  if (!form.company.trim()) {
    formErrors.company = '회사명을 입력해주세요.'
    isValid = false
  }
  
  if (!form.email.trim()) {
    formErrors.email = '이메일을 입력해주세요.'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    formErrors.email = '올바른 이메일 형식을 입력해주세요.'
    isValid = false
  }
  
  if (!form.inquiryType) {
    formErrors.inquiryType = '문의유형을 선택해주세요.'
    isValid = false
  }
  
  if (!form.message.trim()) {
    formErrors.message = '문의사항을 입력해주세요.'
    isValid = false
  } else if (form.message.trim().length < 10) {
    formErrors.message = '문의사항을 10자 이상 입력해주세요.'
    isValid = false
  }
  
  return isValid
}

const displayToast = (message: string, type: 'success' | 'error' = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 4000)
}

const submitForm = async () => {
  if (!validateForm()) {
    displayToast('입력 정보를 확인해주세요.', 'error')
    return
  }
  
  isSubmitting.value = true
  
  try {
    const config = useRuntimeConfig()
    const serviceId = config.public.emailjsServiceId
    const templateId = config.public.emailjsTemplateId
    const publicKey = config.public.emailjsPublicKey
    const toEmail = config.public.emailjsToEmail
    
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
    
    displayToast('문의가 정상적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.', 'success')
    
    Object.keys(form).forEach(key => {
      form[key as keyof FormData] = ''
    })
    
  } catch (error) {
    console.error('EmailJS Error:', error)
    displayToast('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.', 'error')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  if (process.client) {
    gsapContext = gsap.context(() => {
      if (formRef.value) {
        gsap.fromTo(formRef.value,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formRef.value,
              start: "top 80%",
              toggleActions: "play reverse play reverse"
            }
          }
        )
      }
    })
  }
})

onBeforeUnmount(() => {
  gsapContext?.revert()
})
</script>

