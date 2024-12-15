<script setup>
import BookForm from '@/components/manage-books/BookForm.vue';

const initialObject = {
	title: { en: '', ka: '' },
	author: { en: '', ka: '' },
	description: { en: '', ka: '' },
	year: '',
	pages: '',
	tags: ['romance'],
	language: '',
	image: '',
};
</script>

<template>
	<BookForm mode="add" :bookData="initialObject" />
</template>
