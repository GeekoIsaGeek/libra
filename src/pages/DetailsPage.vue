<script setup>
import { useRoute } from 'vue-router';
import useLocale from '@/composables/useLocale';
import Books from '/dummy-books.json';
import GenreTag from '@/components/common/GenreTag.vue';
import { capitalize } from 'vue';

const { params } = useRoute();
const { locale } = useLocale();

const book = Books.books.find((book) => book?.slug === params?.slug);
</script>

<template>
	<div class="flex flex-col items-center mt-10">
		<h1 class="text-center text-3xl">{{ book?.title?.[locale] }}</h1>
		<img class="w-[300px] h-[450px] my-8 rounded-sm" :src="book?.image" :alt="book?.title?.[locale]" />
		<p class="px-10 md:w-2/5 mx-auto">{{ book?.description?.[locale] }}</p>

		<ul class="flex gap-2 items-center justify-center mt-5 shadow">
			<GenreTag
				v-for="tag in book?.tags"
				:key="tag"
				class="bg-gold text-black px-2 py-1 rounded-md"
				:tag="capitalize(tag)"
			/>
		</ul>
	</div>
</template>
