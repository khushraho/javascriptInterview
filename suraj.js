/**
 *!Example:-
 */
/**
 *?Example:-
 */
// const a=[2,4.5,7,6,5,"dygf",6,[7,6,"dafag",7.6],62,"fsgw",6,5.6];
// const newarr = a.flat();
// console.log(newarr); //[2, 4.5, 7, 6, 5, "dygf", 6, 7, 6, "dafag", 7.6, 62, "fsgw", 6, 5.6];
// const filterArray = (arr) => {
//   let filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// };
// console.log(filterArray(newarr)); //[ 'dygf', 'dafag', 'fsgw' ]

/**
 *?Example:-
 */
// const a=[2,4.5,7,6,5,"dygf",6,[7,6,"dafag",7.6],62,"fsgw",6,5.6];
// const newarr = a.flat();
// console.log(newarr); //[2, 4.5, 7, 6, 5, "dygf", 6, 7, 6, "dafag", 7.6, 62, "fsgw", 6, 5.6];
// const filterArray = (arr) => {
//   let filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "string") {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// };
// console.log(filterArray(newarr)); //[2, 4.5, 7, 6, 5, 6, 7, 6, 7.6, 62, 6, 5.6];

/**
 *!Example2:-
 */
// const a=[2,4.5,7,6,5,"dygf",6,[7,6,"dafag",7.6],62,"fsgw",6,5.6];
// const newarr1 = [];
// console.log(newarr1); //[]
// const newarr = a.flat();
// console.log(newarr); //[2, 4.5, 7, 6, 5, "dygf", 6, 7, 6, "dafag", 7.6, 62, "fsgw", 6, 5.6];
// for (let i = 0; i < newarr.length; i++) {
//   if (typeof newarr[i] !== "string") {
//     newarr1.push(newarr[i]);
//   }
// }
// console.log(newarr1); //[2, 4.5, 7, 6, 5, 6, 7, 6, 7.6, 62, 6, 5.6];

/**
 *?Example:-
 */
// a = [2,4.5,6,"dygf",6,[7, 6, "dafag", 0.6, "sg", 7.6,["werr","skdnkd",23,234,54,6,78,"ee",[23,0,"yuty","iii"]]],62,"fsgw",6,5.6,"wgyw",5,[ 0.6, "sg", 7.6]];

// const arrdata = [];
// const newarr = a.flat();
// console.log(newarr);
// const newarr1 = newarr.flat();
// // console.log(newarr1);
// const newarr2 = newarr1.flat();
// // console.log(newarr2);
// newarr2.filter((item) => {
//   const type = typeof item;
//   if (type == "number") {
//     arrdata.push(item);
//   }
// });
// console.log(arrdata); //[2, 4.5, 6, 6, 7, 6, 0.6, 7.6, 23, 234, 54, 6, 78, 23, 0, 62, 6, 5.6, 5, 0.6,7.6,];

/**
 *?Example:-
 */
// a = [2,4.5,6,"dygf",6,[7, 6, "dafag", 0.6, "sg", 7.6,["werr","skdnkd",23,234,54,6,78,"ee",[23,0,"yuty","iii"]]],62,"fsgw",6,5.6,"wgyw",5,[ 0.6, "sg", 7.6]];

// const arrdata = [];
// const newarr = a.flat(Infinity);

// newarr.filter((item) => {
//   const type = typeof item;
//   if (type == "number") {
//     arrdata.push(item);
//   }
// });
// console.log(arrdata); //[2, 4.5, 6, 6, 7, 6, 0.6, 7.6, 23, 234, 54, 6, 78, 23, 0, 62, 6, 5.6, 5, 0.6,7.6,];

/**
 *!Example3:-
 */
//  const a=[2,4.5,7,6,5,"dygf",6,[7,6,"dafag",7.6],62,"fsgw",6,5.6];
// const newarr1 = [];
// const newarr = a.flat();
// newarr.filter((item) => {
//   const type = typeof item;
//   if (type !== "string") {
//     newarr1.push(item);
//   }
// });
// console.log(newarr1);
// console.log(typeof newarr1); //[2, 4.5, 7, 6, 5, 6, 7, 6, 7.6, 62, 6, 5.6];

/**
 *?Example:-
 */
