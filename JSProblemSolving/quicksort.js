//  Quick Sort is an efficient, in-place sorting algorithm that uses a divide-and-conquer strategy.
//  Let's break it down step by step:
let steps=0

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        steps++
        console.log(steps)
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; // Place pivot in correct position
    return i + 1; // Return pivot index
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", quickSort(unsortedArray));