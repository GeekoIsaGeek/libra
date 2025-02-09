<script setup>
import BookForm from '@/components/manage-books/BookForm.vue';
import Books from '/dummy-books.json';
import { useRoute } from 'vue-router';

const { slug } = useRoute().params;
const bookDetails = Books.books.find((book) => book.slug === slug);
</script>

<template>
	<BookForm mode="edit" :bookData="bookDetails" />
</template>
