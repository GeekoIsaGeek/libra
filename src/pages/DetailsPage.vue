<script setup>
import { useRoute } from 'vue-router';
import useLocale from '@/composables/useLocale';
import Books from '/dummy-books.json';

const { params } = useRoute();
const { locale } = useLocale();

const book = Books.books.find((book) => book?.slug === params?.slug);
</script>

<template>
	<h1 class="text-center text-2xl mt-10">{{ book?.title?.[locale] }}</h1>
	<p class="w-3/5 mx-auto mt-4">{{ book?.description?.[locale] }}</p>
</template>
