import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import DetailsPage from '@/pages/DetailsPage.vue';
import AddBook from '@/components/add/AddBook.vue';

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home',
		},
		{
			path: '/books/:slug',
			component: DetailsPage,
			name: 'details',
		},
		{
			path: '/add',
			component: AddBook,
			name: 'add-book',
		},
		{
			path: '/:pathMatch(.*)*',
			component: NotFound,
			name: 'not-found',
		},
	],
});
