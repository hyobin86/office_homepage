/* ========================================
   Asset URL Composable
   Nuxt app.baseURL을 자동으로 포함한 이미지 경로 반환
   ======================================== */

export const useAssetUrl = (path: string): string => {
  const appConfig = useAppConfig()
  const baseURL: string = (appConfig.baseURL as string) || ''
  
  // 절대 URL이면 그대로 반환
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  
  // baseURL이 이미 포함되어 있으면 그대로 반환
  if (baseURL && path.startsWith(baseURL)) {
    return path
  }
  
  // baseURL 정규화 (끝에 슬래시가 없으면 추가)
  const normalizedBase = baseURL && !baseURL.endsWith('/') ? `${baseURL}/` : baseURL
  
  // 경로 정규화 (중복 슬래시 제거)
  if (path.startsWith('/')) {
    return `${normalizedBase}${path}`.replace(/\/+/g, '/')
  }
  
  return `${normalizedBase}/${path}`.replace(/\/+/g, '/')
}

