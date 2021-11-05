// function Toppings(topping1, topping2, topping3) {
//   this.topping1 = topping1;
//   this.topping2 = topping2;
//   this.topping3 = topping3;
// }

function Pizza(size, sauce, topping1, topping2, topping3, price) {
  this.size = size;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.price = 0;
}

Pizza.prototype.sizeCost = function() {
  if (this.size === "Small") {
    this.price += 15;
  } else if (this.size === "Medium") {
    this.price += 18;
  } else if (this.size === "Large") {
    this.price += 22;
  } else if (this.size === "XL") {
    this.price += 26;
  }
  return this.price;
};

Pizza.prototype.sauceCost = function() {
  if (this.sauce === "Pesto") {
    this.price += 1;
  } else if (this.sauce === "White") {
    this.price += 2;
  }
  return this.price;
};

Pizza.prototype.toppingCost = function() {
  if (this.topping1 !== "0") {
    this.price += 1;
  }
  if (this.topping2 !== "0") {
    this.price += 1;
  }
  if (this.topping3 !== "0") {
    this.price += 1;
  }
  return this.price;
  
};

$(document).ready(function() {
  $("form#pizza-select").submit(function(event){
    event.preventDefault();
    let pizzaSize = $("#size").val();
    let pizzaSauce = $("#sauce").val();
    let topping1 = $("#topping1").val();
    let topping2 = $("#topping2").val();
    let topping3 = $("#topping3").val();
    $("#size").val("");
    $("#sauce").val("");
    $("#topping1").val();
    $("#topping2").val("");
    $("#topping3").val("");
    let pizza = new Pizza(pizzaSize, pizzaSauce, topping1, topping2, topping3);
  })
})