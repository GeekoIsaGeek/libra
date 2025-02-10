<script setup>
import SideBar from '@/components/common/SideBar.vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const displaySidebar = ref(window.innerWidth > 1024);

const route = useRoute();

const handleResize = () => {
	if (window.innerWidth > 1024) {
		displaySidebar.value = true;
	}
};

onMounted(() => {
	window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', handleResize);
});
</script>

<template>
	<div class="flex min-h-screen w-full text-white relative">
		<MenuIcon
			class="w-8 h-8 md:w-10 md:h-10 absolute right-3 top-3 cursor-pointer lg:hidden"
			:class="{ '!top-[84px]': route.name === 'home' }"
			@click="displaySidebar = !displaySidebar"
		/>
		<Transition
			enter-active-class="transition-all duration-300 ease-in-out"
			leave-active-class="transition-all duration-300 ease-in-out"
			enter-from-class="transform -translate-x-full opacity-0"
			leave-to-class="transform -translate-x-full opacity-0"
		>
			<SideBar v-show="displaySidebar" @close="() => (displaySidebar = false)" />
		</Transition>

		<div class="flex flex-col items-start w-full mx-auto lg:pl-[250px]">
			<slot />
		</div>
	</div>
</template>
