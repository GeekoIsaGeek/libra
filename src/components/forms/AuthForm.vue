<script setup>
import logo from '/libra.svg';

defineProps({
	submitHandler: Function,
});
</script>

<template>
	<div class="flex flex-col gap-20 items-center justify-center lg:px-20 lg:py-32 h-full w-full">
		<!-- <img :src="logo" class="w-[50px] mb-10" /> -->
		<form
			@submit="submitHandler"
			class="lg:w-[60%] xl:w-[40%] 2xl:w-[30%] w-[90%] sm:w-[50%] flex flex-col items-center justify-center gap-3"
		>
			<slot />
		</form>
	</div>
</template>
