// add javascript here


document.getElementById("budgetEntry").disabled = false;
let expenses = [];

function currency(change) {

} 


//allows user to create table of expenses
document.getElementById("entry").addEventListener("click", function() {
    let dropdown = document.getElementsByName("country");
    let name = prompt("Enter item name:");
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); //this line used AI/the Internet
    let cost = Number(prompt("Enter cost as a decimal number:"));
        while (isNaN(cost)) {
            alert("Not a decimal number. Try again");
            cost = Number(prompt("Enter cost as a decimal number:"));
        }
    let number = Number(prompt("Enter the number of times purchased:"));
        while (isNaN(number)) {
            alert("Not a decimal number. Try again");
            cost = Number(prompt("Enter the number of times purchased:"));
        }
    let totalCost = number * cost
    expenses.push(totalCost);
    
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
})

document.getElementById("budgetEntry").addEventListener("click", function(){
    let input = document.getElementById("budget").value;
    let num = parseInt(input);

    while (isNaN(input)) {
        document.getElementById("msg").textContent = "Please enter a decimal number!";
        return;
    }
})

