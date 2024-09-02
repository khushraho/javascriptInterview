/**
 *? Example3:-How would you check if a number is an integer without isInteger(),function.
 */
////! Example:-
let numbers = 19.3;
if (numbers % 1 === 0) {
  //   console.log(numbers, "number is integer");
} else {
  //   console.log(numbers, "number is ! integer");
}

////! Example:-
let numbers1 = 19;
// console.log(numbers1, numbers1 % 1 === 0 ? "number1 is integer" : "number1 is ! integer");

////! Example:-
function isIntegers(num) {
  console.log(num, num % 1 === 0 ? "num is integer" : "num is !not integer");
}
// isIntegers(2000.3)
////! Example:-
function isIntegers1(num) {
  console.log(num % 1 === 0 ? `${num} is integer` : `${num} is !not integer`);
}
// isIntegers1(2000.3)
// isIntegers1(2000)

////! Example:-
function isIntegers2(num) {
  return num % 1 === 0 ? `${num} is integer` : `${num} is !not integer`;
}
// console.log(isIntegers2(2000));
// console.log(isIntegers2(2000.78));

