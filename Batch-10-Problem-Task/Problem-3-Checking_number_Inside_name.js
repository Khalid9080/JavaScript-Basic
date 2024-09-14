

/*
Problem-03: Checking Digits Inside a Name

⚠️ Function Name Must be checkDigitsInName() --

রাজু পাসপোর্ট রেজিস্ট্রেশনের জন্যে নতুন একটা ওয়েবসাইট বানিয়েছে।  সেখানে অনেকেই নাম ইনপুট দেয়ার সময়  নামের পাশাপাশি  বিভিন্ন নাম্বার ভুল করে দিয়ে ফেলছে। যেটা রাজু একদম ই চায়না।  তাই রাজুকে তোমার হেল্প করতে হবে।
তুমি checkDigitsInName() নামে একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নেবে এবং নামের মধ্যে কোনো সংখ্যা আছে কিনা তা চেক করবে। 
যদি নামের ভিতরে কোনো সংখ্যা থাকে, তাহলে true রিটার্ন করবে। যদি কোনো সংখ্যা না থাকে, তবে false  রিটার্ন করবে। ইনপুট যদি স্ট্রিং না হয়, তবে Invalid Input রিটার্ন করবে।

Input :  একটি স্ট্রিং ইনপুট হিসেবে নেবে। 

Output :  এটা  রিটার্ন করবে একটা বুলিয়ান ভ্যালু  : true / false
যদি নামের ভিতরে কোনো সংখ্যা থাকে, তাহলে true রিটার্ন করবে। যদি কোনো সংখ্যা না থাকে, তবে false  রিটার্ন করবে। 

Challenge 📢 : ইনপুট যদি স্ট্রিং বাদে অন্য কিছু হয়, তবে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT	SAMPLE OUTPUT 
Raj123	        true
n9ayeem	        true
e1mu3	        true
Suman	        false
Name2024	    true
!@#	            false
["Raj"]	        Invalid Input


use js.
Make a checkDigitsInName() function which will return a string and the function will check if the string has any number or not.
If we get any number into the string it will return true, if there is no string it will return false.
 Input: It must be a string
 
Output: It will return a boolian value: true/false
challange: IF name is anything execept string, it will return  "Invalid Input".

SAMPLE INPUT	SAMPLE OUTPUT 
Raj123	        true
n9ayeem	        true
e1mu3	        true
Suman	        false
Name2024	    true
!@#	            false
["Raj"]	        Invalid Input

*/




function checkDigitsInName(name) {
    
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }

    
    for (let i = 0; i < name.length; i++) {
        
        if (!isNaN(name[i])) {
            return true;
        }
    }

    
    return false;
}


console.log(checkDigitsInName("Raj123"));  
console.log(checkDigitsInName("n9ayeem"));  
console.log(checkDigitsInName("e1mu3"));    
console.log(checkDigitsInName("Suman"));    
console.log(checkDigitsInName("Name2024")); 
console.log(checkDigitsInName("!@#"));      
console.log(checkDigitsInName(["Raj"]));    

