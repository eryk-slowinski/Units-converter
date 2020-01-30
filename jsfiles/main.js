import {
    buttons,
    lengthValue,
    areaValue,
    volumeValue,
    massValue,
    tempValue,
    allSelects,
} from './lib.js';
import {
    buttonHandler,
    lengthCalc,
    areaCalc,
    volumeCalc,
    massCalc,
    tempCalc,
    generateFact,
    calculate,
} from './utils.js';


generateFact();
buttons.forEach(button => button.addEventListener('click', buttonHandler));
lengthValue.addEventListener('input', lengthCalc);
areaValue.addEventListener('input', areaCalc);
volumeValue.addEventListener('input', volumeCalc);
massValue.addEventListener('input', massCalc);
tempValue.addEventListener('input', tempCalc);
allSelects.forEach(select => select.addEventListener('change', calculate));