# 📘 Array Intersection Function in TypeScript

## 🧮 Description
This TypeScript function finds the **intersection** of two arrays, meaning it returns an array containing all elements that appear in both arrays.

---

## 📐 Algorithm

- The function uses the `filter()` method to iterate through the elements of `arr1`.
- For each element in `arr1`, it checks if the element also exists in `arr2` using the `includes()` method.
- If the element exists in both arrays, it is included in the result array.

---

## ✅ Code

```typescript
function arrayIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(value => arr2.includes(value));
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 4, 6, 8])); // Output: [2, 4]
```
## 🧪 Example
```typescript
arrayIntersection([1, 2, 3, 4], [2, 4, 6, 8]); // Output: [2, 4]
arrayIntersection([5, 10, 15], [10, 20, 30]); // Output: [10]
arrayIntersection([1, 2, 3], [4, 5, 6]);     // Output: []
```
