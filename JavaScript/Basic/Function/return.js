
/**   -------------- return ----------------
 * --> function er value k die r kno kaj na korle value ta return kora hoe. 
 * --> Retrurn use kora mane function kaj ekhane shes.
 * --> function a return use korle, function call korar shomoe must ekta variable/direct console.log(); use kore call korte hobe.
 */


function khalidSaifullah(marks) {
    const math = marks * 23;
    return math; // return use korae --> math er value ta khalidSaifullah(4) e jabe.
}

const result = khalidSaifullah(4);  /* --> First a khalidSaifullah(4) arguments er value ta marks parameter a jabe.
                                       --> akhon khalidSaifullah(4) a return math value store hobe which is 92, jeta result variable a store hobe 
                                        
                                    */

console.log('Result is : ', result);





/* -------------------Return with even, odd ------------------*/

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log('This is a even number : ',isEven(9));
console.log('This is a even number : ',isEven(110));





//-------------- another way of return -----------

function isEven(num) {
    if (num % 2 === 1) {
        return true;
    }
    
        return false;
   
}
console.log('This is a odd number : ',isEven(9));