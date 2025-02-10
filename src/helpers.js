import georgianTranslations from '@/assets/translations/ka';
import { capitalize } from 'vue';
import { numOfRecViewedBooksToShow } from '@/config/constants';
import { translatables } from '@/config/constants';

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

export const getJwtToken = () => {
	return localStorage.getItem('jwt');
};

export const setJwtToken = (token) => {
	localStorage.setItem('jwt', token);
};

export const objectToFormData = (object, bilingualFields = translatables) => {
	const formData = new FormData();

	for (const [key, value] of Object.entries(object)) {
		if (bilingualFields.includes(key)) {
			formData.append(key, JSON.stringify(value));
			continue;
		}
		formData.append(key, value);
	}

	return formData;
};

export const getTags = (tags) => {
	switch (true) {
		case Array.isArray(tags):
			return tags;
		case typeof tags === 'string':
			return tags.split(',');
		default:
			return [];
	}
};

export const getFileUrl = (asset) => {
	switch (true) {
		case !asset:
			return '';
		case asset instanceof File:
		case asset.startsWith('http'):
			return asset;
		default:
			return `${import.meta.env.VITE_API_URL}/uploads/${asset}`;
	}
};

export const getFileName = (fileName) => {
	if (!fileName) {
		return '';
	}
	return fileName?.split('/')[1].split('_')?.[1];
};
