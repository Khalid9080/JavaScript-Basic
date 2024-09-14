
/*

Problem 02 : Notification Generator

⚠️ Function Name Must be sendNotification() - 

function sendNotification(email) {
    // You have to write your code here
}

তোমরা জানো, একটি ইমেল ২টি অংশ নিয়ে গঠিত হয়, একটি হল `username` অন্যটি `domain name`। যেমন zihad.ph@gmail.com এখানে zihad.ph হলো ইউজার নেইম,  gmail.com হলো ডোমেইন নেইম।  তোমাকে এমন একটি ফাংশন বানাতে হবে যা input হিসেবে একটা email নিবে।  ফাংশনের কাজ হবে, ইমেইলে থাকা `username` ও `domain  name` আংশ গুলো ব্যবহার করে, একটি notification message তৈরি করা।  
ফাংশনটি একটি নতুন string রিটার্ন করবে যেখানে ইমেলে থাকা `username` ও `domain name` অংশ ২টি ব্যবহার করে notification  এর জন্য মেসেজ তৈরি করতে হবে ।
 Output কি হবে সেটা নিচে  ভাল করে দেখো।  
 
Input :  ইনপুট হবে একটি string, যা হবে একটি ইমেইল (যেমন, zihad@gmail.com) 
@ ক্যারেক্টার টি স্ট্রিং এ একবার ই থাকবে। এটা  username  এবং DomainName  এর মাঝখানে ই থাকবে।  

Output: zihad.ph@gmail.com এই ইমেইলের জন্যে আউটপুট টি হবে ঠিক এরকম। 
zihad.ph sent you an email from gmail.com

Challenge 📢 : যদি ইনপুটটি একটি valid email না হয় অর্থাৎ ইমেইলে @ না থাকে তাহলে একটি এরোর মেসেজ "Invalid Email" রিটার্ন করবে।  
  
Hints 💡:  split() , indexOf() মেথড ব্যবহার করতে পারো। 

SAMPLE INPUT	                SAMPLE OUTPUT
zihad@gmail.com	                zihad sent you an email from gmail.com
farhan34@yahoo.com	            farhan34 sent you an email from yahoo.com
nadim.naem5@outlook.com	        nadim.naem5 sent you an email from outlook.com
fahim234.hotmail.com	        Invalid Email
sadia8icloud.com	            Invalid Email

Use js.
An email has two portion, one is `username` another is `domain name`. For example zihad.ph@gmail.com ,herer zihad.ph is a username and  gmail.com is Domain name. You need to make a function where it can take email as an input. Using `username` and `domain  name` portion function have to create a notification message.
The Function will return a new string where it have to create a notification massage using `username` and `domain name` .

Input: Input will be a string email, like: zihad@gmail.com. @ character should be one time in the string, and it will at the middle of username and DomainName
Output: like: zihad.ph sent you an email from gmail.com.

Challange: If iput email has no @ character then it will return "Invalid Email" massage.

Hint: split() , indexOf() can be use

dont use $ for returning the value.

SAMPLE INPUT	                SAMPLE OUTPUT
zihad@gmail.com	                zihad sent you an email from gmail.com
farhan34@yahoo.com	            farhan34 sent you an email from yahoo.com
nadim.naem5@outlook.com	        nadim.naem5 sent you an email from outlook.com
fahim234.hotmail.com	        Invalid Email
sadia8icloud.com	            Invalid Email
*/


function createNotification(email) {
    
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }

    const portion = email.split('@');

    if (portion[0] === "" || portion[1] === "") {
        return "Invalid Email";
    }
    const username = portion[0];
    const domainName = portion[1];

    return username + " sent you an email from " + domainName;
}


console.log(createNotification("zihad@gmail.com"));       
console.log(createNotification("farhan34@yahoo.com"));   
console.log(createNotification("nadim.naem5@outlook.com"));
console.log(createNotification("fahim234.hotmail.com"));  
console.log(createNotification("sadia8icloud.com"));       

