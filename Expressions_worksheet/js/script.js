// JavaScript
/* Jeffrey McCommas
 Nov. 2nd 2013
 Activity: Expression Worksheet
 */

// Dog Years

var sparkysAge = 10; // The dogs actual age

var ageInDogYears = sparkysAge * 7; // The dogs age multiplied by 7

var ageResults = "Sparky is "   + sparkysAge +   " human years old which is "  + ageInDogYears +  " in dog years."; // Resultss of the dogs age * 7

  console.log(ageResults); // Return results


// Slice of Pie part 1

var pizzas = 4; // 4 pizzas total

var slicesPerPizza = 8; // each pizza has 6 slices

var persons = 10; // No. of people at the party

var slicesPerPerson = (pizzas * slicesPerPizza) / persons; // Multiply the number of pizzas by the number of slices and divide by the people at the party

var pizzaResults = "Each person ate "  + slicesPerPerson +   " slices of pizza at the party.";
  console.log(pizzaResults); // Return results for how many slices per person


// Slice of Pie part II

var pizzas = 4; // 4 pizzas total

var slicesPerPizza = 8; // each pizza has 6 slices

var persons = 10; // No. of people at the party

var slicesPerPerson = (pizzas * slicesPerPizza) % persons; // Multiply the number of pizzas by the number of slices and get the remainder of uneaten slices

var sparkyResults = "Sparky got "  + slicesPerPerson +  " slices of pizza.";
    console.log(sparkyResults); // Number of slices Sparky gets to eat.


// Average shopping bill

var groceryBills = [125, 230, 179, 199, 147];
var groceryTotal = (groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4]);
var groceryResults = (groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4]) / 5;


var totalGroceryResults = "You have spent a total of $" + groceryTotal + " on groceries over 5 weeks. That is an average of $" +groceryResults+ " per week";

console.log(totalGroceryResults);

// Discounts

var originalPrice = 500; //Original price

var discountPercentage = 20; //Discount percentage

var discount = originalPrice * discountPercentage / 100;

var itemDesc = "HDTV"; //Description of item

var taxPercentage = 10; // Sales tax percentage

var discountedPrice = originalPrice - discount;

var tax = discountedPrice * taxPercentage / 100;

var withTax = discountedPrice + tax; // Discount Price with Tax

var discountResults = "Your " +itemDesc+ " was originally $" +originalPrice+ ", but after a " +discountPercentage+ "% discount, it is now $" + discountedPrice + " without tax, and $" +withTax+ " with tax";

    console.log(discountResults);


////////////// Extra coding added just for the fun of it /////////////////////


var dogYears = document.getElementById('dogYears');

dogYears.innerHTML = dogYears.innerHTML + ageResults;

var pizza1 = document.getElementById('pizza1');

pizza1.innerHTML = pizza1.innerHTML + pizzaResults;

var pizza2 = document.getElementById('pizza2');

pizza2.innerHTML = pizza2.innerHTML + sparkyResults;

var shopping = document.getElementById('shopping');

shopping.innerHTML = shopping.innerHTML + totalGroceryResults;

var discount = document.getElementById('discount');

discount.innerHTML = discount.innerHTML + discountResults;
