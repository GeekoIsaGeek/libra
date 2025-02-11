<script setup>
import Header from '@/components/common/Header.vue';
import BookListing from '@/components/book-listing/BookListing.vue';
import { useFilterStore } from '@/stores/FilterStore';
import { storeToRefs } from 'pinia';
import HeroQuotes from '@/components/home/HeroQuotes.vue';

const { isAnyFilterSet } = storeToRefs(useFilterStore());
</script>

<template>
	<Header />
	<BookListing v-if="isAnyFilterSet" />
	<HeroQuotes v-else />
</template>
