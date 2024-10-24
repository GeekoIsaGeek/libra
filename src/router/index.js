import { createRouter, createWebHistory } from 'vue-router';
import Greeting from '@/components/Greeting.vue';
import NotFound from '@/pages/NotFound.vue';

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: Greeting,
		},
		{
			path: '/:pathMatch(.*)*',
			component: NotFound,
		},
	],
});
