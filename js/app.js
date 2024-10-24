import { ELEMENT_FORM } from './element.js';
import {
    changeIcon,
    flipBackForward,
    flipForward,
    risize,
} from './event/eventFunction.js';
import { validateForm } from './validation/index.js';

// Initialize the application
const init = () => {
    // Destructure elements from ELEMENT_FORM
    const { forms, allInput, eyes, loginButton, registerButton } = ELEMENT_FORM;

    // Add submit event listener to all forms
    forms.forEach(form => form.addEventListener('submit', validateForm));

    allInput.forEach(input =>
        input.addEventListener('input', ({ target }) =>
            target.parentElement.classList.remove('error')
        )
    );

    // Add click event listener to eye icons for password visibility toggle
    eyes.forEach(eye => eye.addEventListener('click', changeIcon));

    // Add click event listener to login button
    loginButton.addEventListener('click', flipForward);

    // Add click event listener to register button
    registerButton.addEventListener('click', flipBackForward);

    // Add resize event listener to window
    window.addEventListener('resize', risize);
};

// Initialize the app when the DOM content is loaded
window.addEventListener('DOMContentLoaded', init);
