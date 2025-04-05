# 📌 Count Vowels in a String using TypeScript

## 🚀 Description
This TypeScript function counts the number of vowels in a given string. Vowels include **a, e, i, o, u** and are counted regardless of case.

---

## 🧠 How It Works

- Uses the `.match()` method with a regular expression:
  - `/[aeiou]/gi`
    - `[]` defines a character set of vowels
    - `i` makes the match case-insensitive
    - `g` enables global matching (i.e., finds all matches)
- If no vowels are found, `.match()` returns `null`, so `|| []` ensures we get an empty array instead.
- Returns the `.length` of the resulting array.

---

## 📂 Code

```typescript
function countVowels(str: string): number {
    return (str.match(/[aeiou]/gi) || []).length;
}

console.log(countVowels("AEIOU")); // Output: 5
```
## ✅ Example Output
```
5
```
