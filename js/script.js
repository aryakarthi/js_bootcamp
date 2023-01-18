// ? Counter script starts

// const btnStart=document.querySelector('.start');
// const btnStop=document.querySelector('.stop');
// const btnReset=document.querySelector('.reset');

// let count=0,startCount;

// btnStart.addEventListener('click',()=>{
//   startCount=setInterval(()=>{
//     count++;
//     showCount();
//   },1000);
// });

// btnStop.addEventListener('click',()=>{
//   clearInterval(startCount);
// });

// btnReset.addEventListener('click',()=>{
//   count=0;
//   clearInterval(startCount);
//   showCount();
// });

// function showCount(){
//   counter=count<10?'0'+count:count;
//   document.querySelector('.counter').innerText=counter;
// }

// ? Counter script ends

// Todo - Check two given numbers and return true if one of the number is 50 or if their sum is 50.

// var x = prompt("Enter No1: ");
// var y = prompt("Enter No2: ");
// var a = Number(x);
// var b = Number(y);
// console.log("No1 : " + a);
// console.log("No2 : " + b);
// console.log("Sum : " + (a+b));
// function sum1(a,b){
//   if (a == 50 || b == 50 || a+b == 50){
//     return (true);
//   }
//   else{
//     return (false);
//   }
// }
// console.log(sum1(a,b));



// Todo - Sum of the two given integers. If the two values are same, then returns triple their sum.

// var x = prompt("Enter No1: ");
// var y = prompt("Enter No2: ");
// var a = Number(x);
// var b = Number(y);
// console.log("No1 : " + a);
// console.log("No2 : " + b);
// function sum2 (a,b) 
// {
//   if ( a == b){
//     return ("No1 == No2. Triple of Sum : " + (3*(a+b)));
//   }
//   else {
//     return ("No1 != No2. Sum : " + (a+b));
//   }
// }
// console.log(sum2(a,b));

// Todo - Check whether a given positive number is a multiple of 3 or a multiple of 7.

// var x = prompt("Enter No: ");
// var a = Number(x);
// function modNo(a) 
// {
//   if (a % 3 == 0 || a % 7 == 0) 
//   {
//     if (a % 3 == 0) 
//     {
//       console.log("No " + a + " is a multiple of 3");
//     } 
//     if (a % 7 == 0) 
//     {
//       console.log("No " + a + " is a multiple of 7");
//     } 
//     return true;
//   } 
//   else {
//     console.log("No " + a + " is neither a multiple of 3 nor 7");
//     return false;
//   }
// }
// console.log(modNo(a));

// Todo - Check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

// var x = prompt("Enter No1: ");
// var y = prompt("Enter No2: ");
// var a = Number(x);
// var b = Number(y);
// console.log("No1 : " + a);
// console.log("No2 : " + b);
// function rangeNo(a, b) 
// {
//   if ((a >= 50 && a <= 99) && (b >= 50 && b <= 99)){
//     console.log("Both numbers " + a + " and " + b + " are in the range b/w 50 and 99.!");
//     return true;
//   }
//   else {
//     console.log("One/Both numbers " + a + " and " + b + " are not in the range b/w 50 and 99.!");
//     return false;
//   }
// }
// console.log(rangeNo(a, b));

// Todo - Find the largest of three given integers.

// var x = prompt("Enter No1: ");
// var y = prompt("Enter No2: ");
// var z = prompt("Enter No3: ");
// var a = Number(x);
// var b = Number(y);
// var c = Number(z);
// console.log("No1 : " + a);
// console.log("No2 : " + b);
// console.log("No3 : " + c);
// function largeNo(a,b,c)
// {
//   if( a > b && a > c )
//   {
//     return a;
//   }
//   else if ( b > c && b > a )   
//   {
//     return b ;
//   }
//   else if ( c > a && c > b )
//   {
//     return c;
//   }
// }
// console.log("The largest number is " + largeNo(a,b,c));

// Todo - Check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// var x = prompt("Enter No1: ");
// var y = prompt("Enter No2: ");
// var a = Number(x);
// var b = Number(y);
// console.log("No1 : " + a);
// console.log("No2 : " + b);
// function rangeNo2(a, b) 
// {
//   if (((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) || ((a >= 70 && a <= 100) && (b >= 70 && b <= 100))){
//     if(((a >= 40 && a <= 60) && (b >= 40 && b <= 60))){
//       console.log("Both numbers " + a + " and " + b + " are in the range b/w 40 and 60.!");
//     }
//     if(((a >= 70 && a <= 100) && (b >= 70 && b <= 100))){
//       console.log("Both numbers " + a + " and " + b + " are in the range b/w 70 and 100.!");
//     }
//     return true;
//   }
//   else {
//     console.log("One/Both numbers " + a + " and " + b + " are neither in the range b/w 40 and 60 nor in the range b/w 70 and 100!");
//     return false;
//   }
// }
// console.log(rangeNo2(a, b));


// Todo - Find a value which is nearest to 100 from two different given integer values.


// var x = prompt("Enter No1: ");
// var y = prompt("Enter No2: ");
// var a = Number(x);
// var b = Number(y);
// console.log("No1 : " + a);
// console.log("No2 : " + b);
// function nearestNo(a, b) {
//   if (a != b)
//   {
//   a1 = Math.abs(a - 100);
//   b1 = Math.abs(b - 100);
//     if (a1 < b1)
//     {
//       return (a+ " is nearest to 100.");
//     }
//     if (b1 < a1)
//     {
//       return (b+ " is nearest to 100.");
//     }
//   }
//   else{
//     return ("Both numbers are equal.!");
//   }
// }
// console.log(nearestNo(a, b));

// Todo - If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

// var x = prompt("Enter Number: ");
// var n = Number(x);
// var sum = 0;
// console.log("Number : " + n);
// function prod(n) {
//   for(var i = 1; i < n; i++){
//     if((i % 3 === 0 )||(i % 5 === 0)){ // ||(i % 3 === 0 && i % 5 === 0)
//       sum = sum + i;
//     }
//   }
//   return sum;
// }
// console.log(prod(n));

// Todo - Check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.


// var x = prompt("Final Exam? : ( t / f )");
// var y = prompt("Enter Marks: ");
// var marks = Number(y);

// if(x=="t"){
//   final = true;
// }
// if(x=="f"){
//   final = false;
// }

// function examType(marks,final){
//   if((final==true) && (marks >= 90)){
//     return true;
//   }
//   else if((final==false) && (marks >= 89 && marks <= 100)){
//     return true;
//   }
//   else{
//     return false;
//   }
//  }

// console.log(examType(marks,final));














