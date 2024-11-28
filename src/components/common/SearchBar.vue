<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue';
import FiltersIcon from '@/components/icons/FiltersIcon.vue';
import Books from '/dummy-books.json';

console.log(Books);
</script>

<template>
	<div class="px-4 py-2 flex items-center gap-2 bg-white border border-gray-500 w-[60%] shadow rounded-full">
		<SearchIcon class="icon" />
		<input
			type="text"
			class="w-full text-black outline-none placeholder:text-sm"
			:placeholder="$t('search.inputPlaceholder') + '...'"
		/>
		<FiltersIcon class="icon" />
	</div>
</template>
