// JavaScript
/* Jeffrey McCommas
 Nov. 10th 2013
 Activity: Conditionals Wacky
 */

/// Dog, Cat and Bird Fight


// confirm popup asking for true/false inout
var exitGame = confirm("This is a animal fighting game where you chose either a Dog, a Cat or a Bird to fight. In this case we will play against the machine where the machine gets to pick the opponent.");

// if/else statement. I started off with this choice to exit tha game but found it wasn't a good idea. I just left it in for now until I figure out a better use for it
if (exitGame === true || false) {
    console.log("Sorry, you have to play my game no matter what choice you just made..haha")
}

// We start by first asking the user which option they want to pick. and store it in a variable called playerChoice
var playersChoice = prompt("Which fighter do you wish to chose? The Dog, Cat or Bird").toLowerCase();

// Now I declare a variable and make it equal to Math.random(), that variable will equal a number between 0 and 1.
var machineChoice = Math.random();

// If machineChoice is between 0 and 0.33, make machineChoice equal to "dog".
if (machineChoice < 0.34){
    machineChoice = "dog";

// If machineChoice is between 0.34 and 0.66, make machineChoice equal to "cat".
}else if(machineChoice <= 0.67){
    machineChoice = "cat";

// If machineChoice is between 0.67 and1, make machineChoice equal to "bird".
}else{
    machineChoice = "bird";
}

// store all the results in a variable that gets returned in the console log for either the machine or the player using parameters and arguments
var results = {
    'bird': {'cat':   "Excellent, That cat just kicked some booty!",   'dog':    'Bummer Dude, The Dog loses...!'},
    'dog': {'cat':   'Excellent, That cat just kicked some booty', 'bird': 'Excellent, That Bird just kicked some ass!' },
    'cat':  {'bird':   'Excellent, That Bird just kicked some ass!', 'dog': 'Bummer Dude, sThe Dog loses...!'}
};

// Print the results
if(playersChoice === machineChoice){
    console.log("Looks like the opponents were evenly matched, no one wins so try again");
}else{
    console.log(results[playersChoice][machineChoice]);

}
