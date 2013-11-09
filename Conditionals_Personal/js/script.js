// JavaScript
/* Jeffrey McCommas
 Nov. 9th 2013
 Activity: Assignment: Conditionals Personal
 */

/* Friday Night Movies -  A Friday Night movie planner to determine if you have enough money to go to the movies or not.*/


var messageOne = "OOPS!! It looks like you are staying home and watching TV tonight!!";

var messageTwo = "Great News!! You can go to the movies and a dinner tonight!!";

var messageThree = "You don\'t have enough money for dinner and a movie. You should go out to a movies!!";

var messageFour = "We are sorry to see you go. Come back when the day is Friday and have a nice day!!";

var messageFive = "You can\'t afford both so you should go out to a fine meal!!";

var friday ="How much money do you have to spend for your Friday Night Date Night?";






    if (confirm("This is a " +dayOfWeek+ " Night Date planner to determine \nif you have enough money to go out to the Movies and Dinner, or just a movie.\n\n" +"If you do not have enough money you will have to stay home and watch Television.\n\nIf today is Friday click the confirm button, if today is not Friday click the cancel button.")) {

        var dayOfWeek = prompt("If today is Friday click the OK button.", 'Hint: This only works if it is Friday');

        dayOfWeek.toUpperCase();



        if (dayOfWeek.toUpperCase() == 'FRIDAY') {


        var fridayCash = prompt(friday, '');

        if (fridayCash >= 50) {

            alert(messageTwo);

        } else if (fridayCash >= 35) {

            alert(messageFive);

        } else if (fridayCash >= 15) {

            alert(messageThree);

        } else {

            alert(messageOne);

        }

       }




    } else {

    alert(messageFour);

     }


