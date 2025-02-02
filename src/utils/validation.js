export const validateEmail = (email) => {
	const re = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
	return re.test(email);
};

export const validateUsername = (username) => {
	const re = /^[a-zA-Z0-9]{3,}$/;
	return re.test(username);
};

export const validatePassword = (password) => {
	const re = /^(?=.*\d).{8,}$/;
	return re.test(password);
};

export const validateConfirmPassword = (password, confirmPassword) => {
	return password === confirmPassword;
};
