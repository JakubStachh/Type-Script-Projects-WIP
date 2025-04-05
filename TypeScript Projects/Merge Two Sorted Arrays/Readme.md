# 📘 Merge and Sort Two Arrays

## 🧮 Description
This TypeScript function merges two sorted arrays and then sorts the resulting array in ascending order. It utilizes the spread operator to combine the arrays and the `sort()` method to sort the merged array.

---

## 📐 Algorithm

- The function first merges the two arrays using the spread operator (`...`).
- Then, it sorts the merged array in ascending order using the `sort()` method, which compares the elements using a custom comparator `(a, b) => a - b`.

---

## ✅ Code

```typescript
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
```
## 🧪 Example
```typescript
mergeSortedArrays([1, 3, 5], [2, 4, 6]);   // Output: [1, 2, 3, 4, 5, 6]
mergeSortedArrays([7, 8], [1, 2, 3, 4]);   // Output: [1, 2, 3, 4, 7, 8]
mergeSortedArrays([5, 10], [1, 3, 7, 9]);  // Output: [1, 3, 5, 7, 9, 10]
```
