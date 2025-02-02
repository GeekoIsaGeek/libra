<script setup>
import logo from '/libra.svg';

defineProps({
	submitHandler: Function,
});
</script>

<template>
	<div class="flex flex-col gap-20 items-center justify-center desktop:px-20 desktop:py-32 h-full w-full">
		<!-- <img :src="logo" class="w-[50px] mb-10" /> -->
		<form @submit="submitHandler" class="desktop:w-[40%] w-[90%] flex flex-col items-center justify-center gap-3">
			<slot />
		</form>
	</div>
</template>
