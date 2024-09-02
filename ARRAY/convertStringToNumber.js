///////change string into number from array:-
/**
 * !Example:-
 */

const inputArray = ['45', '19', '9', '8', '8', '7', '1'];

console.log(inputArray);
// Convert string numbers to actual numbers
const y = inputArray.map(x=>Number(x));
console.log(y,"...y");
const z = inputArray.map(Number);
console.log(z,"....z");
/**
 * !Example:-
 */

