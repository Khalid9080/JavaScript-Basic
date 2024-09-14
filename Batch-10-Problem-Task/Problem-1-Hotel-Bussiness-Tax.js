
/*

Problem-01 : Tax Calculator

⚠️ Function Name Must be calculateTax()
হারুণ একজন সফল হোটেল ব্যবসায়ী। তার হোটেল টি অনেক জনপ্রিয় হয়ে উঠছে  এবং মাসের শেষে তার আয় ও খরচের একটি পরিস্কার ধারণা থাকা খুবই গুরুত্বপূর্ণ। তার মাসিক আয় এবং খরচ থেকে সঠিক ট্যাক্স ক্যালকুলেট করতে তাকে সাহায্য করার জন্য তুমি একটি ফাংশন তৈরি করবে।
তোমার ফাংশনটি দুটি ইনপুট নিবে:
1.	মাসিক আয় - একটি পজিটিভ সংখ্যা যা হারুণের মাসিক আয়কে প্রকাশ করে।
2.	মাসিক খরচ - একটি পজিটিভ সংখ্যা যা হারুণের মাসিক খরচকে প্রকাশ করে।
ফাংশনটি আয় এবং খরচের পার্থক্যের ২০% হিসাব করবে এবং তা ট্যাক্স হিসেবে রিটার্ন করবে।

Input :  
প্রথম ইনপুট:  একটি পজিটিভ সংখ্যা যা মাসিক আয়। (0<=income )
দ্বিতীয় ইনপুট: একটি পজিটিভ সংখ্যা যা মাসিক খরচ।  (0<=expense )
Income সবসময় expense থেকে সমান বা  বেশি হবে।  (income >=expense)

Output :   ফাংশনটি ক্যালকুলেটেড ট্যাক্স রিটার্ন করবে। Output দশমিক সংখ্যা ও হতে পারে।

Challenge 📢 : যদি কোনো ইনপুট পজিটিভ সংখ্যা না হয় , অথবা expense এর পরিমান যদি  income এর থেকে বেশি হয় তাহলে  "Invalid Input"  স্ট্রিং  রিটার্ন করবে। 

Hints 💡:  income 10000 টাকা এবং expense 3000 টাকা হলে তাঁর আয় এবং খরচের পার্থ্যক্য হবে 
10000-3000 = 7000 টাকা।  সুতরাং তার ট্যাক্স হবে (7000 * .20)  =1400  টাকা।  



SAMPLE INPUT	SAMPLE OUTPUT
10000, 3000	    1400
34000, 1753	    6449.400000000001
5000, 1500	    700
7000, 7000	    0
-5000, 2000	    Invalid Input
6000, -1500	    Invalid Input

*/


function calculateTax(income, expenses) {
    if(0>income || 0>expenses || expenses>income ) {
        return 'Invalid Input'
    }

    if(income>=expenses){
        let incomeExpensesDiff=income-expenses
        let calculatedTax=incomeExpensesDiff* 0.20
        return calculatedTax
    }
   

}



console.log('Calculated Tax : ',calculateTax(10000, 3000));
console.log('Calculated Tax : ',calculateTax(34000, 1753));
console.log('Calculated Tax : ',calculateTax(5000, 1500));
console.log('Calculated Tax : ',calculateTax(7000, 7000));
console.log('Calculated Tax : ',calculateTax(-5000, 2000));
console.log('Calculated Tax : ',calculateTax(6000, -1500));

