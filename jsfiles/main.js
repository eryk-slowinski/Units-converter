import {
    length
} from './lib.js';

const buttons = document.querySelectorAll('button');

function buttonHandler() {
    this.nextElementSibling.classList.toggle('active');
}

buttons.forEach(button => button.addEventListener('click', buttonHandler));


const valueLength = document.querySelector('input');


valueLength.addEventListener('input', function () {
    const selectFrom = document.querySelector('.length #From');
    const selectTo = document.querySelector('.length #To');
    const resultField = document.querySelector('.result-length');
    const result = valueLength.value * length[selectFrom.value][selectTo.value];
    resultField.textContent = `${valueLength.value} ${selectFrom.value} is: ${result} ${selectTo.value}`
})