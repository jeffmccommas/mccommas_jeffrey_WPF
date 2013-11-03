// JavaScript
/* Jeffrey McCommas
 Nov. 2nd 2013
 Activity: Expression Personal
 */
//Calculating Your Car's Miles Per Gallon (MPG)


// Fill up your car's gas tank all the way.
var startOdometer = prompt("Calculating Your Car's Miles Per Gallon (MPG) \n\nYou must First Fill up your car's gas tank all the way.\n\nNext,Enter the number of miles indicated on your odometer.");

if (!isNaN(startOdometer)) { // Check that the user has entered a valid number, if is not a number, alert user
    alert("This is a valid number. You can proceed to next step!! ");
} else {
    alert("This is not a number. Please enter a valid number.");
}

// Record the amount of gas it took to refill the tank.
var endingOdometer = prompt("Drive your car as you normally would, and let your gas tank deplete to at least a half of a tank of gas.\n\nWhen you are ready enter the new odometer reading.");

if (!isNaN(endingOdometer)) {
    alert("This is  a valid number. You can proceed to next step!! "); // Check that the user has entered a valid number, if is not a number, alert user
} else {
    alert("This is not a valid number. Please enter a valid number ");
}

// Drive your car as you normally would, and let your gas tank deplete to at least a half of a tank of gas.
var gasFillUp = prompt("Record the amount of gas it took to refill the tank and enter the amount");

if (!isNaN(gasFillUp)) {
    alert("This is a valid number. You can proceed to next step!! "); // Check that the user has entered a valid number, if is not a number, alert user
} else {
    alert("This is not a valid number. Please enter a valid number ");
}


/* Calculate
Get the miles traveled from the trip odometer, or subtract the original odometer reading from the new one.
Divide the miles traveled by the amount of gallons it took to refill the tank. The result will be your car's average Miles Per Gallon yield for that driving period.*/

var milesDriven = endingOdometer - startOdometer;
var gasMileage =  milesDriven / gasFillUp;

var results = gasMileage;

gasMileage = Math.round(gasMileage); // Rounds to the nearest whole number

alert("Congratulations!! You drove " +milesDriven+ " miles and your gas mileage is " + gasMileage + " miles per gallon");

console.log("Congratulations!! You drove " +milesDriven+ " miles and your gas mileage is " + gasMileage + " miles per gallon");

