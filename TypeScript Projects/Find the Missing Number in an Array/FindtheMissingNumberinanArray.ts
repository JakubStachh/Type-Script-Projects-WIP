function findMissingNumber(arr: number[], n: number): number {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((acc, val) => acc + val, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5], 5)); // Output: 4
