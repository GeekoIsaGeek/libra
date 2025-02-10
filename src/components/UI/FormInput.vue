<script setup>
import Error from '@/components/UI/Error.vue';

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: 'text',
	},
	value: {
		type: String,
	},
	name: {
		type: String,
	},
	inputHandler: {
		type: Function,
	},
	error: {
		type: String,
	},
});
</script>

<template>
	<div class="flex flex-col gap-2 w-full">
		<div class="flex h-max shadow-md border border-lightBrown rounded-md" :class="{ 'border-pinkishRed': error }">
			<label
				:for="name"
				class="bg-almostBlack/40 w-[10rem] flex items-center justify-center px-3 text-normal text-center py-1.5 border-r border-r-gold rounded-l-md select-none min-w-max"
				:class="{ '!border-pinkishRed': error }"
			>
				{{ label }}</label
			>
			<textarea
				v-if="type === 'textarea'"
				:type="type"
				:name="name"
				:placeholder="placeholder"
				:value="value"
				@input="(event) => inputHandler(event.target.value)"
				class="h-[80px] resize-none text-wheat outline-none py-1.5 px-3 w-full bg-lightBrown/20 placeholder:text-wheat/80"
			>
			</textarea>
			<input
				v-else
				:type="type"
				:name="name"
				:placeholder="placeholder || '...'"
				:value="value"
				@input="(event) => inputHandler(event.target.value)"
				class="text-wheat outline-none py-1.5 px-3 w-full bg-lightBrown/20 placeholder:text-wheat/80"
			/>
		</div>
		<Error v-if="error">{{ error }}</Error>
	</div>
</template>
