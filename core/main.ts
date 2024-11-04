function deepClone(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map((item: any) => deepClone(item));
    } else if (typeof obj === 'object' && obj !==null) {
        const newObj: any = {};
        for (let key in obj) {
            const item: any = obj[key];
            if (typeof item === 'object') {
                newObj[key] = deepClone(item);
            } else {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    }
    else {
        return obj;
    }
}

const myObj: any = [1,2, null]
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
const copy: any = deepClone(myObj);
console.log(myObj);
console.log(copy);
console.log(myObj === copy);
