<script setup>
import { useFilterStore } from '@/stores/FilterStore';
import BookCard from '@/components/common/BookCard.vue';
import { storeToRefs } from 'pinia';
import HeroQuotes from '@/components/home/HeroQuotes.vue';

const { filteredBooks, isAnyFilterSet, books } = storeToRefs(useFilterStore());
</script>

<template>
	<div class="mt-2 py-10 p-4 flex gap-7 flex-wrap items-center justify-center 2xl:justify-start" v-if="isAnyFilterSet">
		<BookCard v-for="book in isAnyFilterSet ? filteredBooks : books" :key="book?.id || book?.slug" :book="book" />
	</div>
	<HeroQuotes v-else />
</template>
