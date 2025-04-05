# 🔄 Remove Duplicates Function

## 🧮 Description
The `removeDuplicates` function takes an array of numbers as input and returns a new array with duplicates removed. It uses the **Set** data structure, which automatically handles duplicate values and ensures only unique elements remain.

---

## 📐 Algorithm

1. The function accepts an array of numbers.
2. A **Set** is used to remove duplicates since a Set stores only unique values.
3. The Set is then converted back to an array using the spread operator (`...`).
4. The function returns the array with unique elements.

---

## ✅ Code

```typescript
function removeDuplicates(arr: number[]): number[] {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
```
## 🧪 Example Output
```
[1, 2, 3, 4]
```
In this example, the input array `[1, 2, 2, 3, 4, 4]` has duplicates, and after applying the function, the result is `[1, 2, 3, 4]`.
#

