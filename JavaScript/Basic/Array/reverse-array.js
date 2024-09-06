
/*  ------------ Using Reverse () --------------------

revers() --> arary er index gulo ultae felbe.

 */



//         [5,4,3,2,1]
const num =[1,2,3,4,5];
console.log(num);

num.reverse();
console.log(num);




/* ----------- Rverse Using Unshift() and (for of loop) -----------------*/

const ball=['football','cricketball','basketball','volyball'];
const rev_ball=[];
for (const playball of ball){
    console.log(playball); // prints only the ball

    rev_ball.unshift(playball); // prints the revers of the ball array.
}

console.log(rev_ball);






/* ----------- Rverse Using Unshift() and (for loop) -----------------*/

const food=['burger','pizza','hotdog','vegis'];
const rev_food=[];

for (let i=0; i<food.length; i++){
    const food_list=food[i];

    rev_food.unshift(food_list); // prints the revers of the ball array.
}

console.log(rev_food);




/* ------------- Revers using (reversing for loop) -------------- */

const bag=['travelling','student','veneti','wedding'];
const rev_bag=[];

for(i=bag.length -1; i>=0;i--){
    const bags=bag[i];
    console.log(bags);

    rev_bag.push(bags);
}

console.log(rev_bag);