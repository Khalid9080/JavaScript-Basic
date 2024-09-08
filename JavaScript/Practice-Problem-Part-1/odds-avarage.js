

/* 
 hint : function takes an array as parameter.
 --> problem : Give me the avarage of the odd number in the array.

*/


// Method-1 : put odd numbers in a array.

function oddAvag(numbers) {
    const odds=[];
    for (const number of numbers) {
        if (number % 2 === 1) {
           // console.log(number);
           odds.push(number);
        }
    }
    // console.log(odds);  odds only containe the odd numbers.

    let sum=0;
    for(const num of odds){
        sum=sum+num;
    }
    const count = odds.length;
    console.log('Sum of Odd number is',sum,'Total Index are',count);
    const avg=sum/count;
    return avg;

}


const numbers = [43, 13, 58, 65, 81];
const avg = oddAvag(numbers);
console.log('Avarage if the odd numbres is : ', avg);