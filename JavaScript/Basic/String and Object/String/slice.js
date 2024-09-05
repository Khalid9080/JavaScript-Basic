

/* ------------Slice()----------- 

 --> slice() kono string er latter koto gulo dekhabe oita ber kore.


 */


 const addres='Khalid Saifullah';
 const Name=addres.slice(3,13);  // Khalid Saifullah word er 3-13 latter porjonto show korbe.
 console.log(Name);


/* ---------- split(' ') -----------------

 --> Split(' ') , splite function a evabe (' ') qoutation er vitor 1 ta space die
     sentence likle, sentence er protita word ekta array er index akare return korbe.

--> Split('  '), double spacing dile pura sentence k ekta array banabe.

*/

const sentence = 'I am khalid saifullah im studing in american internation university bangladesh';
console.log(sentence.split(' '));


const colour = 'red,green,blue,dark,white'; // This will return perfect ARRAY
console.log(colour.split(','));
