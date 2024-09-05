


/*  -----------For Loop Syntax---------

    variable declearation

    for (1st part ; 2nd Part ; 3rd part)

        {
            loop statement

        }


    variable declearation
    
    for (variable initialization ; condition of the loop ; itaration how many times)

        {
            loop statement

        }



*/




for (let num = 0; num < 10; num++) {

    console.log('numbers are : ', num);
    
} 


//Example - 2 --------

let marks=0;
for(let i=11; i<=20; i++){
    marks=marks+i;
    console.log(i); // to show the iteration.
     //  console.log("Marks in total : ",marks);    -->    to show iteration number with massage.
}

console.log("Marks in total : ",marks); 


//example 3--------

for(let i=20;i>=0;i--)
{
    console.log(i);
}