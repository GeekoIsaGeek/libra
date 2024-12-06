<script setup>
const props = defineProps({
	off: {
		type: Boolean,
		default: false,
	},
	duration: {
		type: Number,
		default: 200,
	},
	transitionClass: {
		type: String,
	},
});

const activeClass = `transition-all duration-${props.duration} ease-out`;
const enterLeaveClass = `opacity-0 translate-y-[-10px] ${props?.transitionClass || ''}`;
</script>

<template>
	<Transition
		:enter-from-class="off ? '' : enterLeaveClass"
		:leave-to-class="off ? '' : enterLeaveClass"
		:enter-active-class="off ? '' : activeClass"
		:leave-active-class="off ? '' : activeClass"
		appear
	>
		<slot />
	</Transition>
</template>
