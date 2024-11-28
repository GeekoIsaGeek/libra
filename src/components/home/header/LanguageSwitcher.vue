<script setup>
import GE from '@/assets/images/georgia.png';
import UK from '@/assets/images/united-kingdom.png';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue';
import useLocale from '@/composables/useLocale';
import { locales } from '@/config/localization';
import { ref } from 'vue';

const { setLocale, locale } = useLocale();
const showDropdown = ref(false);

const switchLanguage = (locale) => {
	setLocale(locale);
	showDropdown.value = false;
};
</script>

<template>
	<div class="relative">
		<div
			class="flex items-center justify-between gap-4 bg-white border border-gray-500 rounded-md px-2 py-1 text-black select-none cursor-pointer hover:bg-white/90 transition-colors duration-200 ease-out shadow w-[10rem]"
			@click="showDropdown = !showDropdown"
		>
			<div class="flex items-center gap-3">
				<img :src="locale === 'en' ? UK : GE" class="w-4 h-4" />{{ locales[locale] }}
			</div>
			<ArrowDownIcon class="icon" />
		</div>

		<ul
			class="absolute flex flex-col items-start w-full bg-white border border-gray-500 rounded-md text-black cursor-pointer shadow"
			v-if="showDropdown"
		>
			<li
				v-for="([loc, lang], i) in Object.entries(locales)"
				:key="loc"
				@click="switchLanguage(loc)"
				class="flex items-center gap-3 w-full px-2 hover:bg-[wheat]/30 transition-colors duration-200 ease-out py-1"
				:class="{ 'bg-[wheat]/80': loc === locale }"
			>
				<img :src="loc === 'en' ? UK : GE" alt="country-flag" class="w-4 h-4" />
				{{ lang }}
			</li>
		</ul>
	</div>
</template>
