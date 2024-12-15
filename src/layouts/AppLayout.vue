<script setup>
import SideBar from '@/components/common/SideBar.vue';
</script>

<template>
	<div class="flex min-h-screen w-full bg-almostBlack text-white">
		<SideBar />
		<div
			class="flex flex-col items-start w-full sm:w-[calc(100%-6rem)] lg:w-[calc(100%-10rem)] mx-auto sm:mx-10 lg:mx-20"
		>
			<slot />
		</div>
	</div>
</template>
