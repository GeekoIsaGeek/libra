<script setup>
import { useFilterStore } from '@/stores/FilterStore';
import BookCard from '@/components/common/BookCard.vue';
import { storeToRefs } from 'pinia';

const { filteredBooks, isAnyFilterSet, books } = storeToRefs(useFilterStore());
</script>

<template>
	<div class="mt-10 flex gap-8 flex-wrap items-center">
		<BookCard v-for="book in isAnyFilterSet ? filteredBooks : books" :key="book?.id || book?.slug" :book="book" />
	</div>
</template>
