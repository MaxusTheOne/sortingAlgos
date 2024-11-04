import isSorted from "./isSorted.js";

export default function simpleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            const value = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = value;
        }
    }
    if (!isSorted(arr)) simpleSort(arr);
    return arr;
}