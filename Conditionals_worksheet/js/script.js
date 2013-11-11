// JavaScript
/* Jeffrey McCommas
 Nov. 10th 2013
 Activity: Conditionals Worksheet
 */

/******************** Group 1: Expressions with Conditionals ********************/
/******************** Celsius to Fahrenheit Converter ***************************/

// Collect the number being converted
var temp = Number(prompt("Enter the degree in a number you wish to convert"));

// Decide if Fahrenheit or Celsius
var unit = prompt("Enter which the degree you want to convert to. If Celsius enter the letter C, if Fahrenheit enter the letter F ").toLowerCase();

// Calculation for f to c
var degCent = (temp - 32) * 5 / 9;

// Calculation for c to f
var degFahren = 9 / 5 * temp + 32;

// Run the conditionals here
if (unit === "c") {

    console.log("The temperature is " + degFahren + " degrees Celsius.")

} else {
    degCent = Math.round(degCent * 10) / 10; // Rounds to the nearest whole number + 1 decimal

    console.log("The temperature is " + degCent + " degrees Celsius.")
}



/******************** Group 2: Multiple Results ********************/
/******************** Check the Login *****************************/

var newUser = prompt("Enter a UserName for this account. Must be at least 6 characters.", '');
var newPassword = prompt("Enter a password for this account . Must be at least 6 characters", '');

alert("Congradulations, your account has been created. Click OK to log in to your newly created account")

var userName = newUser;
var userPass = newPassword;

console.log(userName);

console.log(userPass);





/*
 Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.
 Given:
 Username entered by user
 Password entered by user
 Correct username
 Correct password
 Result To Print Out:
 “Welcome, (place their username here)!”  - if the username and password is correct
 “User not found. Try again.” -if the username does not match
 “Password does not match our records.”  -if the username matches but the password does not
 */


/******************** Group 3: Multiple Conditions ********************/
/******************** Movie Ticket Price *****************************/



/*
 The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
 Determine which of the two prices the customer is eligible for.
 Given:
 Time of Movie (Assume whole numbers here)
 Age of the customer
 Result To Print Out:
 “The ticket price is X”
 */