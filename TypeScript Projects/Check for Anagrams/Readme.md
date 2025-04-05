# 📌 Anagram Checker in TypeScript

## 🚀 Description
This simple TypeScript function checks whether two strings are anagrams. An anagram is a word formed by rearranging the letters of another, such as `"listen"` and `"silent"`.

---

## 🔍 How It Works

### Logic:
- Convert both input strings into arrays of characters using `split("")`.
- Sort the arrays alphabetically using `sort()`.
- Join them back into strings with `join("")`.
- Compare the two resulting strings. If they are equal, the inputs are anagrams.

---

## 📂 Code

```typescript
function isAnagram(str1: string, str2: string): boolean {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false\
```
## ✅ Example Output
```
true
false
```
