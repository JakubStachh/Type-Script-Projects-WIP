# 📌 GCD Function in TypeScript (Euclidean Algorithm)

## 🧮 Description
This TypeScript function calculates the **Greatest Common Divisor (GCD)** of two integers using the **Euclidean Algorithm**. The GCD of two numbers is the largest number that divides both of them without leaving a remainder.

---

## 📐 Algorithm

The Euclidean Algorithm is based on the principle:

$$
\large \text{gcd}(a, b) = \text{gcd}(b, a \mod b)
$$

##

$$
\large \text{When } b \text{ becomes } 0,  a \text{ is the GCD.}
$$

---

## ✅ Code

```typescript
function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(56, 98)); // Output: 14
🧪 Example
typescript
Copy
Edit
gcd(56, 98);  // 14
gcd(20, 8);   // 4
gcd(15, 5);   // 5
gcd(7, 3);    // 1
