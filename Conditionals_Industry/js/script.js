// JavaScript
/* Jeffrey McCommas
 Nov. 9th 2013
 Activity: Conditional Industry
 */

// Dinner Party Planning Program: How Much Meat to purchase? This program calculates howm much beef or chicken you would need to purchase based on several user inputs that calculate the number of guests attending and the portions size of the meat entree.

// trim var is the amount of trim we took from the meat. But since we are adding the amount of trim to the total weight needed for the portions we take 100% of the portions needed and add 25% to it, so 100% + 25%
var trim = 1.25;

// Stores our guests prompt choice to this var
var beef = "beef";

// Stores our guests prompt choice to this var
var chicken = "chicken";

// Gather info on the number of guests
var guests = parseInt(prompt("Enter here the number of guests you will be having at the party?", ''));

// Gather info on the number of portions of meat
var portions = parseInt(prompt("What portion size in ounces.\nExample: 12 ", ''));

// Select which meat, beef or chicken and then use toLowerCase method to convert string to lower case
var meatChoice = prompt("Please enter your choice of meat. The selection is either Chicken or Beef.\nExample: If you are having beef for for your dinner, enter the word Beef, if chicken the enter the word chicken", '').toLowerCase();

// Number of Guests X portions in ounces
var totalOunces = guests * portions;

// Takes the # of guests X the amount of portions / 16 to get the pounds of meat
var netWeight = totalOunces / 16;

// Adds the trim to the total weight which is .25
var totalPounds = netWeight * trim;

// Rounds to the nearest whole number
totalPounds = Math.round(totalPounds);

// Using a ternary conditional statement
(meatChoice === beef) ? console.log("You need " +totalPounds+ " pounds of " +beef+ " and each portion would weight " +portions+ " ounces ") : console.log("You need " +totalPounds+ " pounds of " +chicken+ " and each portion would weight " +portions+ " ounces ");





