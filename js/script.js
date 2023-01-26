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



// todo - Sort the items of an array. var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]; Output : -4,-3,1,2,3,5,6,7,8

// var arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// for (var i = 1; i < arr.length; i++)
//     for (var j = 0; j < i; j++)
//         if (arr[i] < arr[j]) {
//           var x = arr[i];
//           arr[i] = arr[j];
//           arr[j] = x;
//         }

// console.log(arr);

// todo - Two arrays with individual values, write a program to compute the sum of each individual index value from the given arrays.
// todo - array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13]; Output : [4, 5, 8, 10, 12, 13]


// var arr1 = [1,0,2,3,4],
//     arr2 = [3,5,6,7,8,13],
//     l = Math.max(arr1.length, arr2.length);
// var result = Array(l);
// for(var i=0; i<l; ++i){
//   result[i] = (arr1[i] || 0) + (arr2[i] || 0);
// } 
// console.log(result);



// todo - Move an array element from one position to another. 
// todo - Input : move([10, 20, 30, 40, 50], 0, 2); Output: [20, 30, 10, 40, 50]

// function move(arr, index1, index2) {
//   let temp = arr;
//   let n1 = temp[index1];
//   let n2 = temp[index2];

//   temp[index1] = n2;
//   temp[index2] = n1;
//   console.log(temp);
// }
// move([10, 20, 30, 40, 50], 0, 2);


// todo - Find the most frequent item of an array.
// todo - arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; Output : a ( 5 times )

// let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let count = 0, mf = 0, item;

// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr.length;j++){
//     if(arr[i]===arr[j]){
//       count++;
//       if(count > mf){
//         mf = count;
//         item = arr[i];
//       }
//     }
//   }
//   count=0;
// }
// console.log("Item " + item + " - " + mf + " times.!");


// todo - Find all unique values in an given array of numbers. 
// todo - Input: [1, 2, 2, 3, 4, 4, 5] , Output: [1,2,3,4,5]

// let arr = [1, 2, 2, 3, 4, 4, 5] , temp = [];
// for(let i=0;i<arr.length;i++){
//   if(arr[i]!==arr[i+1]){
//     temp.push(arr[i]);
//   }
// }
// console.log(temp);

// todo - Merge the two arrays. union([1, 2, 3], [100, 2, 1, 10]);
// todo - Output: [1, 2, 3, 100, 2, 1, 10]

// const array1 = [1, 2, 3];
// const array2 = [100, 2, 1, 10];

// for(let i = 0; i < array2.length; i++) {
//   array1.push(array2[i])
// }

// console.log(array1);

// ? Objects

// let stud1 = { 
//   tamil:96, 
//   english:90,
//   maths:88,
//   physics:84,
//   chemistry:80,
//   computer_science:86,
//   pre_marks:[92,85,94,86,75,90],
//   total_marks:function(){
//     return (this.tamil + this.english + this.maths + this.physics + this.chemistry + this.computer_science);
//   },
//   aveg_marks:function(){
//     return (this.total_marks()/6);
//   },
//   pre_total:function(){
//     let n = 0;
//     for(let i = 0; i < this.pre_marks.length; i++) {
//       n += this.pre_marks[i];
//     }
//     return n;
//   },
//   pre_aveg:function(){
//     return (this.pre_total()/6);
//   }
// }
// let total = stud1.total_marks();
// let aveg = stud1.aveg_marks();
// let preTotal = stud1.pre_total();
// let preAveg = stud1.pre_aveg();
// console.log("Total Marks: " +total);
// console.log("Average: " +aveg);
// console.log("Previous Total Marks: " +preTotal);
// console.log("Previous Average: " +preAveg);


