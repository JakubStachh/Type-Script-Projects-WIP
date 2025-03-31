function isSorted(arr: number[]): boolean {
    return arr.every((_, i) => i === 0 || arr[i] >= arr[i - 1]);
}

console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
console.log(isSorted([5, 3, 2, 1]));    // Output: false
