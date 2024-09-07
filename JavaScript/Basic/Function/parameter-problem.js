


/**
 *  --> For a given string tell me whether it has even number of characters or not.
 */

function evenSizedString(str) {
    const size = str.length;
    console.log('The Word is', str, 'and the size is', size);

    if (size % 2 === 0) {
        console.log('Even size');
        return true;
    }
    else {
        console.log('Odd Size');
        return false;
    }
}

evenSizedString('Dhaka');
evenSizedString('faka');

/**
 *  --> if a given number is exist then multiply by 2, if given number is not exist then multiply by 3.
 */

function doubleorTripple(number,doDouble){
    if(doDouble===true){
        const result=number*2;
        return result;
    }

    else{
        const result=number*3;
        return result;
    }
   
}

console.log(doubleorTripple(5,true));
console.log(doubleorTripple(5,false));


/**
 *  --> using object
 * 
 */


function getAge(person){
    const age = person.age;
    return age;

}


/**
 *  --> using array 
 */

function nuOfElemets(numbers){
    const len= numbers.length;
    return len;
}

nuOfElemets([15,45,98,65,23,45]);