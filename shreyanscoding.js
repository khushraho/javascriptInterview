/**
 *! Example1:-how to check if an object is an array or not
 */
/**
 *?Example:-
 */
// function checkArray(elem){
// return Array.isArray(elem);
// }
// console.log(checkArray([])); //true
// console.log(checkArray({})); //false

/**
 *?Example:-
 */
// function checkArray(elem){
// console.log( Array.isArray(elem));
// }
// checkArray([]); //true
// checkArray({}); //false

/**
 *! Example2:-How to empty an array in javascript:do not reset to a new array ,and do not loop through to pop each value*/
// var arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.length);
// arr.length=0;
// console.log(arr); //[]

/**
 *! Example3:-How would you check if a number is an integer without isInteger(),function.
 */
// var numbers = 19.3;
// if (numbers % 1 === 0) {
//   console.log(numbers, "number is integer");
// } else {
//   console.log(numbers, "number is ! integer");
// }

/**
 *!Example4:-make duplicate array
 */
/**
 *?Example:-
 */
// function duplicate(arr) {
//   return arr.concat(arr);
// }
// console.log(duplicate([1, 2, 3, 4, 5, 6]));

/**
 *?Example:-
 */
// function duplicate(arr) {
//     console.log(arr.concat(arr));
// }
// duplicate([1, 2, 3, 4, 5, 6]);

/**
 *!Example:5-Write a Javascript that reverse a number
 */
/**
 *?Example:-
 */
// function reverseKaro(a){
//     let b=a.toString().split("").reverse().join("");
//     console.log(b);
//     console.log(Number(b));
//     console.log(typeof(Number(b)));
// }
// reverseKaro(12);

/**
 *?Example:-
 */
// function reverseKaro(a){
//    let b=Number(a.toString().split("").reverse().join(""));
//     console.log(b);
//     console.log(typeof(b));
// }
// reverseKaro(12);

/**
 *?Example:-
 */
// function reverseKaro(a){
//     return Number(a.toString().split("").reverse().join(""));
// }
// console.log(reverseKaro(123456789));

/**
 *?Example:-
 */
// function reverseKaro(a) {
//   let b = Number(a.toString().split("").reverse().join(""));
//   let c = typeof b;
//   return c;
// }
// console.log(reverseKaro(12));

/**
 *?Example:-
 */
// function reverseKaro(num){
//     var rev=0;
// while(num>0)
// {

//     var rem=num%10;
//     rev=rev*10+rem;
//     num=Math.floor(num/10);
// }
// return rev;
// }
// console.log(reverseKaro(123489576));

/**
 *!Example6:-Write a Javascript function that checks whethere a passed string is palindrome or not...
 */
/**
 *?Example:-
 */
// function stringPalChecker(str) {
//   var reversed = str.split("").reverse().join("");
//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(stringPalChecker("poop"));
// console.log(stringPalChecker("loop"));

/**
 *?Example:-
 */
// function stringPalChecker(str) {
//   var reversed = str.split("").reverse().join("");
//   if (reversed === str) return true;
//   else return false;
// }
// console.log(stringPalChecker("poop"));
// console.log(stringPalChecker("loop"));

/**
 *?Example:-
 */
// function stringPalChecker(str) {
//   var reversed = str.split("").reverse().join("");
//  return reversed === str ? true : false
// }
// console.log(stringPalChecker("poop"));
// console.log(stringPalChecker("loop"));

/**
 *?Example:-
 */
// function stringPalChecker(str) {
//   var reversed = str.split("").reverse().join("");
//  return reversed === str;
// }
// console.log(stringPalChecker("poop"));
// console.log(stringPalChecker("loop"));

/**
 *!Example7:-Write a Javascript function that returns a passed string with letters in alphabetical order
 */
/**
 *?Example:-
 */
// function stringAlphaBeticalOrder(str){
//     return str.split("").sort().join("");
// }
// console.log(stringAlphaBeticalOrder("apple"));

/**
 *?Example:-
 */
// var word="prakash";
// console.log(word);
// const word1=word.charAt(0).toUpperCase();
// console.log(word1);
// const word2=word.charAt(0).toUpperCase()+ word.substring(1);
// console.log(word2);

/**
 *?Example:-
 */
// var word="prakash";
// console.log(word);
// const word1=word[0].toUpperCase();
// console.log(word1);
// const word2=word[0].toUpperCase()+ word.substring(1);
// console.log(word2);

/**
 *?Example:-
 */
// var word="prakash";
// console.log(word);
// const word1=word.charAt(0).toUpperCase();
// console.log(word1);
// const word2=word.charAt(0).toUpperCase()+ word.slice(1);
// console.log(word2);

/**
 *?Example:-
 */
// var word="prakash";
// console.log(word);
// const word1=word[0].toUpperCase();
// console.log(word1);
// const word2=word[0].toUpperCase()+ word.slice(1);
// console.log(word2);

