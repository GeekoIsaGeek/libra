<script setup>
import FormInput from '@/components/UI/FormInput.vue';
import SubmitButton from '@/components/UI/SubmitButton.vue';
import AuthForm from '@/components/forms/AuthForm.vue';
import { reactive } from 'vue';
import { clearState } from '@/helpers';
import useValidator from '@/composables/useValidator';
import axios from 'axios';

const registrationForm = reactive({
	email: '',
	username: '',
	password: '',
	passwordConfirmation: '',
});

const { validateRegistration, isFormTouched, isFormValid, errors } = useValidator();

const handleRegistration = async (event) => {
	event.preventDefault();
	clearState(errors);

	try {
		validateRegistration(registrationForm);

		if (isFormValid.value) {
			await axios.post(`${import.meta.env.VITE_API_URL}/users`, {
				email: registrationForm.email,
				username: registrationForm.username,
				password: registrationForm.password,
			});
		}
	} catch (error) {
		console.error(error);
	}
};

const handleInput = (key, value) => {
	registrationForm[key] = value;
	isFormTouched.value = true;
};
</script>

<template>
	<AuthForm :submitHandler="handleRegistration">
		<FormInput
			name="email"
			type="email"
			:label="$t('auth.email')"
			:placeholder="$t('auth.emailPlaceholder')"
			:inputHandler="(value) => handleInput('email', value)"
			:error="errors.email"
			:value="registrationForm.email"
		/>
		<FormInput
			name="username"
			type="text"
			:label="$t('auth.username')"
			:placeholder="$t('auth.usernamePlaceholder')"
			:inputHandler="(value) => handleInput('username', value)"
			:error="errors.username"
			:value="registrationForm.username"
		/>
		<FormInput
			name="password"
			type="password"
			:label="$t('auth.password')"
			:placeholder="$t('auth.passwordPlaceholder')"
			:inputHandler="(value) => handleInput('password', value)"
			:error="errors.password"
			:value="registrationForm.password"
		/>
		<FormInput
			name="password_confirmation"
			type="password"
			:label="$t('auth.passwordConfirmation')"
			:placeholder="$t('auth.passwordConfirmationPlaceholder')"
			:inputHandler="(value) => handleInput('passwordConfirmation', value)"
			:error="errors.passwordConfirmation"
			:value="registrationForm.passwordConfirmation"
		/>
		<SubmitButton :content="$t('auth.register')" class="mt-5 w-1/2" />
		<RouterLink to="/login" class="underline hover:text-gray-400">{{ $t('auth.login') }}</RouterLink>
	</AuthForm>
</template>
