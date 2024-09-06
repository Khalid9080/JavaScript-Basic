

/*---------------- parameter ----------

 --> function call korar shomoe parameter er value dite hobe. 
 --> parameter only inside the function kaj korbe. function er baire kaj korbe na.

*/

//                     5/56  10/16   --> arguments tai ekhane jokhon ashbe tokhon eke parameter bole.
function multiplication(num1, num2) {
    console.log('values of the pararmeter :', num1, 'and', num2);
    const square = num1 * num2;
    console.log('Multiplications of the parameter : ', square);
}

multiplication(5, 10); // values of the num1=5, num2=10  , --> ekhane  5,10 k arguments bole.
multiplication(56, 16); // values of the num1=56, num2=16
