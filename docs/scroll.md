# Scroll Snap (Lenis)

- 위치: `plugins/lenis.client.js`
- 스냅 섹션: hero, company, services(200vh), partners, vision, banner
- 튜닝 상수(파일 상단):
  - SNAP_BOTTOM_TOUCH = 0.995
  - SNAP_TOP_TOUCH = 0.05
  - MIN_DURATION / MAX_DURATION = 0.65 ~ 0.95s
- 동작: Services는 마지막 카드 하단이 뷰포트 하단에 닿아야 다음 섹션으로 이동.
