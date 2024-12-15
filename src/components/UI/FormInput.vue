<script setup>
defineProps({
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
});
</script>

<template>
	<div class="flex h-max shadow-md">
		<label
			:for="name"
			class="bg-almostBlack/20 w-[10rem] flex items-center justify-center px-3 text-normal text-center py-1.5 border border-gold rounded-l-md"
			>{{ label }}</label
		>
		<textarea
			v-if="type === 'textarea'"
			:type="type"
			:name="name"
			:placeholder="placeholder"
			:value="value"
			@input="(event) => inputHandler(event.target.value)"
			class="border h-[80px] border-gold resize-none text-wheat outline-none border-l-0 py-1.5 px-3 rounded-r-md w-full bg-lightBrown/10 placeholder:text-wheat/80"
		>
		</textarea>
		<input
			v-else
			:type="type"
			:name="name"
			:placeholder="placeholder"
			:value="value"
			@input="(event) => inputHandler(event.target.value)"
			class="border border-gold text-wheat outline-none border-l-0 py-1.5 px-3 rounded-r-md w-full bg-lightBrown/10 placeholder:text-wheat/80"
		/>
	</div>
</template>
