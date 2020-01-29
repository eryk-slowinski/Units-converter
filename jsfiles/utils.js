import {
    lengthValue,
    areaValue,
    volumeValue,
    massValue,
    tempValue,
    length,
    area,
    volume,
    mass,
} from './lib.js';

export function buttonHandler() {
    this.nextElementSibling.classList.toggle('active');
}

export function lengthCalc() {
    const selectFrom = document.querySelector('.length #From');
    const selectTo = document.querySelector('.length #To');
    const resultField = document.querySelector('.result-length');
    const result = lengthValue.value * length[selectFrom.value][selectTo.value];
    resultField.textContent = `${lengthValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
}

export function areaCalc() {
    const selectFrom = document.querySelector('.area #From');
    const selectTo = document.querySelector('.area #To');
    const resultField = document.querySelector('.result-area');
    const result = areaValue.value * area[selectFrom.value][selectTo.value];
    resultField.textContent = `${areaValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
}

export function volumeCalc() {
    const selectFrom = document.querySelector('.volume #From');
    const selectTo = document.querySelector('.volume #To');
    const resultField = document.querySelector('.result-volume');
    const result = volumeValue.value * volume[selectFrom.value][selectTo.value];
    resultField.textContent = `${volumeValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
}

export function massCalc() {
    const selectFrom = document.querySelector('.mass #From');
    const selectTo = document.querySelector('.mass #To');
    const resultField = document.querySelector('.result-mass');
    const result = massValue.value * mass[selectFrom.value][selectTo.value];
    resultField.textContent = `${massValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
}

export function tempCalc() {
    const selectFrom = document.querySelector('.temp #From');
    const selectTo = document.querySelector('.temp #To');
    const resultField = document.querySelector('.result-temp');
    let result;
    if (selectFrom.value === 'C' && selectTo.value === 'F') result = (tempValue.value * 9 / 5) + 32;
    else if (selectFrom.value === 'C' && selectTo.value === 'K') result = parseFloat(tempValue.value) + 273.15;
    else if (selectFrom.value === 'F' && selectTo.value === 'C') result = (tempValue.value - 32) * 5 / 9;
    else if (selectFrom.value === 'F' && selectTo.value === 'K') result = (tempValue.value - 32) * (5 / 9) + 273.15;
    else if (selectFrom.value === selectTo.value) result = tempValue.value;
    resultField.textContent = `${tempValue.value} ${selectFrom.value} is ${result} ${selectTo.value}`;
}