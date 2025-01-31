<script setup>
import Header from '@/components/common/Header.vue';
import BookListing from '@/components/book-listing/BookListing.vue';
import { useFilterStore } from '@/stores/FilterStore';
import { storeToRefs } from 'pinia';

const { isAnyFilterSet } = storeToRefs(useFilterStore());
</script>

<template>
	<Header />
	<!-- This should be rendered conditionally -->
	<BookListing />
</template>
