<script setup>
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue';
import TransitionWrapper from '@/layouts/TransitionWrapper.vue';

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
	withoutAnimation: {
		type: Boolean,
	},
	animationDuration: {
		type: Number,
	},
});

defineEmits(['update:showDropdown']);
</script>

<template>
	<div class="relative">
		<div
			class="flex items-center justify-between gap-4 bg-white border border-gray-500 rounded-lg px-2 py-1 text-black select-none cursor-pointer hover:bg-white/90 transition-colors duration-200 ease-out shadow min-w-[10.25rem]"
			@click="$emit('update:showDropdown', !showDropdown)"
			v-if="!useDropdownOnly"
		>
			<slot />
			<ArrowDownIcon :class="`icon ${showDropdown ? 'rotate-180' : ''}`" />
		</div>

		<TransitionWrapper :off="withoutAnimation" duration="animationDuration">
			<ul
				class="absolute flex flex-col items-start w-full bg-white border border-gray-500 rounded-md text-black cursor-pointer shadow max-h-48 overflow-y-auto z-30"
				:class="optionsWrapperClass || ''"
				v-if="showDropdown"
				@mouseleave="$emit('update:showDropdown', false)"
			>
				<li
					v-for="(option, i) in options"
					:key="option?.id || option"
					@click="() => selectHandler(option)"
					class="flex items-center gap-3 w-full px-2 hover:bg-gold/60 transition-colors duration-200 ease-out py-1"
					:class="[optionClass && optionClass, lastOptionClass && i === options.length - 1 ? lastOptionClass : '']"
				>
					<slot name="option" :option="option" />
				</li>

				<p class="w-full !rounded-b-3xl py-3 px-4 text-center" v-if="!options.length">
					{{ $t('general.nothingFound') }}
				</p>
			</ul>
		</TransitionWrapper>
	</div>
</template>
