




/* ---------- Empty Array--------- */
let shunno=[];


/*--------- push(index number) ---------- 
  --> Last index a add hoe.
  --> push(ekhane index number use korte hobe) 
*/

let one=[1,2,3,4,5];
one.push(6);
one.push(100,101,102,'Khalid',true);
console.log(one);








/*----------------- pop() --------------------
  --> Last index a out hobe.
  --> pop() jotobar use hobe, last a theke ekta kore out hobe.  
*/

let two=[1,2,3,4,5,6,7,8,9];
two.pop();
two.pop();
console.log(two);

/*-------------- pop() using variable -----------------
--> pop() jotobar use hobe, last a theke totobar ekta kore out hobe.

--> USE CASE of pop() VARIABLE 
        --> Jei index ta pop() hoilo, oi index ta amra ekta variable a store kore rakhte pari. jate kore amra further oi index k use korte pari.

*/

let three=[1,2,3,4,5,6,7,8,9];

const out1=three.pop();
const out2=three.pop();
const out3=three.pop();
const out4=three.pop();

console.log(out1,out2,out3,out4);