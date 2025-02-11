<script setup>
import { useFilterStore } from '@/stores/FilterStore';
import BookCard from '@/components/common/BookCard.vue';
import { storeToRefs } from 'pinia';

const { filteredBooks, isAnyFilterSet, books } = storeToRefs(useFilterStore());
</script>

<template>
	<div class="py-10 p-4 flex gap-6 flex-wrap items-center justify-center 2xl:justify-start">
		<BookCard v-for="book in isAnyFilterSet ? filteredBooks : books" :key="book?.id || book?.slug" :book="book" />
	</div>
</template>
