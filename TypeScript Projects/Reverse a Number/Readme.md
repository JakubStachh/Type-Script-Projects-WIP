# 🔄 Reverse Number Function

## 🧮 Description
The `reverseNumber` function takes an integer as input and returns a new integer with the digits in reverse order.

---

## 📐 Algorithm

1. The input number is converted into a string using `num.toString()`.
2. The string is then split into an array of individual digits using `.split("")`.
3. The array of digits is reversed using `.reverse()`.
4. The reversed array is joined back into a string using `.join("")`.
5. Finally, the string is parsed back into an integer using `parseInt()`.

---

## ✅ Code

```typescript
function reverseNumber(num: number): number {
    return parseInt(num.toString().split("").reverse().join(""));
}

console.log(reverseNumber(12345)); // Output: 54321
```
## 🧪 Example Output
```
54321
```
In this example, the input number `12345` is reversed to `54321`.
