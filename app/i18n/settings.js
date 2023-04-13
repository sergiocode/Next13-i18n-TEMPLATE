export const fallbackLng = 'es'
export const languages = [fallbackLng, 'en', 'de']
export const defaultNS = 'translation'

export function getOptions (lng = 'es', ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}