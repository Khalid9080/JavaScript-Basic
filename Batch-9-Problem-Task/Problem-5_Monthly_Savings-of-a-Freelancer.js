
/**
 * Make a function named monthlySavings(), which can take array input and a number.
 * if your payment more than 3000tk , bank will cut 20% vat.
 * Function have to return savings which is payment -(tax+living cost)).
 * if savings is =< 0tk then return 'earn more'.
 * 
 * Hint: --
 * 
 * Input: 
 * function will take input of array and a number.
 * 
 * 
 * Output:
 * function will return a number or string
 * if savings >= 0 ; return total savings
 * if savings =< 0 ; return a string , 'Earn More'.
 * 
 * 
 * Challange:
 * Function will return string to 'Invalid input'
 * if first parameter is not an array
 * if second parameter is not an number.
 * 
 */

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'Invalid Number';
    }
    let totalIncome = 0
    for (let payment of arr) {
        if (payment >= 3000) {
            let tax = payment * 0.2;
            totalIncome += payment - tax
        }

        else {
            totalIncome += payment;
        }
    }


    let savings = totalIncome - livingCost

    if (savings >= 0) {
        return savings;
    }
    else {
        return 'earn more'
    }

    // return savings>=0 ? savings : 'Earn More'; -->  Ternary Operator
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));

