# 📘 Find Minimum and Maximum in an Array

## 🧮 Description
This TypeScript function takes an array of numbers and returns an object containing the **minimum** and **maximum** values from the array.

---

## 📐 Algorithm

- The function uses the built-in `Math.min()` and `Math.max()` functions to find the smallest and largest numbers in the array.
- The spread operator `...` is used to pass the elements of the array as individual arguments to these functions.
- The function returns an object with two properties: `min` and `max`.

---

## ✅ Code

```typescript
function findMinMax(arr: number[]): { min: number; max: number } {
    return { min: Math.min(...arr), max: Math.max(...arr) };
}

console.log(findMinMax([3, 5, 7, 2, 8])); // Output: { min: 2, max: 8 }
```
## 🧪 Example
```typescript
findMinMax([3, 5, 7, 2, 8]); // Output: { min: 2, max: 8 }
findMinMax([12, 15, 9, 21, 33]); // Output: { min: 9, max: 33 }
findMinMax([-1, -3, 4, 2]); // Output: { min: -3, max: 4 }
```
