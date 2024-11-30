<script setup>
import Books from '/dummy-books.json';
import BookCard from '@/components/common/BookCard.vue';

const books = Books.books;
</script>

<template>
	<div class="mt-10 flex gap-8 flex-wrap items-center">
		<BookCard v-for="book in books" :key="book?.id || book?.slug" :book="book" />
	</div>
</template>
