/**
 *!Example1:- how to find duplicate element in given array veteran code
 */
//  const arrNumber=[1,2,8,2,8,9,10,8,7,5,6,4,1,4,9];
//  const duplicates=arrNumber.filter((e,index,arr)=>arr.indexOf(e)!==index);
//  console.log(duplicates); //[ 2, 8, 8, 1, 4, 9 ]
// /**
//  *!Example1:- how to find duplicate element in given array and sort in ascending order
//  */
//  const arrNumber=[1,2,8,2,8,9,10,8,7,5,6,4,1,4,9];
//  const duplicates=arrNumber.filter((e,index,arr)=>arr.indexOf(e)!==index).sort((a,b)=>{
//     return a-b;
//  });
//  console.log(duplicates); //[ 1, 2, 4, 8, 8, 9 ]

/**
 *!Example1:- how to remove duplicate element in given array
 */
//  const arrNumber=[1,2,8,2,8,9,10,8,7,5,6,4,1,4,9];
//  const duplicates=arrNumber.filter((e,index,arr)=>arr.indexOf(e)==index);
//  console.log(duplicates); //[1, 2, 8, 9, 10,7, 5, 6, 4]

/**
 *!Example1:- how to remove duplicate element and sorting in descending order in given array
 */
// const arrNumber = [1, 2, 8, 2, 8, 9, 10, 8, 7, 5, 6, 4, 1, 4, 9];
// const duplicates = arrNumber
//   .filter((e, index, arr) => arr.indexOf(e) == index)
//   .sort((a, b) => {
//     return b - a;
//   });
// console.log(duplicates); //[10, 9, 8,7, 6,5,4,3,2,1]

 /**
 *!Example1:- how to remove duplicate element and sorting in ascending order in given array
 */
// const arrNumber = [1, 2, 8, 2, 8, 9, 10, 8, 7, 5, 6, 4, 1, 4, 9];
// const duplicates = arrNumber
//   .filter((e, index, arr) => arr.indexOf(e) == index)
//   .sort((a, b) => a - b);
// console.log(duplicates);
// // output: -[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
