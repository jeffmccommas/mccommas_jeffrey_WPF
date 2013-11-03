// JavaScript
/* Jeffrey McCommas
 Nov. 2nd 2013
 Activity: Expression Industry
 */

// How many filet's in one Beef Tenderloin

/*Basic calculator that will determine how many steaks you will get out of a beef tenderloin. It will calculate the total weight of a the beef tenderloin, the weight of the fillets you want and then calculate the waste or trim and return the total amount of steks you will get from the meat.
 */

confirm("This is a calculator that will determine how many Fillet Mignon steaks you will get out of your Beef Tenderloin. \n\nWould you like to continue? Press OK to continue");

var tenderloinWeight = prompt("Enter the total weight of the Beef Tenderloin you are going to cut into individual fillets. \n\nExample: If your beef tenderloin is 5 Pounds enter 5");

if (!isNaN(tenderloinWeight)) { // Check that the user has entered a valid number, if is not a number, alert user
    alert("This is a valid weight. You can proceed to next step!! ");
} else {
    alert("This is not a valid weight. Please enter a valid number.");
}

var guests = prompt("Enter the number of guests at your dinner who will be eating Fillet Mignin. \n\nExample; If you have 5 guests enter the number 5");

if (!isNaN(guests)) { // Check that the user has entered a valid number, if is not a number, alert user
    alert("This is a valid guest count. You can proceed to next step!! ");
} else {
    alert("This is not a valid guest count. Please enter a valid number.");
}

var weightInOunces = tenderloinWeight * 16;

var tenderloinTrim =  35;

var tenderloinWeightAfterTrim = weightInOunces * tenderloinTrim / 100;

var netWeight = tenderloinWeightAfterTrim / 16;

var fillets = tenderloinWeightAfterTrim / guests;

console.log("The total wight of the Tenderloin is " +tenderloinWeightAfterTrim+ " ounces which is " +netWeight+ " pounds");

fillets = Math.round(fillets);

var results = "You will get " +fillets+ " Fillet Mignon's for your dinner party";

alert("You will get " +fillets+ " Fillet Mignon's for your dinner party");

console.log(results);



