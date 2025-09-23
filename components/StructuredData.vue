<template>
  <!-- 구조화된 데이터는 head에 추가됨 -->
</template>

<script setup>
// 구조화된 데이터를 head에 추가
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FinGate",
        "url": "https://fingate.co.kr",
        "logo": "https://fingate.co.kr/favicon.svg",
        "description": "FinGate는 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 금융 솔루션 기업입니다.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "KR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "Korean"
        },
        "sameAs": [
          "https://twitter.com/FinGate",
          "https://linkedin.com/company/fingate",
          "https://facebook.com/FinGate"
        ],
        "foundingDate": "2024",
        "industry": "Financial Technology",
        "services": [
          "금융 솔루션",
          "디지털 뱅킹",
          "투자 관리",
          "금융 컨설팅"
        ]
      })
    }
  ]
})
</script>
