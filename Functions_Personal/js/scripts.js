// JavaScript
/* Jeffrey McCommas
 Nov. 16th 2013
 Activity: Functions Personal
 */


//////// Inventory Shopping List //////////////
/***** This simple program allows you to keep track of how many food items you have and calculate if you need to purchase more **********/

// Array of groceries with a for loop
var inventory = ["eggs", "milk", "coffee", "butter"];

for (var i = 0; i < inventory.length; i++ ) {
}

// Lets the user know what inventory items are being tracked
console.log("You currently have these items on the inventory list: " + inventory[0] + ", " + inventory[1]+ ", "  +inventory[2]+" and " + inventory[3]+ " ");

/// Par level of inventory
var eggsInv = 24;
var milkInv = 2;
var coffeeInv = 1;
var butterInv = 2;

var eggs = eggsInv;
var milk = milkInv;
var butter = butterInv;
var coffee = coffeeInv;

// Current level of inventory on Hand

var eggsOnHand = 2;
var eggPurchase = eggsInv - eggsOnHand;
var milkOnHand = .3;
var milkPurchase = milkInv - milkOnHand;
var butterOnHand = 0;
var butterPurchase = butterInv - butterOnHand;
var coffeeOnHand = 0;
var coffeePurchase = coffeeInv - coffeeOnHand;

// User prompt to inout a iten to be checked against the inventory
var checklist = prompt("Check how many items you have in inventory: You can check for eggs, milk, butter or coffee", 'eggs');


// Anonymous Function that runs the else if conditions
 var addInv = function(){

    if (checklist === "eggs" &&  eggsOnHand >= eggsInv) {
      alert("you have " +eggsInv+ " eggs in stock and you do not need to purchase any more at this time");

    } else if (checklist === "eggs" &&  eggsOnHand <= eggsInv) {

        alert("You currently have only " +eggsOnHand+ " on hand and need to purchase " +eggPurchase+ " additional eggs");
    }

  // start the check for milk and increase the inv if needed
    else if (checklist === "milk" &&  milkOnHand >= milkInv) {

        alert("you have " +milkInv+ " gallons of milk in stock and you do not need to purchase any more at this time");

    } else if (checklist === "milk" &&  milkOnHand <= milkInv) {

        alert("You currently have only " +milkOnHand+ " gallons of milk on hand and need to purchase " +milkPurchase+ " additional gallons");

    }
  // start the check for butter and increase the inv if needed
    else if (checklist === "butter" &&  butterOnHand >= butterInv) {

        alert("you have " +butterInv+ " pounds of butter in stock and you do not need to purchase any more at this time");

    } else if (checklist === "butter" &&  butterOnHand <= butterInv) {

        alert("You currently have only " +butterOnHand+ " pounds of butter on hand and need to purchase " +butterPurchase+ " additional pounds");

    }

   //  start the check for coffee and increase the inv if needed
    else if (checklist === "coffee" &&  coffeeOnHand >= coffeeInv) {

        alert("you have " +coffeeInv+ " pounds of coffee in stock and you do not need to purchase any more at this time");

    } else if (checklist === "coffee" &&  coffeeOnHand <= coffeeInv) {

        alert("You currently have only " +coffeeOnHand+ " pounds of coffee on hand and need to purchase " +coffeePurchase+ " additional pounds");

    }

}; // end else

// Invoke the function here
addInv();



