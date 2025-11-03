/* ========================================
   Navigation Constants
   ======================================== */

export interface NavigationItem {
  name: string
  path: string
  hasDropdown?: boolean
  children?: NavigationItem[]
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    name: 'COMPANY',
    path: '/company'
  },
  {
    name: 'SERVICES',
    path: '/services',
    hasDropdown: true,
    children: [
      {
        name: 'GA 통합 운영 시스템',
        path: '/services/service1'
      },
      {
        name: '원스톱 상담지원 솔루션',
        path: '/services/service2'
      }
    ]
  },
  {
    name: 'NEW VISION',
    path: '/newvision'
  },
  {
    name: 'CONTACT US',
    path: '/contact'
  }
] as const

