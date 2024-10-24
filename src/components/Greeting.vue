<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/stores/TestStore.js';

const appStore = useAppStore();
</script>

<template>
	<h1 class="text-center text-4xl">{{ appStore.projectName }} is gonna be a next-gen E-library!</h1>
</template>
