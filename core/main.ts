function filterByProperty<T, K extends keyof T>(array: T[], property: K, value: T[K]): T[] {
    const resultArr: T[] = [];
    for (let i: number = 0; i < array.length; i += 1) {
       if (array[i][property] === value) {
           resultArr.push(array[i]);
       }
    }
    return resultArr;
}

type User = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
};

const users: User[] = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];

const activeUsers: User[] = filterByProperty(users, 'isActive', true);
console.log(activeUsers);
