<script setup>
import GE from '@/assets/images/georgia.png';
import UK from '@/assets/images/united-kingdom.png';
import useLocale from '@/composables/useLocale';
import { locales } from '@/config/localization';
import { ref } from 'vue';
import Select from '@/components/UI/Select.vue';

const { setLocale, locale } = useLocale();
const showDropdown = ref(false);

const switchLanguage = ([loc, lang]) => {
	setLocale(loc);
	showDropdown.value = false;
};
</script>

<template>
	<Select
		v-model:showDropdown="showDropdown"
		:options="Object.entries(locales)"
		:selectHandler="(selectedLocale) => switchLanguage(selectedLocale)"
		optionClass="select-none"
	>
		<template #default>
			<div class="flex items-center gap-3">
				<img :src="locale === 'en' ? UK : GE" class="w-4 h-4" />{{ locales[locale] }}
			</div>
		</template>

		<template v-slot:option="{ option: [loc, lang] }">
			<img :src="loc === 'en' ? UK : GE" alt="country-flag" class="w-4 h-4" />
			<h4>{{ lang }}</h4>
		</template>
	</Select>
</template>
