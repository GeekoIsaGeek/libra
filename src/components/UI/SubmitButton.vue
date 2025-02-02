<script setup lang="ts">
defineProps<{
	content: string;
}>();
</script>

<template>
	<button
		type="submit"
		class="w-1/2 min-w-max px-[5dvw] sm:px-8 py-1.5 bg-green-800 hover:bg-green-900 text-white transition-colors ease-out rounded-[7px]"
	>
		{{ content }}
	</button>
</template>
