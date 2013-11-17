// JavaScript
/* Jeffrey McCommas
 Nov. 16th 2013
 Activity: Functions Industry
 */


/////////// Cooking Units Converter ////////////////////
///////////// U.S. Kitchen Units //////////////////////

/// Givens containing the unit values

var tbsp = .5,
    cup = 8,
    pint = 16,
    quart = 32,
    final = final;

// Function that converts the users input
function converter(){

    if (units === "quart"){
        final = ounces / quart;
    } else if (units === "pint"){
        final = ounces / pint;
    } else if (units === "cup"){
        final = ounces /cup;
    } else if (units === "tbsp"){
        final = ounces / tbsp;

    }

    return final; //returns results to print
}

// User confirmation popup to give us a true or false value
var answer = confirm("This is a simple Javascript program that will help you convert U.S. ounces to kitchen units.\n\nExample would be if you need to know how many Tablespoons 32 ounces is for your recipe.\n\nIf you wish to continue click the OK button. If not click cancel!!");

// If user confirmation == true then do this next step
if (answer === true) {
    var ounces = (parseFloat(prompt("Enter the amount of ounces you wish to convert. Example 64" , '64')));

    var units = prompt("Enter the unit you want to convert the ounces to.\n\nChoices are quart, pint, cup or tbsp", '');

// Invoke the function
 converter();

   var results = (ounces + " Ounce(s) is equivalent to " + final + " " + units + "(s)");

// Is user answer to the confirmation is false then we will do this step
} else {
    alert("Thanks for visiting!! Bye!!")
}
// Print the results
alert(results);
console.log(results);




