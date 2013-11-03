// JavaScript
/* Jeffrey McCommas
 Nov. 3nd 2013
 Activity: Expression Whacky
 */
// Check if the user is ready to play!

confirm("Are you ready to play my awesome game?"); // Confirm that you are ready to play

var userName = prompt("Enter a player name of your choice to play this game.\n\nExample: Snow White"); // enter a user name that will act as your player

var opponent = prompt("Enter your opponents name.\n\nExample: Batman"); // enter a opponent that will act as your opponent

var age = prompt("Enter your age. You must be at least 18 to play"); // Verifies your age

var opponents= ["WPF instructor", "Spider Man", "Superman", "The Hulk"]; // Array of possible players
var randomOpponent = opponents[Math.floor(Math.random() * opponents.length)]; // Randomly adds another opponent to the story line

if (age < 18) // Boolean statement to check your age which is a basic math less than of greater than equation
{
    console.log("Sorry, you are not ready to play yet!!"); // if you are over the age 18 you can continue, if not you will not be able to play
}
else {
    console.log(userName + " and " +opponent+ " were hanging out at the bus stop, waiting to go to the shops. Then along came " +opponent+ " and "  +randomOpponent+ ". There was a sale on and both needed some new threads. You've never really liked " +opponent+ " . You walk up to him and say."); // concatenate several variables to create a user prompt
}
var userAnswer = prompt("Are you feeling lucky, punk? Well are you??"); // Clint Eastwood form Dirty Harry (hehe)

var yes = ("yes"); // checking if answer yes is lower case or upper case
var Yes = ("Yes");

if (userAnswer === yes || Yes)
{
    console.log(opponent+ " along with the mighty " +randomOpponent+ " hits you very hard. It's " +opponent+ " and " +userName+ " and you're ON! Of course " +opponent+ " wins!"); // concatenate several variables to create a user prompt
}

else {
    console.log("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by " +opponent+ " and " +randomOpponent+ "."); // concatenate several variables to create a user prompt
}

var feedback = prompt("rate your game out of 10"); // rate the game


if (feedback > 8) {
    console.log("This is just the beginning of my game empire. Stay tuned for more!"); // if rating is 8 and above do this
}
else {
    console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!"); // else do this
}