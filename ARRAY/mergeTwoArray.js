/**
 * !Example21:-how to merge Two Array using concat method in javascript:-
 */
// const arr1=["1","8","9"];
// const arr2=["45","7","8","19"];
// //////1>>>>>>concat Method:-
// const finalArray=arr1.concat(arr2);
// console.log(finalArray); //["1", "8", "9", "45", "7", "8", "19"];

/**
 * !Example21:-how to merge Two Array using concat method in javascript:-
 */
// const arr1 = ["1", "8", "9", "9", "45", "8"];
// const arr2 = ["45", "7", "1", "19", "1", "45", "8"];

// //////1>>>>>>concat Method:-
// const finalArray = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0));
// console.log(finalArray); //["1", "8", "9", "9", "45", "8", "7", "19"];

/**
 * !Example21:-how to merge Two Array using concat method in javascript:-
 */
// const arr1=["1","8","9","9","45","8"];
// const arr2=["45","7","1","19","1","45","8","8"];

// //////1>>>>>>concat Method:-
// const finalArray=[...new Set(arr1.concat(arr2))];
// console.log(finalArray); //[ '1', '8', '9', '45', '7', '19' ]
/**
 * !Example22:-how to merge Two Array using concat method and Sort Them in javascript:-
 */
// const arr1=["1","8","9"];
// const arr2=["45","7","19"];
// //////1>>>>>>concat Method:-
// const finalArray=arr1.concat(arr2);
// const sortedArray=finalArray.sort(function(a,b){
//   return a-b
// })
// console.log(finalArray); //[ '1', '7', '8', '9', '19', '45' ]
/**
 * !Example23:-how to merge Two Array using spread operator in javascript:-
 */
// const arr1=["1","8","9"];
// const arr2=["45","7","19"];
// const result=[...arr1,...arr2]
// console.log(result); //[ '1', '8', '9', '45', '7', '19' ]

/**
 * !Example24:-how to merge Two Array using spread operator and Sort Them in javascript:-
 */
// const arr1 = ["1", "8", "9"];
// const arr2 = ["45", "7", "19"];
// const result = [...arr1, ...arr2];
// const sortedArray = result.sort(function (a, b) {
//   return a - b;
// });
// console.log(result); //["1", "7", "8", "9", "19", "45"];

/**
 * !Example24:-how to merge Two Array using spread operator and Sort Them in javascript:-
 */
const arr1 = ["1", "8", "9"];
const arr2 = ["45", "7", "19", "8"];
const result = [...arr1, ...arr2];
const sortedArray = result.sort(function (a, b) {
  return b - a;
});
console.log(result); //["45", "19", "9", "8", "8", "7", "1"];
