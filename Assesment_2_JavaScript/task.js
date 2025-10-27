let allOrders = [];

function takeOrder() {
  let customer_name = prompt("Enter customer name:");
  let list_of_item = prompt("Enter list of coffee items");


  let coffeeItems = list_of_item.split(",").map(item => {
    let trimmed = item.trim();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  });

  let order = {
    name: customer_name,
    items: coffeeItems
  };

  allOrders.push(order);

  document.getElementById("order").innerText =
    "Hello " + customer_name + " your order [" + coffeeItems.join(", ") + "] will be ready soon.";
}

takeOrder();
console.log(allOrders);