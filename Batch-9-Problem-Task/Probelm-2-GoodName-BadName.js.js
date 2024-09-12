

/**
 * Name a function named checkName(),which can take input as a string.
 * This function will check weather its a good name or bad name.
 * If Good then it will return 'Good Name'. If bad then it will return 'Bad Name'.
 * 
 * Hint : 
 * The last letter (a, y, i, e, o, u, w) of any name is good name. Others are bad name.
 * 
 * Input: 
 * Your input should a name. It must be a string character. It can be upper or lower case.
 * 
 * output: 
 * Output should be in string. It can be a good name or can be a bad name.
 * 
 * Challange: If you take take ant string rather than string it will retur n 'Invalid'.
 */


function checkName(name) {
    let lastLatter = name.slice(-1).toLowerCase();
    let result = false;
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    for (let char of checkArray) {
        if (char === lastLatter) {
            result = true;
        }
    }

    return result ? 'Good Name' : 'Bad Name';


}

console.log(checkName('Salman'));