// /**
//  * !Example20:-how to reverse a string in javascript:-
//  */
// ////example:------
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// const newReverseString= reverseString('hello');
// console.log(newReverseString);

// /**
//  * !Example20:-how to reverse a string in javascript:-
//  */
// ////example:------
// const string="hello world"
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// const newReverseString= reverseString(string);
// console.log(newReverseString); //output:-dlrow olleh

// /**
//  * !Example20:-how to reverse a string in javascript:-
//  */
// ////example:------
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     console.log(newString);
// }
// reverseString('hello');

// /**
//  * !Example20:-how to reverse a string in javascript:-
//  */
// ////example:------
// const string="hello world";
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     console.log(newString);
// }
// reverseString(string);

/**
 * !Example20:-how to reverse a string in javascript:-
 */
// ////example:------
// const reverseString=(str)=>{
//   const strToArray=str.split("");
//   return strToArray;
// }
// console.log(reverseString("butter"));//output:-[ 'b', 'u', 't', 't', 'e', 'r' ]

////example:------
// const reverseString=(str)=>{
//   const strToArray=str.split("");
//   return strToArray;
// }
// console.log(reverseString("butter scotch"));//output:-[ 'b', 'u', 't', 't', 'e', 'r', ' ', 's','c', 'o', 't', 'c','h' ]

////example:------
//   const reverseString=(str)=>{
//     const strToArray=str.split("");
//     const arrReverse=strToArray.reverse();
//   return arrReverse;
// }
// console.log(reverseString("butter"));//output:-[ 'r', 'e', 't', 't', 'u', 'b' ]

////example:------
// const reverseString = (str) => {
//   const strToArray = str.split("");
//   const arrReverse = strToArray.reverse();
//   const strReverse = arrReverse.join("");
//   return strReverse;
// };
// console.log(reverseString("butter")); //output:-rettub

// ////example:------
// const reverseString = (str) => {
//   const strToArray = str.split("");
//   const arrReverse = strToArray.reverse();
//   const strReverse = arrReverse.join(" ");
//   return strReverse;
// };
// console.log(reverseString("butter")); //output:-r e t t u b

// ////example:------
// const reverseString=(str)=>{
//   const strToArray=str.split(" ");
//   return strToArray;
// }
// console.log(reverseString("butter"));//output:-[ 'butter' ]

// ////example:------
// const reverseString=(str)=>{
//   const strToArray=str.split(" ");
//   return strToArray;
// }
// console.log(reverseString("butter scotch"));//output:-[ 'butter', 'scotch'  ]

////example:------
//   const reverseString=(str)=>{
//     const strToArray=str.split(" ");
//     const arrReverse=strToArray.reverse();
// const strReverse = arrReverse.join("");
//   return strReverse;
// }
// console.log(reverseString("butter"));//output:-butter

// //example:------
//   const reverseString=(str)=>{
//     const strToArray=str.split(" ");
//     const arrReverse=strToArray.reverse();
// const strReverse = arrReverse.join("");
//   return strReverse;
// }
// console.log(reverseString("butter scotch"));//output:-scotchbutter

// // //example:------
//   const reverseString=(str)=>{
//     const strToArray=str.split(" ");
//     const arrReverse=strToArray.reverse();
// const strReverse = arrReverse.join(" ");
//   return strReverse;
// }
// console.log(reverseString("butter scotch"));//output:-scotch butter

// // //example:------
//   const reverseString=(str)=>{
//     const strToArray=str.split(" ");
//     // const arrReverse=strToArray.reverse();
// // const strReverse = arrReverse.join(" ");
// //   return strReverse;
// return strToArray
// }
// console.log(reverseString("butter scotch"));//output:-scotch butter

////example:------
//   const reverseString=(str)=>{
//     const strToArray=str.split(" ");
//     const arrReverse=strToArray.reverse();
// const strReverse = arrReverse.join(" ");
//   return strReverse;
// }
// console.log(reverseString("butter"));//output:-butter

/*
?Given a string Reverse Each Word
! Q:- mera name prakash hai
!Ans:- arem eman hsakarp iah
 */
var strings = "mera name prakash hai";
const splitArray = strings.split(" ");
console.log(splitArray); //output:-[ 'mera', 'name', 'prakash', 'hai' ]
const splitArrayWord = splitArray.map((word) => {
  return word.split("").reverse().join("");
});
console.log(splitArrayWord); //output:-[ 'arem', 'eman', 'hsakarp', 'iah' ]
console.log(splitArrayWord.join()); //output:-arem,eman,hsakarp,iah
console.log(splitArrayWord.join("")); //output:-arememanhsakarpiah
console.log(splitArrayWord.join(" ")); //output:-arem eman hsakarp iah
