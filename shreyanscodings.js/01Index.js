/**
 *!Example13:---Write a javascript function to clone an array.
 */
////! Example:-
// function cloneArr(arr){
// return [...arr];
// }
// // console.log(cloneArr([1,2,3,4,5]));
// var newArr=cloneArr([1,2,3,4,5]);
// console.log(newArr);

////! Example:-
// function cloneArr(arr) {
//   var newArr = [];
//   arr.forEach((element) => {
//     newArr.push(element);
//   });
//   return newArr;
// }
// console.log(cloneArr([1,2,3,4,5]));
// var cloneNewArr = cloneArr([1, 2, 3, 4, 5]);
// console.log(cloneNewArr);
// cloneNewArr.pop();
// console.log(cloneNewArr);
// console.log(cloneArr([1,2,3,4,5]));

////! Example:-
// function cloneArr(arr){
//     var newArr=arr.map((x)=>{
//         return x;
//     })
//     return newArr;
// }
// console.log(cloneArr([1,2,3,4,5,7]));
// var cloneNewArray=cloneArr([1,2,3,4,5,7]).pop();
// console.log(cloneNewArray);

/**
 *!Example14:---write a javascript function which accepts an arguments and returns the type,NOTE:-There are six possible values that typeOf returns:object,boolean,function,number,string, and undefined.
 */
// function typeTeller(elem) {
//   console.log(typeof elem);
// }
// typeTeller([]);
// typeTeller({});
// typeTeller("cvhj");
// typeTeller(100);
// typeTeller(true);
// typeTeller(undefined);
// typeTeller(function () {});

/**
 *!Example15:-Write a Javascript function to get the first element of an array.Passing a parameter'n' will return the last 'n' elements of the array.
 */
function retrive(arr, n = 1) {
  console.log(arr, n);
}
// retrive([1,2,3,4,5,6],3);

////! Example:-
function retrive1(arr, n = 1) {
  for (var i = 0; i < n; i++) {
    console.log(arr[i]);
  }
}
// retrive1([1, 2, 3, 4, 5, 6],4);

////! Example:-
function retrive2(arr, n = 1) {
  if (n <= arr.length) {
    for (var i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log(
      n,
      "Itne to elements hi nahi hai, aapne jyada demand rakhi HaI "
    );
  }
}
// retrive2([1, 2, 3, 4, 5, 6], 8);

////! Example:-
// function retrive(arr, n = 1) {
//   if (n <= arr.length) {
//     for (var i = 0; i < n; i++) {
//       console.log(arr[arr.length - 1 - i]);
//     }
//   } else {
//     console.log(
//       n,
//       "Itne to elements hi nahi hai, aapne jyada demand rakhi HaI "
//     );
//   }
// }
// retrive([1, 2, 3, 4, 5, 6], 1);

/**
 *!Example16:-Write a Javascript program to find the most frequent item of an array
 */
// function freq(arr) {
//   var frequent = {};
//   arr.forEach((elem) => {
//     if (frequent.hasOwnProperty(elem)) frequent[elem]++;
//     else frequent[elem] = 1;
//   });
//   // console.log(frequent);
//   // console.log(Object.keys(frequent));
//   // console.log(Object.values(frequent));
//   var ans = Object.keys(frequent).reduce((acc, next) => {
//     return frequent[acc] > frequent[next] ? acc : next;
//   });
//   console.log(ans);
// }
// freq([1, 2,88,88, 3, 12, 2, 3, 12, 1, 2, 3, 21, 21, 2121,88,55,55,55,55,88,88]);

/**
 *!Example17:-Find Random Number in javascript:-
 */
//  var a=[1,2,3,4,5,6];
//  let b=a.length;
//  var c=Math.floor(Math.random()*b);
//  console.log(c);

/**
 *!Example18:----write a javascript programm to shuffle an array
 */
////! Example:-
// function shuffleKro(array){
//  for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array
// }
// console.log(shuffleKro([1,2,3,4,5,6,7]));

////! Example:using recursion shuffle-
// function shuffleKro(array, counter = 0) {
//   if (counter >= 5) {
//     return ; 
//   }

//   // Shuffle logic (Fisher-Yates algorithm)
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }

//   console.log(array); 

//   shuffleKro(array, counter + 1);
// }

// shuffleKro([1, 2, 3, 4, 5, 6, 7]);


function shuffleKro(array, counter = 0) {
  if (counter >= 5) {
    return array; // Base case: return the array after 5 shuffles
  }

  // Shuffle logic (Fisher-Yates algorithm)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  console.log(array); // Print the shuffled array at each recursion step

  // Recursive call, incrementing the counter
  return shuffleKro(array, counter + 1);
}

console.log(shuffleKro([1, 2, 3, 4, 5, 6, 7]));




////! Example:-
// function shuffleKro(array) {
//   var totalSuffleArea = array.length;
//   while (totalSuffleArea > 0) {
//     totalSuffleArea--;
//     var indexToBeExchanged = Math.floor(Math.random() * totalSuffleArea);
//     var temp = array[totalSuffleArea];
//     array[totalSuffleArea] = array[indexToBeExchanged];
//     array[indexToBeExchanged] = temp;
//   }
//   return array;
// }
// console.log(shuffleKro([1, 2, 3, 4, 5, 6, 7]));

/**
 *!Example19:---Write a JavaScript Program to compute the Union of two arrays Sample Data:-
 */
////! Example:-
// function union(arr1,arr2){
// return [...new Set (arr1.concat(arr2))];
// }
// console.log(union([1,2,3,4],[2,3,4,6]));

////! Example:-
// let A = [7, 2, 6, 4, 5];
// let B = [1, 6, 4, 9];

// function GFG_Fun() {
//     let union = [...new Set([...A, ...B])];
// console.log("Union is: " + union);
// }
// GFG_Fun();

////! Example:-
// let A = [7, 2, 6, 4, 5];
// let B = [1, 6, 4, 9];

// function GFG_Fun() {
//     let union = [...new Set([...A, ...B])];
//     return union
// }
// console.log(GFG_Fun([A,B]));

////! Example:-
// let array=[4,7,1,4,9,2,4,1,9];
// let unique=new Set(array);
// console.log(unique); //Set(5) { 4, 7, 1, 9, 2 }

////! Example:-
// let array=[4,7,1,4,9,2,4,1,9];
// let unique=new Set(array);
// console.log([...unique]); //[ 4, 7, 1, 9, 2 ]

////! Example:-
// let array=[4,7,1,4,9,2,4,1,9];
// let unique=[...new Set(array)];
// console.log(unique); //[ 4, 7, 1, 9, 2 ]