<script setup>
import FormInput from '@/components/UI/FormInput.vue';
import SubmitButton from '@/components/UI/SubmitButton.vue';
import AuthForm from '@/components/forms/AuthForm.vue';
import { reactive } from 'vue';

const loginFormData = reactive({
	email: '',
	password: '',
});

const handleLogin = async (event) => {
	event.preventDefault();

	try {
		console.log(loginFormData);
	} catch (error) {
		console.error(error);
	}
};
</script>

<template>
	<AuthForm :submitHandler="handleLogin">
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
