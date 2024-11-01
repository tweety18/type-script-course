const newUser = {
    street: 'SomeStreet',
    city: "SomeCity",
    zipCode: '01011',
    name: 'Alona',
    age: 32,
    email: 'test@gmail.com'
};
console.log(newUser);
const newProducts = [
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
function getPersonData(person) {
    return `${person.middleName
        ? person.firstName + ' ' + person.middleName + ' ' + person.lastName
        : person.firstName + ' ' + person.lastName}`;
}
const newPerson1 = {
    firstName: 'Name',
    lastName: 'Surname',
    middleName: 'MiddleName'
};
const newPerson2 = {
    firstName: 'Name',
    lastName: 'Surname',
};
console.log('newPerson1: ', getPersonData(newPerson1));
console.log('newPerson2: ', getPersonData(newPerson2));
function applySettings(settings) {
    if (settings.autoSave.enabled && settings.notifications) {
        alert(`Enabled autosave every ${settings.autoSave.interval} minutes`);
    }
    else if (settings.autoSave.enabled && !settings.notifications) {
        console.log(`Enabled autosave every ${settings.autoSave.interval} minutes`);
    }
}
const newSettings = {
    theme: 'light',
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 10
    }
};
applySettings(newSettings);
