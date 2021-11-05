# Pizza Parlor

**Describe: Pizza()**

Test: "It should return an object with the values of size, sauce, and toppings."
Code: 
pizza = new Pizza("small", "red", "pineapple", "mushrooms", "olives");
pizza;
Expected Output: Pizza {size: "small", sauce: "red", toppings: ["pineapple", "mushrooms", "olives"]}

**Describe: calculateCost()**

Test: "It should calculate cost based on user input"
Code:
pizza = new Pizza("small", "red", "pineapple", "mushrooms", "olives");
pizza.calculateCost();
Expected Output: 18

**Describe: sizeCost()**

Test: "It should calculate the cost of the size of pizza based on user input"
Code:
pizza = new Pizza("Small", "Red", "pineapple", "mushrooms", "olives");
pizza.sizeCost();
Expected Output: 15

**Describe: sauceCost()**

Test: "It should calculate the cost of the sauce based on user input"
Code:
pizza = new Pizza("Small", "Red", "pineapple", "mushrooms", "olives");
pizza.sauceCost();
Expected Output: 0

**Describe: toppingCost()**

Test: "It should calculate the cost of the toppings based on user input"
Code:
pizza = new Pizza("Small", "Red", "pineapple", "mushrooms", "olives");
pizza.toppingCost();
Expected Output: 3

**Describe: Toppings()**

Test: "It should return an object with the values of toppings"
Code:
toppings = new Toppings("pineapple", "mushrooms", "olives")
Expected Output: Toppings {toppings: "pineapple", "mushrooms", "olives"}