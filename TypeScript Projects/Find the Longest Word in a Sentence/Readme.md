# 📘 Find the Longest Word in a Sentence

## 🧮 Description
This TypeScript function takes a sentence as input and returns the **longest word** from that sentence.

---

## 📐 Algorithm

- The function first splits the sentence into an array of words using `split(" ")`.
- Then, it uses the `reduce()` method to iterate over the words and compare their lengths.
- It keeps track of the longest word encountered and returns it as the result.

---

## ✅ Code

```typescript
function longestWord(sentence: string): string {
    return sentence.split(" ").reduce((longest, current) => 
        current.length > longest.length ? current : longest, "");
}

console.log(longestWord("TypeScript is an awesome programming language")); // Output: "programming"
```
## 🧪 Example
```typescript
longestWord("TypeScript is an awesome programming language"); // Output: "programming"
longestWord("Find the longest word in this sentence"); // Output: "longest"
longestWord("The quick brown fox jumps over the lazy dog"); // Output: "jumps"
```
