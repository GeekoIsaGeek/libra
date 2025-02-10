<script setup>
import BookForm from '@/components/manage-books/BookForm.vue';
import { useRoute } from 'vue-router';
import useBookStore from '@/stores/BookStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const { slug } = useRoute().params;
const { books } = storeToRefs(useBookStore());
const bookDetails = computed(() => books.value?.find((book) => book?.slug === slug));
</script>

<template>
	<BookForm mode="edit" :bookData="bookDetails" />
</template>
