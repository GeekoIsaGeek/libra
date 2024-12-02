<script setup>
import Select from '@/components/UI/Select.vue';
import { ref } from 'vue';
import { languages } from '@/config/constants';
import { transformSelectOption } from '@/helpers';
import useLocale from '@/composables/useLocale.js';
import { useFilterStore } from '@/stores/FilterStore';
import { storeToRefs } from 'pinia';

const showLanguages = ref(false);
const { locale } = useLocale();

const { language } = storeToRefs(useFilterStore());
const { filterBooks } = useFilterStore();

const handleSelect = (selectedValue) => {
	language.value = selectedValue;
	showLanguages.value = false;
	filterBooks();
};
</script>

<template>
	<Select v-model:showDropdown="showLanguages" :options="languages" :selectHandler="handleSelect">
		<template #default>
			<h4>
				{{
					transformSelectOption({
						option: language,
						locale,
						type: 'languages',
						index: languages?.indexOf(language),
					}) || $t('filters.language')
				}}
			</h4>
		</template>

		<template v-slot:option="{ option }">
			<h4>{{ transformSelectOption({ option, locale, type: 'languages', index: languages?.indexOf(option) }) }}</h4>
		</template>
	</Select>
</template>