let prod1 = { 
  product:"Mobile", 
  brand:"Apple",
  model:"iPhone 13",
  price:61999,
  color:"black",
  image:"",
  specifications:["ram","chip","display","memory","camera","battery"]
};
let prod2 = { 
  product:"Mobile", 
  brand:"OnePlus",
  model:"OnePlus-10Pro",
  price:66999,
  color:"black",
  image:"",
  specifications:["ram","chip","display","memory","camera","battery"]
};
let prod3 = { 
  product:"Mobile", 
  brand:"Redmi",
  model:"Redmi Note-11Pro",
  price:18999,
  color:"blue",
  image:"",
  specifications:["ram","chip","display","memory","camera","battery"]
};
let prod4 = { 
  product:"Mobile", 
  brand:"Realme",
  model:"Realme Narzo-50Pro",
  price:21999,
  color:"blue",
  image:"",
  specifications:["ram","chip","display","memory","camera","battery"]
};
let prod5 = { 
  product:"Mobile", 
  brand:"Poco",
  model:"Poco X4-Pro",
  price:17999,
  color:"black",
  image:"",
  specifications:["ram","chip","display","memory","camera","battery"]
};
let prod6 = { 
  product:"Mobile", 
  brand:"IQOO",
  model:"IQOO Z6",
  price:18499,
  color:"blue",
  image:"",
  specifications:["ram","chip","display","memory","camera","battery"]
};
let prod7 = { 
  product:"Power Bank", 
  brand:"Xiaomi",
  model:"MI Powerbank-3i",
  price:2050,
  color:"blue",
  image:"",
  specifications:["charging-speed","outputs","capacity"]
};
let prod8 = { 
  product:"Power Bank", 
  brand:"Ambrane",
  model:"Ambrane 20000",
  price:1799,
  color:"black",
  image:"",
  specifications:["charging-speed","outputs","capacity"]
};
let prod9 = { 
  product:"Power Bank", 
  brand:"URBN",
  model:"URBN 20000",
  price:1999,
  color:"green",
  image:"",
  specifications:["charging-speed","outputs","capacity"]
};
let prod10 = { 
  product:"Earbuds", 
  brand:"Samsung",
  model:"Samsung Galaxy Buds",
  price:5250,
  color:"black",
  image:"",
  specifications:["playtime","connectivity","controls"]
};
let prod11 = { 
  product:"Earbuds", 
  brand:"boAt",
  model:"boAt Airdopes-141",
  price:1399,
  color:"blue",
  image:"",
  specifications:["playtime","connectivity","controls"]
};
let prod12 = { 
  product:"Smartwatch", 
  brand:"Fastrack",
  model:"Fastrack Reflex",
  price:2499,
  color:"black",
  image:"",
  specifications:["sports-mode","display","battery"]
};
let prod13 = { 
  product:"Smartwatch", 
  brand:"Boult",
  model:"Boult Dive",
  price:1999,
  color:"blue",
  image:"",
  specifications:["sports-mode","display","battery"]
};
let prod14 = { 
  product:"Smartwatch", 
  brand:"boAt",
  model:"boAt Xtend",
  price:2299,
  color:"black",
  image:"",
  specifications:["sports-mode","display","battery"]
};
let prod15 = { 
  product:"Smartwatch", 
  brand:"Noise",
  model:"Noise ColorFit",
  price:1899,
  color:"blue",
  image:"",
  specifications:["sports-mode","display","battery"]
};
let prod16 = { 
  product:"Laptop", 
  brand:"HP",
  model:"HP 15s",
  price:45000,
  color:"silver",
  image:"",
  specifications:["ram","chip","display","memory","battery"]
};
let prod17 = { 
  product:"Laptop", 
  brand:"Lenovo",
  model:"Lenovo Ideapad",
  price:46999,
  color:"black",
  image:"",
  specifications:["ram","chip","display","memory","battery"]
};
let prod18 = { 
  product:"Laptop", 
  brand:"Asus",
  model:"Asus Vivobook",
  price:47000,
  color:"silver",
  image:"",
  specifications:["ram","chip","display","memory","battery"]
};
let prod19 = { 
  product:"Laptop", 
  brand:"Dell",
  model:"Dell Vostro",
  price:58500,
  color:"silver",
  image:"",
  specifications:["ram","chip","display","memory","battery"]
};
let prod20 = { 
  product:"Laptop", 
  brand:"Acer",
  model:"Acer Aspire 5",
  price:59800,
  color:"black",
  image:"",
  specifications:["ram","chip","display","memory","battery"]
};

let products = [prod1,prod2,prod3,prod4,prod5,prod6,prod7,prod8,prod9,prod10,prod11,prod12,prod13,prod14,prod15,prod16,prod17,prod18,prod19,prod20];
console.log(products);



