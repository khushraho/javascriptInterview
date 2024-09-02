//// !Example1:-To find the largest element in an array with a time complexity of 𝑂(𝑛) and space complexity of 𝑂(1), you can iterate through the array once while keeping track of the largest element encountered so far.
function findLargestElement(arr) {
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

// const arrMax = [1, 8, 7, 56, 90];
// console.log(findLargestElement(arrMax), ".....largestElement");

//// !Example1:-To find the largest element in an array with a time complexity of 𝑂(𝑛) and space complexity of 𝑂(1), you can iterate through the array once while keeping track of the largest element encountered so far.
function findSmallestElement(arr) {
  let minElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }
  return minElement;
}

// const arrMin = [1, 8, 7, 56, 90];
// console.log(findSmallestElement(arrMin), "......SmallestElement");
// const arrMin1 = [23, 34, 56, 4, 8, 7, 56, 90];
// console.log(findSmallestElement(arrMin1), "......SmallestElement1");

//// !Example2:-how to find Max value in a given array using reduce method
const arrNumber = [1, 2, 7, 5, 89, 56, 2, 56];
const maxFunction = (arr) => {
  return arr.reduce(function (pre, curr) {
    return pre > curr ? pre : curr;
  });
};
// console.log(maxFunction(arrNumber)); //output:-89

//// !Example3:-how to find Max value in a given array using Math.max() method
const arrNumber1 = [1, 8, 7, 56, 90];
const largestValue = (arr) => {
  let firstLargestValue = Math.max(...arr);
  return firstLargestValue;
};
// console.log(largestValue(arrNumber1));

//// !Example4:-how to find Min value in a given array using Math.min() method
const intArray = [8, 9, 7, 3, 45, 45, 56];
const smallestValue = (arr) => {
  let firstSmallestValue = Math.min(...arr);
  return firstSmallestValue;
};
console.log(smallestValue(intArray));

//// !Example5:-how to find Min value in a given array using reduce method
const intArray1 = [2, 7, 5, 1, 89, 56, 2, 56];
const minFunction = (arr) => {
  return arr.reduce(function (pre, curr) {
    return pre < curr ? pre : curr;
  });
};
console.log(minFunction(intArray1)); //output:-1