<template>
  <div class="blog">
    <!-- 페이지 헤더 -->
    <div class="page-header">
      <h1 class="page-title">블로그</h1>
    </div>

    <!-- 히어로 섹션 -->
    <section class="blog-hero">
      <div class="container">
        <h2>금융 기술 인사이트</h2>
        <p>
          FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 인사이트를 확인하세요.
        </p>
      </div>
    </section>

    <!-- 블로그 목록 -->
    <section class="blog-list">
      <div class="container">
        <div class="blog-item">
          <img 
            src="/images/blog-1.jpg" 
            alt="핀테크의 미래" 
            class="blog-item-image"
          />
          <div class="blog-item-meta">
            <span>2024.01.15</span>
            <span>핀테크</span>
          </div>
          <h3 class="blog-item-title">
            <NuxtLink to="/blog/fintech-future">핀테크의 미래: AI와 블록체인의 융합</NuxtLink>
          </h3>
          <p class="blog-item-excerpt">
            인공지능과 블록체인 기술이 결합하여 만들어낼 금융 서비스의 새로운 패러다임에 대해 알아봅니다.
          </p>
          <NuxtLink to="/blog/fintech-future" class="blog-item-read-more">
            자세히 보기 →
          </NuxtLink>
        </div>

        <div class="blog-item">
          <img 
            src="/images/blog-2.jpg" 
            alt="디지털 금융" 
            class="blog-item-image"
          />
          <div class="blog-item-meta">
            <span>2024.01.10</span>
            <span>디지털 금융</span>
          </div>
          <h3 class="blog-item-title">
            <NuxtLink to="/blog/digital-banking">디지털 뱅킹의 진화와 고객 경험</NuxtLink>
          </h3>
          <p class="blog-item-excerpt">
            디지털 뱅킹이 어떻게 발전해왔는지, 그리고 향후 어떤 방향으로 나아갈지 살펴봅니다.
          </p>
          <NuxtLink to="/blog/digital-banking" class="blog-item-read-more">
            자세히 보기 →
          </NuxtLink>
        </div>

        <div class="blog-item">
          <img 
            src="/images/blog-3.jpg" 
            alt="투자 전략" 
            class="blog-item-image"
          />
          <div class="blog-item-meta">
            <span>2024.01.05</span>
            <span>투자 전략</span>
          </div>
          <h3 class="blog-item-title">
            <NuxtLink to="/blog/investment-strategy">2024년 글로벌 투자 전략</NuxtLink>
          </h3>
          <p class="blog-item-excerpt">
            새로운 해를 맞아 글로벌 시장의 변화와 함께 고려해야 할 투자 전략을 제안합니다.
          </p>
          <NuxtLink to="/blog/investment-strategy" class="blog-item-read-more">
            자세히 보기 →
          </NuxtLink>
        </div>

        <div class="blog-item">
          <img 
            src="/images/blog-4.jpg" 
            alt="금융 규제" 
            class="blog-item-image"
          />
          <div class="blog-item-meta">
            <span>2023.12.28</span>
            <span>금융 규제</span>
          </div>
          <h3 class="blog-item-title">
            <NuxtLink to="/blog/financial-regulation">금융 규제의 변화와 대응 방안</NuxtLink>
          </h3>
          <p class="blog-item-excerpt">
            최근 금융 규제 환경의 변화와 기업들이 어떻게 대응해야 하는지에 대해 설명합니다.
          </p>
          <NuxtLink to="/blog/financial-regulation" class="blog-item-read-more">
            자세히 보기 →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO 메타데이터
useHead({
  title: '블로그 - FinGate',
  meta: [
    { name: 'description', content: 'FinGate의 전문가들이 전하는 최신 금융 기술 트렌드와 인사이트를 확인하세요.' }
  ]
})
</script>