// const a=[2,4.5,7,6,5,"dygf",6,[7,6,"dafag",7.6],62,"fsgw",6,5.6];
// const newarr1 = [];
// const newarr = a.flat();
// newarr.map((item) => {
//   const type = typeof item;
//   if (type !== "string") {
//     newarr1.push(item);
//   }
// });
// console.log(newarr1);
// console.log(typeof newarr1); //[2, 4.5, 7, 6, 5, 6, 7, 6, 7.6, 62, 6, 5.6];

/**
 *!Example4:-
 */
// arrayNumString= [2,4.5,6,"dygf",6,[7, 6, "dafag", 0.6, "sg", 7.6,["werr","skdnkd",23,234,54,6,78,"ee",[23,0,"yuty","iii"]]],62,"fsgw",6,5.6,"wgyw",5,[ 0.6, "sg", 7.6]];
// const newarr = arrayNumString.flat(Infinity);
// const newarr1 = newarr
//   .filter((item) => {
//     const type = typeof item;
//     if (type == "number") {
//       return item;
//     }
//   })
//   .sort((a, b) => b - a);
// console.log(newarr1); //[234, 78, 62, 54, 23, 23, 7.6, 7.6, 7, 6, 6, 6, 6, 6, 5.6, 5, 4.5, 2, 0.6, 0.6];

/**
 *!Example5:- object in arrays
 */
/**
 *?Example:-
 */
// var a = [
//   { doctype: "customer", members: "50" },
//   { doctype: "user", members: 20 },
//   { doctype: "client", members: 45 },
//   { doctype: "user", members: 21 },
//   { doctype: "company", members: 11 },
//   { doctype: "customer", members: 5 },
//   { doctype: "member", members: "57" },
// ];
// const unique = a.filter(
//   (obj, index) => a.findIndex((item) => item.doctype === obj.doctype) === index
// );
// console.log(unique);

/**
 *?Example:-
 */
// const users = [
//   { doctype: "customer", members: "50" },
//   { doctype: "user", members: 20 },
//   { doctype: "client", members: 45 },
//   { doctype: "user", members: 21 },
//   { doctype: "company", members: 11 },
//   { doctype: "customer", members: 5 },
//   { doctype: "member", members: "57" },
// ];

// // Create a Set to store unique member values
// const uniqueMembers = new Set();

// // Iterate through the users array and add unique members to the Set
// users.forEach(user => {
//   uniqueMembers.add(user.members);
// });

// // Convert the Set back to an array if needed
// const uniqueMembersArray = Array.from(uniqueMembers);

// console.log("Unique Member Values:", uniqueMembersArray);

/**
 *?Example:-
 */
// const users = [
//   { doctype: "customer", members: "50" },
//   { doctype: "user", members: 20 },
//   { doctype: "client", members: 45 },
//   { doctype: "user", members: 21 },
//   { doctype: "company", members: 11 },
//   { doctype: "customer", members: 5 },
//   { doctype: "member", members: "57" },
// ];

// // Create an object to store unique members based on doctype
// const uniqueMembersByDoctype = {};

// // Iterate through the users array
// users.forEach(user => {
//   const membersValue = String(user.members);

//   // Check if the doctype is already in the result object
//   if (!uniqueMembersByDoctype[user.doctype]) {
//     // If not, add an entry with an empty array
//     uniqueMembersByDoctype[user.doctype] =[];
//   }

//   // Add the members value to the array (if not already present)
//   if (!uniqueMembersByDoctype[user.doctype].includes(membersValue)) {
//     uniqueMembersByDoctype[user.doctype].push(membersValue);
//   }
// });

// // Display the unique members based on doctype
// console.log("Unique Members by Doctype:", uniqueMembersByDoctype);

/**
 *?Example:-
 */
// const a = [
//   { doctype: "customer", members: "50" },
//   { doctype: "user", members: 20 },
//   { doctype: "client", members: 45 },
//   { doctype: "user", members: 21 },
//   { doctype: "company", members: 11 },
//   { doctype: "customer", members: 5 },
//   { doctype: "member", members: "57" },
// ];
// const unique = a.filter(
//   (obj, index) => a.findIndex((item) => item.members === obj.members) === index);
// console.log(unique);

/**
 *?Example:-
 */
// const products_List = [
//   { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//   { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//   { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//   { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//   { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//   { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//   { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//   { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//   { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//   { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
//   { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
//   { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
//   { _id: "64cd6d83ddeb678c9c83db93", name:"charger" },
//   { _id: "64cd6d83ddeb678c9c83db93", name:"charger" },
//   { _id: "64e378f75447f6f2f83e2c25", name:"bikeEngine" },
//   { _id: "64e378f75447f6f2f83e2c25", name:"bikeEngine" },
// ];
// const unique = products_List.filter(
//   (obj, index) => products_List.findIndex((item) => item._id === obj._id) === index
// );
// console.log(unique);

