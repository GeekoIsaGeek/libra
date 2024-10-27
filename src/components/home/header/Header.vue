<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue';
import FiltersIcon from '@/components/icons/FiltersIcon.vue';
import LanguageSwitcher from '@/components/home/header/LanguageSwitcher.vue';
</script>

<template>
	<header class="mt-24 w-[calc(100%-160px)] mx-20 px-8 py-6 rounded-lg bg-black/80 border border-gray-400 shadow-md">
		<div class="flex items-center justify-between">
			<div class="px-4 py-2 flex items-center gap-2 bg-white border border-gray-500 w-[60%] shadow rounded-full">
				<SearchIcon class="icon" />
				<input
					type="text"
					class="w-full text-black outline-none placeholder:text-sm"
					:placeholder="$t('search.inputPlaceholder') + '...'"
				/>
				<FiltersIcon class="icon" />
			</div>

			<LanguageSwitcher />
		</div>
	</header>
</template>
