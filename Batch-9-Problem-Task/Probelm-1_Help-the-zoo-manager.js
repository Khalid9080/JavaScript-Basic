

/**
 * Make a function named calculateMoney() which can take ticket sales number (a positive number) as an input.    
 * Inside this function how much money we got from selling the tickets we need to identify. 
 * 
 * Hint:   
 * 1 ticket -> 120tk;
 * every day one guard -> 500tk;
 * everyday each staf lunch -> 50tk;
 * input will be the value of selling tickets.(+ value)
 * output will be remaining tk from income and expences. output can be positive or negative.
 * challahge: if u input a negative value it will return a error massage.
 * 
 */


function calculateMoney(ticketSales) {
    if (ticketSales < 0) {
        return 'Invalid Number';
    }
    let remainingAmount = ticketSales * 120 - (500 + 8 * 50);
    return remainingAmount;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));