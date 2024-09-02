////? Example:1-
////! Example:1a-
const a1 = [
  2,
  4.5,
  7,
  6,
  5,
  "dygf",
  6,
  [7, 6, "dafag", 7.6],
  62,
  "fsgw",
  6,
  5.6,
];
const newarr1 = a1.flat();
const filterArray1 = (arr) => {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
// console.log(filterArray1(newarr1),".........1"); //[ 'dygf', 'dafag', 'fsgw' ]

////! Example:1b-
const a2 = [
  2,
  4.5,
  7,
  6,
  5,
  "dygf",
  6,
  [7, 6, "dafag", 7.6],
  62,
  "fsgw",
  6,
  5.6,
];
const newarr2 = a2.flat();
const filterArray2 = (arr) => {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
// console.log(filterArray2(newarr2),"..........2"); //[2, 4.5, 7, 6, 5, 6, 7, 6, 7.6, 62, 6, 5.6];

////! Example:1c-
const a3 = [
  2,
  4.5,
  7,
  6,
  5,
  "dygf",
  6,
  [7, 6, "dafag", 7.6],
  62,
  "fsgw",
  6,
  5.6,
];
const newarray1 = [];
const newarr = a3.flat();
for (let i = 0; i < newarr.length; i++) {
  if (typeof newarr[i] !== "string") {
    newarray1.push(newarr[i]);
  }
}
// console.log(newarray1,"......newarray1"); //[2, 4.5, 7, 6, 5, 6, 7, 6, 7.6, 62, 6, 5.6];

////! Example:1d-
a4 = [
  2,
  4.5,
  6,
  "dygf",
  6,
  [
    7,
    6,
    "dafag",
    0.6,
    "sg",
    7.6,
    ["werr", "skdnkd", 23, 234, 54, 6, 78, "ee", [23, 0, "yuty", "iii"]],
  ],
  62,
  "fsgw",
  6,
  5.6,
  "wgyw",
  5,
  [0.6, "sg", 7.6],
];

const arrdata = [];
const newarr4 = a4.flat(Infinity);

newarr4.filter((item) => {
  if (typeof item == "number") {
    arrdata.push(item);
  }
});
console.log(arrdata,"......arrdata"); //[2, 4.5, 6, 6, 7, 6, 0.6, 7.6, 23, 234, 54, 6, 78, 23, 0, 62, 6, 5.6, 5, 0.6,7.6,];
 

////! Example:1e-
const a5 = [
  2,
  4.5,
  7,
  6,
  5,
  "dygf",
  6,
  [7, 6, "dafag", 7.6],
  62,
  "fsgw",
  6,
  5.6,
];
const newarr5 = [];
const newarray5 = a5.flat();
newarray5.map((item) => {
  const type = typeof item;
  if (type !== "string") {
    newarr5.push(item);
  }
});
// console.log(newarr5,"......newarr5");
// console.log(typeof newarr5);

////! Example:1f-
const a6 = ["suraj", { sah: 6, 7: 4, 9: "ydh", check: "yy", "prakash": 21 }, 6, [68, 645, 0, 5]];
const newArr6 = a6.flat();
// console.log(newArr6,"......newArr6");
const filterArray6 = (arr) => {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      filteredArr.push(arr[i]);
    }
    else if (typeof arr[i] == "object") {
      Object.values(arr[i]).forEach(value => {
        if (typeof value === 'number') {
          filteredArr.push(value);

        }
      })
    }
  }
  return filteredArr;
};
// console.log(filterArray6(newArr6), ".........newArr6");

////! Example:1g-
const a7 = ["suraj", { sah: 6, 7: 4, 9: "ydh", check: "yy", }, 6, [68, 645, 0, 5]];
const newArr7 = a7.flat();

const filterArray7 = (arr) => {
  let filteredArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      filteredArr.push(arr[i]);
    } else if (typeof arr[i] === "object") {
      Object.entries(arr[i]).forEach(([key, value]) => {
        if (!isNaN(key)) {
          filteredArr.push(Number(key));
        }
        if (typeof value === 'number') {
          filteredArr.push(value);
        }
      });
    }
  }

  return filteredArr.sort();
};

// console.log(filterArray7(newArr7), ".........newArr7");

////! Example:1h-
// const a8 = ["suraj", { sah: 6, 7: 4, 9: "ydh", check: "yy", }, 6, [68, 645, 0, 5]];
// const newArr8 = a8.flat();

// const filterArray8 = (arr) => {
//   let filteredArr = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       filteredArr.push(arr[i]);
//     } else if (typeof arr[i] === "object") {
//       Object.entries(arr[i]).forEach(([key, value]) => {
//         if (!isNaN(key)) {
//           filteredArr.push(Number(key));
//         }
//         if (typeof value === 'number') {
//           filteredArr.push(value);
//         }
//       });
//     }
//   }

//   return filteredArr.sort();
// };

// console.log(filterArray8(newArr8), ".........newArr8");


