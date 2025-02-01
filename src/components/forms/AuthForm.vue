<script setup>
import Error from '@/components/UI/Error.vue';
import logo from '/libra.svg';

defineProps({
	submitHandler: Function,
	errors: Array,
});
</script>

<template>
	<div class="flex flex-col gap-20 items-center justify-center px-20 py-32 h-full w-full">
		<!-- <img :src="logo" class="w-[50px] mb-10" /> -->
		<form @submit="submitHandler" class="desktop:w-3/4 flex flex-col items-center justify-center gap-3">
			<div class="flex flex-col gap-2" v-if="errors.length > 0">
				<Error v-for="[key, message] in errors">{{ message }}</Error>
			</div>
			<slot />
		</form>
	</div>
</template>
