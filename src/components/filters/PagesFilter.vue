<script setup>
import Select from '@/components/UI/Select.vue';
import { ref } from 'vue';
import { useFilterStore } from '@/stores/FilterStore';
import { storeToRefs } from 'pinia';
import { pages } from '@/config/constants';

const { pages: pageCount } = storeToRefs(useFilterStore());
const { filterBooks } = useFilterStore();

const showPages = ref(false);

const handleSelect = (selectedValue) => {
	pageCount.value = selectedValue;
	showPages.value = false;
	filterBooks();
};
</script>

<template>
	<Select v-model:showDropdown="showPages" :options="pages" :selectHandler="handleSelect">
		<template #default>
			<h4>
				<span v-if="pageCount?.displayAs">{{ $t('filters.pages') }}:</span>
				{{ pageCount?.displayAs || $t('filters.pages') }}
			</h4>
		</template>

		<template v-slot:option="{ option }">
			<h4>{{ option.displayAs }}</h4>
		</template>
	</Select>
</template>
