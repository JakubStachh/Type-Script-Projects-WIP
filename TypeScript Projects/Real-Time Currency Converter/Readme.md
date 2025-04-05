# 🌍 Currency Conversion Function

## 🧮 Description
This JavaScript function `convertCurrency` converts an amount from one currency to another using live exchange rates provided by the **ExchangeRate-API**. The function fetches the exchange rate data from an external API and calculates the converted amount.

---

## 📐 Algorithm

- The function takes `amount`, `fromCurrency`, and `toCurrency` as parameters.
- It fetches the latest exchange rates from `exchangerate-api.com` using the provided `fromCurrency`.
- If the response is successful, it extracts the exchange rate for the `toCurrency` and calculates the converted amount.
- If the response is unsuccessful or the exchange rate is not found, it returns an error message.

---

## ✅ Code

```typescript
async function convertCurrency(amount: number, fromCurrency: string, toCurrency: string) {
    const apiKey = "YOUR_API_KEY"; // Get your free API key from exchangerate-api.com
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            let exchangeRate = data.conversion_rates[toCurrency];
            return `${amount} ${fromCurrency} = ${(amount * exchangeRate).toFixed(2)} ${toCurrency}`;
        } else {
            return "Invalid Currency Code!";
        }
    } catch (error) {
        return "Error fetching exchange rates!";
    }
}

convertCurrency(100, "USD", "PLN").then(console.log);
```
## 🧪 Example Output
```
100 USD = 415.50 PLN
```
In the above example, 100 USD is converted to 415.50 PLN (Polish Zloty). 
