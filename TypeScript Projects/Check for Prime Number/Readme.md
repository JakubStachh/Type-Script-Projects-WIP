# 📌 Prime Number Checker in TypeScript

## 🚀 Description
This TypeScript function checks if a given number is a **prime number**. A prime number is a number greater than 1 that is divisible only by 1 and itself.

---

## 🔍 How It Works

### Logic:
- Return `false` if the number is less than 2.
- Loop from `2` to the square root of `n`:
  - If `n` is divisible by any of these numbers, it's **not prime**.
- If no divisor is found, return `true`.

---

## 📂 Code

```typescript
function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(11)); // Output: true
console.log(isPrime(10)); // Output: false
```
## ✅ Example Output
```
true
false
```
