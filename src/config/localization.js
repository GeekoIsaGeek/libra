import { createI18n } from 'vue-i18n';
import translationsEN from '@/assets/translations/en';
import translationsKA from '@/assets/translations/ka';

export const locales = {
	en: 'English',
	ka: 'ქართული',
};

const initialLocale = localStorage.getItem('locale') || 'ka';

export const i18n = createI18n({
	legacy: false,
	locale: initialLocale,
	fallbackLocale: 'en',
	messages: { en: translationsEN, ka: translationsKA },
});
