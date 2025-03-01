<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue';
import FiltersIcon from '@/components/icons/FiltersIcon.vue';
import { ref } from 'vue';
import Select from '@/components/UI/Select.vue';
import useLocale from '@/composables/useLocale.js';
import { RouterLink } from 'vue-router';
import Filters from '@/components/filters/Filters.vue';
import TransitionWrapper from '@/layouts/TransitionWrapper.vue';
import useBookStore from '@/stores/BookStore';
import { storeToRefs } from 'pinia';

const { locale } = useLocale();

const searchString = ref('');
const showResults = ref(false);
const results = ref([]);
const showFilters = ref(false);
const { books } = storeToRefs(useBookStore());

const searchByTags = (tags) => {
	showResults.value = true;

	results.value = books.value.filter((book) => {
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

		results.value = books.value.filter(
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
			:class="`px-4 py-2 flex items-center gap-2 bg-white border border-gray-500 shadow rounded-3xl transition-all duration-50 ease-out ${
				showResults || showFilters ? 'rounded-b-none' : '!rounded-b-3xl'
			}`"
		>
			<SearchIcon class="icon" />
			<input
				type="text"
				v-model="searchString"
				class="w-full text-black outline-none placeholder:text-sm"
				:placeholder="$t('search.inputPlaceholder')"
				@input="handleSearch"
				@focus="showFilters = false"
			/>
			<FiltersIcon
				class="icon hover:contrast-[0.1] cursor-pointer select-none"
				@click="showFilters = !showFilters"
			/>
		</div>

		<Select
			class="w-full bottom-1 z-20"
			useDropdownOnly
			v-model:showDropdown="showResults"
			:options="results"
			:lastOptionClass="results.length > 0 ? '!rounded-b-3xl' : ''"
			:optionsWrapperClass="`${results.length > 0 ? 'rounded-b-3xl rounded-t-none' : 'rounded-b-3xl'}`"
			optionClass="px-4"
			:selectHandler="() => null"
		>
			<template v-slot:option="{ option: book }">
				<RouterLink :to="`books/${book?.slug}`" class="flex justify-between w-full gap-1 sm:gap-2 py-2">
					<h3 class="w-full">{{ book?.['title']?.[locale] }} {{ book?.['year'] ? `(${book.year})` : '' }}</h3>
					<span class="min-w-max text-xs sm:text-sm self-center font-medium">{{
						book?.['author']?.[locale]
					}}</span>
				</RouterLink>
			</template>
		</Select>

		<TransitionWrapper :duration="50" transitionClass="!translate-y-[-20px]">
			<Filters v-if="showFilters" @handleMouseLeave="() => (showFilters = false)" />
		</TransitionWrapper>
	</div>
</template>
