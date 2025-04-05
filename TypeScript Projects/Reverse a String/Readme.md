# 🔄 Reverse String Function

## 🧮 Description
The `reverseString` function takes a string as input and returns a new string with the characters in reverse order.

---

## 📐 Algorithm

1. The input string is split into an array of individual characters using `.split("")`.
2. The array of characters is reversed using `.reverse()`.
3. The reversed array is joined back into a string using `.join("")`.

---

## ✅ Code

```typescript
function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"
```
## 🧪 Example Output
```
"olleh"
```
In this example, the input string `"hello"` is reversed to `"olleh"`.
