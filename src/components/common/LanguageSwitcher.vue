<script setup>
import GE from '@/assets/images/georgia.png';
import UK from '@/assets/images/united-kingdom.png';
import useLocale from '@/composables/useLocale';
import { locales } from '@/config/localization';
import { ref, defineProps, computed } from 'vue';
import Select from '@/components/UI/Select.vue';

const props = defineProps({
	customHandler: {
		type: Function,
	},
	inputLocale: {
		type: String,
	},
});

const { setLocale, locale: appLocale } = useLocale();
const showDropdown = ref(false);

const locale = computed(() => props?.inputLocale || appLocale.value);

const switchLanguage = ([loc, lang]) => {
	if (props.customHandler) {
		props.customHandler(loc);
	} else {
		setLocale(loc);
	}
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
