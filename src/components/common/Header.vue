<script setup>
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue';
import SearchBar from '@/components/common/SearchBar.vue';
</script>

<template>
	<header
		class="w-full lg:px-8 sm:mt-8 px-2 sm:px-4 py-6 sm:rounded-lg bg-[#1e1e1ef2] border-b sm:border border-gold shadow-md"
	>
		<div class="flex flex-wrap items-center justify-center gap-4 lg:justify-between">
			<SearchBar />
			<LanguageSwitcher />
		</div>
	</header>
</template>
