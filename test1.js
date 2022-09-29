const process = (i, remainingChange, cid, currencies) => {
    let currentCurrency = currencies[i];
    if (currentCurrency > remainingChange) {
        return [];
    } else {
        do {
            currentCurrency = Math.round((currentCurrency + currencies[i]) * 1e10)/1e10;
            // currentCurrency += currencies[i];

        } while (currentCurrency <= remainingChange && currentCurrency <= cid[i][1])
        currentCurrency = Math.round((currentCurrency - currencies[i]) * 1e10)/1e10;
        // currentCurrency -= currencies[i];
        // remainingChange -= currentCurrency;
        remainingChange = Math.round((remainingChange - currentCurrency) * 1e10)/ 1e10;
        if (i === 0 && remainingChange > 0) {
            return [];
        }
        return [cid[i][0], currentCurrency, remainingChange];
    }
}
console.log(process(2, 0.24, [0,0,["DIME", 3.1]], [0,0,0.1]));
