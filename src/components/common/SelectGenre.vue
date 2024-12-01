<script setup>
import Select from '@/components/UI/Select.vue';
import { ref } from 'vue';
import { bookGenres } from '@/config/constants';
import { transformSelectOption } from '@/helpers';
import useLocale from '@/composables/useLocale.js';
import { useFilterStore } from '@/stores/FilterStore';
import { storeToRefs } from 'pinia';

const showGenres = ref(false);
const { locale } = useLocale();

const { genre } = storeToRefs(useFilterStore());

const handleSelect = (selectedValue) => {
	genre.value = selectedValue;
	showGenres.value = false;
};
</script>

<template>
	<Select v-model:showDropdown="showGenres" :options="bookGenres" :selectHandler="handleSelect">
		<template #default>
			<h4>
				{{
					transformSelectOption({
						option: genre,
						locale,
						type: 'genres',
						index: bookGenres.indexOf(genre),
					}) || $t('filters.genre')
				}}
			</h4>
		</template>

		<template v-slot:option="{ option }">
			<h4>{{ transformSelectOption({ option, locale, type: 'genres', index: bookGenres.indexOf(option) }) }}</h4>
		</template>
	</Select>
</template>
