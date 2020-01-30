import {
    lengthValue,
    areaValue,
    volumeValue,
    massValue,
    tempValue,
    funFact,
    funFacts,
} from './lib.js';

import {
    length,
    area,
    volume,
    mass,
} from './calcratios.js';

export function buttonHandler() {
    this.nextElementSibling.classList.toggle('active');
}

export function lengthCalc() {
    const selectFrom = document.querySelector('.length #From');
    const selectTo = document.querySelector('.length #To');
    const resultField = document.querySelector('.result-length');
    const result = lengthValue.value * length[selectFrom.value][selectTo.value];
    resultField.textContent = `${lengthValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
    if (!lengthValue.value) resultField.textContent = '';
}

export function areaCalc() {
    const selectFrom = document.querySelector('.area #From');
    const selectTo = document.querySelector('.area #To');
    const resultField = document.querySelector('.result-area');
    const result = areaValue.value * area[selectFrom.value][selectTo.value];
    resultField.textContent = `${areaValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
    if (!areaValue.value) resultField.textContent = '';
}

export function volumeCalc() {
    const selectFrom = document.querySelector('.volume #From');
    const selectTo = document.querySelector('.volume #To');
    const resultField = document.querySelector('.result-volume');
    const result = volumeValue.value * volume[selectFrom.value][selectTo.value];
    resultField.textContent = `${volumeValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
    if (!volumeValue.value) resultField.textContent = '';
}

export function massCalc() {
    const selectFrom = document.querySelector('.mass #From');
    const selectTo = document.querySelector('.mass #To');
    const resultField = document.querySelector('.result-mass');
    const result = massValue.value * mass[selectFrom.value][selectTo.value];
    resultField.textContent = `${massValue.value} ${selectFrom.value} is: ${result} ${selectTo.value}`;
    if (!massValue.value) resultField.textContent = '';
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
    else if (selectFrom.value === 'K' && selectTo.value === 'C') result = tempValue.value - 273.15;
    else if (selectFrom.value === 'K' && selectTo.value === 'F') result = (tempValue.value - 273.15) * 9 / 5 + 32;
    else if (selectFrom.value === selectTo.value) result = tempValue.value;
    resultField.textContent = `${tempValue.value} ${selectFrom.value} is ${result} ${selectTo.value}`;
    if (!tempValue.value) resultField.textContent = '';
}

export function generateFact() {
    function renderFact() {
        let randomFact = funFacts[Math.floor(Math.random() * 10)];
        if (randomFact === funFact.textContent) {
            randomFact = funFacts[Math.floor(Math.random() * 10)];
        } else {
            funFact.textContent = randomFact;
        }
    }
    renderFact();
    setInterval(renderFact, 15000);
}

export function calculate() {
    lengthCalc();
    areaCalc();
    volumeCalc();
    massCalc();
    tempCalc();
}