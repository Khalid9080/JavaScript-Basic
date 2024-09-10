

/* 

 --> problem-1 : between two who get maximum marks, i will treat him.

*/

const disha =56;
const salman = 95;

if (disha>salman){
    console.log("Disah will get the strawberry");

}
else {
    console.log('salman will get the strawberry.');
}

// Solve using function --------

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }

    else{
        return num2;
    }
}

const max1 = getMax(56,79);
const max2 = getMax(89,100);
const ultraMax=getMax(max1,max2);
console.log('Max of two is : ', ultraMax);




/* 

 --> problem-2 : Among three who get maximum marks, i will treat him.
 hint : -> n1,n2,n3 , if n1>n2 and n2>n3 then n1 is bigger.
        -> if n2>n1 and n2>n3 then n2 is bigger.
        -> if n3>n2 and n2>n1 then n3 is bigger.   
*/


const jim=56;
const tim=89;
const kim=68;

if(jim>tim && jim>kim){
    console.log('Jim is bigger.');
}

else if(tim>jim && tim>jim){
    console.log('Tim is the bigger.');
}

else{
    console.log('Kim is the bigger.');
}



// using function ----------

function maxofThree(jim,tim,kim){
    if(jim > tim && jim > kim){
        return jim;
    }

    else if(tim>jim && tim>kim){
        return tim;
    }
    else{
        return kim;
    }
}

const maxi1 = maxofThree(56,79,89);
console.log('Max of three is : ', maxi1);


// Using Math Object -----------


const max = Math.max(56,79,89);
console.log('Max using Math.max : ',max);