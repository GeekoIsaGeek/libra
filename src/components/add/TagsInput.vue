<script setup>
import SelectGenre from '@/components/common/SelectGenre.vue';
</script>

<template>
	<div class="flex">
		<div
			class="bg-almostBlack/20 w-[10rem] flex items-center justify-center px-3 text-normal text-center py-1.5 border border-gold rounded-l-md"
		>
			Tags
		</div>
		<div
			class="border border-gold resize-none text-wheat outline-none border-l-0 py-1.5 px-3 rounded-r-md w-full bg-lightBrown/10 placeholder:text-wheat/80"
		>
			<input type="text" class="rounded-md outline-none text-black px-2 py-1" placeholder="Custom tag..." />
			<SelectGenre class="w-max mt-2" />
		</div>
	</div>
</template>
