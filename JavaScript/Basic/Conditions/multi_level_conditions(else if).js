
/** problem 1 : 5k ba tar beshi kinle 10%, 2.5k ba tar beshi nile 5% discount. */

const price=2000; // my input 

if(price>=5000){
    // 10% discount
    const discount=price*10/100;
    const payAmount=price-discount;
    console.log(payAmount);
}

else if(price>=2500){
    // 5% discount
    const discount=price*5/100;
    const payAmount=price-discount;
    console.log(payAmount);
}

else{
    console.log(price);
}


/**-- problem 2 : age jodi 60 er beshi hoe tahole no money, 15 er kom hole 5%, 30 er beshi hole 15% discount */

const age=35;
var pricec=90000; // my input

if(age>=60){

    // 10% discount

    console.log("You can eat for free.");
}

else if(age<=15){
    // 5% discount
    const discount=pricec*5/100;
    const payAmount=pricec-discount;
    console.log("5% discount amount : "+payAmount);
}
else if(age>30){
    // 15% discount
    const discount=pricec*15/100;
    const payAmount=pricec-discount;
    console.log("15% discount amount : "+payAmount);
}

else{
    console.log(pricec);
}
