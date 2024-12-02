<script setup>
import SelectGenre from '@/components/common/SelectGenre.vue';
import LanguageFilter from '@/components/filters//LanguageFilter.vue';
import PagesFilter from '@/components/filters/PagesFilter.vue';
import FilterOff from '@/components/icons/FilterOff.vue';
import { useFilterStore } from '@/stores/FilterStore.js';
import { storeToRefs } from 'pinia';

const emit = defineEmits(['handleMouseLeave']);

const { isAnyFilterSet } = storeToRefs(useFilterStore());
const { clearFilters } = useFilterStore();

const handleMouseLeave = () => {
	setTimeout(() => emit('handleMouseLeave'), 400);
};
</script>

<template>
	<div
		class="flex flex-col items-start w-full z-20 absolute top-full bg-white text-black border border-t-0 px-4 py-4 border-gray-500 shadow rounded-b-3xl"
		@mouseleave="handleMouseLeave"
	>
		<div class="flex justify-between w-full">
			<h3 class="font-bold py-2">{{ $t('filters.title') }}</h3>
			<FilterOff class="w-4 h-4 cursor-pointer hover:contrast-[20%]" v-show="isAnyFilterSet" @click="clearFilters" />
		</div>

		<div class="flex items-center gap-3 flex-wrap">
			<SelectGenre />
			<LanguageFilter />
			<PagesFilter />
		</div>
	</div>
</template>
