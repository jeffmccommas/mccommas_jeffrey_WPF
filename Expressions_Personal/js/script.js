// JavaScript
/* Jeffrey McCommas
 Nov. 2nd 2013
 Activity: Expression Personal
 */
//Calculating Your Car's Miles Per Gallon (MPG)


// Fill up your car's gas tank all the way.
var tripOdometer = prompt("Calculating Your Car's Miles Per Gallon (MPG) \n\nYou must First Fill up your car's gas tank all the way.\n\nNext,Enter the number of miles indicated on your odometer.");

if (!isNaN(tripOdometer)) { // Check that the user has entered a valid number, if is not a number, alert user
    alert("This is a valid number. You can proceed to next step!! ");
} else {
    alert("This is not a number. Please enter a valid number.");
}

// If your car has a trip odometer, reset it, or record the master odometer mileage.
var milesDriven = prompt("Drive your car as you normally would, and let your gas tank deplete to at least a half of a tank of gas.\n\nWhen you are ready enter the miles you drove since you last filled up");

if (!isNaN(milesDriven)) {
    alert("This is a valid number. You can proceed to next step!! "); // Check that the user has entered a valid number, if is not a number, alert user
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

// Record the amount of gas it took to refill the tank.
var recordedTrip = prompt("Record the elapsed trip miles or new odometer mileage. Enter this new number below");

if (!isNaN(recordedTrip)) {
    alert("This is  a valid number. You can proceed to next step!! "); // Check that the user has entered a valid number, if is not a number, alert user
} else {
    alert("This is not a valid number. Please enter a valid number ");
}

/* Calculate
Get the miles traveled from the trip odometer, or subtract the original odometer reading from the new one.
Divide the miles traveled by the amount of gallons it took to refill the tank. The result will be your car's average Miles Per Gallon yield for that driving period.*/
var gasMileage =  (tripOdometer - milesDriven) / gasFillUp;

var results = gasMileage;

alert("Your gas mileage is " + gasMileage + "");

console.log("Congratulations!! Your gas mileage is " + gasMileage + "");