/**
 *!Example2:- object in arrays
 */
/**
 *?Example:2a1 find unique doctype in array using filter and findIndex method-
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
// const unique = a.filter((obj, index) => a.findIndex((item) => item.doctype === obj.doctype) === index);
// console.log(unique);
/**
 *?Example:2a2 find unique doctype in array using newSet Spread opearator method-
 */
// var users = [
//   { doctype: "customer", members: "50" },
//   { doctype: "user", members: 20 },
//   { doctype: "client", members: 45 },
//   { doctype: "user", members: 21 },
//   { doctype: "company", members: 11 },
//   { doctype: "customer", members: 5 },
//   { doctype: "member", members: "57" },
// ];
// const uniqueDoctype = [...new Set(users.map(user => user.doctype))];

// console.log(uniqueDoctype,"........uniqueDoctype");

/**
 *?Example:2b find unique members in array using filter and findIndex method-
 */
// var a = [
//   { doctype: "customer", members: "50" },
//   { doctype: "user", members: 20 },
//   { doctype: "client", members: 45 },
//   { doctype: "client", members: 45 },
//   { doctype: "user", members: 21 },
//   { doctype: "company", members: 11 },
//   { doctype: "customer", members: 5 },
//   { doctype: "member", members: "57" },
//   { doctype: "member", members: "57" },
// ];
// const unique = a.filter(
//   (obj, index) => a.findIndex((item) => item.members === obj.members) === index
// );
// console.log(unique);

/**
 *?Example:2c find unique members in array using set method-
 */
// const users = [
//   { doctype: "customer", members: "50" },
//   { doctype: "user", members: 20 },
//   { doctype: "client", members: 45 },
//   { doctype: "user", members: 21 },
//   { doctype: "company", members: 11 },
//   { doctype: "customer", members: 5 },
//   { doctype: "member", members: "57" },
//   { doctype: "member", members: "57" },
// ];

// /*Create a Set to store unique member values*/

// const uniqueMembers = new Set();

// /* Iterate through the users array and add unique members to the Set*/
// users.forEach(user => {
//   uniqueMembers.add(user.members);
// });

// console.log(uniqueMembers);

/**
 *?Example:2d find unique members in array using set method and convert in array-
 */
// const users = [
//   { doctype: "customer", members: "50" },
//   { doctype: "user", members: 20 },
//   { doctype: "user", members: 20 },
//   { doctype: "client", members: 45 },
//   { doctype: "client", members: 45 },
//   { doctype: "user", members: 21 },
//   { doctype: "company", members: 11 },
//   { doctype: "customer", members: 5 },
//   { doctype: "member", members: "57" },
//   { doctype: "member", members: "57" },
// ];

// /* Create a Set to store unique member values*/
// const uniqueMembers = new Set();

// /* Iterate through the users array and add unique members to the Set*/
// users.forEach(user => {
//   uniqueMembers.add(user.members);
// });

// /*Convert the Set back to an array if needed*/
// const uniqueMembersArray = Array.from(uniqueMembers);

// console.log( uniqueMembersArray,"........Unique Member Values");

/**
 *?Example:2e find unique members values in array using easy Method-
 */
// const users = [
//   { doctype: "customer", members: "50" },
//   { doctype: "user", members: 20 },
//   { doctype: "user", members: 20 },
//   { doctype: "client", members: 45 },
//   { doctype: "client", members: 45 },
//   { doctype: "user", members: 21 },
//   { doctype: "company", members: 11 },
//   { doctype: "customer", members: 5 },
//   { doctype: "member", members: "57" },
//   { doctype: "member", members: "57" },
// ];

// const uniqueMembers = [...new Set(users.map(user => user.members))];

// console.log(uniqueMembers);

/**
 *?Example:2f find unique Doctype value and store each unique members-
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

// /* Create an object to store unique members based on doctype*/
// const uniqueMembersByDoctype = {};

// /* Iterate through the users array*/
// users.forEach(user => {
//   const membersValue = String(user.members);

//   /* Check if the doctype is already in the result object*/
//   if (!uniqueMembersByDoctype[user.doctype]) {
//     /* If not, add an entry with an empty array*/
//     uniqueMembersByDoctype[user.doctype] =[];
//   }

//   /* Add the members value to the array (if not already present)*/
//   if (!uniqueMembersByDoctype[user.doctype].includes(membersValue)) {
//     uniqueMembersByDoctype[user.doctype].push(membersValue);
//   }
// });

// /*Display the unique members based on doctype*/
// console.log(uniqueMembersByDoctype,"..........Unique Members by Doctype:");

/**
 *!Example3:-*/

