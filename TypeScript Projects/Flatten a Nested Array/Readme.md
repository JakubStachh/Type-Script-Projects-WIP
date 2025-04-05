# 📘 Flatten an Array

## 🧮 Description
This TypeScript function flattens a nested array into a single-level array. It uses the `flat()` method with `Infinity` to ensure that it can handle arrays with any level of nesting.

---

## 📐 Algorithm

- The function uses the `flat()` method with `Infinity` to flatten an array to any depth of nesting. 
- This effectively turns any deeply nested array into a single-level array containing all the elements.

---

## ✅ Code

```typescript
function flattenArray(arr: any[]): any[] {
    return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]
```
## 🧪 Example
```typescript
flattenArray([1, [2, [3, [4, 5]]]]);   // Output: [1, 2, 3, 4, 5]
flattenArray([1, [2, 3], 4, [5, 6]]);  // Output: [1, 2, 3, 4, 5, 6]
flattenArray([10, 20, [30, 40]]);     // Output: [10, 20, 30, 40]
```
