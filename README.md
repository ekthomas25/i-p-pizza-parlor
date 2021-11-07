# Pizza Parlor
### By _Liz Thomas_

#### _A web application for a pizza parlor that outputs a price total based on user's selections._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery 3.6.0._

## Description
_This web application is a form that was created for an imaginary pizza parlor that requires the user to choose what kind of pizza they would like to order based on size, sauce, and topping options. The user is required to choose both the size and sauce types, but the three topping options are not required. After the order button is clicked, a final price will be given._

## Setup/Installation Requirements

* #### _Your computer will need to have GIT installed_
* _If you do not currently have GIT installed you will need to follow the directions on GitHub's website for installing and setting up GIT. These can be found [here.](https://docs.github.com/en/get-started/quickstart/set-up-git)_
* _Once you have GIT set up, you will need to open up your terminal and type the command:_

git clone https://github.com/ekthomas25/i-p-pizza-parlor.git

* This will clone the repository to your desktop and you will be able to then open the folder labeled "i-p-pizza-parlor"
* Open the file named "index.html" in your browser to view this project.

## Known Bugs

* _No known bugs_

## License

_If you have any questions or would like to reach out for any reason, please don't hesitate to send and email to [thomas.elizabeth.k@gmail.com](mailto:thomas.elizabeth.k@gmail.com)._

MIT License

Copyright (c) 2021 Elizabeth Thomas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

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