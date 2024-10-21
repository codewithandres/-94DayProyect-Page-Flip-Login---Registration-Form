import { ELEMENT_FORM } from './element.js';
import {
    changeIcon,
    flipBackForward,
    flipForward,
    risize,
} from './event/eventFunction.js';
import { validateForm } from './validation/index.js';

const init = () => {
    const { forms, allInput, eyes, loginButton, registerButton } = ELEMENT_FORM;

    forms.forEach(form => form.addEventListener('submit', validateForm));

    allInput.forEach(input =>
        input.addEventListener('input', ({ target }) =>
            target.parentElement.classList.remove('error')
        )
    );

    eyes.forEach(eye => eye.addEventListener('click', changeIcon));

    loginButton.addEventListener('click', flipForward);

    registerButton.addEventListener('click', flipBackForward);

    window.addEventListener('resize', risize);
};

window.addEventListener('DOMContentLoaded', init);
