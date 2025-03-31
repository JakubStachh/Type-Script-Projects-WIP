function findMinMax(arr: number[]): { min: number; max: number } {
    return { min: Math.min(...arr), max: Math.max(...arr) };
}

console.log(findMinMax([3, 5, 7, 2, 8])); // Output: { min: 2, max: 8 }
