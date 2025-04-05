# 📌 Check if Array is Sorted in TypeScript

## 🚀 Description
This TypeScript function determines whether an array of numbers is **sorted in non-decreasing order**.

---

## 🔍 How It Works

### Logic:
- The function uses `.every()` to verify that **each element** is greater than or equal to the previous one.
- It skips the check for the first element using `i === 0`.

---

## 📂 Code

```typescript
function isSorted(arr: number[]): boolean {
    return arr.every((_, i) => i === 0 || arr[i] >= arr[i - 1]);
}

console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
console.log(isSorted([5, 3, 2, 1]));    // Output: false
```
## ✅ Example Output
```
true
false
```
