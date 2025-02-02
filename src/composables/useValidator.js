import { computed, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { validateEmail, validateUsername, validatePassword, validateConfirmPassword } from '@/utils/validation';

const useValidator = () => {
	const { t } = useI18n();

	const errors = reactive({});
	const isFormTouched = ref(false);
	const isFormValid = computed(() => (isFormTouched.value ? Object.keys(errors).length === 0 : false));

	const validateRegistration = (formData) => {
		if (!validateEmail(formData?.email)) {
			errors.email = t('errors.email');
		}
		if (!validateUsername(formData?.username)) {
			errors.username = t('errors.username');
		}
		if (!validatePassword(formData?.password)) {
			errors.password = t('errors.password');
		}
		if (!validateConfirmPassword(formData?.password, formData?.passwordConfirmation)) {
			errors.passwordConfirmation = t('errors.passwordConfirmation');
		}
	};

	return { isFormTouched, isFormValid, errors, validateRegistration };
};

export default useValidator;