/**
 *?Example:-
 */
// const products_List = [
//   {
//     _id: "64cd6f41ddeb678c9c83dbac",
//     name: "Dummy paper samsungM30",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5ba6cbf737e1b3e487cc",
//       name: "samsung",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd7174ddeb678c9c83dbcc",
//     name: "Dummy paper s21",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5ba6cbf737e1b3e487cc",
//       name: "samsung",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd71a1ddeb678c9c83dbcf",
//     name: "Dummy paper galaxy fold",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5ba6cbf737e1b3e487cc",
//       name: "samsung",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd7287ddeb678c9c83dbd2",
//     name: "Dummy paper nord1",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bb9cbf737e1b3e487cf",
//       name: "oneplus",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd72ceddeb678c9c83dbd6",
//     name: "Dummy paper nordxtr",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bb9cbf737e1b3e487cf",
//       name: "oneplus",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd731cddeb678c9c83dbdb",
//     name: "Dummy paper nordct100",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bb9cbf737e1b3e487cf",
//       name: "oneplus",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd7389ddeb678c9c83dbe3",
//     name: "Dummy paper iphone12",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bc7cbf737e1b3e487d2",
//       name: "apple",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd73b1ddeb678c9c83dbe6",
//     name: "Dummy paper iphone13pro",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bc7cbf737e1b3e487d2",
//       name: "apple",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd73e3ddeb678c9c83dbe9",
//     name: "Dummy paper iphone15pro",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bc7cbf737e1b3e487d2",
//       name: "apple",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64e32a3cab929fb5605765e2",
//     name: "Dummy paper laptophpcktu2019",
//     categoryId: { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
//     subcategoryId: {
//       _id: "64c7664b12c19f681a563635",
//       name: "Hp",
//       categoryId: "64cd6d1eddeb678c9c83db90",
//     },
//   },
//   {
//     _id: "64e32a41ab929fb5605765e4",
//     name: "Dummy paper laptophpcktu2020",
//     categoryId: { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
//     subcategoryId: {
//       _id: "64c7664b12c19f681a563635",
//       name: "Hp",
//       categoryId: "64cd6d1eddeb678c9c83db90",
//     },
//   },
//   {
//     _id: "64e32a44ab929fb5605765e8",
//     name: "Dummy paper laptophpcktu2018",
//     categoryId: { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
//     subcategoryId: {
//       _id: "64c7664b12c19f681a563635",
//       name: "Hp",
//       categoryId: "64cd6d1eddeb678c9c83db90",
//     },
//   },
//   {
//     _id: "64e361d75447f6f2f83e29b2",
//     name: "Dummy paper realme charger",
//     categoryId: { _id: "64cd6d83ddeb678c9c83db93", name: "charger" },
//     subcategoryId: {
//       _id: "64c7846121576de0908e4681",
//       name: "BTYPE_CHARGER333",
//       categoryId: "64cd6d83ddeb678c9c83db93",
//     },
//   },
//   {
//     _id: "64e3630b5447f6f2f83e29bd",
//     name: "Dummy paper chargerealme",
//     categoryId: { _id: "64cd6d83ddeb678c9c83db93", name: "charger" },
//     subcategoryId: {
//       _id: "64c783a921576de0908e4670",
//       name: "normal charger",
//       categoryId: "64cd6d83ddeb678c9c83db93",
//     },
//   },
//   {
//     _id: "64e50b98299baf9b48ae5204",
//     name: "Dummy paper samsung ultra Edge2",
//     categoryId: { _id: "64e378f75447f6f2f83e2c25", name: "bikeEngine" },
//     subcategoryId: {
//       _id: "64e72879185ade210f06b494",
//       name: "chesis part",
//       categoryId: "64e378f75447f6f2f83e2c25",
//     },
//   },
//   {
//     _id: "64e511d7299baf9b48ae522a",
//     name: "Dummy paper ring75mm usha",
//     categoryId: { _id: "64e378f75447f6f2f83e2c25", name: "bikeEngine" },
//     subcategoryId: {
//       _id: "64e72879185ade210f06b494",
//       name: "chesis part",
//       categoryId: "64e378f75447f6f2f83e2c25",
//     },
//   },
//   {
//     _id: "651e84443385b030cf41426d",
//     name: "boat 5555 indian",
//     categoryId: { _id: "64e378f75447f6f2f83e2c25", name: "bikeEngine" },
//     subcategoryId: {
//       _id: "64e72879185ade210f06b494",
//       name: "chesis part",
//       categoryId: "64e378f75447f6f2f83e2c25",
//     },
//   },
// ];
// const uniqueCategoryData = products_List.filter(
//   (obj, index) => products_List.findIndex((item) => item.categoryId._id === obj.categoryId._id) === index
// );
// console.log(uniqueCategoryData);
// const uniqueSubcategoryData = products_List.filter(
//   (obj, index) => products_List.findIndex((item) => item.subcategoryId._id === obj.subcategoryId._id) === index
// );
// console.log(uniqueSubcategoryData);

