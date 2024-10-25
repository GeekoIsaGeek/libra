<script setup>
import { useAppStore } from '@/stores/TestStore.js';

const appStore = useAppStore();
</script>

<template>
	<h1 class="text-center text-4xl">{{ appStore.projectName }} {{ $t('greeting.text') }}!</h1>
</template>
