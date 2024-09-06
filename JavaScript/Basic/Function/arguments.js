
// The argument 50 is passed to the function's parameter val1

function addition(val1) {
    const answere = val1 + val1;
    console.log('Vaalue is :', val1, 'Result is : ', answere);
}

addition(50);


// Function calling using variables--------

function add(val3, val4) {
    const ans = val3 + val4;
    console.log('Vaalues are :', val3, 'and', val4, 'Result is : ', ans);
}

const jog = 150;
const milon = 250;
//  150  250
add(jog, milon);  //  --> ekhane (jog, milon) arguments shudhu 150, 250 value carry kortese, r kisu na. ei value duita val3, val4 paramenter er kase jabe.