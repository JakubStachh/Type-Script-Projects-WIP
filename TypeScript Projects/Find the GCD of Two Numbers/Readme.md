# 📘 GCD Function in TypeScript

## 🧮 Description
This TypeScript function calculates the **Greatest Common Divisor (GCD)** of two integers using the **Euclidean algorithm**. The GCD of two numbers is the largest number that divides both without leaving a remainder.

---

## 📐 Algorithm

- The function uses recursion to apply the Euclidean algorithm.
- If `b` is zero, then `a` is the GCD.
- Otherwise, the GCD of `a` and `b` is the same as the GCD of `b` and `a % b` (the remainder when `a` is divided by `b`).

---

## ✅ Code

```typescript
function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(56, 98)); // Output: 14
```
## 🧪 Example
```typescript
gcd(56, 98);  // 14
gcd(48, 18);  // 6
gcd(101, 10); // 1
gcd(25, 30);  // 5
```
