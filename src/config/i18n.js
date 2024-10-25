import { createI18n } from 'vue-i18n';
import en from '@/assets/locales/en';
import ka from '@/assets/locales/ka';

const locale = localStorage.getItem('locale') || 'ka';

export const i18n = createI18n({
	legacy: false,
	locale: locale,
	fallbackLocale: 'en',
	messages: { en, ka },
});
