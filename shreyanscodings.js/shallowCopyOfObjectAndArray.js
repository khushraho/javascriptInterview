////? Example:- deep copy of object & array using recursion:-
////! Example:-1
const userInfo = {
  firstName: "prakash",
  lastName: "sahu",
};

// console.log(userInfo,".......userInfo");
const userInfo2 = {};
Object.assign(userInfo2, userInfo);
// console.log(userInfo2,".........userInfo2");
userInfo2.firstName = "suraj";
// console.log(userInfo2.firstName); //suraj
// console.log(userInfo.firstName); //prakash

////! Example:-2
const userDetails = {
  firstName: "prakash",
  lastName: "sahu",
};

// console.log(userDetails,".......userDetails");
const userDetails2 = Object.assign({}, userDetails);
// console.log(userDetails2,".........userDetails2");
userDetails2.firstName = "suraj";

// console.log(userDetails2.firstName); //suraj
// console.log(userDetails.firstName); //prakash

////! Example:-3
const user = {
  firstName: "pravin",
  lastName: "sah",
};

// console.log(user,".......user");
const user2 = { ...user };
// console.log(user2,".........user2");
user2.firstName = "sumit";
// console.log(user2.firstName);
// console.log(user.firstName);

////! Example:-4
const arr = [3,5,15,54,12];

const arr1 = [...arr ];
// console.log(arr1, ".........arr1");
arr1.push(34);
console.log(arr1,"......arr1");
console.log(arr,"......arr");
