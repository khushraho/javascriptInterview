/**
 * !Example8:-how to find the missing number in a given integer array of 1 to 10:-
 */
// const arrNumber=[1,2,3,4,6,8,10];
// const missArray=[];
// const missingValue=(arr)=>{
//     const minValue=Math.min(...arr)
//     const maxValue=Math.max(...arr)
//     for(let i=minValue;i<maxValue;i++){
//         if(arr.indexOf(i)<0){
//             missArray.push(i)
//         }
//     }
//     return(missArray);
// }
// console.log(missingValue(arrNumber));

//// !Example8:-how to find the missing number in a given integer array of 1 to 10:-

const arrNumber1 = [ 2, 4, 6, 8, 11,12,14];

// Calculate the expected range of numbers
const minNumber = Math.min(...arrNumber1);
const maxNumber = Math.max(...arrNumber1);
console.log(minNumber,"...minNumber");
console.log(maxNumber,"....maxNumber");

const expectedRange = Array.from(
  { length: (maxNumber - minNumber) + 1 },
  (v,index) => minNumber + index
);

// console.log(expectedRange, "............expectedRange");

// const missingNumbers = expectedRange.filter((num) => !arrNumber1.includes(num));

// console.log(missingNumbers,".........Missing Numbers");

/**
 * !Example8:-how to find the missing number in a given integer array of 1 to 10:-
 */
//  const arrNumber = [1, 2, 3, 4, 8, 10];

// // Function to find the missing number in the array
// function findMissingNumber(arr) {
//   const n = 10; // Assuming the array should contain numbers from 1 to 10
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);

//   return expectedSum - actualSum;
// }

// // Find and display the missing number
// const missingNumber = findMissingNumber(arrNumber);
// console.log("Missing Number:", missingNumber);

/**
 * !Example8:-how to find the missing number in a given integer array of 1 to 10:-
 */
//  const arrNumber = [1, 2, 3, 4, 6, 8, 10];

// // Calculate the expected sum of numbers from 1 to 10
// const expectedSum = (10 * (10 + 1)) / 2;

// // Calculate the actual sum of the given array
// const actualSum = arrNumber.reduce((sum, num) => sum + num, 0);

// // Find the missing number
// const missingNumber = expectedSum - actualSum;

// console.log("Missing Number:", missingNumber);
