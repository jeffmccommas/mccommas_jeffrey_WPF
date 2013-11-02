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