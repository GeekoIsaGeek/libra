<script setup>
import BookCard from '@/components/common/BookCard.vue';

const recentlyViewedBooks = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
</script>

<template>
	<div class="w-full" v-if="recentlyViewedBooks?.length > 0">
		<h2 class="border-b border-b-black w-full pb-1 mb-3 font-medium">{{ $t('filters.recentlyViewed') }}</h2>
		<ul class="flex gap-2 flex-wrap">
			<BookCard v-for="book in recentlyViewedBooks" :key="book?.id" :book="book" class="bg-white" isSmall />
		</ul>
	</div>
</template>
