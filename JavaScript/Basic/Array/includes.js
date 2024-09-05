


/*------ includes() ----- 

 --> array er vitor kono specific index ase kina check kora.
 --> thakle TRUE, na thakle FLASE dekhabe.

*/

const sports=['football','cricket','hockey','swiming','baseball','volyball','basketball'];

console.log(sports.includes('cricket')); //true
console.log(sports.includes('Badminton')); //false

// includes() in if-esle  -->

if(sports.includes('football'))
{
    console.log("khela hobe");
}
else{
    console.log("pora hobe.");
}