/**
 *?Example:-
 */

// const products_List = [
//   {
//     _id: "64cd6f41ddeb678c9c83dbac",
//     name: "Dummy paper samsungM30",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5ba6cbf737e1b3e487cc",
//       name: "samsung",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd7174ddeb678c9c83dbcc",
//     name: "Dummy paper s21",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5ba6cbf737e1b3e487cc",
//       name: "samsung",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd71a1ddeb678c9c83dbcf",
//     name: "Dummy paper galaxy fold",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5ba6cbf737e1b3e487cc",
//       name: "samsung",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd7287ddeb678c9c83dbd2",
//     name: "Dummy paper nord1",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bb9cbf737e1b3e487cf",
//       name: "oneplus",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd72ceddeb678c9c83dbd6",
//     name: "Dummy paper nordxtr",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bb9cbf737e1b3e487cf",
//       name: "oneplus",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd731cddeb678c9c83dbdb",
//     name: "Dummy paper nordct100",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bb9cbf737e1b3e487cf",
//       name: "oneplus",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd7389ddeb678c9c83dbe3",
//     name: "Dummy paper iphone12",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bc7cbf737e1b3e487d2",
//       name: "apple",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd73b1ddeb678c9c83dbe6",
//     name: "Dummy paper iphone13pro",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bc7cbf737e1b3e487d2",
//       name: "apple",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64cd73e3ddeb678c9c83dbe9",
//     name: "Dummy paper iphone15pro",
//     categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
//     subcategoryId: {
//       _id: "64cd5bc7cbf737e1b3e487d2",
//       name: "apple",
//       categoryId: "64cd6ccdddeb678c9c83db8d",
//     },
//   },
//   {
//     _id: "64e32a3cab929fb5605765e2",
//     name: "Dummy paper laptophpcktu2019",
//     categoryId: { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
//     subcategoryId: {
//       _id: "64c7664b12c19f681a563635",
//       name: "Hp",
//       categoryId: "64cd6d1eddeb678c9c83db90",
//     },
//   },
//   {
//     _id: "64e32a41ab929fb5605765e4",
//     name: "Dummy paper laptophpcktu2020",
//     categoryId: { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
//     subcategoryId: {
//       _id: "64c7664b12c19f681a563635",
//       name: "Hp",
//       categoryId: "64cd6d1eddeb678c9c83db90",
//     },
//   },
//   {
//     _id: "64e32a44ab929fb5605765e8",
//     name: "Dummy paper laptophpcktu2018",
//     categoryId: { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
//     subcategoryId: {
//       _id: "64c7664b12c19f681a563635",
//       name: "Hp",
//       categoryId: "64cd6d1eddeb678c9c83db90",
//     },
//   },
//   {
//     _id: "64e361d75447f6f2f83e29b2",
//     name: "Dummy paper realme charger",
//     categoryId: { _id: "64cd6d83ddeb678c9c83db93", name: "charger" },
//     subcategoryId: {
//       _id: "64c7846121576de0908e4681",
//       name: "BTYPE_CHARGER333",
//       categoryId: "64cd6d83ddeb678c9c83db93",
//     },
//   },
//   {
//     _id: "64e3630b5447f6f2f83e29bd",
//     name: "Dummy paper chargerealme",
//     categoryId: { _id: "64cd6d83ddeb678c9c83db93", name: "charger" },
//     subcategoryId: {
//       _id: "64c783a921576de0908e4670",
//       name: "normal charger",
//       categoryId: "64cd6d83ddeb678c9c83db93",
//     },
//   },
//   {
//     _id: "64e50b98299baf9b48ae5204",
//     name: "Dummy paper samsung ultra Edge2",
//     categoryId: { _id: "64e378f75447f6f2f83e2c25", name: "bikeEngine" },
//     subcategoryId: {
//       _id: "64e72879185ade210f06b494",
//       name: "chesis part",
//       categoryId: "64e378f75447f6f2f83e2c25",
//     },
//   },
//   {
//     _id: "64e511d7299baf9b48ae522a",
//     name: "Dummy paper ring75mm usha",
//     categoryId: { _id: "64e378f75447f6f2f83e2c25", name: "bikeEngine" },
//     subcategoryId: {
//       _id: "64e72879185ade210f06b494",
//       name: "chesis part",
//       categoryId: "64e378f75447f6f2f83e2c25",
//     },
//   },
//   {
//     _id: "651e84443385b030cf41426d",
//     name: "boat 5555 indian",
//     categoryId: { _id: "64e378f75447f6f2f83e2c25", name: "bikeEngine" },
//     subcategoryId: {
//       _id: "64e72879185ade210f06b494",
//       name: "chesis part",
//       categoryId: "64e378f75447f6f2f83e2c25",
//     },
//   },
// ];

