

/** ----------Ternary Operations--------
 *  Have 3  parts
 * Syntax -->    Condition ? do something true : do something false 
 *          
 */


const age = 12;
age>18 ? console.log("You can vote") : console.log("You can not vote.");

/** 
if(age>18){
    console.log("You can vote")
}
else{
    console.log("You can not vote.")
}

*/


let price=500;
const isLeader = false;

price=isLeader==true ? 0 : price+100;

/*
if(isLeader==true){
    price=0;
}
else{
    price=price+100;
}

*/




let mullo = 8000;
isLeader=ture;

// nested loop -->  mullo>1000 ? mullo=mullo/2 : 0
mullo=isLeader==true ? mullo>1000 ? mullo=mullo/2 : 0 : mullo+100;


/*
if(isLeader=true){
    if(mullo>1000){
        mullo=mullo/2;
    }
    else{
        mullo=0;
    }
    
}
else{
    mullo=mullo+100;
}

*/
