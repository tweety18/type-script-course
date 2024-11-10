"use strict";
function filterByProperty(array, property, value) {
    const resultArr = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i][property] === value) {
            resultArr.push(array[i]);
        }
    }
    return resultArr;
}
const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];
const activeUsers = filterByProperty(users, 'isActive', true);
console.log(activeUsers);
