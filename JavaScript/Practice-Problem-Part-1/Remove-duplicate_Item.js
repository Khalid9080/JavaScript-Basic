

/**
 * problem : Do not take same elemets in a array.
 */


const WorstPeople = ['Khalid', 'Sadi', 'Asif', 'Dip', 'Saki', 'Refat', 'Sadi', 'Khalid', 'Dip'];
//const numbers=[1,5,61,5,87,7,5,81,61];

function noDuplicate(array) {

    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {  // same as (!unique.includes(item))
            unique.push(item);
        }

    }
    return unique;
}
const uniqeArray = noDuplicate(WorstPeople);
console.log(uniqeArray);
