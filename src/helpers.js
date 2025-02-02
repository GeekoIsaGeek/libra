import georgianTranslations from '@/assets/translations/ka';
import { capitalize } from 'vue';
import { numOfRecViewedBooksToShow } from '@/config/constants';

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

export const addToRecentlyViewed = (book) => {
	if (!book?.id && !book?.title) {
		return;
	}

	const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
	const bookIndex = recentlyViewed.findIndex((item) => item.id === book.id);

	if (bookIndex !== -1) {
		recentlyViewed.splice(bookIndex, 1);
	}

	if (recentlyViewed.length >= numOfRecViewedBooksToShow) {
		recentlyViewed.shift();
	}

	recentlyViewed.unshift(book);
	localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
};

export const clearState = (object) => {
	Object.keys(object).forEach((key) => {
		object[key] = '';
	});
};
