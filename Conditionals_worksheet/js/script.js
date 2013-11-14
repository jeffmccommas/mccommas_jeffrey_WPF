// JavaScript
/* Jeffrey McCommas
 Nov. 10th 2013
 Activity: Conditionals Worksheet
 */

/******************** Group 1: Expressions with Conditionals ********************/
/******************** Celsius to Fahrenheit Converter ***************************/

// Collect the number being converted
//var temp = Number(prompt("Enter the degree in a number you wish to convert"));

// Decide if Fahrenheit or Celsius
//var unit = prompt("Enter which the degree you want to convert to. If Celsius enter the letter C, if Fahrenheit enter the letter F ").toLowerCase();

// Calculation for f to c
//var degCent = (temp - 32) * 5 / 9;

// Calculation for c to f
//var degFahren = 9 / 5 * temp + 32;

// Run the conditionals here
//if (unit === "c") {
//
//    console.log("The temperature is " + degFahren + " degrees Celsius.")
//
//} else {
//    degCent = Math.round(degCent * 10) / 10; // Rounds to the nearest whole number + 1 decimal
//
//    console.log("The temperature is " + degCent + " degrees Celsius.")
//}



/******************** Group 2: Multiple Results ********************/
/******************** Check the Login *****************************/

//var newUser = prompt("Enter a UserName for this account. Must be at least 6 characters.", '').toLowerCase();
//var newPassword = prompt("Enter a password for this account . Must be at least 6 characters", '').toLowerCase();
//
//userName = newUser;
//userPass = newPassword;
//
//alert("Congratulations, your account has been created. Click OK to log in to your newly created account");
//
//
//var checkUser = prompt("Enter your username for this account.", '');
//
//if (checkUser === userName) {
//    alert("Welcome, " +userName+ "!");
//    console.log("Welcome, " +userName+ "!");
//
//} else {
//
//    alert("User not found. Try again.");
//    console.log("User not found. Try again.");
//
//}
//var checkPass = prompt("Enter your password for this account.", '');
//
//if (checkPass === userPass) {
//    alert("Success. You have entered the correct password");
//    console.log("Success. You have entered the correct password");
//} else {
//
//    alert("Password does not match our records.");
//    console.log("Password does not match our records.");
//
//}
//
//
//console.log(userName);
//
//console.log(userPass);



/******************** Group 3: Multiple Conditions ********************/

/*The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
Determine which of the two prices the customer is eligible for.*/

/******************** Movie Ticket Price *****************************/


// gross ticket cost
var ticketCost = 12;
// variables for results text
var senior = "Senior Citizen";
var regular = "Regular ticket price";
var kids = "Child Under the age of 10";
var specialTime = "Discount ticket during the early bird hours of 3 and 5 PM";
// Disount Cost
var movieDiscount = 7;

// Prompts user to enter there age
var age = Number(prompt("Welcome to our movies online purchase program.\nTo begin enter your age and click OK." , ''));

// Prompts user to enter the desired movie start time
var time = Number(prompt("Enter the time of day tou want to see the movie. Movies tart on the hour between 12 and 10 each day and we hve a discount for children under ten and seniors 55 and over between the hours of 3 and 5", ''));


// Sets the conditions that determine the total cost for the movie if the user qualifies for a discount
switch (age >= 55 || age <= 10)
{
    case 1:
        var newCost =  ticketCost - movieDiscount;
        confirm("The ticket price is $" +newCost+ " For one " +senior+ " or " +kids+ "");
        console.log("The ticket price is $" +newCost+ " For one " +senior+ " or " +kids+ "");
        alert("Thank you for your purchase and enjoy the movie");
        break;

    case 2:
        var newDiscount = ticketCost - movieDiscount;
        confirm("The ticket price is $" +newDiscount+ " For one " +specialTime+ "");
        console.log("The ticket price is $" +newDiscount+ " For one " +specialTime+ "");
        alert("Thank you for your purchase and enjoy the movie");
        break;

    // If the user does not qualify for a discount then the default movie cost is applied

    default:
        // Prints the results
        confirm("The ticket price is $" +ticketCost+ " For one " +regular+ "");
        console.log("The ticket price is $" +ticketCost+ " For one " +regular+ "");
        alert("Thank you for your purchase and enjoy the movie");
}