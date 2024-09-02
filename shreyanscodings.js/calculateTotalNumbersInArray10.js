/**
 *?Example10:-Write a Javascript function to calculate total numbers in array...
 */
////! Example:-
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
arr1.forEach((element) => {
  sum = sum + element;
});
// console.log(sum);

////! Example:-
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumMap = 0;
array.map((element) => {
  sumMap = sumMap + element;
});
// console.log({sumMap});

////! Example:-
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumloop = 0;
for (i = 0; i < array1.length; i++) {
  sumloop = sumloop + array1[i];
}
// console.log({sumloop});

////! Example:-
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let totalNumber = arr2.reduce((total, num) => {
  return total + num;
}, 0);
// console.log(totalNumber);







/**
 *?Example11:---is an array of numbers and strings, only add those members which are not strings
 */
////! Example:-
const arr3 = [
  "hello",
  123,
  "aap",
  234,
  "kaise",
  345,
  "ho",
  456,
  "hello",
  567,
  678,
  78,
];
let total = 0;
arr3.forEach((elem) => {
  if (typeof elem === "number") {
    total = total + elem;
  }
});
// console.log({total});

////! Example:-
const arr4 = [
  "hello",
  123,
  "aap",
  234,
  "kaise",
  345,
  "ho",
  456,
  "hello",
  567,
  678,
  78,
];
let totalfor = 0;
for (i = 0; i < arr4.length; i++) {
  let elem = arr4[i];
  if (typeof elem === "number") {
    totalfor = totalfor + elem;
  }
}
// console.log({totalfor});

////! Example:-
const arr5 = [
  "hello",
  123,
  "aap",
  234,
  "kaise",
  345,
  "ho",
  456,
  "hello",
  567,
  678,
  78,
];
let totalFors = 0;
let nonNumericElements = [];

// Use a for loop to iterate through the array
for (let i = 0; i < arr5.length; i++) {
  let elem = arr5[i];
  if (typeof elem === "number") {
    totalFors += elem; // Sum the numeric elements
  } else {
    nonNumericElements.push(elem); // Add non-numeric elements to a separate array
  }
}

// console.log({ totalFors,});
// console.log({ nonNumericElements });
// console.log(arr5);

////! Example:-
function separateAndSum(arr) {
  let totalFor = 0;
  let nonNumericElements = [];

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (typeof elem === "number") {
      totalFor += elem;
    }

    if (typeof elem === "string") {
      nonNumericElements.push(elem);
    }
  }

  return `${totalFor},${nonNumericElements}`;
}

// Example usage:
const arr6 = [
  "hello",
  123,
  "aap",
  234,
  "kaise",
  345,
  "ho",
  456,
  "hello",
  567,
  678,
  78,
];
// console.log(separateAndSum(arr6));
//store in another variable
// const result = separateAndSum(arr6);
// console.log(result);

////! Example:-
function separateAndSum1(arr) {
  let totalFor = 0;
  let nonNumericElements = [];

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (typeof elem === "number") {
      totalFor += elem;
    }

    if (typeof elem === "string") {
      nonNumericElements.push(elem);
    }
  }

  return {
    totalFor,
    nonNumericElements,
  };
  return {
    sum: totalFor,
    nonNumeric: nonNumericElements,
  };
  return [{ sum: totalFor }, { nonNumeric: nonNumericElements }];
}

// Example usage:
const arr7 = [
  "hello",
  123,
  "aap",
  234,
  "kaise",
  345,
  "ho",
  456,
  "hello",
  567,
  678,
  78,
];
const results = separateAndSum1(arr7);
// console.log(results);