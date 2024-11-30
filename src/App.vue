<script setup>
import { RouterView } from 'vue-router';
import AppLayout from '@/layouts/AppLayout.vue';
import BookListing from './components/book-listing/BookListing.vue';
</script>

<template>
	<AppLayout>
		<RouterView />
	</AppLayout>
</template>
