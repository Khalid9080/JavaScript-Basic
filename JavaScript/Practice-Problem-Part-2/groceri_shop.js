
/* 

 --> Problem-1 : make a grad total of all the grocery items prices, using object().

*/


//const numbers =[300,100,700,1200];



const products =[
    {name: 'shampo',price:300},
    {name: 'shirt',price:700},
    {name: 'chiruni',price:100},
    {name: 'pant',price:1200},
]

function getShoppingTotal(products){
    let total=0;
    for(const product of products){
        total=total+product.price; // product er price ta add hobe.
    }
    return total;

}

const total=getShoppingTotal(products);
console.log('Total of all grocery products :',total);



/* 

 --> Problem-2 : make a grad total of all the grocery items prices, using object() in a shopping cart.

*/


const goods =[
    {name: 'shampo',price:300, quantity : 2},
    {name: 'shirt',price:700 , quantity : 3},
    {name:'chiruni',price:100, quantity : 5},
    {name: 'pant',price:1200 , quantity : 1},
]

function cartTotal(goods){

    let total = 0;
    for(const item of goods){
        const thisProductCost = item.price * item.quantity;
        total=total+thisProductCost;
    }

    return total;
}

const shoppingCost = cartTotal(goods);
console.log('Totals of Shopping Cart :',shoppingCost);