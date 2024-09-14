
/*
Problem 05:  Predict Avarage Waiting Time 

⚠️ Function Name Must be waitingTime() -

ইসরাত একটি চাকরির ইন্টারভিউয়ের জন্য অপেক্ষা করছে। তার সিরিয়াল আসলে তাকে ডাকা হবে।  দেয়ালে একটা স্ক্রিনে যারা যারা ইন্টারভিউ দিয়েছে তাদের লিস্ট এবং  প্রত্যেকের কত মিনিট সময় লেগেছে তা দেখাচ্ছে।  ইসরাত বুঝতে পারছেনা যে তাঁর আসলে আর কতক্ষন সময় লাগবে।  তোমার কাজ হলো ইসরাতের আর কত সময় লাগবে তা ক্যালকুলেশন করে বের করার জন্য waitingTime() নামে একটা ফাংশন তৈরি করা। 
ফাংশন টি ২ টা input নেবে ।  ১ম টি হচ্ছে  একটা number এর Array ।  যাদের ভাইভা হয়ে গেছে তাদের  ইন্টারভিউ টাইম। ২য়  টি হচ্ছে ইসরাতের সিরিয়াল নাম্বার।  ফাংশন টি যাদের ভাইভা হয়ে গেছে তাদের সময়ের একটা এভারেজ বের করবে এবং বর্তমান সিরিয়ালের পর থেকে  ইসরাতের আর কত সময় লাগবে সেটা বের করবে এবং আউটপুট হিসেবে রিটার্ন করবে।  
Input :  ফাংশন টি ২ টি ইনপুট নেবে ,  
একটি হলো Array ( যাদের ভাইভা হয়েছে তাদের সময় )  , অন্যটি হলো  ইসরাতের সিরিয়াল নাম্বার।
Serial Number >  length of array 

Output : 
যাদের ভাইভা হয়েছে তাদের রাউন্ডেড এভারেজ বের করো।  ইসরাতের আগে আর কয়জন বাকী আছে তা বের কর।  এবং এই দুটো জিনিস  দিয়ে ইসরাতের waiting time বের করে সেটাকে return করে দাও।   

Example:  array = [ 3, 5, 7, 11, 6 ]  , serial Number = 10

তাহলে এখানে 5 জনের   এভারেজ ইন্টারভিউ টাইম হলো 6 minute (rounded)
ঈসরাতের সিরিয়াল নাম্বার ১০ এর মানে হলো যে তাঁর আগে আছে 10-1 = 9 জন।  
যেহেতু ৫ জনের হয়ে গেছে সেহেতু ইসরাতের আগে আর ভাইবা বাকী আছে  4 জনের। এবার তুমি ই বলো যে ইসরাতের কত সময় লাগবে?   

Challenge 📢 : যদি প্রথম ইনপুট Array না হয় এবং ২য় ইনপুট যদি নাম্বার না হয় তাহলে Invalid Input রিটার্ন করবে।

SAMPLE INPUT	                SAMPLE OUTPUT
[ 3, 5, 7, 11, 6 ], 10	            24
[13, 2], 6	                        24
[13, 2, 6, 7, 10], 6	            0
[6], 4	                            12
7 , 10	                            Invalid Input
"[6,2]", 9	                        Invalid Input
[7, 8, 3, 4, 5], "9"	            Invalid Input


function  waitingTime(waitingTimes  , serialNumber) {
          // You have to write your code here
}


Make a function named waitingTime(). It will take 2 input which is number's array(array), another is serial number(number). im going to take viva, my serial number is 10,  
here number's array(array) is finishing time of the viva cadiddate before me. serial number(number) is my serial number for the viva.

input: 2 input,  array and a number

Serial Number >  length of array 

output: 
avarage time of those who have finish viva. how many person is left before my viva. from two things return the waiting time
Challange: iff first input is not array and second input is not number then return "Invalid Input"
Example:  array = [ 3, 5, 7, 11, 6 ]  , serial Number = 10
so taht before me (10-1)=9 person.
avarage of  [ 3, 5, 7, 11, 6 ] = 6.4 ,rounded 6. so it spent 6 munit time.
[ 3, 5, 7, 11, 6 ] from this 5 persons viva done, so remaining viva before me (9-5)=4.so how many time i need?
 SAMPLE INPUT	                SAMPLE OUTPUT
[ 3, 5, 7, 11, 6 ], 10	            24
[13, 2], 6	                        24
[13, 2, 6, 7, 10], 6	            0
[6], 4	                            12
7 , 10	                            Invalid Input
"[6,2]", 9	                        Invalid Input
[7, 8, 3, 4, 5], "9"	            Invalid Input


function  waitingTime(waitingTimes  , serialNumber) {
          // You have to write your code here
}

*/

function waitingTime(waitingTimes, serialNumber) {
   
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    // Calculate the number of people before your viva
    let beforeIsrat = serialNumber - 1;

    // Calculate the average waiting time of the candidates who have finished their viva
    let FininshedViva = waitingTimes.length;


    let time = 0; // Initialize a variable to store the sum of times
    for (let i = 0; i < waitingTimes.length; i++) { // Loop through the waiting times array
        time = time + waitingTimes[i]; // Add each time to the sum
    }

    let avgtime = Math.round(time / FininshedViva);

    // Calculate how many people are left before your viva
    let remainViva = beforeIsrat - FininshedViva;

   
    // Calculate the total waiting time
    let totalTime = remainViva * avgtime;

    return totalTime;
}

// Sample Test Cases
console.log(waitingTime([3, 5, 7, 11, 6], 10)); // Output: 24
console.log(waitingTime([13, 2], 6)); // Output: 24
console.log(waitingTime([13, 2, 6, 7, 10], 6)); // Output: 0
console.log(waitingTime([6], 4)); // Output: 12
console.log(waitingTime(7, 10)); // Output: "Invalid Input"
console.log(waitingTime("[6,2]", 9)); // Output: "Invalid Input"
console.log(waitingTime([7, 8, 3, 4, 5], "9")); // Output: "Invalid Input"