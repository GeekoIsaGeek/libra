<script setup>
import FormInput from '@/components/UI/FormInput.vue';
import SubmitButton from '@/components/UI/SubmitButton.vue';
import AuthForm from '@/components/forms/AuthForm.vue';
import { ref, reactive } from 'vue';

const email = ref('');
const password = ref('');

const initialErrors = {
	username: '',
	password: '',
	passwordConfirmation: '',
};

const errors = reactive(initialErrors);

const handleLogin = async (event) => {
	event.preventDefault();

	try {
		console.log(email.value, password.value);
	} catch (error) {
		console.error(error);
	}
};
</script>

<template>
	<AuthForm :submitHandler="handleLogin" :errors="Object.entries(errors)">
		<FormInput
			name="email"
			type="email"
			:label="$t('auth.email')"
			:placeholder="$t('auth.emailPlaceholder')"
			:inputHandler="(value) => (email = value)"
		/>
		<FormInput
			name="password"
			type="password"
			:label="$t('auth.password')"
			:placeholder="$t('auth.passwordPlaceholder')"
			:inputHandler="(value) => (password = value)"
		/>
		<SubmitButton :content="$t('auth.login')" class="mt-5 w-1/2" />
		<RouterLink to="/register" class="text-fadedPrimary underline hover:text-gray-400">{{
			$t('auth.register')
		}}</RouterLink>
	</AuthForm>
</template>
