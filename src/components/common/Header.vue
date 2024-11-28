<script setup>
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue';
import SearchBar from '@/components/common/SearchBar.vue';
</script>

<template>
	<header class="mt-24 w-[calc(100%-160px)] mx-20 px-8 py-6 rounded-lg bg-black/80 border border-gray-400 shadow-md">
		<div class="flex items-center justify-between">
			<SearchBar />
			<LanguageSwitcher />
		</div>
	</header>
</template>
