/**
 * !Example24:-Program to Convert First Letter of a String in to Uppercase in javascript:-
 */
/**
 *!Function to be Used:-**/
/**
 * ?charAt(): to get a character at an index
 * ?toUpperCase(): to uppercase character
 * ?slice(): to slice any character from string
 **/
////example1:-----
// function capitalizeFLetter() {
//   let string = 'prakash';
//   // let string = 'this function applies to a string and slices it according to the passed parameter. ';
//   console.log(string[0].toUpperCase() +
//       string.slice(1));
// }
// capitalizeFLetter()

////example2:-----
// function capitalizeFLetter() {
//   // let string = 'prakash';
//   let string = 'this function applies to a string and slices it according to the passed parameter.';
//   console.log(string.charAt(0).toUpperCase() +
//       string.slice(1));
// }
// capitalizeFLetter()

// ////example3:----- : JavaScript replace() Function:
// function capitalizeFLetter() {
//   // let string = 'prakash';
//   let string = 'this is a built-in function in JavaScript that is used to replace a slice of a string with another string or a regular expression. The original string will not be affected. ';
//   console.log(string.replace(/^./, string[0].toUpperCase()));
// }
// capitalizeFLetter()

////example3:----- : JavaScript replace() Function:
// function capitalizeFLetter() {
//   // let string = 'prakash';
//   let string = 'this is a built-in function in JavaScript that is used to replace a slice of a string with another string or a regular expression. the original string will not be affected. ';
//   console.log(string.replace(/\b\w/g, l=>l.toUpperCase()));
// }
// capitalizeFLetter()

/**
 * !Example24:-Program to Convert First Letter of a String in to Uppercase in javascript:-
 */
/**
 *!Function to be Used:-**/
/**
 * ?charAt(): to get a character at an index
 * ?toUpperCase(): to uppercase character
 * ?map(): to return a new array
 * ?slice(): to slice any character from string
 **/
//////example1:---------
// let str = "prakash sahu";
// let splitStr = str.split("");
// console.log(splitStr,"........");
// console.log(splitStr[0]); //P
// let result = str
//   .split("")
//   .map((item, index) => (index === 0 ? item.toUpperCase() : item))
//   .join("");
// console.log(result);

// //////example2:---------
// let str = "prakash sahu hai";
// let firstLetterCapital=(string)=>{
//   var splitStr=string.split(" ");
//   console.log(splitStr,"..........");
//   var newArr=splitStr.map((item)=>{
//     return item.charAt(0).toUpperCase()+ item.slice(1);
//   });
//   return newArr;
// }
// console.log(firstLetterCapital(str));

//////example2:---------
// let string = "prakash sahu hai";
// let firstLetterCapital=(str)=>{
//   var newStr=str.split(" ");
//   console.log(newStr,"............");
//   var newArr=newStr.map((item)=>{
//     return item.charAt(0).toUpperCase() + item.slice(1);
//   });
//   return newArr.join(" ");
// }
// console.log(firstLetterCapital(string));

