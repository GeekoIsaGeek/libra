<script setup>
import Greeting from '@/components/Greeting.vue';
import { RouterView } from 'vue-router';
import AppLayout from '@/layouts/AppLayout.vue';
</script>

<template>
	<AppLayout>
		<RouterView />
	</AppLayout>
</template>
