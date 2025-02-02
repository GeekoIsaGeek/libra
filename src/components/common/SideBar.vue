<script setup>
import { defineEmits } from 'vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';

defineEmits(['close']);
</script>

<template>
	<div class="sidebar">
		<h1>
			<RouterLink :to="{ name: 'home' }">Libra</RouterLink>
		</h1>
		<div class="separator"></div>
		<CloseIcon class="absolute sm:hidden fill-gold w-8 h-8 right-1 top-5" @click="() => $emit('close')" />
	</div>
</template>

<style scoped>
.sidebar {
	min-width: max-content;
	min-height: 100vh;
	background-color: rgba(20, 20, 20, 0.98);
	backdrop-filter: blur(5px);
	box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}
.separator {
	width: 100%;
	height: 1px;
	background-color: #c6a965;
	margin: 20px 0;
}

.sidebar h1 {
	font-family: 'Garamond', serif;
	color: #c6a965;
	font-size: 2.5em;
	margin: 0;
	padding: 0 10px 15px 10px;
	text-transform: uppercase;
	margin-top: 36px;
	letter-spacing: 2px;
	padding-bottom: 10px;
	padding: 0 40px;
}
@media screen and (max-width: 640px) {
	.sidebar {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 10;
	}
}
</style>
