/**
 *!Example6:-Write a Javascript function that checks whethere a passed string is palindrome or not...
 */

////? Approach 1: Using for loop (Efficient Approach)==================================
////! Example:-
function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));

////? Approach 2: Checking the String from Last===================================
function isPalindrome2(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}

let strng1 = "racecar";
let strng2 = "nitin";
let strng3 = "Rama";

// console.log(isPalindrome2(strng1));
// console.log(isPalindrome2(strng2));
// console.log(isPalindrome2(strng3));






 ////? Approach 3: Using split(), reverse() and join() Methods========================

////! Example:-
function stringPalChecker(str) {
  var reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  } else {
    return false;
  }
}
// console.log(stringPalChecker("poop"));
// console.log(stringPalChecker("loop"));
// console.log(stringPalChecker("nayan"));

////! Example:-
function stringPalChecker1(str) {
  var reversed = str.split("").reverse().join("");
  if (reversed === str) return true;
  else return false;
}
// console.log(stringPalChecker1("poop"));
// console.log(stringPalChecker1("loop"));

////! Example:-
function stringPalChecker2(str) {
  var reversed = str.split("").reverse().join("");
  return reversed === str ? true : false;
}
// console.log(stringPalChecker2("poop"));
// console.log(stringPalChecker2("loop"));

////! Example:-
function stringPalChecker3(str) {
  var reversed = str.split("").reverse().join("");
  return reversed === str
    ? "this is palindrone string"
    : "this is not palindrone";
}
// console.log(stringPalChecker3("poop"));
// console.log(stringPalChecker3("loop"));

////! Example:-
function stringPalChecker4(str) {
  var reversed = str.split("").reverse().join("");
  return reversed === str;
}
// console.log(stringPalChecker4("poop"));
// console.log(stringPalChecker4("loop"));
