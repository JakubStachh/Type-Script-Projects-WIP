# 🔐 Password Generator Function

## 🧮 Description
This TypeScript function generates a random password of a specified length (default is 12 characters). The password is generated using a mix of uppercase letters, lowercase letters, digits, and special characters. 

---

## 📐 Algorithm

- The function defines a string `characters` containing all possible characters for the password.
- It then generates an array of the desired length, where each element is a randomly selected character from the `characters` string.
- The `Array.from()` method is used to create the array of random characters, and `Math.floor(Math.random() * characters.length)` generates random indices to select characters.
- Finally, it joins the array into a single string to form the password.

---

## ✅ Code

```typescript
function generatePassword(length: number = 12): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
}

console.log(generatePassword());  // Output: Random password of 12 characters
```
## 🧪 Example Output
```typescript
generatePassword();   // Output: "A9d@3y6x!l2Z" (example, actual output will vary)
generatePassword(8);  // Output: "4#Tp9Q8a"
generatePassword(16); // Output: "3jD&2L7*kK1!t9Wq"
```
