# 📌 Palindrome Checker in TypeScript

## 🚀 Description
This TypeScript function checks whether a given string is a **palindrome** — a string that reads the same forward and backward.

---

## 🔍 How It Works

### Logic:
1. Split the string into an array of characters using `.split("")`.
2. Reverse the array using `.reverse()`.
3. Join the reversed array back into a string using `.join("")`.
4. Compare the reversed string to the original input.

---

## 📂 Code

```typescript
function isPalindrome(str: string): boolean {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
```
## ✅ Example Output
```
true
false
```
