// ДЗ 8. TS Перевірка рядка на заборонені слова з виділенням
// Напиши функцію highlightForbiddenWords, яка приймає рядок і масив заборонених слів.
// Якщо знаходить у рядку заборонене слово, то обгортає його в тег <del>, який буде закреслювати це слово.
// Функція повинна повертати оновлений рядок, готовий для демонстрації в HTML.
// Створи також просту HTML-сторінку для відображення результату.

const container = document.getElementById('container') as HTMLElement;
const sentence = document.getElementById('sentence') as HTMLInputElement;
const forbiddenWords = document.getElementById('forbiddenWords') as HTMLInputElement;
const checkBtn = document.getElementById('check') as HTMLButtonElement;
const newElement = document.createElement('p');

function checkInputs() {
    sentence.value.trim() && forbiddenWords.value.trim()
        ? checkBtn.disabled = false
        : checkBtn.disabled = true
}

sentence.addEventListener('input', checkInputs);
forbiddenWords.addEventListener('input', checkInputs);

function highlightForbiddenWords(text: string, words: string): void {
    const textArr: string[] = text.toLowerCase().split(/[ ,]+/).filter(Boolean);
    const forbArr: string[] = words.toLowerCase().split(/[ ,]+/).filter(Boolean);
    const newArr: string = textArr.map((item: string) => forbArr.includes(item) ? `<del>${item}</del>` : item).join(' ');
    newElement.innerHTML = newArr;
    container.appendChild(newElement);
}

checkBtn.addEventListener(
    'click',
    () => highlightForbiddenWords(sentence.value, forbiddenWords.value)
)
