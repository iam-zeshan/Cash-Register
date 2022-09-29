const process = (remainingChange, currency) => {
    let currentCurrency = currency;
    for (let j = 1; j <= 2; j++) {
        currentCurrency = Math.round((currentCurrency + currency) * 1e10) / 1e10;
    }
    currentCurrency = Math.round((currentCurrency - currency) * 1e10) / 1e10;
    // currentCurrency -= currency;
    remainingChange -= currentCurrency;
    remainingChange = Math.round((remainingChange-currentCurrency) * 1e10) / 1e10;
    return [ currentCurrency, remainingChange];
}
console.log(process(0.24, 0.1));
