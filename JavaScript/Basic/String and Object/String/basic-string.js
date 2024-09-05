

/**
 * String --> String is immutable. Not changable. 
 *        --> String er index k change kora jae na.
 *        --> Case Sensitive
 * 
 * 
 * Array --> Array is mutable. Changable.
 *       --> Array er index k change kora jae.
 * 
 * 
 */



//----mutable array-------

let gari=['toyota','marcedise','BMW','Corolla',12,345,456];
gari[6]='Riksha';
console.log(gari);


//-----------immutable. Not changable String-----------

let garii='vangari';
garii[3]='k'
console.log(garii);











 /*           --------- String  --------         */

 const country='bangladesh';
 const division='Dhaka';
 const district='gazipur';

 const thana=new String('Drama');
 console.log(thana);


/* ------------------ String Length, string index number --------------*/

const place='gazipur';
console.log(place.length);
console.log(place[6]);

// white space count korbe
const space='gaz   ipur';
console.log(place.length);