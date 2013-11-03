// JavaScript
/* Jeffrey McCommas
 Nov. 2nd 2013
 Activity: Expression Industry
 */

// How many filet's in one Beef Tenderloin

/*Basic calculator that will determine how many steaks you will get out of a beef tenderloin. It will calculate the total weight of a the beef tenderloin, the weight of the fillets you want and then calculate the waste or trim and return the total amount of steks you will get from the meat.
 */

confirm("This is a calculator that will determine how many Fillet Mignon steaks you will get out of your Beef Tenderloin. \n\nWould you like to continue? Press OK to continue"); // Confirm you know what this program is

var tenderloinWeight = prompt("Enter the total weight of the Beef Tenderloin you are going to cut into individual fillets. \n\nExample: If your beef tenderloin is 5 Pounds enter 5"); // Gets the total weight of the meat to serve your party

console.log("You select " +tenderloinWeight+ " Pounds as your weight"); // data entry prompt

if (!isNaN(tenderloinWeight)) { // Check that the user has entered a valid number, if is not a number, alert user
    alert("This is a valid weight. You can proceed to next step!! ");
} else {
    alert("This is not a valid weight. Please enter a valid number.");
}

var guests = prompt("Enter the number of guests at your dinner who will be eating Fillet Mignin. \n\nExample; If you have 5 guests enter the number 5"); // gets the number of people who will be having a steak

console.log("You selected " +guests+ " people who will be eating dinner."); // data entry prompt

if (!isNaN(guests)) { // Check that the user has entered a valid number, if is not a number, alert user
    alert("This is a valid guest count. You can proceed to next step!! ");
} else {
    alert("This is not a valid guest count. Please enter a valid number."); // if else
}

var weightInOunces = tenderloinWeight * 16; // gets the weight of the beef and multiplies it by 16 which is the number of ounces in a pound

//var tenderloinTrim =  35; // average trim on a tenderloin fillet which is 35%

var trim = weightInOunces * 35 / 100; // Calculates the percentage correctly

var netWeight = weightInOunces - trim; // Total weight after trim

var netPounds = netWeight / 16;

var fillets = netWeight / guests; // Divide the beef in pounds by the number of guests

console.log("The total weight of the Tenderloin after trim is " +netWeight+ " ounces which is " +netPounds+ " pounds"); // returns the unces and pounds

fillets = Math.round(fillets); // Rounds to the nearest whole number

var results = "Your Tenderloin can be cut into " +guests+ " Fillets that weight " +fillets+ " ounces each"; // Return the desired results

//alert("You will get " +fillets+ " Fillet Mignon's for your dinner party"); // Return the desired results in an alert

console.log(results); // Return the desired results in console



