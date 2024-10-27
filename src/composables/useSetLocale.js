import { useI18n } from 'vue-i18n';

const useSetLocale = () => {
	const { locale: currentLocale } = useI18n();

	const setLocale = (localeToSet) => {
		if (['en', 'ka'].includes(localeToSet)) {
			currentLocale.value = localeToSet;
			localStorage.setItem('locale', localeToSet);
		}
	};

	return { setLocale };
};

export default useSetLocale;
