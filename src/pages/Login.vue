<script setup>
import FormInput from '@/components/UI/FormInput.vue';
import SubmitButton from '@/components/UI/SubmitButton.vue';
import AuthForm from '@/components/forms/AuthForm.vue';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useUserStore } from '@/stores/UserStore';
import Error from '@/components/UI/Error.vue';
import { useRouter } from 'vue-router';

const loginFormData = reactive({
	email: '',
	password: '',
});

const error = ref(null);
const { push: navigate } = useRouter();

const { setUser } = useUserStore();

const handleLogin = async (event) => {
	event.preventDefault();
	error.value = null;

	try {
		const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
			email: loginFormData.email,
			password: loginFormData.password,
		});
		setUser(response.data?.user, response.data?.access_token);
		navigate({ name: 'home' });
	} catch (responseError) {
		error.value = responseError?.response?.data?.error || 'An error occurred during login';
		console.error(responseError);
	}
};
</script>

<template>
	<AuthForm :submitHandler="handleLogin">
		<Error v-if="error">{{ error }}</Error>
		<FormInput
			name="email"
			type="email"
			:label="$t('auth.email')"
			:placeholder="$t('auth.emailPlaceholder')"
			:inputHandler="(value) => (loginFormData.email = value)"
			:value="loginFormData.email"
		/>
		<FormInput
			name="password"
			type="password"
			:label="$t('auth.password')"
			:placeholder="$t('auth.passwordPlaceholder')"
			:inputHandler="(value) => (loginFormData.password = value)"
			:value="loginFormData.password"
		/>

		<SubmitButton :content="$t('auth.login')" class="mt-5" />
		<RouterLink to="/register" class="text-fadedPrimary underline hover:text-gray-400">{{
			$t('auth.register')
		}}</RouterLink>
	</AuthForm>
</template>
