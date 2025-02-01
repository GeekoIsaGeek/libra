<script setup>
import FormInput from '@/components/UI/FormInput.vue';
import SubmitButton from '@/components/UI/SubmitButton.vue';
import AuthForm from '@/components/forms/AuthForm.vue';
import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const initialErrors = {
	username: '',
	password: '',
	passwordConfirmation: '',
};

const errors = reactive(initialErrors);

const email = ref('');
const password = ref('');
const username = ref('');
const passwordConfirmation = ref('');

const handleRegistration = async (event) => {
	event.preventDefault();

	try {
		if (password.value !== passwordConfirmation.value) {
			errors.passwordConfirmation = t('errors.passwordConfirmation');
			alert(errors.passwordConfirmation);
		}
	} catch (error) {
		errors = initialErrors;
		console.error(error);
	}
};
</script>

<template>
	<AuthForm :submitHandler="handleRegistration" :errors="Object.entries(errors)">
		<FormInput
			name="email"
			type="email"
			:label="$t('auth.email')"
			:placeholder="$t('auth.emailPlaceholder')"
			:inputHandler="(value) => (email = value)"
		/>
		<FormInput
			name="username"
			type="text"
			:label="$t('auth.username')"
			:placeholder="$t('auth.usernamePlaceholder')"
			:inputHandler="(value) => (username = value)"
		/>
		<FormInput
			name="password"
			type="password"
			:label="$t('auth.password')"
			:placeholder="$t('auth.passwordPlaceholder')"
			:inputHandler="(value) => (password = value)"
		/>
		<FormInput
			name="password_confirmation"
			type="password"
			:label="$t('auth.passwordConfirmation')"
			:placeholder="$t('auth.passwordConfirmationPlaceholder')"
			:inputHandler="(value) => (passwordConfirmation = value)"
		/>
		<SubmitButton :content="$t('auth.register')" class="mt-5 w-1/2" />
		<RouterLink to="/login" class="underline hover:text-gray-400">{{ $t('auth.login') }}</RouterLink>
	</AuthForm>
</template>
