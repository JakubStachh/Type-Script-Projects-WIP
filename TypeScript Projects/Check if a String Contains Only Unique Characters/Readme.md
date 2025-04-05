# 📌 Unique Character Checker in TypeScript

## 🚀 Description
This TypeScript function checks if a string contains **only unique characters**, i.e., no characters repeat.

---

## 🔍 How It Works

### Logic:
- Convert the string into a `Set` (which stores only unique values).
- Compare the size of the `Set` to the original string’s length.
  - If they match, all characters are unique.
  - If not, duplicates exist.

---

## 📂 Code

```typescript
function hasUniqueCharacters(str: string): boolean {
    return new Set(str).size === str.length;
}

console.log(hasUniqueCharacters("abcdef")); // Output: true
console.log(hasUniqueCharacters("hello"));  // Output: false
```
## ✅ Example Output
```
true
false
```
