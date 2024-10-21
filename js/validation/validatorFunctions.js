const regExp = {
    email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
};

export const validateEmail = email => regExp.email.test(email);

export const validatePassword = password => regExp.password.test(password);
