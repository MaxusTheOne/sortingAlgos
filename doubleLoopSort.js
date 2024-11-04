export default function doubleLoopSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i +1; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const value = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = value;
            }
        }
    }
    return arr;
}