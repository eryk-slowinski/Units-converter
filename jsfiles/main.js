import {
    length,
    area,
    volume,
    mass,
} from './lib.js';

const buttons = document.querySelectorAll('button');

function buttonHandler() {
    this.nextElementSibling.classList.toggle('active');
}

buttons.forEach(button => button.addEventListener('click', buttonHandler));


const lengthValue = document.querySelector('.length input');

lengthValue.addEventListener('input', function () {
    const selectFrom = document.querySelector('.length #From');
    const selectTo = document.querySelector('.length #To');
    const resultField = document.querySelector('.result-length');
    const result = lengthValue.value * length[selectFrom.value][selectTo.value];
    resultField.textContent = `${lengthValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
})

const areaValue = document.querySelector('.area input');

areaValue.addEventListener('input', function () {
    const selectFrom = document.querySelector('.area #From');
    const selectTo = document.querySelector('.area #To');
    const resultField = document.querySelector('.result-area');
    const result = areaValue.value * area[selectFrom.value][selectTo.value];
    resultField.textContent = `${areaValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
})

const volumeValue = document.querySelector('.volume input');

volumeValue.addEventListener('input', function () {
    const selectFrom = document.querySelector('.volume #From');
    const selectTo = document.querySelector('.volume #To');
    const resultField = document.querySelector('.result-volume');
    const result = volumeValue.value * volume[selectFrom.value][selectTo.value];
    resultField.textContent = `${volumeValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
})

const massValue = document.querySelector('.mass input');

massValue.addEventListener('input', function () {
    const selectFrom = document.querySelector('.mass #From');
    const selectTo = document.querySelector('.mass #To');
    const resultField = document.querySelector('.result-mass');
    const result = massValue.value * mass[selectFrom.value][selectTo.value];
    resultField.textContent = `${massValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
})