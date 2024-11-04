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
const arr1: number [] = [1,2,3];
const arr2: number[] = reverseArray(arr1);
const isEqual: boolean = arr1 === arr2;
