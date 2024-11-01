// ДЗ 9. ДЗ до уроку 3
/* 1. Розширення та об'єднання інтерфейсів
Створи два інтерфейси: Address з полями street, city, zipCode і User з полями name та age.
    Створи третій інтерфейс UserWithAddress, який об'єднує User і Address.
Додай в цей новий інтерфейс поле email та протестуй його.*/
interface Address {
    street: string,
    city: string,
    zipCode: string //because of lead zero
}

interface User {
    name: string,
    age: number
}

interface UserWithAddress extends Address, User {
    email: string
}

const newUser: UserWithAddress = {
    street: 'SomeStreet',
    city: "SomeCity",
    zipCode: '01011',
    name: 'Alona',
    age: 32,
    email: 'test@gmail.com'
};

console.log(newUser);

// 2. Створення типів для даних із вкладеними інтерфейсами
/* Опиши інтерфейс Product із такими полями: name (рядок), price (число), category (об'єкт, що містить categoryName і categoryId).
Додай інтерфейс Order, який містить orderId, userId і список продуктів (масив Product).
Створи тип для масиву таких замовлень і змоделюй кілька прикладів. */

interface Product {
    name: string,
    price: number,
    category: CategoryModel
}

interface CategoryModel {
    categoryName: string,
    categoryId: string | number
}

interface Order {
    orderId: string | number,
    userId: string | number,
    products: Product[]
}

type Products = Order[];

const newProducts: Products = [
    {
        orderId: 1,
        userId: 11,
        products: [
            {
                name: 'TV',
                price: 1500,
                category: {
                    categoryName: 'home',
                    categoryId: 222
                }
            },
            {
                name: 'Kettle',
                price: 100,
                category: {
                    categoryName: 'home',
                    categoryId: 333
                }
            },
        ]
    },
    {
        orderId: 8,
        userId: 88,
        products: [
            {
                name: 'dress',
                price: 20,
                category: {
                    categoryName: 'clothes',
                    categoryId: 99
                }
            }
        ]
    }
];

console.log(newProducts);

// 3. Обов'язкові та необов'язкові поля
/* Створи інтерфейс Person, який містить обов'язкові поля firstName, lastName і необов'язкове поле middleName.
Напиши функцію, яка приймає параметром об'єкт типу Person і повертає рядок, де зібрані повне ім'я, якщо middleName існує. */
 interface Person {
     firstName: string,
     lastName: string,
     middleName?: string
 }

 function getPersonData(person: Person): string {
     return `${person.firstName} ${person.middleName ? person.middleName + ' ' + person.lastName : person.lastName}`
 }

 const newPerson1 = {
     firstName: 'Name',
     lastName: 'Surname',
     middleName: 'MiddleName'
 }

 const newPerson2 = {
    firstName: 'Name',
    lastName: 'Surname',
}
console.log('newPerson1: ', getPersonData(newPerson1));
console.log('newPerson2: ', getPersonData(newPerson2));

// 4. Створення інтерфейсу для зчитування налаштувань
/* Опиши інтерфейс Settings, який містить поля для конфігурації програми:
theme: рядок (може бути "light" або "dark").
notifications: булеве значення.
autoSave: об'єкт із полями enabled (булеве значення) і interval (число).
Напиши функцію applySettings, яка приймає об'єкт типу Settings і виконує дії залежно від значень налаштувань ' +
'(наприклад, виводить повідомлення про ввімкнення/вимкнення повідомлень). */

interface Settings {
    theme: 'light' | 'dark',
    notifications: boolean,
    autoSave: {
        enabled: boolean,
        interval: number
    }
}

function applySettings(settings: Settings): void {
    if (settings.autoSave.enabled && settings.notifications) {
        alert(`Enabled autosave every ${settings.autoSave.interval} minutes`);
    } else if (settings.autoSave.enabled && !settings.notifications) {
        console.log(`Enabled autosave every ${settings.autoSave.interval} minutes`);
    }
}

const newSettings: Settings = {
    theme: 'light',
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 10
    }
}
applySettings(newSettings);


