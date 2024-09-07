

/*   
  --> Problem-1 : Write a function to give me the sum of all numbers in an array.

stp-1 : decleare the function.
stp-2 : call check whether the function is called properly
stp-3 : set as prameter(s)
stp-4 : pass the parameter(s), check wheter parameter is paseed in a proper format.
stp-5 : Do the function taask (step by step).
*/

sum = 0;
function numbersArray(values) {
    for (num of values) {
        console.log('Array elements are : ', num);
        sum = sum + num;
    }
    return sum;
}

const numArray = [45, 47, 15, 23, 56, 98];
const number = numbersArray(numArray);
console.log('Addition of all the array elemets :', number);





/* Probkem-2 : Creat function that will return only the even numbers.
               Retrun only the sum of the even numbers.               */
 
 




 // statement-1 : Creat function that will return only the even numbers.

function findEvenNumbers(numbers) {
    
    const numbs=[];
    for (num of numbers) {
        if (num % 2 === 0) {
            console.log('Even number:', num);
            numbs.push(num);
            
        }
    }
    return numbs;
   
}

const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const numbs = findEvenNumbers(evenNumbers);
console.log(" Even numbers are :", numbs);








// statement-2 : Retrun only the sum of the even numbers.

function sumOfevenNumbers(shongkha) {
    summation = 0;
    
    for (const number of shongkha) {
        if (number % 2 === 0) {
            console.log('Even number:', number);
            
            summation = summation + number;
        }
    }
    
    return number;
}

const evenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const value = sumOfevenNumbers(evenNum);
console.log(" Even numbers addition is :", value);
