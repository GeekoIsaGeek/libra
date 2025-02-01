<script setup lang="ts">
defineProps<{
	content: string;
}>();
</script>

<template>
	<button
		type="submit"
		class="w-full px-[5dvw] sm:px-8 py-1.5 bg-green-950 hover:bg-green-900 text-white transition-colors ease-out rounded-[7px]"
	>
		{{ content }}
	</button>
</template>
