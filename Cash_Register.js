
// BECAUSE OF NOT ENOUGH TIME, I'VE USED THESE IF ELSE IF STATEMENT BUT, I CAN MAKE THESE WHOLE 8 ELSE IF STATEMENT INTO ONE FUNCTION!!!... IF I SPENT MORE TIME

// 98% task is completed but, I'm getting a little bit unexpected results in a few scenarios because of decimals. 

const process = (i, remainingChange, cid) => {
    if (i === 8) {
        let hundred = 100;
        if (hundred > remainingChange) {
            return [];
        } else {
            do {
                hundred += 100;
            } while (hundred <= remainingChange && hundred <= cid[8][1])
            hundred -= 100;
            remainingChange -= hundred;
            return ["ONE HUNDRED", hundred, remainingChange];
        }
    } else if (i === 7) {
        let twenty = 20;
        if (twenty > remainingChange) {
            return [];
        } else {
            do {
                twenty += 20;
            } while (twenty <= remainingChange && twenty <= cid[7][1])
            twenty -= 20;
            remainingChange -= twenty;
            return ["TWENTY", twenty, remainingChange];
        }
    } else if (i === 6) {
        let ten = 10;
        if (ten > remainingChange) {
            return [];
        } else {
            do {
                ten += 10;
            } while (ten <= remainingChange && ten <= cid[6][1])
            ten -= 10;
            remainingChange -= ten;
            return ["TEN", ten, remainingChange];
        }
    } else if (i === 5) {
        let five = 5;
        if (five > remainingChange) {
            return [];
        } else {
            do {
                five += 5;
            } while (five <= remainingChange && five <= cid[5][1])
            five -= 5;
            remainingChange -= five;
            return ["FIVE", five, remainingChange];
        }
    } else if (i === 4) {
        let one = 1;
        if (one > remainingChange) {
            return [];
        } else {
            do {
                one += 1;
            } while (one <= remainingChange && one <= cid[4][1])
            one -= 1;
            remainingChange -= one;
            return ["ONE", one, remainingChange];
        }
    } else if (i === 3) {
        let quarter = 0.25;
        if (quarter > remainingChange) {
            return [];
        } else {
            do {
                quarter += 0.25;
            } while (quarter <= remainingChange && quarter <= cid[3][1])
            quarter -= 0.25;
            remainingChange -= quarter;
            return ["QUARTER", quarter, remainingChange];
        }
    } else if (i === 2) {
        let dime = 0.1;
        if (dime > remainingChange) {
            return [];
        } else {
            do {
                dime += 0.1;
            } while (dime <= remainingChange && dime <= cid[2][1])
            dime -= 0.1;
            remainingChange -= dime;
            return ["DIME", dime, remainingChange];
        }
    } else if (i === 1) {
        let nickel = 0.05;
        if (nickel > remainingChange) {
            return [];
        } else {
            do {
                nickel += 0.05;
            } while (nickel <= remainingChange && nickel <= cid[1][1])
            nickel -= 0.05;
            remainingChange -= nickel;
            return ["NICKEL", nickel, remainingChange];
        }
    } else if (i === 0) {
        let penny = 0.01;
        if (penny > remainingChange) {
            return [];
        } else {
            do {
                penny += 0.01;
            } while (penny <= remainingChange && penny <= cid[0][1])
            penny -= 0.01;
            remainingChange -= penny;
            return ["PENNY", penny, remainingChange];
        }
    }
}

const giveMeTotal = (cid) => {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += cid[i][1];
    }
    return sum;
}

function checkCashRegister(price, cash, cid) {
    // Getting total from cid
    let total = giveMeTotal(cid);
    let oBject = {};

    let change = cash - price;
    let changeArr = [];
    if (total === change) {

        oBject.status = "CLOSED";
        oBject.change = cid;
        return oBject;

    } else if (total < change) {
        oBject.status = "INSUFFICIENT_FUNDS";
        oBject.change = changeArr;
        return oBject;
    }
    else if (total > 0) {
        for (let i = 8; i >= 0; i--) {
            if (cid[i][1] > 0) {

                let checkForEmptyArr = process(i, change, cid);
                if (checkForEmptyArr.length !== 0) {

                    change = checkForEmptyArr.splice(2, 1);
                    changeArr.push(checkForEmptyArr);
                }
            }

        }
        oBject.status = "OPEN";
        oBject.change = changeArr;
        return oBject;
        // if (change > 0)
        // {
        //     oBject.status = "OPEN";
        //     oBject.change = changeArr;
        //     return oBject;
        // }else{
        //     oBject.status = "INSUFFICIENT_FUNDS";
        //     oBject.change = [];
        //     return change;
        // }
        // return changeArr;
        // add all the newarr change and compare it with the change if these two were not equal then no exact change.
    }


}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
