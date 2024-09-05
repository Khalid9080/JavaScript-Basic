/*  ------------- Return Keys ----------- */

const computer ={
    brand : 'lenevo',
    price : 35000,
    processor: 'intel',
    hdd : '523gb',
    monitor: 'hp'
}

const ki = Object.keys(computer);
console.log(ki);





/*  ----------- Return Values  ----------- */

const pc ={
    brand : 'asus',
    price : 65000,
    processor: 'ryzen',
    hdd : '1TB',
    monitor: 'benQ'
}

const val = Object.values(pc);
console.log(val);


/*  ----------- Nested Object  ----------- */


const clg={
    name:'vnc',
    class: ['11','12'],
    events: ['scienc','bijoyDibosh','21feb'],
    unique:{
        color:'blue',
        result:{
            gap:5,
            merit:'top',

        }
    }
}

console.log(clg.unique.color);
//changing values --
clg.unique.result.merit ='top top';
console.log(clg.unique.result.merit); 

//  console.log(clg['unique'].result.merit); --> third bracket notation, 

// changing objects array values--

clg.events[2]='16 december';
console.log(clg.events[2]);


/* ----------------  Proprty Delete--------------- */
delete clg.unique;
console.log(clg);