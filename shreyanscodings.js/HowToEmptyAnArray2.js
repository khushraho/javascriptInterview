/**
 *! Example2:-How to empty an array in javascript:do not empty withlength property ,and do not loop through to pop each value*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.length);
arr = [];
// console.log(arr); //[]
// console.log(arr.length);
/**
 *! Example2a:-How to empty an array in javascript:do not reset to a new array ,and do not loop through to pop each value*/
const newArr = [1, 2, 3, 4, 5, 6, 7];
// console.log(newArr.length);
newArr.length = 0;
// console.log(newArr); //[]
// console.log(newArr.length);
