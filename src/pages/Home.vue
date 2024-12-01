<script setup>
import Header from '@/components/common/Header.vue';
import BookListing from '@/components/book-listing/BookListing.vue';
import { useFilterStore } from '@/stores/FilterStore';

const { showListing } = useFilterStore();
</script>

<template>
	<Header />
	<BookListing v-if="showListing" />
</template>
