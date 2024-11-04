export default function isSorted(arr) {
    let sortedBool = true
    let reverseSortedBool = true
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            reverseSortedBool = false;
        }
        if (arr[i] > arr[i + 1]) {
            sortedBool = false;
        }
    }

    return sortedBool || reverseSortedBool;
}