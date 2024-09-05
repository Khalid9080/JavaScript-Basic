

/*

Give me the list of numbers between 1 to 30 divisible by 5.

*/

for (i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

/*

Give me the list of numbers between 1 to 30 divisible by 3.

*/

for (i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
/*

Give me the list of numbers between 1 to 30 divisible by 3 and 5.

*/

for (i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
/*

Give me the list of numbers between 1 to 30 divisible by 3 or 5.

*/

for (i = 1; i <= 30; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}



/*

Give me the sum of numbers from 1 to 20 divisible by 3 .

*/

let total=0;
for (i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
        total+=i;
    }
   
}

console.log('Total of the numbers : ',total);