/**
 *?Example3a:- find unique name and _id in products_List
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
//   { _id: "64e378f75447f6f2f83e2c25", name:"cloth" },
//   { _id: "64cd6d83ddeb678c9c83db93", name:"cloth" },
// ];
// const uniqueId = products_List.filter(
//   (product, index) => products_List.findIndex((item) => item._id === product._id) === index
// );
// console.log(uniqueId,".........uniqueId");
// const uniqueName = products_List.filter(
//   (product, index) => products_List.findIndex((item) => item.name === product.name) === index
// );
// console.log(uniqueName,"...........uniqueName");

/**
 *?Example:3b-find length of  products_List,uniqueCategoryData,uniqueSubcategoryData
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
// /**end variable products_List */
// // /**find product length */
// console.log(products_List.length,".......length of products_List");
// // /**find  length of uniqueCategoryData*/
// const uniqueCategoryData = products_List.filter(
//   (obj, index) => products_List.findIndex((item) => item.categoryId._id === obj.categoryId._id) === index
// );
// console.log(uniqueCategoryData.length,"......length of uniqueCategoryData");
// // console.log(uniqueCategoryData,"..........uniqueCategoryData");
// // /**find  length of uniqueSubcategoryData*/
// const uniqueSubcategoryData = products_List.filter(
//   (obj, index) => products_List.findIndex((item) => item.subcategoryId._id === obj.subcategoryId._id) === index
// );
// console.log(uniqueSubcategoryData.length,".........length of uniqueSubcategoryData");
// console.log(uniqueSubcategoryData,"........uniqueSubcategoryData");

/**
 *?Example:3c-find (uniqueCategoryData and _id of categoryId),(uniqueSubcategoryData and _id of subcategoryId) using 1st way complex
 */

