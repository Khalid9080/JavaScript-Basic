



/*   ------------  Changing Key/Property  ----------------- */


const car = {


//  key/property      value
    Brand:           'BMW',
    Speed:            191 ,
    Engine:           75 ,
    Color:            'White',
    'More Companies': ['toyota','alion','MGW','jaguar'], // for this we must use third bracket notation

}


/* ---------------- dot notation ------------  */



console.log(car.Color);

const looks=car.Color;
console.log(looks); //same as console.log(car.Color);




/*  ------------third bracket notation --------------*/

console.log(car['Speed']);

const goti=car['Speed'];
console.log(goti);

console.log(car['More Companies']);





/* ----------------  Changing Value --> dot notation ----------------- */

car.Brand='Lamborginy';
console.log(car);

const newname=car.Brand;
console.log(newname);

/* ----------------  Changing Value --> Third bracket notation ----------------- */

car['Brand']='Porshe';
console.log(car);

const newcar=car['Brand'];
console.log(newcar);