/**
 *!Example8:-Write a Javascript function thatacceps a string as a parameter and converts the first letter of each word of the string in uppercase
 */
// function capitalizeKaro(str) {
//   var allWords = str.split(" ").map((word) => {
//     return word.charAt(0).toUpperCase() + word.substring(1);
//   });
//   return allWords.join(" ");
// }
// console.log(
//   capitalizeKaro("i am civil a engineer, now i am a coder civilCoders")
// );

/**
 *!Example9:-Write a Javascript function to get the number of occurences of each letter in specified string...
 */
/*
ek string hai usme kon sa character kitni baar aaya hai
 */
/**
 *?Example:-
 */
// function occ(str) {
//   var occurances = {};
//   str.split("").forEach((element) => {
//     if (occurances.hasOwnProperty(element) === false) {
//       occurances[element] = 1;
//     } else {
//       occurances[element]++;
//     }
//   });
//   return occurances;
// }
// console.log(occ("appypie technology"));

/**
 *!Example10:---loop an array and all members of it
 */
/**
 *?Example:-
 */
// var arr=[1,2,3,4,5,6,7,8,9];
// var sum=0;
// arr.forEach(element => {
//     sum=sum+element;
// });
// console.log(sum);

/**
 *?Example:-
 */
// var arr=[1,2,3,4,5,6,7,8,9];
// let totalNumber=arr.reduce((total,num) => {
//     return total+num;
// });
// console.log(totalNumber);

/**
 *!Example11:---is an array of numbers and strings, only add those members which are not strings
 */
// var arr=["hello",123,"aap",234,"kaise",345,"ho",456,"hello",567,678,78];
// var sum=0;
// arr.forEach((elem)=>{
//     if(typeof elem==="number"){
//         sum=sum+elem;
//     }
// })
// console.log(sum);

/**
 *!Example12:---loop an array of objects and remove all objects which don't have gender's value male
 */
/**
 *?Example:-
 */
// var arr=[
//     {name:"harsh",gender:"male"},
//     {name:"harshita",gender:"female"},
//     {name:"abcd",gender:"notSpecified"},
//     {name:"harshi",gender:"female"},
//     {name:"suraj",gender:"male"},
//     {name:"isha",gender:"female"},
// ];
// newArray=arr.filter((elem)=>{
//     return elem.gender==="male"
// })
// console.log(newArray);

/**
 *?Example:-
 */
// var arr = [
//   { name: "harsh", gender: "male" },
//   { name: "harshita", gender: "female" },
//   { name: "abcd", gender: "notSpecified" },
//   { name: "harshi", gender: "female" },
//   { name: "suraj", gender: "male" },
//   { name: "isha", gender: "female" },
// ];

// // // // //ek non-male bande ko hatane ka code likho
// for (var j = 0; j < arr.length; j++) {
//   if (arr[j].gender !== "male") {
//     arr.splice(j, 1);
//   }
// }
// console.log(arr);

// // // //sabse pehle total non-male count lo
// var count = 0;
// arr.forEach((elem) => {
//   if (elem.gender !== "male") count++;
// });
// console.log(count);

// // // //phir us code ko total non-male chala do
// for (var i = 0; i < count; i++) {
//   for (var j = 0; j < arr.length; j++) {
//     if (arr[j].gender !== "male") {
//       arr.splice(j, 1);
//     }
//   }
// }
// console.log(arr);

/**
 *!Example13:---Write a javascript function to clone an array.
 */
/**
 *?Example:-
 */
// function cloneArr(arr){
// return [...arr];
// }
// // console.log(cloneArr([1,2,3,4,5]));
// var newArr=cloneArr([1,2,3,4,5]);
// console.log(newArr);

/**
 *?Example:-
 */
// function cloneArr(arr) {
//   var newArr = [];
//   arr.forEach((element) => {
//     newArr.push(element);
//   });
//   return newArr;
// }
// console.log(cloneArr([1,2,3,4,5]));
// var cloneNewArr = cloneArr([1, 2, 3, 4, 5]);
// console.log(cloneNewArr);
// cloneNewArr.pop();
// console.log(cloneNewArr);
// console.log(cloneArr([1,2,3,4,5]));

/**
 *?Example:-
 */
// function cloneArr(arr){
//     var newArr=arr.map((x)=>{
//         return x;
//     })
//     return newArr;
// }
// console.log(cloneArr([1,2,3,4,5,7]));
// var cloneNewArray=cloneArr([1,2,3,4,5,7]).pop();
// console.log(cloneNewArray);

/**
 *!Example14:---write a javascript function which accepts an arguments and returns the type,NOTE:-There are six possible values that typeOf returns:object,boolean,function,number,string, and undefined.
 */