// const categoryData = products_List.map((e) => {
//   return e.categoryId;
// });
// // console.log(categoryData);

// const uniqueCategoryData = categoryData.filter(
//   (obj, index) =>
//     categoryData.findIndex((item) => item._id === obj._id) === index
// );
// // console.log(uniqueCategoryData);
// const uniqueCategoryId=uniqueCategoryData.map((e)=>{
//   return e._id
// })
// // console.log(uniqueCategoryId);
// const subcategoryData = products_List.map((e) => {
//   return e?.subcategoryId;
// });
// // console.log(subcategoryData, "...........");

// const uniqueSubcategoryData = subcategoryData.filter(
//   (obj, index) =>
//     subcategoryData.findIndex((item) => item._id === obj._id) === index
// );
// // console.log(uniqueSubcategoryData,"------------------");
// const uniqueSubCategoryId=uniqueSubcategoryData.map((e)=>{
//   return e._id
// })
// // console.log(uniqueSubCategoryId);
// const filterCategoryId = uniqueSubcategoryData.filter(
//   (item) => item.categoryId ===
//   "64cd6ccdddeb678c9c83db8d"
// );
// console.log(filterCategoryId, ".............590");

/**
 *!Example6:- To calculate the time difference of two dates
 */
/**
 *?Example:-
 */
// // // To set two dates to two variables
// var date1 = new Date("09/30/2022");
// var date2 = new Date("07/30/2023");

// var Difference_In_Time = date2.getTime() - date1.getTime();

// // To calculate the no. of days between two dates
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// //To display the final no. of days (result)
// console.log(
//   `Total number of days between[${date1}] and [${date2}] is:==>${Difference_In_Days}`
// );

/**
 *?Example:-
 */
// function daysDifference() {

//   const date1 = new Date("09/30/2022");

//   const date2 = new Date("07/30/2023");

//   //calculate time difference
//   const time_difference = date2.getTime() - date1.getTime();

//   //calculate days difference by dividing total milliseconds in a day
//   const result = time_difference / (1000 * 60 * 60 * 24);
//   return `${result} Days`;
// }
// console.log(daysDifference());

/**
 *!Example7:- To calculate the time difference of two dates
 */

/**
 *?Example:-
 */
// var a=[{startDate:"01/27/2023",endDate:"02/08/2024",name:"suraj"}]
// const x1=a.map((item)=>{
//     return item.startDate
// })
// const x2=a.map((item)=>{
//     return item.endDate
// })
// const x3=a.map((item)=>{
//     return item.name
// })
// const date1=new Date(x1)
// const date2=new Date(x2)
// var Difference_In_Time = date2.getTime() - date1.getTime();
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
// console.log(`${x3} work continously ${Difference_In_Days}Difference_In_Days`);

/**
 *!Example8:- To calculate the time difference of two dates
 */
// const a = [
//   { startDate: "01/27/2023", endDate: "02/08/2024", name: "Suraj" },
//   { startDate: "03/21/2021", endDate: "04/21/2023", name: "Prakash" },
//   { startDate: "12/01/2021", endDate: "01/21/2023", name: "Ravi" },
// ];
// const data = {};
// const heloo = a.map((item) => {
//   let x1 = item.startDate;
//   let y1 = item.endDate;
//   date1 = new Date(x1);
//   date2 = new Date(y1);
//   const Difference_In_Time = date2.getTime() - date1.getTime();
//   const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//   data[item.name] = Difference_In_Days;
// });
// console.log(data);

