////? Example:- deep copy of object & array using recursion:-
const userInfo = [
  {
    start: {
      message: "message start1",
      type: "text",
      suggession: [
        {
          reply: {
            text: "About Us",
            postbackData: "a",
          },
        },
        {
          reply: {
            text: "Contact Us",
            postbackData: "b",
          },
        },
        {
          reply: {
            text: "Book Now",
            postbackData: "c",
          },
        },
        {
          reply: {
            text: "Help",
            postbackData: "d",
          },
        },
      ],
      hello:function one(){
        console.log("hello worlld");
      }
    },
  },

];

////! Example1:-
function makeDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let coppiedVal = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    coppiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }
  return coppiedVal;
}
const copy = makeDeepCopy(userInfo);
// console.log(copy,"......copy");
copy[0].start.message = "Modified message";
console.log(copy[0].start.message); 
console.log(userInfo[0].start.message); 
copy[0].start.suggession = "Modified Suggession";

console.log(copy[0].start.suggession); 
console.log(userInfo[0].start.suggession);
copy[0].start.hello = "Modified hello";
console.log(copy[0].start.hello); 
console.log(userInfo[0].start.hello);

////! Example2:-
function makeDeepCopy1(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let coppiedVal = Array.isArray(obj) ? [] : {};
 for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      coppiedVal[key] = makeDeepCopy1(obj[key]);
    }
  }
  return coppiedVal;
}
const copy1 = makeDeepCopy1(userInfo);

// copy1[0].start.message = "Modified message";

// console.log(copy1[0].start.message); 
// console.log(userInfo[0].start.message); 
// copy1[0].start.suggession = "Modified Suggession";

// console.log(copy1[0].start.suggession); 
// console.log(userInfo[0].start.suggession);


////? Example:- deep copy of object & array using JsonParse and Jsonstringify Method:-
////?==========Explanation===============//
////! JSON.stringify(): Converts the entire object/array into a JSON string.

////! JSON.parse(): Parses that JSON string back into an object/array, creating a new copy of the original structure.

////? This method provides a quick and simple way to make a deep copy, but it has some limitations:

////? It won't copy functions or methods (they get lost in the stringification process).

////? It won't work with undefined values, NaN, or complex objects like Date and RegExp correctly.

////? For basic objects and arrays, this approach works well and is easy to implement.

const userInfo1 = [
  {
    start: {
      message: "message start1",
      type: "text",
      suggession: [
        {
          reply: {
            text: "About Us",
            postbackData: "a",
          },
        },
        {
          reply: {
            text: "Contact Us",
            postbackData: "b",
          },
        },
        {
          reply: {
            text: "Book Now",
            postbackData: "c",
          },
        },
        {
          reply: {
            text: "Help",
            postbackData: "d",
          },
        },
      ],
    },
  },

  {
    c: {
      message: "Please Select Category",
      type: "text",
      // suggession: "hello"
      // suggession: function sum(){
      //   console.log("hello");
      // }
    },
  },
];

////! Example1:-
// const copyInfo=JSON.parse(JSON.stringify(userInfo1));
// console.log(copyInfo,"......copyInfo");
// copyInfo[0].start.message = "Modified message";

// console.log(copyInfo[0].start.message,".........1111111"); 
// console.log(userInfo1[0].start.message,"........2222222"); 
// copyInfo[0].start.suggession = "Modified Suggession";

// console.log(copyInfo[0].start.suggession,"..........333333"); 
// console.log(userInfo1[0].start.suggession,"..........444444");
// console.log(copyInfo[1].c.suggession,"..........5555555"); 
// console.log(userInfo1[1].c.suggession,"........666666");
////! Example2:-
// const deepClone=structuredClone(userInfo1);
// console.log(deepClone,"......deepClone");