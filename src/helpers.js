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

export const slugify = (title, author) => {
	if (title && author) {
		const authorLastname = author?.split(' ')?.slice(-1)?.[0]?.toLowerCase();
		const titleSlug = title?.replace(/\s+/g, '-').toLowerCase();

		return `${titleSlug}-by-${authorLastname}`;
	}

	console.error('Title and author are required');
};
