<script setup>
import CloseIcon from '@/components/icons/CloseIcon.vue';
import { capitalize } from 'vue';

defineProps({
	text: String,
	closeHandler: Function,
});
</script>

<template>
	<div class="flex items-center space-between gap-2 w-max py-1 pl-2 pr-1 rounded-lg border border-wheat select-none">
		<span class="text-wheat text-sm font-semibold">{{ capitalize(text) }}</span>
		<CloseIcon class="w-4 h-4 cursor-pointer" @click="() => closeHandler(text)" />
	</div>
</template>
