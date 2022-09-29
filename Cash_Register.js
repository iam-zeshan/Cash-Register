const process = (i, remainingChange, cid, currencies) => {
    let currentCurrency = currencies[i];
    if (currentCurrency > remainingChange) {
        return [];
    } else {
        do {
            currentCurrency = Math.round((currentCurrency + currencies[i]) * 1e10)/1e10;
        } while (currentCurrency <= remainingChange && currentCurrency <= cid[i][1])
        // Dealing with the decimal values, it's important to use the below two line syntax concept NOT the commented ones.
        currentCurrency = Math.round((currentCurrency - currencies[i]) * 1e10)/1e10;
        remainingChange = Math.round((remainingChange - currentCurrency) * 1e10)/ 1e10;
        // currentCurrency -= currencies[i];
        // remainingChange -= currentCurrency;
        if (i === 0 && remainingChange > 0) {
            return [];
        }
        return [cid[i][0], currentCurrency, remainingChange];
    }
}

function checkCashRegister(price, cash, cid) {
    // Getting total from cid
    let total = cid.reduce((sum, current) => sum + current[1], 0);
    let oBject = { status: "Demo", change: [] };
    // Currency weight
    const currencies = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let change = cash - price;
    let changeArr = [];
    for (let i = 8; i >= 0; i--) {
        if (cid[i][1] > 0) {
            let checkForEmptyArr = process(i, change, cid, currencies);
            if (checkForEmptyArr.length !== 0) {
                change = checkForEmptyArr.splice(2, 1);
                changeArr.push(checkForEmptyArr);
            }
        }
    }
    // return change;
    let totalOfReturn = changeArr.reduce((sum, current) => sum + current[1], 0);

    if (changeArr.length == 0) {
        oBject.status = "INSUFFICIENT_FUNDS";
        return oBject;
    } else if (total === totalOfReturn)
    {
        oBject.status = "CLOSED";
        oBject.change = cid;
        return oBject;
    }else {
        oBject.status = "OPEN";
        oBject.change = changeArr;
        return oBject;
    }
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
