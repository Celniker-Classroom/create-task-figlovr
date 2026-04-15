// add javascript here



function currency(change) {

} 

/* document.getElementById("entry").addEventListener("click", function() {
    let dropdown = document.getElementsByName("country");
    let name = prompt("Enter item name:");
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    let cost = Number(prompt("Enter cost as a decimal number:"));
    let number = Number(prompt("Times purchased:"));

    document.getElementById("item").textContent = name;
    document.getElementById("cost").textContent = "$" + cost;
    document.getElementById("times").textContent = number;
    document.getElementById("totalCost").textContent = cost * number;
})  */


document.getElementById("entry").addEventListener("click", function() {
    let dropdown = document.getElementsByName("country");
    let name = prompt("Enter item name:");
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    let cost = Number(prompt("Enter cost as a decimal number:"));
        if cost.i
    let number = Number(prompt("Times purchased:"));
    
    
    var table = document.getElementById("expenseTable");
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = "$" + cost;
    cell3.innerHTML = number;
    cell4.innerHTML = number * cost;

})