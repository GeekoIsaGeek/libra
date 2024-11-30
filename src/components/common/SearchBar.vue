<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue';
import FiltersIcon from '@/components/icons/FiltersIcon.vue';
import Books from '/dummy-books.json';
import { ref } from 'vue';
import Dropdown from '@/components/UI/Dropdown.vue';
import useLocale from '@/composables/useLocale.js';
import { RouterLink } from 'vue-router';

const { locale } = useLocale();

const searchString = ref('');
const showResults = ref(false);
const results = ref([]);

const searchByTags = (tags) => {
	showResults.value = true;

	results.value = Books.books.filter((book) => {
		return tags.every((tag) => book?.tags?.includes(tag));
	});
};

const clearResults = () => {
	showResults.value = false;
	results.value = [];
};

const handleSearch = () => {
	const searchStr = searchString.value.toLowerCase();

	if (searchStr === '') {
		clearResults();
	} else if (searchStr.startsWith('#')) {
		const tags = searchStr.slice(1).trim().split(' ');

		tags.length > 0 ? searchByTags(tags) : clearResults();
	} else {
		const currLocale = locale.value;
		const fallbackLocale = currLocale === 'en' ? 'ge' : 'en';

		showResults.value = true;

		results.value = Books.books.filter(
			(book) =>
				book?.title[currLocale]?.toLowerCase().includes(searchStr) ||
				book?.author[currLocale]?.toLowerCase().includes(searchStr) ||
				book?.title[fallbackLocale]?.toLowerCase().includes(searchStr) ||
				book?.author[fallbackLocale]?.toLowerCase().includes(searchStr)
		);
	}
};
</script>

<template>
	<div class="relative w-full lg:w-[60%]">
		<div
			:class="`px-4 py-2 flex items-center gap-2 bg-white border border-gray-500 shadow rounded-3xl ${
				results.length > 0 ? 'rounded-b-none' : '!rounded-b-3xl'
			}`"
		>
			<SearchIcon class="icon" />
			<input
				type="text"
				v-model="searchString"
				class="w-full text-black outline-none placeholder:text-sm"
				:placeholder="$t('search.inputPlaceholder')"
				@input="handleSearch"
			/>
			<FiltersIcon class="icon" />
		</div>

		<Dropdown
			class="w-full bottom-1 z-20"
			useDropdownOnly
			v-model:showDropdown="showResults"
			:options="results"
			:lastOptionClass="results.length > 0 ? '!rounded-b-3xl' : ''"
			:optionsWrapperClass="`${results.length > 0 ? 'rounded-b-3xl rounded-t-none' : ''}`"
			optionClass="px-4 py-2"
			:selectHandler="() => null"
		>
			<template v-slot:option="{ option: book }">
				<RouterLink :to="`books/${book?.slug}`" class="flex justify-between w-full gap-1 sm:gap-2">
					<h3 class="w-full">{{ book?.['title']?.[locale] }} {{ book?.['year'] ? `(${book.year})` : '' }}</h3>
					<span class="min-w-max text-xs sm:text-sm self-center font-medium">{{
						book?.['author']?.[locale]
					}}</span>
				</RouterLink>
			</template>
		</Dropdown>
	</div>
</template>
