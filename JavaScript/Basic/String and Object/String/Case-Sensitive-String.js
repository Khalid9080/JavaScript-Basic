

/* String are case sensitive

--> toLowerCase() --> makes string lowercase
--> toUpperCase() --> make string Uppercase.

*/


let college='Gazipur IDEAL college.'

console.log('college');
console.log(college.toLowerCase());
console.log(college.toUpperCase());




const sub='Chemistry';
const subject='chemistry';

if(subject.toUpperCase() === sub.toLowerCase()){   // if and only if toLowerCase()
    console.log('It is right.');
}
else{
    console.log('It is wrong.');
}


/* ----------- White Spacing Problem In String----------- */ 

const khalid='liquid';
const sazim='  water';

if(khalid===sazim){
    console.log('execute !');
}
else{
    console.log('not execute !');
}


//trim() --> resolve white spacing problem 

const k='liquid';
const s='  liquid';

if(k===s.trim()){
    console.log('execute !');
}
else{
    console.log('not execute !');
}