<script setup>
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue';
import SearchBar from '@/components/common/SearchBar.vue';
</script>

<template>
	<header
		class="sm:mt-24 sm:w-[calc(100%-160px)] sm:mx-20 sm:px-8 px-2 py-4 sm:py-6 rounded-lg bg-black/80 border border-gray-400 shadow-md"
	>
		<div class="flex flex-wrap items-center justify-center gap-2 sm:justify-between">
			<SearchBar />
			<LanguageSwitcher />
		</div>
	</header>
</template>
