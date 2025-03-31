function arrayIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(value => arr2.includes(value));
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 4, 6, 8])); // Output: [2, 4]
