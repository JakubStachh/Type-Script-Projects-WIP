function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15)); // Output: 60