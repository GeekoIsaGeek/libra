<script setup>
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue';
import SearchBar from '@/components/common/SearchBar.vue';
</script>

<template>
	<header
		class="w-full lg:px-8 lg:mt-6 px-2 sm:px-4 py-6 lg:rounded-lg bg-[#1b1b1be5] border-b lg:border border-gold shadow-md lg:w-[calc(100%-4rem)] self-center"
	>
		<div class="flex flex-wrap items-center justify-center gap-4 lg:justify-between">
			<SearchBar />
			<LanguageSwitcher />
		</div>
	</header>
</template>
