# 📱 QR Code Generator Function

## 🧮 Description
This TypeScript function generates a QR code from a given string (e.g., a URL or plain text) and logs the QR code as a data URL. It uses the `qrcode` library to generate the QR code image. 

---

## 📐 Algorithm

- The function `generateQRCode` takes a `data` string as input.
- It uses `QRCode.toDataURL()` from the `qrcode` library to convert the provided data into a base64-encoded image URL.
- The result is logged to the console, where it can be displayed or used further.
- If any error occurs during the process, it is caught and logged to the console.

---

## ✅ Code

```typescript
import QRCode from "qrcode";

async function generateQRCode(data: string) {
    try {
        const url = await QRCode.toDataURL(data);
        console.log("QR Code Generated:", url);
    } catch (error) {
        console.log("Error generating QR Code", error);
    }
}

generateQRCode("https://www.google.com");
```
## 🧪 Example Output
```
QR Code Generated: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8d82C...
```
The output will be a long string representing the base64-encoded image of the QR code.
##