// function typeTeller(elem) {
//   console.log(typeof elem);
// }
// typeTeller([]);
// typeTeller({});
// typeTeller("cvhj");
// typeTeller(100);
// typeTeller(true);
// typeTeller(undefined);
// typeTeller(function () {});

/**
 *!Example15:-Write a Javascript function to get the first element of an array.Passing a parameter'n' will return the last 'n' elements of the array.
 */
// function retrive(arr,n=1){
// console.log( arr,n);
// }
// retrive([1,2,3,4,5,6],3);

/**
 *?Example:-
 */
// function retrive(arr, n = 1) {
//     for (var i=0; i<n; i++){
//   console.log(arr[i]);
// }
// }
// retrive([1, 2, 3, 4, 5, 6],4);

/**
 *?Example:-
 */
// function retrive(arr, n = 1) {
//   if (n <= arr.length) {
//     for (var i = 0; i < n; i++) {
//       console.log(arr[i]);
//     }
//   } else {
//     console.log(n,"Itne to elements hi nahi hai, aapne jyada demand rakhi HaI ");
//   }
// }
// retrive([1, 2, 3, 4, 5, 6], 4);

/**
 *?Example:-
 */
// function retrive(arr, n = 1) {
//   if (n <= arr.length) {
//     for (var i = 0; i < n; i++) {
//       console.log(arr[arr.length - 1 - i]);
//     }
//   } else {
//     console.log(
//       n,
//       "Itne to elements hi nahi hai, aapne jyada demand rakhi HaI "
//     );
//   }
// }
// retrive([1, 2, 3, 4, 5, 6], 1);

/**
 *!Example16:-Write a Javascript program to find the most frequent item of an array
 */
// function freq(arr) {
//   var frequent = {};
//   arr.forEach((elem) => {
//     if (frequent.hasOwnProperty(elem)) frequent[elem]++;
//     else frequent[elem] = 1;
//   });
//   // console.log(frequent);
//   // console.log(Object.keys(frequent));
//   // console.log(Object.values(frequent));
//   var ans = Object.keys(frequent).reduce((acc, next) => {
//     return frequent[acc] > frequent[next] ? acc : next;
//   });
//   console.log(ans);
// }
// freq([1, 2,88,88, 3, 12, 2, 3, 12, 1, 2, 3, 21, 21, 2121,88,55,55,55,55,88,88]);

/**
 *!Example17:-Find Random Number in javascript:-
 */
//  var a=[1,2,3,4,5,6];
//  let b=a.length;
//  var c=Math.floor(Math.random()*b);
//  console.log(c);

/**
 *!Example18:----write a javascript programm to shuffle an array
 */
/**
 *?Example:-
 */
// function shuffleKro(array){
//  for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array
// }
// console.log(shuffleKro([1,2,3,4,5,6,7]));

/**
 *?Example:-
 */
// function shuffleKro(array) {
//   var totalSuffleArea = array.length;
//   while (totalSuffleArea > 0) {
//     totalSuffleArea--;
//     var indexToBeExchanged = Math.floor(Math.random() * totalSuffleArea);
//     var temp = array[totalSuffleArea];
//     array[totalSuffleArea] = array[indexToBeExchanged];
//     array[indexToBeExchanged] = temp;
//   }
//   return array;
// }
// console.log(shuffleKro([1, 2, 3, 4, 5, 6, 7]));

/**
 *!Example19:---Write a JavaScript Program to compute the Union of two arrays Sample Data:-
 */
/**
 *?Example:-
 */
// function union(arr1,arr2){
// return [...new Set (arr1.concat(arr2))];
// }
// console.log(union([1,2,3,4],[2,3,4,6]));

/**
 *?Example:-
 */
// let A = [7, 2, 6, 4, 5];
// let B = [1, 6, 4, 9];

// function GFG_Fun() {
//     let union = [...new Set([...A, ...B])];
// console.log("Union is: " + union);
// }
// GFG_Fun();

/**
 *?Example:-
 */
// let A = [7, 2, 6, 4, 5];
// let B = [1, 6, 4, 9];

// function GFG_Fun() {
//     let union = [...new Set([...A, ...B])];
//     return union
// }
// console.log(GFG_Fun([A,B]));

/**
 *?Example:-
 */
// let array=[4,7,1,4,9,2,4,1,9];
// let unique=new Set(array);
// console.log(unique); //Set(5) { 4, 7, 1, 9, 2 }

/**
 *?Example:-
 */
// let array=[4,7,1,4,9,2,4,1,9];
// let unique=new Set(array);
// console.log([...unique]); //[ 4, 7, 1, 9, 2 ]

/**
 *?Example:-
 */
// let array=[4,7,1,4,9,2,4,1,9];
// let unique=[...new Set(array)];
// console.log(unique); //[ 4, 7, 1, 9, 2 ]
