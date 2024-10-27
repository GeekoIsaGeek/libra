<script setup>
import GE from '@/assets/images/georgia.png';
import UK from '@/assets/images/united-kingdom.png';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue';
import useSetLocale from '@/composables/useSetLocale';

const { setLocale } = useSetLocale();

const switchLanguage = () => {};
</script>

<template>
	<div
		class="flex items-center gap-4 bg-white border border-gray-500 rounded-md px-2 py-1 text-black select-none cursor-pointer hover:bg-white/90 transition-colors duration-200 ease-out shadow"
	>
		<div class="flex items-center gap-3" @click="switchLanguage">
			<img :src="GE" class="w-4 h-4" />
			Georgian
		</div>
		<ArrowDownIcon class="icon" />
	</div>
</template>
