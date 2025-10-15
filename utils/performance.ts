/**
 * 성능 최적화 유틸리티 함수들
 */

/**
 * throttle - 함수 실행을 지정된 시간 간격으로 제한
 * @param func - 실행할 함수
 * @param delay - 지연 시간 (ms)
 * @returns throttle된 함수
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null
  let lastExec = 0

  return function(this: any, ...args: Parameters<T>) {
    const elapsed = Date.now() - lastExec

    const execute = () => {
      lastExec = Date.now()
      func.apply(this, args)
    }

    if (timeoutId) clearTimeout(timeoutId)

    if (elapsed > delay) {
      execute()
    } else {
      timeoutId = setTimeout(execute, delay - elapsed)
    }
  }
}

/**
 * debounce - 함수 실행을 마지막 호출 후 지정된 시간까지 지연
 * @param func - 실행할 함수
 * @param delay - 지연 시간 (ms)
 * @returns debounce된 함수
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null

  return function(this: any, ...args: Parameters<T>) {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

/**
 * requestAnimationFrame을 활용한 throttle
 * @param func - 실행할 함수
 * @returns RAF throttle된 함수
 */
export const rafThrottle = <T extends (...args: any[]) => any>(
  func: T
): ((...args: Parameters<T>) => void) => {
  let rafId: number | null = null

  return function(this: any, ...args: Parameters<T>) {
    if (rafId !== null) return

    rafId = requestAnimationFrame(() => {
      func.apply(this, args)
      rafId = null
    })
  }
}

