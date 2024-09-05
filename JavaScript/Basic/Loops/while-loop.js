
/*

The while loop loops through a block of code as long as a specified condition is true.

---------- Syntax ------

                    loop Variable

                while (condition) {

                    change the variable

                }


*/

let num=0;

while(num<5){
    console.log('Hello',num);
    num=num+1;
   // num+=1;
   // num++;
}







/*------ Grand Total of a while loop -----------*/


let number=0;
let total=0;

while(number<=10){

    number++;
    total=total+number;

    console.log('Grand Total of While loop : ',total);


}

/*------------ Odd/Even number ---------*/


let val=0;

while(val<=10){

    val++;

    if(val % 2==0 ){
        
        console.log('Even number : ',val);

    }


    // else{
    //     console.log("Odd number : ",val );
    // }
    

}


//decrement--------

let n=10;
while(n>=0){
    n--;
    console.log('number : ',n);
}
