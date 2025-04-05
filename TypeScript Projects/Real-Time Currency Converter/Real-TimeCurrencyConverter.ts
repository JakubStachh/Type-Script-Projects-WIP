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
