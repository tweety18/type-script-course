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
function highlightForbiddenWords(text, words) {
    const textArr = text.toLowerCase().split(/[ ,]+/).filter(Boolean);
    const forbArr = words.toLowerCase().split(/[ ,]+/).filter(Boolean);
    const newArr = textArr.map((item) => forbArr.includes(item) ? `<del>${item}</del>` : item).join(' ');
    newElement.innerHTML = newArr;
    container.appendChild(newElement);
}
checkBtn.addEventListener('click', () => highlightForbiddenWords(sentence.value, forbiddenWords.value));
