// JavaScript
/* Jeffrey McCommas
 Nov. 16th 2013
 Activity: Functions Wacky
 */


// Ice Cream Flavor of the day -
// This javascript program automatically selects a flavor of the day for the user based on owner data

// Ice Cream flavors choice
var flavor = ["Vanilla", "Chocolate", "Strawberry", "Cookie Dough", "Chocolate Chip"];

// Choice of Cone or Bowl
var cone =  ["Small Cone", "Medium Cone", "large Cone"];
var bowl = ["Small Bowl", "Medium Bowl", "Large Bowl"];

// Choice of Toppins
var toppings = ["Whip Cream","Hot Fudge","Sprinkles","Crumbled Oreo Cookies"];

// Prompts the user to choose whether they want a cone or a bowl and the program will decide on what flavor they will get
var userChoice = prompt("Please select if you want your Ice Cream Flavor of the day served in a bowl or a cone", 'cone');


// Functions add cone type
function buildYourIceCreamCone(flavor, cone, toppings){
    alert("You selected your ice cream flavor to be " + flavor + " with a " + cone + " and the topping will be " +toppings + " ! Enjoy your Ice Cream");
    console.log("You selected your ice cream flavor to be " + flavor + " with a " + cone + " and the topping will be " +toppings + " ! Enjoy your Ice Cream");

}

// Functions add bowl type
function buildYourIceCreamBowl(flavor, bowl, toppings){
    alert("You selected your ice cream flavor to be " + flavor + " with a " + bowl + " and the topping will be " +toppings + " ! Enjoy your Ice Cream");
    console.log("You selected your ice cream flavor to be " + flavor + " with a " + bowl + " and the topping will be " +toppings + " ! Enjoy your Ice Cream");

}
// Invoke the functions within a conditional statement
// Ternary Conditional- This is the arguments that the store owner can change to swap out flavors and choice of cone or bowl
(userChoice === "cone") ? buildYourIceCreamCone(flavor[4],cone[1], toppings[3]) : buildYourIceCreamBowl(flavor[3], bowl[2], toppings[2]);

