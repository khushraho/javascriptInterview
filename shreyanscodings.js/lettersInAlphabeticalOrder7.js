/**
 *?Example7:-Write a Javascript function that returns a passed string with letters in alphabetical order
 */
////! Example:-
function stringAlphaBeticalOrder(str) {
  // return str.split("").join();
  return str.split("").join("");
  // return str.split("").sort().join("");
}
// console.log(stringAlphaBeticalOrder("apple"));
// console.log(stringAlphaBeticalOrder("javascript"));

////! Example:-Bubble Sort implementation to sort characters

function sortStringAlphabeticallys(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the characters if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr.join("");
}

console.log(sortStringAlphabeticallys("javascript")); // Output: "aacijprstv"
console.log(sortStringAlphabeticallys("prakash")); // Output: "aacijprstv"
