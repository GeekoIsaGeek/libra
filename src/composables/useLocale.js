import { useI18n } from 'vue-i18n';
import { locales } from '@/config/localization';

const useLocale = () => {
	const { locale } = useI18n();

	const setLocale = (localeToSet) => {
		if (Object.keys(locales).includes(localeToSet)) {
			locale.value = localeToSet;
			localStorage.setItem('locale', localeToSet);
		}
	};

	return { setLocale, locale: locale };
};

export default useLocale;
