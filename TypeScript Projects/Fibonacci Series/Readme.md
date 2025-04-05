# 📌 Fibonacci Sequence Generator in TypeScript

## 📘 Description
This TypeScript function generates the Fibonacci sequence up to a given number of terms `n`. The Fibonacci sequence is a series where each number is the sum of the two preceding ones, typically starting with 0 and 1.

---

## 🔍 How It Works

- Initializes an array `fib` with the first two terms: `[0, 1]`
- Iterates from index 2 to `n - 1`
- Adds the sum of the two previous elements to the array: `fib[i - 1] + fib[i - 2]`

---

## 📦 Code

```typescript
function fibonacci(n: number): number[] {
    let fib: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
```
## 🧪 Example Outputs
```typescript
fibonacci(5) => [0, 1, 1, 2, 3]
fibonacci(1) => [0, 1]
fibonacci(0) => [0, 1] // Still returns initial two values
```
