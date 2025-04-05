# 📘 Find the Second Largest Element in an Array

## 🧮 Description
This TypeScript function finds the second largest element in an array, while removing duplicates. If there is no second largest element (i.e., the array has fewer than two unique elements), it returns `null`.

---

## 📐 Algorithm

- The function first removes duplicates from the array using a `Set`.
- Then, the array is sorted in descending order.
- The second largest element is simply the second element in the sorted array if there are more than one unique element.
- If there is no second largest element, `null` is returned.

---

## ✅ Code

```typescript
function secondLargest(arr: number[]): number | null {
    let uniqueArr = [...new Set(arr)]; // Remove duplicates
    uniqueArr.sort((a, b) => b - a); // Sort in descending order
    return uniqueArr.length > 1 ? uniqueArr[1] : null;
}

console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
```
## 🧪 Example
```typescript
secondLargest([10, 20, 4, 45, 99]); // Output: 45
secondLargest([1, 1, 1, 1]);       // Output: null
secondLargest([2, 3, 1, 2, 5]);    // Output: 3
```
