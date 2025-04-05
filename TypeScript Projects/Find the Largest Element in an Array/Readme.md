# 📘 Find the Largest Number in an Array

## 🧮 Description
This TypeScript function finds and returns the **largest number** from a given array of numbers using the built-in `Math.max()` function.

---

## 📐 Algorithm

- The function uses the `Math.max()` function, which returns the largest of the zero or more numbers provided as input.
- The spread operator `...` is used to pass the elements of the array as individual arguments to `Math.max()`.
- The function returns the largest number in the array.

---

## ✅ Code

```typescript
function findLargest(arr: number[]): number {
    return Math.max(...arr);
}

console.log(findLargest([3, 5, 7, 2, 8])); // Output: 8
```
## 🧪 Example
```typescript
findLargest([3, 5, 7, 2, 8]); // Output: 8
findLargest([12, 15, 9, 21, 33]); // Output: 33
findLargest([-1, -3, 4, 2]); // Output: 4
```
