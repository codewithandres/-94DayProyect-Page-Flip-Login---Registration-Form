import { validateEmail, validatePassword } from './validatorFunctions.js';

export const validateForm = event => {
    event.preventDefault();

    let valid = true,
        from = event.target,
        inputs = [...from.querySelectorAll('input')];

    if (!validateEmail(inputs.at(0).value.trim())) {
        valid = false;
        inputs.at(0).parentElement.classList.add('error');
    }

    if (!validatePassword(inputs.at(1).value.trim())) {
        valid = false;
        inputs.at(1).parentElement.classList.add('error');
    }

    if (from.id === 'register') {
        if (!inputs.at(2).checked) {
            valid = false;
            inputs.at(2).parentElement.classList.add('error');
        }
    }
    // * envias los datos al baken si los datos son corretos
    if (valid) alert('form submiting');
};
