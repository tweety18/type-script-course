interface AbstracrObject {
    [key: string]: any;
}
function createTree(deepValue: number = 0): AbstracrObject {
    const obj: AbstracrObject = {value: 0};
    if (deepValue < 0 || !deepValue) {
        return obj;
    }
    else if (deepValue === 1) {
        obj.value = deepValue;
        obj.child = null;
        return obj;
    }
    else {
        obj.value = deepValue;
        for (let i: number = deepValue; i > 1; --i ) {
            obj.child = {
                value: deepValue-1,
                child: createTree(i-1)
            }
        }
        return obj;
    }
}

console.log(createTree(-1)) //{value: 0}
console.log(createTree(3))
