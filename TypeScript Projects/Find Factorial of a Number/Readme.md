# 🔢 Recursive Factorial Function in TypeScript

## 📘 Description
This TypeScript function calculates the **factorial** of a number using recursion. The factorial of a number `n` (denoted as `n!`) is the product of all positive integers less than or equal to `n`.

---

## 💡 Formula



$$
\large n! = n × (n - 1) × (n - 2) × ... × 1 0! = 1 
$$



---

## 📦 Code

```typescript
function factorial(n: number): number {
    return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```
## 🧪 Example Outputs
```typescript
factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
```