const products_List = [
  {
    _id: "64cd6f41ddeb678c9c83dbac",
    name: "Dummy paper samsungM30",
    categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
    subcategoryId: {
      _id: "64cd5ba6cbf737e1b3e487cc",
      name: "samsung",
      categoryId: "64cd6ccdddeb678c9c83db8d",
    },
  },
  {
    _id: "64cd7174ddeb678c9c83dbcc",
    name: "Dummy paper s21",
    categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
    subcategoryId: {
      _id: "64cd5ba6cbf737e1b3e487cc",
      name: "samsung",
      categoryId: "64cd6ccdddeb678c9c83db8d",
    },
  },
  {
    _id: "64cd71a1ddeb678c9c83dbcf",
    name: "Dummy paper galaxy fold",
    categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
    subcategoryId: {
      _id: "64cd5ba6cbf737e1b3e487cc",
      name: "samsung",
      categoryId: "64cd6ccdddeb678c9c83db8d",
    },
  },
  {
    _id: "64cd7287ddeb678c9c83dbd2",
    name: "Dummy paper nord1",
    categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
    subcategoryId: {
      _id: "64cd5bb9cbf737e1b3e487cf",
      name: "oneplus",
      categoryId: "64cd6ccdddeb678c9c83db8d",
    },
  },
  {
    _id: "64cd72ceddeb678c9c83dbd6",
    name: "Dummy paper nordxtr",
    categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
    subcategoryId: {
      _id: "64cd5bb9cbf737e1b3e487cf",
      name: "oneplus",
      categoryId: "64cd6ccdddeb678c9c83db8d",
    },
  },
  {
    _id: "64cd731cddeb678c9c83dbdb",
    name: "Dummy paper nordct100",
    categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
    subcategoryId: {
      _id: "64cd5bb9cbf737e1b3e487cf",
      name: "oneplus",
      categoryId: "64cd6ccdddeb678c9c83db8d",
    },
  },
  {
    _id: "64cd7389ddeb678c9c83dbe3",
    name: "Dummy paper iphone12",
    categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
    subcategoryId: {
      _id: "64cd5bc7cbf737e1b3e487d2",
      name: "apple",
      categoryId: "64cd6ccdddeb678c9c83db8d",
    },
  },
  {
    _id: "64cd73b1ddeb678c9c83dbe6",
    name: "Dummy paper iphone13pro",
    categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
    subcategoryId: {
      _id: "64cd5bc7cbf737e1b3e487d2",
      name: "apple",
      categoryId: "64cd6ccdddeb678c9c83db8d",
    },
  },
  {
    _id: "64cd73e3ddeb678c9c83dbe9",
    name: "Dummy paper iphone15pro",
    categoryId: { _id: "64cd6ccdddeb678c9c83db8d", name: "mobile" },
    subcategoryId: {
      _id: "64cd5bc7cbf737e1b3e487d2",
      name: "apple",
      categoryId: "64cd6ccdddeb678c9c83db8d",
    },
  },
  {
    _id: "64e32a3cab929fb5605765e2",
    name: "Dummy paper laptophpcktu2019",
    categoryId: { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
    subcategoryId: {
      _id: "64c7664b12c19f681a563635",
      name: "Hp",
      categoryId: "64cd6d1eddeb678c9c83db90",
    },
  },
  {
    _id: "64e32a41ab929fb5605765e4",
    name: "Dummy paper laptophpcktu2020",
    categoryId: { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
    subcategoryId: {
      _id: "64c7664b12c19f681a563635",
      name: "Hp",
      categoryId: "64cd6d1eddeb678c9c83db90",
    },
  },
  {
    _id: "64e32a44ab929fb5605765e8",
    name: "Dummy paper laptophpcktu2018",
    categoryId: { _id: "64cd6d1eddeb678c9c83db90", name: "laptop" },
    subcategoryId: {
      _id: "64c7664b12c19f681a563635",
      name: "Hp",
      categoryId: "64cd6d1eddeb678c9c83db90",
    },
  },
  {
    _id: "64e361d75447f6f2f83e29b2",
    name: "Dummy paper realme charger",
    categoryId: { _id: "64cd6d83ddeb678c9c83db93", name: "charger" },
    subcategoryId: {
      _id: "64c7846121576de0908e4681",
      name: "BTYPE_CHARGER333",
      categoryId: "64cd6d83ddeb678c9c83db93",
    },
  },
  {
    _id: "64e3630b5447f6f2f83e29bd",
    name: "Dummy paper chargerealme",
    categoryId: { _id: "64cd6d83ddeb678c9c83db93", name: "charger" },
    subcategoryId: {
      _id: "64c783a921576de0908e4670",
      name: "normal charger",
      categoryId: "64cd6d83ddeb678c9c83db93",
    },
  },
  {
    _id: "64e50b98299baf9b48ae5204",
    name: "Dummy paper samsung ultra Edge2",
    categoryId: { _id: "64e378f75447f6f2f83e2c25", name: "bikeEngine" },
    subcategoryId: {
      _id: "64e72879185ade210f06b494",
      name: "chesis part",
      categoryId: "64e378f75447f6f2f83e2c25",
    },
  },
  {
    _id: "64e511d7299baf9b48ae522a",
    name: "Dummy paper ring75mm usha",
    categoryId: { _id: "64e378f75447f6f2f83e2c25", name: "bikeEngine" },
    subcategoryId: {
      _id: "64e72879185ade210f06b494",
      name: "chesis part",
      categoryId: "64e378f75447f6f2f83e2c25",
    },
  },
  {
    _id: "651e84443385b030cf41426d",
    name: "boat 5555 indian",
    categoryId: { _id: "64e378f75447f6f2f83e2c25", name: "bikeEngine" },
    subcategoryId: {
      _id: "64e72879185ade210f06b494",
      name: "chesis part",
      categoryId: "64e378f75447f6f2f83e2c25",
    },
  },
];

/**end variable products_List */

// Step 1: Map the products to their categoryIds
const categoryIds = products_List.map((product) => product.categoryId);

// Step 2: Filter out duplicates by using findIndex
const uniqueCategories = categoryIds.filter(
  (category, index, self) =>
    self.findIndex((item) => item._id === category._id) === index
);

// Step 3: Log the unique categories and their length
// console.log(uniqueCategories);
// console.log('Length of unique categories:', uniqueCategories.length);

// /**find length of  unique categoryId data in products_List 2nd way simply*/
// const categoryData = products_List.map((e) => {
//   return e.categoryId;
// });
// // console.log(categoryData);
// const uniqueCategoryData = categoryData.filter(
//   (category, index) =>
//     categoryData.findIndex((item) => item._id === category._id) === index
// );
// console.log(uniqueCategoryData.length,".......length of unique categoryId data in products_List");
// console.log(uniqueCategoryData);

// /**find  unique categoryId in products_List 2nd way simply*/
// const categoryData = products_List.map((e) => {
//   return e.categoryId;
// });
// const uniqueCategoryData = categoryData.filter(
//   (obj, index) =>
//     categoryData.findIndex((item) => item._id === obj._id) === index
// );
// console.log(uniqueCategoryData);

// const uniqueCategoryId=uniqueCategoryData.map((e)=>{
//   return e._id
// })
// console.log(uniqueCategoryId);

// /**find  unique subcategoryId in products_List 2nd way simply*/

// // const subcategoryData = products_List.map((e) => {
// //   return e?.subcategoryId;
// // });
// // // console.log(subcategoryData, "...........subcategoryData");

// // const uniqueSubcategoryData = subcategoryData.filter(
// //   (obj, index) =>
// //     subcategoryData.findIndex((item) => item._id === obj._id) === index
// // );
// // // console.log(uniqueSubcategoryData,"------------------uniqueSubcategoryData");
// // const uniqueSubCategoryId=uniqueSubcategoryData.map((e)=>{
// //   return e._id
// // })
// // console.log(uniqueSubCategoryId ,".......unique _id of subcategoryId");

// /**find  unique subcategoryId in products_List 2nd way simply*/

// // const subcategoryData = products_List.map((e) => {
// //   return e?.subcategoryId;
// // });
// // // console.log(subcategoryData, "...........unique subcategoryId");

// // const uniqueSubcategoryData = subcategoryData.filter(
// //   (obj, index) =>
// //     subcategoryData.findIndex((item) => item._id === obj._id) === index
// // );
// // // console.log(uniqueSubcategoryData,"------------------");
// // const uniqueSubCategoryId=uniqueSubcategoryData.map((e)=>{
// //   return e._id
// // })
// // // console.log(uniqueSubCategoryId);

// // const filterCategoryId = uniqueSubcategoryData.filter(
// //   (item) => item.categoryId ===
// //   "64cd6ccdddeb678c9c83db8d"
// // );
// // console.log(filterCategoryId, ".............590");

/**
 *?Example:3d-find (uniqueCategoryData and _id of categoryId),(uniqueSubcategoryData and _id of subcategoryId),(also filter by categoryId) using 2nd way simply
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

/**end variable products_List */

/**find all uniqueCategoryData */

// const uniqueCategoryData=products_List.map((e) => {
//   return e.categoryId;
// }).filter(
//   (obj, index,arr) =>
//     arr.findIndex((item) => item._id === obj._id) === index
// );
// console.log(uniqueCategoryData,"........uniqueCategoryData");
// console.log(uniqueCategoryData.length,".........length of uniqueCategoryData");

// /**find all uniqueCategoryName only   */

// const uniqueCategoryName=products_List.map((e) => {
//   return e.categoryId;
// }).filter(
//   (obj, index,arr) =>
//     arr.findIndex((item) => item._id === obj._id) === index
// ).map((item)=>item.name)
// console.log(uniqueCategoryName,".........uniqueCategoryName");
// console.log(uniqueCategoryName.length,".........length of uniqueCategoryName");

// /**find all uniqueCategoryId only   */

// const uniqueCategoryId=products_List.map((e) => {
//   return e.categoryId;
// }).filter(
//   (obj, index,arr) =>
//     arr.findIndex((item) => item._id === obj._id) === index
// ).map((item)=>item._id)
// console.log(uniqueCategoryId,".........uniqueCategoryId");
// console.log(uniqueCategoryId.length,".........length of uniqueCategoryId");

/**find all uniqueCategoryName only  easy method in allCategoryData */
// const allCategoryData=products_List.map((e) => {
//   return e.categoryId;
// });
// // console.log(allCategoryData,"......allCategoryData");
// // console.log(allCategoryData.length,"......length of allCategoryData");
// const uniqueCategoryName= [...new Set(allCategoryData.map(user => user.name))];
// console.log(uniqueCategoryName,"......uniqueCategoryName");
// console.log(uniqueCategoryName.length,"......length of uniqueCategoryName");

// /**find all uniqueCategoryid easy method in allCategoryData*/

// const uniqueCategoryData=[...new Set(allCategoryData.map(item => item._id))];
// console.log(uniqueCategoryData,".........uniqueCategoryData");
// console.log(uniqueCategoryData.length,".........length of uniqueCategoryData");

/**find all uniqueSubCategoryData */

// const uniqueSubCategoryData=products_List.map((e) => {
//   return e.subcategoryId;
// }).filter(
//   (obj, index,arr) =>
//     arr.findIndex((item) => item._id === obj._id) === index
// );
// console.log(uniqueSubCategoryData,".........uniqueSubCategoryData");
// console.log(uniqueSubCategoryData.length,".........length of uniqueSubCategoryData");

// /**find all uniqueSubCategoryName only   */

// const uniqueSubCategoryName=products_List.map((e) => {
//   return e.subcategoryId;
// }).filter(
//   (obj, index,arr) =>
//     arr.findIndex((item) => item._id === obj._id) === index
// ).map((item)=>item.name)
// console.log(uniqueSubCategoryName,"..........uniqueSubCategoryName");
// console.log(uniqueSubCategoryName.length,"........length of uniqueSubCategoryName");

/**find all uniqueSubCategoryData filtering by categoryId */

// const uniqueSubCategoryData=products_List.map((e) => {
//   return e.subcategoryId;
// }).filter(
//   (obj, index,arr) =>
//     arr.findIndex((item) => item._id === obj._id) === index
// );
// // console.log(uniqueSubCategoryData,".........uniqueSubCategoryData");
// console.log(uniqueSubCategoryData.length,".........length of uniqueSubCategoryData");

// const filterCategoryId = uniqueSubCategoryData.filter(
//   (item) => item.categoryId ===
//   "64cd6ccdddeb678c9c83db8d"
// );
// console.log(filterCategoryId, ".............590");

/**
 *!Example4:- To calculate the time difference of two dates
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

//  const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     // return item
// } )

// console.log(values);

/** */
// const  carousel= [
//           {
//             richCard: {
//               standaloneCard: {
//                 cardContent: {
//                   title: "This is a Title",
//                   description: "This is a description for the rich card",

//                 },
//               },
//             },
//           },
//           {
//             richCard: {
//               standaloneCard: {
//                 cardContent: {
//                   title: "This is a Title",
//                   description: "This is a description for the rich card",

//                 },
//               },
//             },
//           },
//           {
//             richCard: {
//               standaloneCard: {
//                 cardContent: {
//                   title: "This is a Title",
//                   description: "This is a description for the rich card",

//                 },
//               },
//             },
//           },
//         ]
//         const arr1=carousel.map((item)=>{
//           return item.richCard;
//         })
//         // console.log(arr1);
//         const arr2=carousel.forEach((item)=>{
//           return item;
//         })
//         console.log(arr1);
/** */
//  var suggestionsWithMsg=axios.get('https://4cf5-122-162-147-31.ngrok-free.app/get_data', { key: 'value' })
//       .then(response => {
//         console.log(response.data,"...........data");
//       })
//       .catch(error => {
//         console.error('Error making POST request:', error);
//       });
//       console.log(suggestionsWithMsg,".........ghiukjjk");

/** */

//  let suggestionsWithMsg = [
//     {

//     start: {
//       message: "message",
//       type: "text",
//       suggession: [
//         {
//           reply: {
//             text: "About Us",
//             postbackData: "a",
//           },
//         },
//         {
//           reply: {
//             text: "Contact Us",
//             postbackData: "b",
//           },
//         },
//         {
//           reply: {
//             text: "Book Now",
//             postbackData: "c",
//           },
//         },
//         {
//           reply: {
//             text: "Help",
//             postbackData: "d",
//           },
//         },
//         // {liveAgentRequest: {}}
//       ],
//     },
//   },{

//     a: {
//       message: "Ypu are Selected Image",
//       type: "image",
//       image: {
//         contentInfo: {
//           altText: "Alternative text imarged",
//           fileUrl:
//             "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
//           forceRefresh: true,
//         },
//       },
//       suggession: [
//         {
//           reply: {
//             text: "Men",
//             postbackData: "e",
//           },
//         },
//         {
//           reply: {
//             text: "Women",
//             postbackData: "f",
//           },
//         },
//         {
//           reply: {
//             text: "Back",
//             postbackData: "x",
//           },
//         },
//         // {liveAgentRequest: {}}
//       ],

//   },},{

//     b: {
//       message: "You are Selected card",
//       type: "card",
//       richCard: {
//         standaloneCard: {
//           cardContent: {
//             title: "This is a Title",
//             description: "This is a description for the rich card",
//             media: {
//               height: "MEDIUM",
//               contentInfo: {
//                 fileUrl:
//                   "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                 forceRefresh: false,
//               },
//             },
//             suggestions: [
//               {
//                 reply: {
//                   text: "Suggestion #1",
//                   postbackData: "suggestion_1",
//                 },
//               },
//               {
//                 reply: {
//                   text: "Suggestion #2",
//                   postbackData: "suggestion_2",
//                 },
//               },
//             ],
//           },
//         },
//       },
//       suggession: [
//         {
//           reply: {
//             text: "Men",
//             postbackData: "e",
//           },
//         },
//         {
//           reply: {
//             text: "Women",
//             postbackData: "f",
//           },
//         },
//         {
//           reply: {
//             text: "Back",
//             postbackData: "y",
//           },
//         },
//         { liveAgentRequest: {} },
//       ],
//     },
//   },{
//     c: {
//       message: "Please Select Category",
//       type: "text",
//       suggession: [
//         {
//           reply: {
//             text: "Men",
//             postbackData: "e",
//           },
//         },
//         {
//           reply: {
//             text: "Women",
//             postbackData: "f",
//           },
//         },
//         {
//           reply: {
//             text: "Back",
//             postbackData: "z",
//           },
//         },
//         // {liveAgentRequest: {}}
//       ],
//     },
//   },{
//     e: {
//       message: "What Service You want to use please select",
//       type: "carousel",
//       suggession: [
//         {
//           reply: {
//             text: "Body Massage",
//             postbackData: "g",
//           },
//         },
//         {
//           reply: {
//             text: "Hair Spa",
//             postbackData: "h",
//           },
//         },
//         {
//           reply: {
//             text: "Back",
//             postbackData: "z",
//           },
//         },
//         { liveAgentRequest: {} },
//       ],

//       richCard: {
//         carouselCard: {
//           cardWidth: "MEDIUM",
//           cardContents: [
//             {
//               title: "Card #1",
//               description: "The description for card #1",
//               suggestions: [
//                 {
//                   reply: {
//                     text: "Card1",
//                     postbackData: "c",
//                   },
//                 },
//               ],
//               media: {
//                 height: "MEDIUM",
//                 contentInfo: {
//                   fileUrl:
//                     "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                   forceRefresh: "false",
//                 },
//               },
//             },
//             {
//               title: "Card #2",
//               description: "The description for card #2",
//               suggestions: [
//                 {
//                   reply: {
//                     text: "Card #2",
//                     postbackData: "a",
//                   },
//                 },
//               ],
//               media: {
//                 height: "MEDIUM",
//                 contentInfo: {
//                   fileUrl:
//                     "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                   forceRefresh: "false",
//                 },
//               },
//             },
//             {
//               title: "Card #3",
//               description: "The description for card #3",
//               suggestions: [
//                 {
//                   reply: {
//                     text: "Book",
//                     postbackData: "c",
//                   },
//                 },
//               ],
//               media: {
//                 height: "MEDIUM",
//                 contentInfo: {
//                   fileUrl:
//                     "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                   forceRefresh: "false",
//                 },
//               },
//             },
//             {
//               title: "Card #4",
//               description: "The description for card #4",
//               suggestions: [
//                 {
//                   reply: {
//                     text: "About Us",
//                     postbackData: "a",
//                   },
//                 },
//               ],
//               media: {
//                 height: "MEDIUM",
//                 contentInfo: {
//                   fileUrl:
//                     "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
//                   forceRefresh: "false",
//                 },
//               },
//             },
//           ],
//         },
//       },
//     },
//   },{
//     el: {
//       message: "Please Choose a given option",
//       type:"text",
//       suggession: [
//         {
//           reply: {
//             text: "About Us",
//             postbackData: "a",
//           },
//         },
//         {
//           reply: {
//             text: "Contact Us",
//             postbackData: "b",
//           },
//         },
//         {
//           reply: {
//             text: "Book Now",
//             postbackData: "c",
//           },
//         },
//         {
//           reply: {
//             text: "Help",
//             postbackData: "d",
//           },
//         },
//         // {liveAgentRequest:{}}
//       ],
//     },
//   }
//   ];
// Function to filter data based on the "type" key
// function filterDataByType(data, type) {
//   return data.filter(item => item.hasOwnProperty(type));
// }

// Example: Filtering data with type "text"
// const filteredTextData = filterDataByType(suggestionsWithMsg, 'text');
// console.log(filteredTextData);

// // Example: Filtering data with type "image"
// const filteredImageData = filterDataByType(suggestionsWithMsg, 'image');
// console.log(filteredImageData);

// // Example: Filtering data with type "card"
// const filteredCardData = filterDataByType(suggestionsWithMsg, 'card');
// console.log(filteredCardData);

// // Example: Filtering data with type "carousel"
// const filteredCarouselData = filterDataByType(suggestionsWithMsg, 'carousel');
// console.log(filteredCarouselData);
// Define a function to filter data by type
// function filterDataByType(data, type) {
//   return data.filter(item => item[type]);
// }

// // Example: Filter data with type "text"
// const filteredTextData = filterDataByType(suggestionsWithMsg, 'a');
// console.log(filteredTextData);

// Filter data using key 'type'
// const filteredData = suggestionsWithMsg.filter(item => item[item.start.message].type === "text");

// Log the filtered data
// console.log(filteredData);

/** */

// let suggestionsWithMsg = {
//     start: {
//       message: "message",
//       type: "text",
//       suggession: [
//         {
//           reply: {
//             text: "About Us",
//             postbackData: "a",
//           },
//         },
//         {
//           reply: {
//             text: "Contact Us",
//             postbackData: "b",
//           },
//         },
//         {
//           reply: {
//             text: "Book Now",
//             postbackData: "c",
//           },
//         },
//         {
//           reply: {
//             text: "Help",
//             postbackData: "d",
//           },
//         },
//         // {liveAgentRequest: {}}
//       ],
//     },
//     a: {
//       message: "Ypu are Selected Image",
//       type: "image",
//       image: {
//         contentInfo: {
//           altText: "Alternative text imarged",
//           fileUrl:
//             "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
//           forceRefresh: true,
//         },
//       },
//       suggession: [
//         {
//           reply: {
//             text: "Men",
//             postbackData: "e",
//           },
//         },
//         {
//           reply: {
//             text: "Women",
//             postbackData: "f",
//           },
//         },
//         {
//           reply: {
//             text: "Back",
//             postbackData: "x",
//           },
//         },
//         // {liveAgentRequest: {}}
//       ],
//     },
//     b: {
//       message: "You are Selected card",
//       type: "card",
//       richCard: {
//         standaloneCard: {
//           cardContent: {
//             title: "This is a Title",
//             description: "This is a description for the rich card",
//             media: {
//               height: "MEDIUM",
//               contentInfo: {
//                 fileUrl:
//                   "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                 forceRefresh: false,
//               },
//             },
//             suggestions: [
//               {
//                 reply: {
//                   text: "Suggestion #1",
//                   postbackData: "suggestion_1",
//                 },
//               },
//               {
//                 reply: {
//                   text: "Suggestion #2",
//                   postbackData: "suggestion_2",
//                 },
//               },
//             ],
//           },
//         },
//       },
//       suggession: [
//         {
//           reply: {
//             text: "Men",
//             postbackData: "e",
//           },
//         },
//         {
//           reply: {
//             text: "Women",
//             postbackData: "f",
//           },
//         },
//         {
//           reply: {
//             text: "Back",
//             postbackData: "y",
//           },
//         },
//         { liveAgentRequest: {} },
//       ],
//     },
//     c: {
//       message: "Please Select Category",
//       type: "text",
//       suggession: [
//         {
//           reply: {
//             text: "Men",
//             postbackData: "e",
//           },
//         },
//         {
//           reply: {
//             text: "Women",
//             postbackData: "f",
//           },
//         },
//         {
//           reply: {
//             text: "Back",
//             postbackData: "z",
//           },
//         },
//         // {liveAgentRequest: {}}
//       ],
//     },

//     e: {
//       message: "What Service You want to use please select",
//       type: "carousel",
//       suggession: [
//         {
//           reply: {
//             text: "Body Massage",
//             postbackData: "g",
//           },
//         },
//         {
//           reply: {
//             text: "Hair Spa",
//             postbackData: "h",
//           },
//         },
//         {
//           reply: {
//             text: "Back",
//             postbackData: "z",
//           },
//         },
//         { liveAgentRequest: {} },
//       ],

//       richCard: {
//         carouselCard: {
//           cardWidth: "MEDIUM",
//           cardContents: [
//             {
//               title: "Card #1",
//               description: "The description for card #1",
//               suggestions: [
//                 {
//                   reply: {
//                     text: "Card1",
//                     postbackData: "c",
//                   },
//                 },
//               ],
//               media: {
//                 height: "MEDIUM",
//                 contentInfo: {
//                   fileUrl:
//                     "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                   forceRefresh: "false",
//                 },
//               },
//             },
//             {
//               title: "Card #2",
//               description: "The description for card #2",
//               suggestions: [
//                 {
//                   reply: {
//                     text: "Card #2",
//                     postbackData: "a",
//                   },
//                 },
//               ],
//               media: {
//                 height: "MEDIUM",
//                 contentInfo: {
//                   fileUrl:
//                     "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                   forceRefresh: "false",
//                 },
//               },
//             },
//             {
//               title: "Card #3",
//               description: "The description for card #3",
//               suggestions: [
//                 {
//                   reply: {
//                     text: "Book",
//                     postbackData: "c",
//                   },
//                 },
//               ],
//               media: {
//                 height: "MEDIUM",
//                 contentInfo: {
//                   fileUrl:
//                     "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                   forceRefresh: "false",
//                 },
//               },
//             },
//             {
//               title: "Card #4",
//               description: "The description for card #4",
//               suggestions: [
//                 {
//                   reply: {
//                     text: "About Us",
//                     postbackData: "a",
//                   },
//                 },
//               ],
//               media: {
//                 height: "MEDIUM",
//                 contentInfo: {
//                   fileUrl:
//                     "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
//                   forceRefresh: "false",
//                 },
//               },
//             },
//           ],
//         },
//       },
//     },

//   };
// /** */
// function filterDataByType(data, targetType) {
//   const filteredData = {};

//   for (const key in data) {
//     if (data.hasOwnProperty(key) && data[key].type === targetType) {
//       filteredData[key] = data[key];
//     }
//   }

//   return filteredData;
// }

// // Example: Filter data with type 'text'
// const filteredTextData = filterDataByType(suggestionsWithMsg, 'text');
// console.log(filteredTextData,"......1");

// // Example: Filter data with type 'image'
// const filteredImageData = filterDataByType(suggestionsWithMsg, 'image');
// console.log(filteredImageData,",,,,,,,2");

// // Example: Filter data with type 'card'
// const filteredCardData = filterDataByType(suggestionsWithMsg, 'card');
// console.log(filteredCardData,"..........3");

// // Example: Filter data with type 'carousel'
// const filteredCarouselData = filterDataByType(suggestionsWithMsg, 'carousel');
// console.log(filteredCarouselData,"..........4");
/** */
// Example: Filter data with 'type' equal to 'text'
// if (suggestionsWithMsg.start.type === 'text') {
//   console.log(suggestionsWithMsg.start);
// } else if (suggestionsWithMsg.a.type === 'image') {
//   console.log(suggestionsWithMsg.a);
// } else if (suggestionsWithMsg.b.type === 'card') {
//   console.log(suggestionsWithMsg.b);
// } else if (suggestionsWithMsg.c.type === 'text') {
//   console.log(suggestionsWithMsg.c);
// } else if (suggestionsWithMsg.e.type === 'carousel') {
//   console.log(suggestionsWithMsg.e);

// } else {
//   console.log(suggestionsWithMsg.el);
// }
/** */
// Mapping object for types to keys
// const typeToKeyMap = {
//   text: 'start',
//   image: 'a',
//   card: 'b',
//   carousel: 'e',
//   // Add more types as needed
// };

// Example: Filter data with 'type' equal to 'text'
// const targetType = 'text';

// if (typeToKeyMap[targetType]) {
//   const key = typeToKeyMap[targetType];
//   console.log(suggestionsWithMsg[key]);
// } else {
//   console.log(suggestionsWithMsg["el"]);
// }
