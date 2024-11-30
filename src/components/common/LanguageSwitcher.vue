<script setup>
import GE from '@/assets/images/georgia.png';
import UK from '@/assets/images/united-kingdom.png';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue';
import useLocale from '@/composables/useLocale';
import { locales } from '@/config/localization';
import { ref } from 'vue';
import Dropdown from '@/components/UI/Dropdown.vue';

const { setLocale, locale } = useLocale();
const showDropdown = ref(false);

const switchLanguage = ([loc, lang]) => {
	setLocale(loc);
	showDropdown.value = false;
};
</script>

<template>
	<Dropdown
		v-model:showDropdown="showDropdown"
		:options="Object.entries(locales)"
		:selectHandler="(selectedLocale) => switchLanguage(selectedLocale)"
	>
		<template #default>
			<div class="flex items-center gap-3">
				<img :src="locale === 'en' ? UK : GE" class="w-4 h-4" />{{ locales[locale] }}
			</div>
			<ArrowDownIcon class="icon" />
		</template>

		<template v-slot:option="{ option: [loc, lang] }">
			<img :src="loc === 'en' ? UK : GE" alt="country-flag" class="w-4 h-4" />
			<h4>{{ lang }}</h4>
		</template>
	</Dropdown>
</template>
