// JavaScript
/* Jeffrey McCommas
 Nov. 9th 2013
 Activity: Assignment: Conditionals Personal
 */

/* Friday Night Movies -  A Friday Night movie planner to determine if you have enough money to go to the movies or not.*/

// List of messages printed to the console
var messageOne = "OOPS!! It looks like you are staying home and watching TV tonight!!";

var messageTwo = "Great News!! You can go to the movies and a dinner tonight!!";

var messageThree = "You don\'t have enough money for dinner and a movie. You should go out to a movies!!";

var messageFour = "We are sorry to see you go. Come back when the day is Friday and have a nice day!!";

var messageFive = "You can\'t afford both so you should go out to a fine meal!!";

var friday ="How much money do you have to spend for your Friday Night Date Night?";

    // Confirm if you want to use our Friday Night date planner
    if (confirm("This is a Friday Night Date planner to determine \nif you have enough money to go out to the Movies and Dinner, or just a movie.\n\n" +"If you do not have enough money you will have to stay home and watch Television.\n\nIf today is Friday click the confirm button, if today is not Friday click the cancel button.")) {

    // Checks to make sure the day is Friday
   var dayOfWeek = prompt("If today is Friday click the OK button.\nHINT: Enter Friday if you want to continue", '').toUpperCase();

        // Series of if else conditional statements to check if the use has enough monry

        if (dayOfWeek == 'FRIDAY') {

        var fridayCash = prompt(friday, '');

        if (fridayCash >= 50) {

            alert(messageTwo);
            console.log(messageTwo);

        } else if (fridayCash >= 35) {

            alert(messageFive);
            console.log(messageFive);

        } else if (fridayCash >= 15) {

            alert(messageThree);
            console.log(messageThree);

        } else {

            alert(messageOne);
            console.log(messageOne);
          }
       } // end if conditions

    } else { // start final else condition

        alert(messageFour);
        console.log(messageFour);

     }


