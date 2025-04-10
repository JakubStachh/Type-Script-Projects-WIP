function factorial(n: number): number {
    return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
