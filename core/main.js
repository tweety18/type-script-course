"use strict";
// ДЗ 2. Get string description
// Напишіть функцію, що приймає об'єкт з інформацією про товар (назва, ціна, наявність) і повертає рядок типу "Товар: Назва, Ціна: Х грн., В наявності: Так/Ні".
function getProductDesc(product) {
    return `Товар: ${product.name.trim() ? product.name.trim() : 'без назви'}, Ціна: ${product.price ? product.price + ' грн.' : 'безкоштовно'}, В наявності: ${product.isAvailable ? 'Так' : 'Ні'}`;
}
const testProduct = {
    name: '     ',
    price: 100,
};
console.log(getProductDesc(testProduct));
const testProduct2 = {
    name: 'Some Name',
    price: 0,
    isAvailable: true,
};
console.log(getProductDesc(testProduct2));
// ДЗ 1. Get Avarage Value
// Напишіть функцію, яка приймає масив чисел і повертає їх середнє значення.
// function calcAverage(arrNum: number[]): number {
//     if (arrNum.length) {
//         let sum: number = 0;
//         for (let i: number = 0; i < arrNum.length; i++) {
//             sum += arrNum[i];
//         }
//         return Math.floor(sum / arrNum.length);
//     }
//     console.log('Empty array');
//     return 0;
//
// }
//
// function createNumberArray(minNumber: number, maxNumber: number, length: number): number[] | any[] {
//     const isCorrectRange: boolean = minNumber < maxNumber;
//     if (isCorrectRange && length) {
//         let arr: number[] = [];
//         for (let i: number = 0; i <= length; i++) {
//             arr.push(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
//         }
//         return arr;
//     }
//     return [];
//
// }
//
// const array: number[] = [4, 90, 77];
// console.log(calcAverage(array));
//
// const customArr: number[] = createNumberArray(1, 10, 10);
// console.log(customArr);
// console.log(calcAverage(customArr));
//
// const customArr2: number[] = createNumberArray(0, 0, 0);
// console.log(calcAverage(customArr2)); //error, return 0
