import {
    buttons,
    lengthValue,
    areaValue,
    volumeValue,
    massValue,
    tempValue,
} from './lib.js';
import {
    buttonHandler,
    lengthCalc,
    areaCalc,
    volumeCalc,
    massCalc,
    tempCalc,
} from './utils.js';


buttons.forEach(button => button.addEventListener('click', buttonHandler));
lengthValue.addEventListener('input', lengthCalc);
areaValue.addEventListener('input', areaCalc);
volumeValue.addEventListener('input', volumeCalc);
massValue.addEventListener('input', massCalc);
tempValue.addEventListener('input', tempCalc);