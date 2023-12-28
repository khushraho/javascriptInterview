/**
 * !Example1:-
 */
/**
 * ?Example:-
 */
// var a = [
//   { startDate: "01/27/2023", endDate: "02/08/2024", name: "suraj1" },
//   { startDate: "03/21/2021", endDate: "04/21/2023", name: "suraj2" },
//   { startDate: "12/01/2021", endDate: "01/21/2023", name: "suraj3" },
// ];

// a.map((item) => {
//   var initialDate = new Date(item.startDate);
//   var finalDate = new Date(item.endDate);

//   days = (finalDate - initialDate) / (1000 * 3600 * 24);

//   var obj = {
//     name: item.name,
//     no_of_working_day: days,
//   };
//   console.log(obj);
// });


// /**
//  * ?Example:-
//  */
// var a = [
//   { startDate: "01/27/2023", endDate: "02/08/2024", name: "suraj1" },
//   { startDate: "03/21/2021", endDate: "04/21/2023", name: "suraj2" },
//   { startDate: "12/01/2021", endDate: "01/21/2023", name: "suraj3" },
// ];
// const data = {};
// // const data = [];
// a.map((item) => {
//   var initialDate = new Date(item.startDate);
//   var finalDate = new Date(item.endDate);
//   days = (finalDate - initialDate) / (1000 * 3600 * 24);
//   data[item.name] = days;
// });
// console.log(data, "...........data");
// Object.keys(data).map((el) => {
// //   console.log(data, ".........000000000");
//   console.log(data[el], ".........111111111");
// });

/**
*const data1l = data.map((items) => {
//   console.log(items);
return items;
});
console.log(data1l,"...........data1l.items");
*/

/**
 * ?Example:-
 */
// var users = [
//   { startDate: "01/27/2023", endDate: "02/08/2024", name: "suraj1" },
//   { startDate: "03/21/2021", endDate: "04/21/2023", name: "suraj2" },
//   { startDate: "12/01/2021", endDate: "01/21/2023", name: "suraj3" },
// ];
// const data1l = {};
// // let data1l = [];
//  users.map((item) => {
//   var initialDate = new Date(item.startDate);
//   var finalDate = new Date(item.endDate);
//   const days = (finalDate - initialDate) / (1000 * 3600 * 24);
//   data1l[item.name] = days;
// });
// console.log(data1l, "...........data1l");


// const data2=Object.keys(data1l).map((el) => {
//   return `${data1l[el]}.........keys`;
// });
// console.log(data2);

// const data3=Object.values(data1l).map((el) => {
//   return `${data1l[el]}.........values`;
// });
// console.log(data3);

// // // const data2l = data1l.map((items) => {
// //  // console.log(items);
//  // //return items.name;
// // // });
// // // console.log(data2l,"...........data1l.items");
