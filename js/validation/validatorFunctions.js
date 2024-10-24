// Regular expressions for email and password validation
const regExp = {
    // Email format: username@domain.com
    email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    // Password: 6-20 characters, at least one digit, one lowercase and one uppercase letter
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
};

// Function to validate email format
export const validateEmail = email => regExp.email.test(email);

// Function to validate password strength
export const validatePassword = password => regExp.password.test(password);
