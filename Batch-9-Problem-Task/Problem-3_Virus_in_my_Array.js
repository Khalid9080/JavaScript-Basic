
/**
 * A function named deleteInvitation(), which can take array as an input.
 * This function will return another array which value will be number.
 * Those elements of the array is not a number, that will be deleted from the array, and remaining array will returned.
 * 
 * Hint: 
 * Input:
 *  will be an arry and datatypes can be anything.
 * 
 * output:
 * Output will be another array, and the should be numbers.
 * 
 * Chanllange: 
 * If it passes anything rather than array, an error massage will be shown.
 *  
 * 
 */

function deleteInvitation(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array.'
    }
    let numberArray = [];

    for (let element of array) {
        if (typeof element === 'number' && isNaN(element) === false) {
            numberArray.push(element)
        }
    }

    return numberArray;

}

console.log(deleteInvitation(['1', null, 18, -19, NaN, 12, [1, 2], { ob: 'lala' }]));
console.log(deleteInvitation({ num: [1, 2, 3] }));