<script setup>
defineProps({
	tag: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<li class="tag">{{ tag }}</li>
</template>

<style scoped>
.tag {
	background-color: #2e2e2e;
	color: #b19d7d;
	border: 1px solid #9f8962;
	padding: 5px 15px;
	margin: 5px;
	display: inline-block;
	border-radius: 8px;
	font-family: 'Garamond', serif;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	cursor: pointer;
	min-width: max-content;
}

@media screen and (max-width: 640px) {
	.tag {
		font-size: 0.8em;
	}
}

.tag:hover {
	color: #d4c9a1;
	transform: scale(1.1);
	box-shadow: 0 0 10px #c6a965;
}
</style>
