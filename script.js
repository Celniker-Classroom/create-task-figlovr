document.getElementById("budgetEntry").disabled = false; 
let expenses = [];


    
function isDecimal(n) {
    if (n === " " || isNaN(n) || n < 0) {
        document.getElementById("msg").textContent = "Please enter a positive decimal number!";
        return false;
    }
    return true;
}

function budgetEntry(budget) {
    let num = parseInt(budget);
    if (isDecimal(num)) {
        document.getElementById("msg").textContent = " ";
        document.getElementById("budgetDisplay").textContent = "Your Budget: $" + num;
        document.getElementById("budget").value = "";
    }
}


document.getElementById("budgetEntry").addEventListener("click", function(){
    let input = document.getElementById("budget").value;
    budgetEntry(input);
}) 


function itemsEntry(name, cost, number) {
    document.getElementById("msg").textContent = "";
    document.getElementById("itemEntry").value = "";
    document.getElementById("costEntry").value = "";
    document.getElementById("timesPurchased").value = "";
    
    let totalCost = number * cost;
    expenses.push(totalCost);
    let sum = 0;
    
    for (i = 0; i < expenses.length; i++) {
        sum += expenses[i];
    }
    document.getElementById("totalSpend").textContent = "Total Spending: $" + sum; 

    //used W3Schools to figure out how to add entries to a table using JavaScript
    var table = document.getElementById("expenseTable");
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = "$" + cost;
    cell3.innerHTML = number;
    cell4.innerHTML = "$" + totalCost;
}


document.getElementById("entry").addEventListener("click", function() {
    let nameInput = document.getElementById("itemEntry").value;
    let costInput = Number(document.getElementById("costEntry").value);
    let numberInput = Number(document.getElementById("timesPurchased").value);

    currencySelection = document.getElementById("currencySelect").value;
    costInput = currencies(currencySelection, costInput);

    if (!isDecimal(costInput) || !isDecimal(numberInput)) {
        return;
    }

    //Used Google AI Overview for the below line to figure out how to case the item name entry like this
    nameInput = nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase();
    itemsEntry(nameInput, costInput, numberInput);
    document.getElementById("msg").textContent = " ";
})

function currencies(selection, x) {
    if (selection === "EUR") {
        document.getElementById("currencyDisplay").textContent = "Currency: EUR";
        x = 0.85 * x;
    } else if (selection === "CAD") {
        document.getElementById("currencyDisplay").textContent = "Currency: CAD";
        x = 1.37 * x;
    } else if (selection === "INR") {
        document.getElementById("currencyDisplay").textContent = "Currency: INR";
        x = 94.09 * x;
    } else (selection === "USD")
        document.getElementById("currencyDisplay").textContent = "Currency: USD";
        x = x;
    return x;
}

//fix the above function to work without having to enter an expense.......


