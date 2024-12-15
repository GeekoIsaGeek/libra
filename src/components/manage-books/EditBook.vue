<script setup>
import BookForm from '@/components/manage-books/BookForm.vue';
import Books from '/dummy-books.json';
import { useRoute } from 'vue-router';

const bookDetails = Books.books[1];
const { slug } = useRoute().params;
</script>

<template>
	<BookForm mode="edit" :bookData="bookDetails" />
</template>
