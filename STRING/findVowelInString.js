/**
 * !Example13:-how to find no of vowels from string using regex:-
 */
// //example............
// let string = "z";
// string = string.toLowerCase();
// if (
//   string == "a" ||
//   string == "e" ||
//   string == "i" ||
//   string == "o" ||
//   string == "u"
// ) {
//   console.log(`${string} is vowel`);
// } else {
//   console.log(`${string} is constant`);
// }

/**
 * !Example14:-how to find no of vowels from string using regex:-
 */
// const string = "The quick brown fox jumps over the lazy dog"

// function countVowels(s) {
//   const c = string.match(/[aeiou]/gi);
//   return c === null ? 0 : c.length;
// }
// console.log("no of vowels=",countVowels(string));

//example:-geeks of geeks
// const string = "Geeksforgeeks";
// function vowelCount(str) {
//     const vowelRegex = /[aeiou]/gi;
//     const strMatches = str.match(vowelRegex);

//     if (strMatches) {
//         return strMatches;
//     } else {
//         return 0;
//     }
// }
// const len = vowelCount(string);
// console.log("Number of vowels:", len);

/**
 * !Example15:-how to find no of vowels from string using forLoop:-
 */
// const string = "A Computer Science Portal for Geeks";
// function getVowels(string) {
//   let Vowels = "aAeEiIoOuU";
//   let vowelsCount = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (Vowels.indexOf(string[i]) !== -1) {
//       vowelsCount += 1;
//     }
//   }
//   return vowelsCount;
// }
// console.log(getVowels(string));

/**
 * !Example16:-how to find no of vowels from string using forOfLoop:-
 */
//examplee.........
// const string = "A Computer Science Portal for GeEks";
// function getVowels(string) {
//   let Vowels = "aAeEiIoOuU";
//   let vowelsCount = 0;
//   for (let i of string) {
//     if (Vowels.includes(i)) {
//       vowelsCount += 1;
//     }
//   }
//   return vowelsCount;
// }
// console.log(getVowels(string));

// //examplee.........
// const string = "A Computer Science Portal for GeEks";
// function getVowels(string) {
//   let Vowels = "aeiou";
//   let vowelsCount = 0;
//   for (let i of string.toLowerCase()) {
//     if (Vowels.includes(i)) {
//       vowelsCount += 1;
//     }
//   }
//   return vowelsCount;
// }
// console.log(getVowels(string));

// //examplee.........
// const string = "A Computer Science Portal for GeEks";
// function getVowels(string) {
//   let Vowels = ["a","e","i","o","u"];
//   let vowelsCount = 0;
//   for (let i of string.toLowerCase()) {
//     if (Vowels.includes(i)) {
//       vowelsCount += 1;
//     }
//   }
//   return vowelsCount;
// }
// console.log(getVowels(string));

// //examplee.........
//   const str = "In West Philadephia, born and raised.";
//   const words = str.split("");

// function getVowelCount() {
//     return words.filter(word => word.match(/[aeiou]/gi)).length;
// }
// console.log(getVowelCount());

/**
 * !Example17:-how to find no of vowels from string using forInLoop:-
 */
// //examplee.........
// function vowelCount(str){
//   let splitString=str.split('');
//   let obj={};
//   let vowels="aeiou";
//   splitString.forEach((letter)=>{
//     if(vowels.indexOf(letter.toLowerCase())!==-1){
//       if(letter in obj){
//         obj[letter]++;
//       }else{
//         obj[letter]=1;
//       }
//     }

//  });
//  return obj;
// }
// console.log(vowelCount("prakash sahu civil coder"));

/**
 * !Example18:-how to find no of vowels from string using forLoop:-
 */
// const string = "A Computer Science Portal for GeEks";
// function getVowels(string) {
//   let vowelsCount = 0;
//   for (var i = 0; i <= string.length - 1; i++) {
//     if ("aeiou".includes(string[i].toLowerCase())) {
//       vowelsCount += 1;
//     }
//   }
//   return vowelsCount;
// }
// console.log(getVowels(string));

/**
 * !Example19:-how to find no of vowels from string using forEach:-
 */
// function getVowelsCount(str) {
//   let arr_vowel_list = "aeiou".split("");
//   let count = 0;
//   str.toLowerCase().split("").forEach(function (e) {
//     if (arr_vowel_list.indexOf(e) !== -1) {
//       count++;
//     }
//   });
//   console.log(count);
// }
// getVowelsCount("World Of Programming LanguagE");
