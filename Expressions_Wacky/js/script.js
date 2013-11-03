// JavaScript
/* Jeffrey McCommas
 Nov. 3nd 2013
 Activity: Expression Whacky
 */
// Check if the user is ready to play!

confirm("I am ready to play!");
var userName = prompt("Enter a player name of your choice to play this game.\nExample: Snow White");
var opponent = prompt("Enter your opponents name.\nExample: Batman");
var age = prompt("Enter your age. You must be at least 18 to play");

if (age < 18)
{
    console.log("Sorry, you are not ready to play yet!!");
}
else {
    console.log(userName + " and " +opponent+ " were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.");
}
var userAnswer = prompt("Are you feeling lucky, punk?");
var yes = ("yes");
if (userAnswer === yes)
{
    console.log("Batman hits you very hard. It's Batman and you're you! Of course Batman wins!");
}

else {
    console.log("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
}

var feedback = prompt("rate your game out of 10");


if (feedback > 8) {
    console.log("This is just the beginning of my game empire. Stay tuned for more!");
}
else {
    console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
}