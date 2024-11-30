import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import DetailsPage from '@/pages/DetailsPage.vue';

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/books/:slug',
			component: DetailsPage,
		},
		{
			path: '/:pathMatch(.*)*',
			component: NotFound,
		},
	],
});
