/**
 *? Example12:---loop an array of objects and remove all objects which don't have gender's value male
 */
////! Example:-
var student = [
  { name: "harsh", gender: "male" },
  { name: "harshita", gender: "female" },
  { name: "abcd", gender: "notSpecified" },
  { name: "harshi", gender: "female" },
  { name: "suraj", gender: "male" },
  { name: "isha", gender: "female" },
];
const newArray = student.filter((elem) => {
  return elem.gender === "male";
});
// console.log(newArray);
// console.log(student);

////! Example:-ek non-male bande ko hatane ka code likho
var student1 = [
  { name: "harsh", gender: "male" },
  { name: "harshita", gender: "female" },
  { name: "abcd", gender: "notSpecified" },
  { name: "harshi", gender: "female" },
  { name: "prakash", gender: "male" },
  { name: "suraj", gender: "male" },
  { name: "isha", gender: "female" },
  { name: "ayani", gender: "female" },
];

for (let i = 0; i < student1.length; i++) {
  if (student1[i].gender !== "male") {
    student1.splice(i, 1);
  }
}
console.log(student1,"..........student1");

////! Example:-sare nonmale ko hataye
var student2 = [
  { name: "harsh", gender: "male" },
  { name: "harshita", gender: "female" },
  { name: "abcd", gender: "notSpecified" },
  { name: "harshi", gender: "female" },
  { name: "prakash", gender: "male" },
  { name: "suraj", gender: "male" },
  { name: "isha", gender: "female" },
  { name: "ayani", gender: "female" },
];

var count = 0;
student2.forEach((elem) => {
  if (elem.gender !== "male") count++;
});
// console.log(count);
for (var i = 0; i < count; i++) {
  for (var j = 0; j < student2.length; j++) {
    if (student2[j].gender !== "male") {
      student2.splice(j, 1);
    }
  }
}
console.log(student2,".....student2");
////! Example:-all non-male bande ko hatane ka code likho
var student3 = [
  { name: "harsh", gender: "male" },
  { name: "harshita", gender: "female" },
  { name: "abcd", gender: "notSpecified" },
  { name: "harshi", gender: "female" },
  { name: "prakash", gender: "male" },
  { name: "suraj", gender: "male" },
  { name: "isha", gender: "female" },
  { name: "ayani", gender: "female" },
];

for (let i = 0; i < student3.length; i++) {
  if (student3[i].gender !== "male") {
    student3.splice(i, 1);
    i--;
  }
}
console.log(student3,"........student3");