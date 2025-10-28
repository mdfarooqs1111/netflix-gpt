const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
};

export const checkValidateData = (email, password) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  if (!isEmailValid) {
    return "Email format is invalid.";
  }

  if (!isPasswordValid) {
    return "Password must be at least 8 characters long and contain a mix of uppercase, lowercase, and numeric characters.";
  }

  return null;
};
