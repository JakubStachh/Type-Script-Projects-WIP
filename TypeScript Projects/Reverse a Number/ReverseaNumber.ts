function reverseNumber(num: number): number {
    return parseInt(num.toString().split("").reverse().join(""));
}

console.log(reverseNumber(12345)); // Output: 54321
