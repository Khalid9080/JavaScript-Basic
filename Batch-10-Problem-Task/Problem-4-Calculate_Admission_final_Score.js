

/*


Problem 04 : Calculate Admission Final Score 

⚠️ Function Name Must be calculateFinalScore() --

রাকিব একটি সফটওয়্যার কোম্পানিতে প্রোগ্রামার হিসেবে কাজ করছেন। তার ছোট ভাই, রাজিব, একটি বিখ্যাত বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষা দিয়েছে। 
ভর্তি পরীক্ষার ফলাফল বিভিন্ন মানদণ্ডের উপর ভিত্তি করে নির্ধারিত হবে। রাজিবের পরীক্ষার স্কোর, স্কুলের গ্রেড, এবং অভিভাবকের প্রোফেশন (যদি "farmer" হয়) সবকিছু মিলিয়ে তার ফাইনাল স্কোর বের করতে হবে।
তুমি যেহেতু রাকিবের সহকর্মী এবং ভালো প্রোগ্রামার, তাই রাকিব চায় তুমি একটি ফাংশন calculateFinalScore() বানিয়ে দাও, যা রাজিবের বিভিন্ন তথ্য ইনপুট হিসেবে নিয়ে ফাইনাল স্কোর বের করবে।
ফাইনাল স্কোর যদি ৮০ বা তার বেশি হয়, তাহলে সে ভর্তি হতে পারবে। অন্যথায়, সে ভর্তি হতে পারবে না। 
 
Scoring Criteria
1.	testScore:  ৫০ পয়েন্ট সর্বোচ্চ
2.	schoolGrade : ৩০ পয়েন্ট সর্বোচ্চ
3.	Parent Profession: যদি "farmer" হয়, ২০ পয়েন্ট

Input :  একটি অব্জেক্ট ইনপুট হিসেবে নেবে।  অবজেক্ট এ অবশ্যই name,  testScore, schoolGrade, isFFamily প্রোপার্টি গুলো থাকবে।  যেখানে 
typeof name = string 
typeof testScore= number ( testScore <= 50) 
typeof schoolGrade = number ( schoolGrade <=30) 
typeof  isFFamily = boolean

Output :  এটা রিটার্ন করবে একটা বুলিয়ান ভ্যালু : true / false

Challenge 📢:  যদি ইনপুট টি অব্জেক্ট না হয় তাহলে একটি এরর মেসেজ দেবে একটি  "Invalid Input"


SAMPLE INPUT	                                                                SAMPLE OUTPUT
{ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }	        true
{ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }	        false
"hello" 	                                                                    Invalid Input                    
{ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }	        false  
 
use js
Combined  of Rajib's admission testScore, schoolGrade, Parents profession("farmer") will make the final score.
Make a fuction named calculateFinalScore() which take input. If the final score>=80 Rajib can admited to the university. other wise can't admited.


testScore:  50 point maximum
schoolGrade : 30 point maximum
Parent Profession: If "farmer" then, 20 point

Input: Input will be taken as a object. This object will contain name,  testScore, schoolGrade, isFFamily property. Where 
typeof name = string 
typeof testScore= number ( testScore <= 50) 
typeof schoolGrade = number ( schoolGrade <=30) 
typeof  isFFamily = boolean

Output: It will return a boolean value: true/false
Challange: If input is not object ,then it will give a massge "Invalid Input"



function signature/sample 
function calculateFinalScore(obj) {
    //write your code here
}
*/

function calculateFinalScore(obj) {
    
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;

    
    if (obj.isFFamily===true) {
       finalScore += 20;
    }

    
    return finalScore >= 80;
}


console.log(calculateFinalScore(obj));  

const obj = {
    name: 'Rajib',
    testScore: 10,
    schoolGrade: 25,
    isFFamily: true
};
