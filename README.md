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
Expected Output: 18

**Describe: Toppings()**

Test: "It should return an object with the values of toppings"
Code:
toppings = new Toppings("pineapple", "mushrooms", "olives")