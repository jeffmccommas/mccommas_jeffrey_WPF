// JavaScript
/* Jeffrey McCommas
 Nov. 16th 2013
 Activity: Functions Worksheet
 */

///////////////////////////////////////////////////////////////////////////////////////////
/*********** Circumference - calculate the circumference of a circle //*******************/
///////////////////////////////////////////////////////////////////////////////////////////


//store and display the value of circumference:

var circumference;

// Function getCircumference() ad store a parameter
function getCircumference(rad) {

    circumference = 2 * (Math.PI * rad); // passes parameter here

    return circumference;
}

// Prompt user to input a number
 var radius = (parseFloat(prompt("Enter length of radius:" , '')));

// If its not a number alert user
    if (isNaN(radius)) {

        alert("Looks like you didn't enter a number, please try again");

    } else  {

// else invoke the function
        var circle = getCircumference(radius);
    }

// Print the results to the console log
resultString = "The circumference of the circle is: " + circle;
console.log(resultString);


///////////////////////////////////////////////////////////////////////////////////////////
/***************************** Stung! - Bee sting function //*****************************/
///////////////////////////////////////////////////////////////////////////////////////////

// Variables need to calculate the bee stings
var beeStings = 8.666666667;
var resultsText = "";
var killResults;

// User Prompt
var victimsWeight = (parseInt(prompt("Enter the weight in pounds of the animal to calculate the bee stings it would take to kill it", '')));

// Function to do the math and round out the number usr Math.round
function beeKilled(){
   killResults = victimsWeight * beeStings;
   resultsText = Math.round(killResults);
   return killResults;
}

// Invoke the function
beeKilled();

// Print the results
console.log("It takes " + resultsText + " bee stings to kill this animal");
