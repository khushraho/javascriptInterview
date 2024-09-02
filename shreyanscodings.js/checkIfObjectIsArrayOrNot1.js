/**
 *? Example1:-how to check if an object is an array or not
 */
////! Example:-
function checkArray(elem) {
  return Array.isArray(elem);
}
// console.log(checkArray([])); //true
// console.log(checkArray({})); //false

////! Example:-
function checkArray1(elem) {
  console.log(Array.isArray(elem));
}
// checkArray1([]); //true
// checkArray1({}); //false