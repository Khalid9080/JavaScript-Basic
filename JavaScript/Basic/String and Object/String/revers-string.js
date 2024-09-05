
// mathod 1  ----------

const word = 'I am a developer.';
let reverse = '';
for (const letter of word) {
    // console.log('letter');
    reverse = letter + reverse;
}
console.log(reverse);

// mathod 2 -------------

const mouse = 'I need a mouse.';
let rev = '';
for (i = 0; i < mouse.length; i++) {
    // console.log(mouse[i]);
    const mice = mouse[i];
    rev = mice + rev;
}
console.log(rev);


// mathod 3 ------------

const sentence='khalid saifullah';
const reversed = sentence.split('').reverse().join('');
console.log(reversed);