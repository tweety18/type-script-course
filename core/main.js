"use strict";
// ДЗ 1. Get Avarage Value
// Напишіть функцію, яка приймає масив чисел і повертає їх середнє значення.
function calcAverage(arrNum) {
    if (arrNum.length) {
        let sum = 0;
        for (let i = 0; i < arrNum.length; i++) {
            sum += arrNum[i];
        }
        return Math.floor(sum / arrNum.length);
    }
    console.log('Empty array');
    return 0;
}
function createNumberArray(minNumber, maxNumber, length) {
    const isCorrectRange = minNumber < maxNumber;
    if (isCorrectRange && length) {
        let arr = [];
        for (let i = 0; i <= length; i++) {
            arr.push(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
        }
        return arr;
    }
    return [];
}
const array = [4, 90, 77];
console.log(calcAverage(array));
const customArr = createNumberArray(1, 10, 10);
console.log(customArr);
console.log(calcAverage(customArr));
const customArr2 = createNumberArray(0, 0, 0);
console.log(calcAverage(customArr2)); //error, return 0
