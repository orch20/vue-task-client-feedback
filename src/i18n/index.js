import { createI18n } from 'vue-i18n'
import uk from './locales/uk.json'
import en from './locales/en.json'

export default createI18n({
  locale: localStorage.getItem('lang') || 'uk',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages: {
    uk,
    en,
  },
})
