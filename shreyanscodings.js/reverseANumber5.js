/**
 *?Example:5-Write a Javascript that reverse a number
 */
////! Example:-
function reverseKaro1(a) {
  let b = a.toString().split("").reverse().join("");
  console.log(b);
  console.log(typeof b);
  console.log(Number(b));
  console.log(typeof Number(b));
}
// reverseKaro1(1234);

////! Example:-
function reverseKaro2(a) {
  let b = Number(a.toString().split("").reverse().join(""));
  console.log(b);
  console.log(typeof b);
}
// reverseKaro2(12);

////! Example:-
function reverseKaro3(a) {
  return Number(a.toString().split("").reverse().join(""));
}
// console.log(reverseKaro3(123456789));

////! Example:-using whileloop logical
function reverseKaro4(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
// console.log(rev erseKaro4(1234895764));

////! Example:-using forloop logical
function reverseKaro5(num) {
  let rev = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    let rem = num % 10;
    rev = rev * 10 + rem;
  }
  return rev;
}
// console.log(reverseKaro5(1234567895)); // Output: 675984321