/**
 *!Example9:-
 */
// const x=[[27,1,28],[3,2,81],[8,7,11]];
// const y=x.reverse()
// console.log(y);
// const z =y.map((item)=>{
//     return item.reverse();
// })
// console.log(z); //output:-[ [ 11, 7, 8 ], [ 81, 2, 3 ], [28, 1, 27 ] ]

/**
 *!Example9:-
 */

// const dateDifference = (startDate, endDate) => {
//   const start = new Date(startDate);
//   const end = new Date(endDate);
//   const differenceInMilliseconds = end - start;
//   return differenceInMilliseconds / (1000 * 60 * 60 * 24);
// };

// const users = [
//   { startDate: "01/27/2023", endDate: "02/08/2024", name: "Suraj" },
//   { startDate: "03/21/2021", endDate: "04/21/2023", name: "Prakash" },
//   { startDate: "12/01/2021", endDate: "01/21/2023", name: "Ravi" }
// ];

// // Calculate and display the difference for each user
// users.forEach(user => {
//   const daysDifference = dateDifference(user.startDate, user.endDate);
//   console.log(`${user.name} difference: ${daysDifference} days`);
// });

/**
 *!Example9:-
 */

// const dateDifference = (startDate, endDate) => {
//   const start = new Date(startDate);
//   const end = new Date(endDate);
//   const differenceInMilliseconds = end - start;
//   return differenceInMilliseconds / (1000 * 60 * 60 * 24);
// };

// const users = [
//   { startDate: "01/27/2023", endDate: "02/08/2024", name: "Suraj" },
//   { startDate: "03/21/2021", endDate: "04/21/2023", name: "Prakash" },
//   { startDate: "12/01/2021", endDate: "01/21/2023", name: "Ravi" }
// ];

// // Calculate and store the difference in each user object
// users.forEach(user => {
//   user.daysDifference = dateDifference(user.startDate, user.endDate);
// });

// // Display the updated users array
// console.log(users);

/**
 *!Example9:-
 */

//  const dateDifference = (startDate, endDate) => {
//   const start = new Date(startDate);
//   const end = new Date(endDate);
//   const differenceInMilliseconds = end - start;
//   return differenceInMilliseconds / (1000 * 60 * 60 * 24);
// };

// const users = [
//   { startDate: "01/27/2023", endDate: "02/08/2024", name: "Suraj" },
//   { startDate: "03/21/2021", endDate: "04/21/2023", name: "Prakash" },
//   { startDate: "12/01/2021", endDate: "01/21/2023", name: "Ravi" }
// ];

// // Calculate and store the difference for each user in their objects
// const usersWithDifference = users.map(user => {
//   const daysDifference = dateDifference(user.startDate, user.endDate);
//   return { ...user, difference: daysDifference };
// });

// // Display the updated objects with differences
// usersWithDifference.forEach(user => {
//   console.log(`${user.name} difference: ${user.difference} days`);
// });

/**
 *!Example9:-
 */
// const dateDifference = (startDate, endDate) => {
//   const start = new Date(startDate);
//   const end = new Date(endDate);
//   const differenceInMilliseconds = end - start;
//   return differenceInMilliseconds / (1000 * 60 * 60 * 24);
// };

// const users = [
//   { startDate: "01/27/2023", endDate: "02/08/2024", name: "Suraj" },
//   { startDate: "03/21/2021", endDate: "04/21/2023", name: "Prakash" },
//   { startDate: "12/01/2021", endDate: "01/21/2023", name: "Ravi" }
// ];

// // Create an object to store differences by user name
// const differencesByName = {};

// // Calculate and store the difference for each user in the differencesByName object
// users.forEach(user => {
//   const daysDifference = dateDifference(user.startDate, user.endDate);
//   differencesByName[user.name] = daysDifference;
// });

// // Display the object with differences by user name
// console.log(differencesByName);

/**
 * !example
 */

/**
 *!Example10:-
 */
/**
 *!Example10:-
 */
/**
 *!Example10:-
 */
/**
 *!Example10:-
 */
/**
 *!Example10:-
 */
/**
 *!Example10:-
 */

 const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    // return item
} )

console.log(values);