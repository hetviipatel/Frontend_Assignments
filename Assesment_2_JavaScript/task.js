
let customer_name = prompt("Enter customer name:");
let list_of_item = prompt("Enter list of coffee items");


let coffeeItems = list_of_item.split(',').map(item =>
    {
    let trimmedItem = item.trim();
    return trimmedItem.charAt(0).toUpperCase() + trimmedItem.slice(1).toLowerCase();
});

document.getElementById("message").innerText = "Hello " + customer_name + "! Your order of " + coffeeItems.join(", ") + " is ready soon";


if(coffeeItems.length === 1) 
    
    {
    alert("No items entered. Order Skipped!");
}

let allOrders = [];

for(let i=0;i<=coffeeItems.length;i++)
{
    let order = {
        customerName: customer_name,
        item: coffeeItems[i]
    };
    allOrders.push(order);
}

