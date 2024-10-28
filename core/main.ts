// ДЗ 7. TS Написати функцію reverseArray
// Функція приймає масив як аргумент, а перевертає його Array.prototype.reverse
// ВАЖЛИВО
// Функція повинна змінювати вхідний масив, а не створювати новий

function reverseArray(arr: any[]): any[] {
    if (!arr.length) {
        return arr;
    } else {
        let firstIdx: number = 0;
        let endIdx: number = arr.length - 1
        while (firstIdx < endIdx) {
            {
                let firstEl: any = arr[firstIdx];
                arr[firstIdx] = arr[endIdx];
                arr[endIdx] = firstEl;
                firstIdx++;
                endIdx--;
            }
        }
        return arr;
    }
}

//without mutation original arr
function reverseArrayWithNewArr(arr: any[]): any[] {
    if (!arr.length) {
        return arr;
    } else {
        return arr
            .map((value, index) => ({ [index]: value }))
            .sort((a: any, b: any) => Number(Object.keys(b)[0]) - Number(Object.keys(a)[0]))
            .map((item) => Object.values(item)[0]);
    }
}

const arr1: number [] = [1,2,3];
const arr2: number[] = reverseArray(arr1);
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);


// // ДЗ 6. TS Створення глибокого дерева об'єктів
// // Створи функцію, яка рекурсивно формує об'єкт у вигляді дерева за переданою глибиною.
// // Повертає: { value: 3, child: { value: 2, child: { value: 1, child: null } } }
// interface AbstracrObject {
//     [key: string]: any;
// }
// function createTree(deepValue: number = 0): AbstracrObject {
//     const obj: AbstracrObject = {value: 0};
//     if (deepValue < 0 || !deepValue) {
//         return obj;
//     }
//     else if (deepValue === 1) {
//         obj.value = deepValue;
//         obj.child = null;
//         return obj;
//     }
//     else {
//         obj.value = deepValue;
//         for (let i: number = deepValue; i > 1; --i ) {
//             obj.child = {
//                 value: deepValue-1,
//                 child: createTree(i-1)
//             }
//         }
//         return obj;
//     }
// }
//
// console.log(createTree(-1)) //{value: 0}
// console.log(createTree(3))


// // ДЗ 5. TS: Deep Copy
// // Напиши функцію для рекурсивного копіювання об'єкта, враховуючи вкладені об'єкти та масиви.
//
// function deepClone(obj: any): any {
//     if (Array.isArray(obj)) {
//         return obj.map((item: any) => deepClone(item));
//     } else if (typeof obj === 'object' && obj !==null) {
//         const newObj: any = {};
//         for (let key in obj) {
//             const item: any = obj[key];
//             if (typeof item === 'object') {
//                 newObj[key] = deepClone(item);
//             } else {
//                 newObj[key] = obj[key];
//             }
//         }
//         return newObj;
//     }
//     else {
//         return obj;
//     }
// }
//
// const myObj: any = [1,2, null]
// //     {
// //     a: 1,
// //     b: [1, null, 3],
// //     c: 3,
// //     d: [
// //         4,
// //         [5,6,7],
// //         {key: '123'},
// //         {key: '456'},
// //     ]
// // };
// const copy: any = deepClone(myObj);
// console.log(myObj);
// console.log(copy);
// console.log(myObj === copy);
//
//
// // ДЗ 8. TS Перевірка рядка на заборонені слова з виділенням
// // Напиши функцію highlightForbiddenWords, яка приймає рядок і масив заборонених слів.
// // Якщо знаходить у рядку заборонене слово, то обгортає його в тег <del>, який буде закреслювати це слово.
// // Функція повинна повертати оновлений рядок, готовий для демонстрації в HTML.
// // Створи також просту HTML-сторінку для відображення результату.
//
// const container = document.getElementById('container') as HTMLElement;
// const sentence = document.getElementById('sentence') as HTMLInputElement;
// const forbiddenWords = document.getElementById('forbiddenWords') as HTMLInputElement;
// const checkBtn = document.getElementById('check') as HTMLButtonElement;
// const newElement = document.createElement('p');
//
// function checkInputs() {
//     sentence.value.trim() && forbiddenWords.value.trim()
//         ? checkBtn.disabled = false
//         : checkBtn.disabled = true
// }
//
// sentence.addEventListener('input', checkInputs);
// forbiddenWords.addEventListener('input', checkInputs);
//
// function splitString(text: string): string[] {
//     return text.toLowerCase().split(/[ ,]+/).filter(Boolean);
// }
//
// function highlightForbiddenWords(text: string, words: string[]): void {
//     const textArr: string[] = splitString(text);
//     const newArr: string = textArr.map((item: string) => words.includes(item) ? `<del>${item}</del>` : item).join(' ');
//     newElement.innerHTML = newArr;
//     container.appendChild(newElement);
// }
//
// checkBtn.addEventListener(
//     'click',
//     () => highlightForbiddenWords(sentence.value, splitString(forbiddenWords.value))
// )
