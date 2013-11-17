// JavaScript
/* Jeffrey McCommas
 Nov. 16th 2013
 Activity: Functions Industry
 */


/////////// Cooking Units Converter ////////////////////
///////////// U.S. Kitchen Units ////////////

/// Givens containing the unit values
var tbsp = .5;
var cup = 8;
var pint = 16;
var quart = 32;




var answer = confirm("This is a simple Javascript program that will help you convert U.S. ounces to kitchen units.\n\nExample would be if you need to know how many Tablespoons 32 ounces is for your recipe.\n\nIf you wish to continue click the OK button. If not click cancel!!");


if (answer === true) {
    var ounces = (parseFloat(prompt("Enter the amount of ounces you wish to convert. Example 64", '64')));
    console.log(ounces);
    var units = prompt("Enter the unit you want to convert the ounces to.\n\nChoices are quart, pint, cup or tbsp", 'tbsp');
     console.log(units);

    var final = units / ounces;
    function converter(final){

        if (units === quart){
            final = units / ounces;
        } else if (units === pint){
            final = units / ounces;
        } else if (units === cup){
            final = units / ounces;
        } else if (units === tbsp){
            final = tbsp / ounces;
            console.log(final)
        }

        return final;
    }

var results = (ounces + " Ounce(s) is equivalent to " + final + " " + units + "")


} else {
    alert("Thanks for visiting!! Bye!!")
}
converter(final);
console.log(results);




