function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(56, 98)); // Output: 14
