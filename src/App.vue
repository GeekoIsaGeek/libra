<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import axios from 'axios';
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import { getJwtToken } from '@/helpers';
import { TOKEN_HAS_EXPIRED } from '@/config/constants';
import { useRouter } from 'vue-router';

const { setUser } = useUserStore();
const { push: navigate } = useRouter();

onMounted(async () => {
	const token = getJwtToken();
	if (token) {
		try {
			const response = await axios.get(`${import.meta.env.VITE_API_URL}/user`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setUser(response.data);
		} catch (error) {
			if (error?.response?.status === 401 && error?.response?.data?.msg === TOKEN_HAS_EXPIRED) {
				localStorage.removeItem('jwt');
				navigate({ name: 'login' });
			} else {
				console.error(error);
			}
		}
	}
});
</script>

<template>
	<AppLayout>
		<RouterView />
	</AppLayout>
</template>
