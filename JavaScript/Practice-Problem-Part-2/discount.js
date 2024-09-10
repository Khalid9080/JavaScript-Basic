

/**
 * prbolem-1:
 * discount hint: mormal
 *  spent upto 100tk get discount of -> 100
 *  spent 101-200tk get discount of -> 90
 *  spent more than 200tk get discount of -> 70
 */


function discountedQuantutyPrice(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if (quantity >= 101 && quantity <= 200) {
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}


const totalItems = discountedQuantutyPrice(101);
console.log('The discount over quantities :', totalItems);



/**
* prbolem-2:
*  Layerd discount hint:
*  buy first 100 items get discount of -> 100
*  buy 101-200 item get discount of -> 90
*  buy above 200 get discount of -> 70
*/


function layeredDiscountedTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity<=200){
        const first100Total=100*first100Price;
        const remainingQuantity=quantity-100;
        const remainingTotal=remainingQuantity*second100Price;
        const total = first100Total+remainingTotal;
        return total;
    }   

    else{
        const first100Total=100*first100Price;
        const second100Total=100*second100Price;
        const remainingQuantity=quantity-200;
        const remainingTotal=remainingQuantity*above200Price;

        const total=first100Total+second100Total+remainingTotal;

        return total;
    }

}


const overallTotal=layeredDiscountedTotal(280);
console.log('Layerd Discount Price Over Items :',overallTotal);

