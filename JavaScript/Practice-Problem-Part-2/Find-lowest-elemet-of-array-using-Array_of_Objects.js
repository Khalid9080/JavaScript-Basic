



/* 
 Problem-1 : Find the lowest elements of the array. 
*/


const prisce = [2000, 16000, 50000, 100000, 120000, 30000, 35000];

function getMin(numbers) {

    let min = numbers[0];

    for (num of numbers) {

        //console.log(num);

        if (num < min) {
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prisce);
console.log('Cheapest One is :', cheap);



/* 
 Problem-2 : Find the lowest elements of the array using Array of Objects.  
*/


const employee = [
    { name: 'Khalid', Salary: 40000, Loc: 'Dhaka', pos: 'CEO' },
    { name: 'Saiffullah', Salary: 30000, Loc: 'Mhaka', pos: 'CEO' },
    { name: 'Lhalid', Salary: 50000, Loc: 'Dhaka', pos: 'CEO' },
    { name: 'hald', Salary: 320000, Loc: 'Dhaka', pos: 'CEO' },
    { name: 'Sokina', Salary: 400, Loc: 'Dhaka', pos: 'CEO' },
    { name: 'sajid', Salary: 423, Loc: 'Dhaka', pos: 'ops' },
]

function lowestSalaries(taka) {

    let sal = employee[0];
    for (Beton of taka) {
        if (Beton.Salary < sal.Salary) {  // objet name.property name
            sal = Beton;
        }
    }
    return sal;

}

const taka = lowestSalaries(employee);
console.log('Cheapest Phone is : ', taka);
