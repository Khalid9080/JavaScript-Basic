

/* 

--> Problem-1 : Year will be e leap year if the year is divisible by 4
--> hint : Those year that is not divisible by 100 and if the year is divisible by 4, then it will be a leapayear.
*/


// Simple - Logic

function isLeapyear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isLipi = isLeapyear(2053);
console.log(isLipi);


// Real logic -----------

function isLeapyear2(year) {

    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }

    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }

    else {
        return false;
    }
}

const isLeap = isLeapyear2(2100);
const isLeap1 =isLeapyear2(2400);
const isLeap2 =isLeapyear2(1900);
const isLeap3 =isLeapyear2(2052);

console.log(isLeap,isLeap1,isLeap2,isLeap3);