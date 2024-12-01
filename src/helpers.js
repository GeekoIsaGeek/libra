import georgianTranslations from '@/assets/translations/ka';
import { capitalize } from 'vue';

export const transformSelectOption = ({ option, locale, type, index }) => {
	const translations = {
		ka: georgianTranslations[type],
	};

	if (locale !== 'en') {
		return translations[locale][index];
	}

	if (option?.includes('-')) {
		return option
			.split('-')
			.map((word) => capitalize(word))
			.join('-');
	}

	return capitalize(option);
};
