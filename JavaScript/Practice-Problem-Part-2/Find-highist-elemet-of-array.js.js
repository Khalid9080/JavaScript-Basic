


/* 
 Problem : Find the highest elements of the array. 
*/

const highestArray = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers) {
    let max = numbers[0]; 
    for (const num of numbers) {
        if (num > max) {   // num variable ta array er 65 theke 66 colte thakbe automatic.
                            
            max = num;  // max er value shudhu matro num er theke jegulo boro oigulo save thakbe.
        }


    }
    return max;
}

const max = getMax(highestArray);
console.log('Max value is ', max);