/**
 * !Example6:-how to find Second Largest value,and remove First Largest value in array
 */
/**
 *? Step1:-find largest value from array
 * ?Step2:-find index of largest value
 * ?Step3:-Delete index from array using splice method
 * ?Step4:-Apply same logic that use for find largest value
 **/

// /**
// *!Example:-
// */
// const intArray=[2,8,9,7,3,47,45,56,7,89,5,6,7];
// const largestValue=(arr)=>{
//   let firstLargestValue=Math.max(...arr)
//   var index =arr.indexOf(firstLargestValue)
//   console.log(index);
//   arr.splice(index,1)
//   let SecondLargestValue=Math.max(...arr)
//     return (SecondLargestValue)
// }
// console.log(largestValue(intArray));

// /**
//  *!Example:-
//  */
// const intArray = [ 2, 3, 47, 45, 56, 7, 89, 5, 6, 7];

// let firstLargestValue = Math.max(...intArray);
// var index = intArray.indexOf(firstLargestValue);
// console.log(index);
// intArray.splice(index, 1);
// let SecondLargestValue = Math.max(...intArray);
// console.log(SecondLargestValue);

/**
 *!Example:-
 */
// const intArray=[2,8,9,7,3,47,45,56,7,89,5,6,7];
// const largestValue=(arr)=>{
//   let firstLargestValue=Math.max(...arr)
//   const index1 =arr.indexOf(firstLargestValue)
//   console.log(index1,"........index1");
//   arr.splice(index1,1)
//   let secondLargestValue=Math.max(...arr);
//   const index2 =arr.indexOf(secondLargestValue)
//   console.log(index1,".........index2");
//   arr.splice(index2,1)

//   let thirdLargestValue=Math.max(...arr)
//     return (thirdLargestValue)

// }
// console.log(largestValue(intArray));

/**
 *!Example:-
 */
// const intArray = [2, 3, 47, 56, 7, 89, 5, 6, 7];

// let firstLargestValue = Math.max(...intArray);
// const index1 = intArray.indexOf(firstLargestValue);
// console.log(index1);
// intArray.splice(index1, 1);
// let secondLargestValue = Math.max(...intArray);
// const index2 = intArray.indexOf(secondLargestValue);
// console.log(index2);
// intArray.splice(index2, 1);
// let thirdLargestValue = Math.max(...intArray);
// console.log(thirdLargestValue);

/**
 *!Example:-
 */
// const intArray=[2,8,9,7,3,47,45,56,7,89,5,6,7];
// const arr=Math.max(...intArray)
// console.log(arr);
// console.log(intArray);

/**
 *!Example:-
 */
const inputArray = ['45', '19', '9', '8', '8', '7', '1'];

// Convert string numbers to actual numbers
const arrNumbers = inputArray.map(Number);

// Remove duplicates and sort the array in descending order
const sortedUniqueNumbers = [...new Set(arrNumbers)].sort((a, b) => b - a);

// Check if there is a second-largest element
const secondLargest = sortedUniqueNumbers[1];
console.log(typeof secondLargest); //numbers
if (secondLargest !== undefined) {
  console.log("Second Largest Value:", secondLargest);
} else {
  console.log("There is no second largest value.");
}
