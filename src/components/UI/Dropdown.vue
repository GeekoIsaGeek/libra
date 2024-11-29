<script setup>
defineProps({
	options: {
		type: Array,
		required: true,
	},
	selectHandler: {
		type: Function,
		required: true,
	},
	showDropdown: {
		type: Boolean,
		required: true,
	},
	useDropdownOnly: {
		type: Boolean,
	},
	lastOptionClass: {
		type: String,
	},
	optionsWrapperClass: {
		type: String,
	},
	optionClass: {
		type: String,
	},
});

defineEmits(['update:showDropdown']);
</script>

<template>
	<div class="relative">
		<div
			class="flex items-center justify-between gap-4 bg-white border border-gray-500 rounded-md px-2 py-1 text-black select-none cursor-pointer hover:bg-white/90 transition-colors duration-200 ease-out shadow min-w-[10rem]"
			@click="$emit('update:showDropdown', !showDropdown)"
			v-if="!useDropdownOnly"
		>
			<slot />
		</div>

		<ul
			class="absolute flex flex-col items-start w-full bg-white border border-gray-500 rounded-md text-black cursor-pointer shadow"
			:class="optionsWrapperClass || ''"
			v-if="showDropdown && options.length > 0"
		>
			<li
				v-for="(option, i) in options"
				:key="option?.id || option"
				@click="() => selectHandler(option)"
				class="flex items-center gap-3 w-full px-2 hover:bg-[wheat]/50 transition-colors duration-200 ease-out py-1"
				:class="[optionClass && optionClass, lastOptionClass && i === options.length - 1 ? lastOptionClass : '']"
			>
				<slot name="option" :option="option" />
			</li>
		</ul>
	</div>
</template>
