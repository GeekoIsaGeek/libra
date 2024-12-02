import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import Books from '/dummy-books.json';

export const useFilterStore = defineStore('filters', () => {
	const showListing = ref(true);
	const genre = ref('');
	const language = ref('');
	const pages = ref();
	const isAnyFilterSet = computed(() => genre.value || language.value || pages.value);

	const books = ref(Books.books);
	const filteredBooks = ref([]);

	const filterBooks = () => {
		const filtered = Books.books.filter((book) => {
			const passesGenre = !genre.value || book?.tags?.includes(genre.value);
			const passesLanguage = !language.value || book.language === language.value;

			const passesPages =
				!pages.value ||
				(book.pages >= pages.value?.min && (pages.value?.max ? book.pages <= pages?.value?.max : true));

			return passesGenre && passesLanguage && passesPages;
		});
		console.log(filtered);
		filteredBooks.value = filtered;
	};

	const clearFilters = () => {
		genre.value = '';
		language.value = '';
		pages.value = '';
	};

	return { showListing, genre, language, pages, books, filteredBooks, filterBooks, isAnyFilterSet, clearFilters };
});
