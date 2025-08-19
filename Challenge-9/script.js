const price = 19.5;
let cid = [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
];

const currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

document.querySelector("#purchase-btn").addEventListener("click", () => {
    let cash = parseFloat(document.querySelector("#cash").value);
    let changeDue = document.querySelector("#change-due");

    if (isNaN(cash) || cash <= 0) {
        alert("Please enter a valid cash amount.");
        return;
    }

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item.");
        return;
    }

    let change = cash - price;
    let totalCID = cid.reduce((sum, curr) => sum + curr[1], 0);
    totalCID = Math.round(totalCID * 100) / 100;

    if (cash === price) {
        changeDue.textContent = "No change due - customer paid with exact cash.";
        return;
    }

    if (totalCID < change) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    let changeArray = [];
    let remainingChange = change;

    for (let i = cid.length - 1; i >= 0; i--) {
        let [unit, amount] = cid[i];
        let unitValue = currencyUnits[unit];
        let unitChange = 0;

        while (remainingChange >= unitValue && amount > 0) {
            remainingChange -= unitValue;
            remainingChange = Math.round(remainingChange * 100) / 100;
            amount -= unitValue;
            unitChange += unitValue;
        }

        if (unitChange > 0) {
            changeArray.push([unit, unitChange]);
        }
    }

    if (remainingChange > 0) {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    if (totalCID === change) {
        changeDue.textContent = `Status: CLOSED ${changeArray.map(c => `${c[0]}: $${c[1].toFixed(2)}`).join(" ")}`;
    } else {
        changeDue.textContent = `Status: OPEN ${changeArray.map(c => `${c[0]}: $${c[1].toFixed(2)}`).join(" ")}`;
    }
});
