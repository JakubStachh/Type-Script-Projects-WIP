# 📌 Anagram Checker in TypeScript

## 🚀 Description
This TypeScript function determines whether two given strings are **anagrams**. Anagrams are words or phrases that contain the same characters in a different order.

---

## 🔍 How It Works

### Logic:
- Convert both strings to arrays of characters using `.split("")`.
- Sort the arrays alphabetically using `.sort()`.
- Join the characters back into strings using `.join("")`.
- Compare the two resulting strings.
  - If they are equal, the original strings are anagrams.

---

## 📂 Code

```typescript
function areAnagrams(str1: string, str2: string): boolean {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false
```
## ✅ Example Output
```
true
false
```
