<script setup>
defineProps({
	label: String,
});
</script>

<template>
	<div class="flex flex-col min-w-1/2">
		<div
			class="bg-almostBlack/20 w-full flex items-center justify-start px-3 text-normal text-center py-1.5 border border-gold rounded-t-md"
		>
			{{ label }}
		</div>
		<div
			class="items-center border border-gold resize-none text-wheat outline-none border-t-0 py-2 px-3 rounded-b-md w-full bg-lightBrown/10 placeholder:text-wheat/80"
		>
			<slot />
		</div>
	</div>
</template>
