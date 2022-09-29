const process = (currency) => {
    let currentCurrency = currency;
    for (let j = 1; j <= 2; j++) {
        currentCurrency = Math.round((currentCurrency + currency) * 1e10) / 1e10;
    }
    return [ currentCurrency];
}
console.log(process(0.1));
