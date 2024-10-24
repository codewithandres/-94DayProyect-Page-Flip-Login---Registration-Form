// Import validation functions from validatorFunctions.js
import { validateEmail, validatePassword } from './validatorFunctions.js';

export const validateForm = event => {
    event.preventDefault();

    let valid = true,
        from = event.target,
        inputs = [...from.querySelectorAll('input')];

    // Validate email
    if (!validateEmail(inputs.at(0).value.trim())) {
        valid = false;
        inputs.at(0).parentElement.classList.add('error');
    }

    // Validate password
    if (!validatePassword(inputs.at(1).value.trim())) {
        valid = false;
        inputs.at(1).parentElement.classList.add('error');
    }

    // If it's a registration form, check if the checkbox is checked
    if (from.id === 'register') {
        if (!inputs.at(2).checked) {
            valid = false;
            inputs.at(2).parentElement.classList.add('error');
        }
    }
    // * envias los datos al baken si los datos son corretos
    if (valid) alert('form submiting');
};
