import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFilterStore = defineStore('app', () => {
	const showListing = ref(false);
	const genre = ref('');
	const language = ref('');
	const pages = ref();

	return { showListing, genre, language, pages };
});
