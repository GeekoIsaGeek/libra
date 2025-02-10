import { defineStore, storeToRefs } from 'pinia';
import { ref, computed } from 'vue';
import useBookStore from '@/stores/BookStore';

export const useFilterStore = defineStore('filters', () => {
	const genre = ref('');
	const language = ref('');
	const pages = ref();
	const isAnyFilterSet = computed(() => genre.value || language.value || pages.value);

	const { books } = storeToRefs(useBookStore());

	const filteredBooks = ref([]);

	const filterBooks = () => {
		filteredBooks.value = books.value.filter((book) => {
			const meetsGenreFilter = !genre.value || book?.tags?.includes(genre.value);
			const meetsLangFilter = !language.value || book.language === language.value;

			const meetsPagesFilter =
				!pages.value ||
				(book.pages >= pages.value?.min && (pages.value?.max ? book.pages <= pages?.value?.max : true)); // If 1000+ is selected, we won't have a max value

			return meetsGenreFilter && meetsLangFilter && meetsPagesFilter;
		});
	};

	const clearFilters = () => {
		genre.value = '';
		language.value = '';
		pages.value = '';
	};

	return { genre, language, pages, books, filteredBooks, filterBooks, isAnyFilterSet, clearFilters };
});
