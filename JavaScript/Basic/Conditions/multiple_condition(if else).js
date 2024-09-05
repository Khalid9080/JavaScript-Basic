
const salary = 24000;
const isBCS = true;
const height = 61;
// const height = 670;
const hasCar=false;


//  ----- (  && AND operation   )  --------
//AND operation execute korte hoile, overall condition match korte hbe.

// all conditions needs to match



if (salary > 20000 && height > 66) {

    console.log('Mariige done');
}

else {
    console.log('no marriage done');
}




// ---------- (   ||  OR Operation  ) -----------

/**
 * Jekono ekta condition match korlei execute korbe.
 */

if  (salary>25000 || height>72){
    console.log('Bia hobe');
}
else{
    console.log('Bia hobe na');
}





// -------- (  || &&   MIXED/COMPLEXD OPERATION ) ---------

if  (salary>25000 || height>72 || isBCS==true){
    console.log('Bia hobe');
}
else{
    console.log('Bia hobe na');
}
//------
if  (salary>25000 && height>72 && isBCS==true){
    console.log('Bia hobe');
}
else{
    console.log('Bia hobe na');
}

//------

if  ((salary>25000 && hasCar==false) ||  isBCS==true){
    console.log('Bia hobe');
}
else{
    console.log('Bia hobe na');
}

//----------
if  ((salary>25000 || hasCar==false) &&  isBCS==true){
    console.log('Bia hobe');
}
else{
    console.log('Bia hobe na');
}



