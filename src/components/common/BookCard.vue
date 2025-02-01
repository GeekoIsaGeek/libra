<script setup>
import useLocale from '@/composables/useLocale.js';
import { RouterLink } from 'vue-router';

const props = defineProps({
	book: {
		type: Object,
		required: true,
	},
	isSmall: {
		type: Boolean,
		default: false,
	},
});

const { locale } = useLocale();
</script>

<template>
	<div :class="`book ${isSmall && 'mini'}`">
		<RouterLink :to="`books/${book?.slug}`" class="book-title">
			<div class="img-wrapper">
				<img :src="book?.image" :alt="book?.title?.[locale]" :class="`${isSmall && 'mini'}`" />
			</div>
			<div :class="`book-info ${isSmall && 'mini'}`">
				<p :class="`title ${isSmall && 'mini'}`">{{ book?.title?.[locale] }}</p>
				<p :class="`author ${isSmall && 'mini'}`">{{ book?.author?.[locale] }}</p>
			</div>
		</RouterLink>
	</div>
</template>

<style scoped>
.book {
	width: 210px;
	height: 310px;
	background-color: rgba(20, 20, 20, 0.8);
	color: #d4c9a1;
	padding: 15px;
	text-align: center;
	border: 2px solid #9f8962;
	border-radius: 10px;
	transition: transform 0.4s, box-shadow 0.4s;
	cursor: pointer;
	position: relative;
	display: flex;
	flex-direction: column;
}
.book-info > p {
	word-wrap: break-word;
}
.book.mini {
	width: 100px;
	height: 150px;
	padding: 7px;
	background-color: rgba(20, 20, 20, 0.9);
}

.book:hover {
	transform: scale(1.05);
	box-shadow: 0 0 15px #c6a965;
}

.book img {
	height: 200px;
	width: 100%;
	border-bottom: 1px solid #9f8962;
	margin-bottom: 10px;
}
.book img.mini {
	height: 84px;
	object-fit: cover;
	margin-bottom: 0px;
	border-radius: 3px;
}
.book-info {
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	max-height: 80px;
}

.book-info.mini {
	max-height: 44px;
}

.book-info .title {
	font-weight: bold;
	font-size: 1.1em;
	font-family: 'Garamond', serif;
	padding-top: 5px;
}

.book-info .title.mini {
	font-size: 0.8em;
	line-height: normal;
}

.book-info .author {
	font-size: 0.9em;
	font-style: italic;
	min-height: max-content;
}

.book-info .author.mini {
	display: none;
}
</style>
