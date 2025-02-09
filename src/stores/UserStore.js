import { defineStore } from 'pinia';
import { setJwtToken } from '@/helpers';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
	const user = ref(null);
	const isAuthenticated = computed(() => !!user.value?.username);

	const setUser = (newUser, accessToken) => {
		if (accessToken) {
			setJwtToken(accessToken);
		}
		user.value = newUser;
	};

	const clearUser = () => {
		user.value = null;
		localStorage.removeItem('jwt');
	};

	return { user, isAuthenticated, setUser, clearUser };
});
