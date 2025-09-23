import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // ScrollTrigger 플러그인 등록
    gsap.registerPlugin(ScrollTrigger)

    // 전역에서 접근 가능하도록 설정
    window.gsap = gsap
    window.ScrollTrigger = ScrollTrigger

    // 컴포넌트에서 사용할 수 있도록 provide
    nuxtApp.provide('gsap', gsap)
    nuxtApp.provide('ScrollTrigger', ScrollTrigger)
  }
})
