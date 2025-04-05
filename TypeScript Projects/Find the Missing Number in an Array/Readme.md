# 📘 Find the Missing Number in an Array

## 🧮 Description
This TypeScript function takes an array of numbers and the total number `n` as input and returns the missing number in the array. The array should contain numbers from 1 to `n`, with exactly one number missing.

---

## 📐 Algorithm

- The function first calculates the **expected sum** of the numbers from 1 to `n` using the formula:
##  
$$
\large \text{expectedSum} = \frac{n \times (n + 1)}{2}
$$
##
- Then, it calculates the **actual sum** of the elements in the array using `reduce()`.
- The difference between the expected sum and the actual sum gives the missing number.

---

## ✅ Code

```typescript
function findMissingNumber(arr: number[], n: number): number {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((acc, val) => acc + val, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5], 5)); // Output: 4
```
## 🧪 Example
```typescript
findMissingNumber([1, 2, 3, 5], 5); // Output: 4
findMissingNumber([1, 2, 4, 5], 5); // Output: 3
findMissingNumber([2, 3, 4], 4);    // Output: 1
```
