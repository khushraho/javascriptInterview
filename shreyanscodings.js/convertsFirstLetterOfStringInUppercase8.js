/**
 *?Example8:-Write a Javascript function thataccepts a string as a parameter and converts the first letter of the string in uppercase
 */
////! Example:-
var word = "prakash";
// console.log({word},"000000000");
const word1 = word.charAt(0).toUpperCase();
// console.log({word1},"1111111111111");
const word1A = word.slice(1);
// console.log({word1A},"1111111111111A");
const word2 = word.charAt(0).toUpperCase() + word.substring(1);
// console.log({word2},"222222222222");
const word3 = word.charAt(0).toUpperCase() + word.slice(1);
// console.log({word3},"33333333333");

////! Example:-
var words = "civil_coders";
// console.log({words},"000000000");
const words1 = words[0].toUpperCase();
// console.log({words1},"1111111111111");
const words1A = words.slice(1);
// console.log({words1A},"1111111111111A");
const words2 = words[0].toUpperCase() + words.substring(1);
// console.log({words2},"222222222222");
const words3 = words[0].toUpperCase() + words.slice(1);
// console.log({words3},"33333333333");

////! Example:-
function upperCaseKaro(str) {
  console.log(str[0].toUpperCase() + str.slice(1));
}
// upperCaseKaro("namste");
// upperCaseKaro("javascript");
////! Example:-
function upperCaseKaro1(str) {
  const words = str[0].toUpperCase() + str.slice(1);
  console.log({ words });
}
// upperCaseKaro1("namste")
// upperCaseKaro1("javascript")

////! Example:-
function upperCaseKaro2(str) {
  const words = str[0].toUpperCase() + str.slice(1);
  return { words };
}
// console.log(upperCaseKaro2("namste"));
// console.log(upperCaseKaro2("javascript"));

/**
 *?Example8:-Write a Javascript function thataccepts a string as a parameter and converts the first letter of each word of the string in uppercase
 */
////! Example:-
function capitalizeKaro1(str) {
  var allWords = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });

  return allWords.join(" ");
}
// console.log(
//   capitalizeKaro1("i am civil a engineer, now i am a coder civilCoders")
// );

////! Example:-
function capitalizeKaro2(str) {
  var allWords = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return allWords.join(" ");
}
// console.log(
//   capitalizeKaro2("i am civil a engineer, now i am a coder civilCoders")
// );

////! Example:-
function capitalizeKaro3(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
// console.log(
//   capitalizeKaro3("i am civil a engineer, now i am a coder civilCoders")
// );
