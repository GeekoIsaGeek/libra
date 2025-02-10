import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import DetailsPage from '@/pages/DetailsPage.vue';
import AddBook from '@/components/manage-books/AddBook.vue';
import EditBook from '@/components/manage-books/EditBook.vue';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import { useUserStore } from '@/stores/UserStore';
import { storeToRefs } from 'pinia';
import { getJwtToken } from '@/helpers';
import About from '@/pages/About.vue';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
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
			path: '/edit/:slug',
			component: EditBook,
			name: 'edit-book',
		},
		{
			path: '/login',
			component: Login,
			name: 'login',
		},
		{
			path: '/about',
			component: About,
			name: 'about',
		},
		{
			path: '/register',
			component: Register,
			name: 'register',
		},
		{
			path: '/:pathMatch(.*)*',
			component: NotFound,
			name: 'not-found',
		},
	],
});

router.beforeEach((to, from, next) => {
	const { isAuthenticated } = storeToRefs(useUserStore());

	if ((to.name === 'login' || to.name === 'register') && isAuthenticated.value) {
		next({ name: 'home' });
	} else if ((to.name === 'add-book' || to.name === 'edit-book') && !getJwtToken()) {
		next({ name: 'login' });
	} else {
		next();
	}
});

export default router;
