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
          <form @submit.prevent="submitForm" novalidate aria-label="문의 폼">
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
                placeholder="소속된 회사 또는 기관명을 입력해 주세요."
                required
                :aria-required="true"
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
                  placeholder="담당자 이름을 입력해 주세요."
                  required
                  :aria-required="true"
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
                placeholder="답변 받을 이메일을 입력해 주세요."
                required
                :aria-required="true"
              />
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
              </fieldset>
            </div>
            <div class="form-group mt-40">
              <label class="form-label" for="message">
                문의 사항
                <em class="form-dot"/>
              </label>
              <div class="textarea-wrapper">
                <textarea 
                  id="message"
                  v-model="form.message"
                  class="form-textarea mt-20" 
                  placeholder="문의 사항을 입력해 주세요."
                  maxlength="1000"
                  aria-describedby="message-counter"
                ></textarea>
                <div id="message-counter" class="char-counter" aria-live="polite">
                  <span class="char-count">{{ form.message.length }}</span>
                  <span class="char-max">/ 1000</span>
                </div>
              </div>
            </div>
            <button 
              type="submit" 
              class="submit-btn mt-48" 
              :disabled="isSubmitting"
              :aria-label="isSubmitting ? '전송 중...' : '문의 내용 전송'"
            >
              문의하기
            </button>
          </form>
        </div>
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

const form = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  company: '',
  inquiryType: '',
  message: ''
})

const isSubmitting = ref<boolean>(false)
const formRef = ref<HTMLElement | null>(null)
let gsapContext: gsap.Context | null = null

const validateForm = () => {
  let isValid = true
  
  if (!form.name.trim()) {
    isValid = false
  } else if (!form.company.trim()) {
    isValid = false
  } else if (!form.email.trim()) {
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    isValid = false
  } else if (!form.inquiryType) {
    isValid = false
  } else if (!form.message.trim()) {
    isValid = false
  }
  
  if (!isValid) {
    alert('필수 입력 정보를 확인해 주세요.')
  }
  
  return isValid
}

const submitForm = async () => {
  if (!validateForm()) {
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
    
    alert('문의가 정상 접수되었습니다. 빠른 시일 내 확인 후 연락드리겠습니다.')
    
    Object.keys(form).forEach(key => {
      form[key as keyof FormData] = ''
    })
    
  } catch (error) {
    console.error('EmailJS Error:', error)
    alert('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  // EmailJS 초기화
  const config = useRuntimeConfig()
  emailjs.init(config.public.emailjsPublicKey)
  
  if (typeof window !== 'undefined') {
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
              toggleActions: "play none none none"
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

