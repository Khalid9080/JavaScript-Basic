

// There will be no swaping -----

let a = 5;
let b = 6;
console.log(a, b);

a = b;
b = a;
console.log(a, b);

// There will be swap ----------

//Mathod-1 : ----

console.log('----------');
let x = 100;
let y = 50;
console.log(x,y);

const temp = x;
x = y;
y = temp;

console.log(x, y);

console.log('----------');
//Mathod-2 : ----------- distructuring

let r=5;
let e=7;

console.log(r,e);

[r,e]=[e,r];
console.log(r,e);

