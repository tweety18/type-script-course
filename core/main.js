// ДЗ 5. TS: Deep Copy
// Напиши функцію для рекурсивного копіювання об'єкта, враховуючи вкладені об'єкти та масиви.
function deepClone(obj) {
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }
    else if (typeof obj === 'object' && obj !== null) {
        const newObj = {};
        for (let key in obj) {
            const item = obj[key];
            if (typeof item === 'object') {
                newObj[key] = deepClone(item);
            }
            else {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    }
    else {
        return obj;
    }
}
const myObj = [1, 2, null];
//     {
//     a: 1,
//     b: [1, null, 3],
//     c: 3,
//     d: [
//         4,
//         [5,6,7],
//         {key: '123'},
//         {key: '456'},
//     ]
// };
const copy = deepClone(myObj);
console.log(myObj);
console.log(copy);
console.log(myObj === copy);
// ДЗ 8. TS Перевірка рядка на заборонені слова з виділенням
// Напиши функцію highlightForbiddenWords, яка приймає рядок і масив заборонених слів.
// Якщо знаходить у рядку заборонене слово, то обгортає його в тег <del>, який буде закреслювати це слово.
// Функція повинна повертати оновлений рядок, готовий для демонстрації в HTML.
// Створи також просту HTML-сторінку для відображення результату.
const container = document.getElementById('container');
const sentence = document.getElementById('sentence');
const forbiddenWords = document.getElementById('forbiddenWords');
const checkBtn = document.getElementById('check');
const newElement = document.createElement('p');
function checkInputs() {
    sentence.value.trim() && forbiddenWords.value.trim()
        ? checkBtn.disabled = false
        : checkBtn.disabled = true;
}
sentence.addEventListener('input', checkInputs);
forbiddenWords.addEventListener('input', checkInputs);
function splitString(text) {
    return text.toLowerCase().split(/[ ,]+/).filter(Boolean);
}
function highlightForbiddenWords(text, words) {
    const textArr = splitString(text);
    const newArr = textArr.map((item) => words.includes(item) ? `<del>${item}</del>` : item).join(' ');
    newElement.innerHTML = newArr;
    container.appendChild(newElement);
}
checkBtn.addEventListener('click', () => highlightForbiddenWords(sentence.value, splitString(forbiddenWords.value)));
