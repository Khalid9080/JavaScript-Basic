

/**  ------- Inch to Feet Conversion---------
 * problem-1 : Given Inch to Feet Conversion
 */



//  method-1 ----------

function inchTofeet(inch){
    const feet =inch/12;
    return feet;
}

const khalid=inchTofeet(80);
console.log(khalid);




// method-2 -------------

function inch2feet(incis){
    const feetFraction=incis/12;
    const feetnumber=parseInt(feetFraction);
    const inchRemaining=incis%12;
    const result =feetnumber+' ft '+inchRemaining+' inch';
    return result;
}
const height=inch2feet(82);
console.log("Khalids Height is :",height);