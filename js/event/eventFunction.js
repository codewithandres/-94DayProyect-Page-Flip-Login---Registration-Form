import { ELEMENT_FORM } from '../element.js';

const { frist, second } = ELEMENT_FORM;

const flipForward = () =>
    window.innerWidth < 700
        ? (frist.style.left = '0')
        : (second.style.transform = 'rotateY(-180deg)');

const flipBackForward = () =>
    window.innerWidth < 700
        ? (frist.style.left = '100%')
        : (second.style.transform = 'rotateY(0)');

const risize = () =>
    window.innerWidth < 700
        ? (frist.style.left = '0')
        : (frist.style.left = '50%');

const changeIcon = ({ target }) => {
    let input = target.parentElement.querySelector('input');

    input.type === 'password'
        ? ((input.type = 'text'),
          target.classList.replace('ri-eye-off-line', 'ri-eye-2-line'))
        : ((input.type = 'password'),
          target.classList.replace('ri-eye-2-line', 'ri-eye-off-line'));
};

export { flipForward, flipBackForward, risize, changeIcon };
