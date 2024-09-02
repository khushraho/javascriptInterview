/**
 *?Example9:-Write a Javascript function to get the number of occurences of each letter in specified string...
 */
/*
ek string hai usme kon sa character kitni baar aaya hai
 */
////! Example:-
function occ(str) {
  var occurances = {};
  str.split("").forEach((element) => {
    if (occurances.hasOwnProperty(element) === false) {
      occurances[element] = 1;
    } else {
      occurances[element]++;
    }
  });
  return occurances;
}
// console.log(occ("appypie technology"));

////! Example:-
function occMap(str) {
  var occurances = {};
  str.split("").map((element) => {
    if (occurances.hasOwnProperty(element) === false) {
      occurances[element] = 1;
    } else {
      occurances[element]++;
    }
  });
  return occurances;
}
// console.log(occMap("appypie technology"),"..occmap");

////! Example:-
function occ1(str) {
  var occurances = {};
  str.split("").forEach((element) => {
    if (element in occurances) {
      occurances[element] += 1;
    } else {
      occurances[element] = 1;
    }
  });
  return occurances;
}
// console.log(occ1("laxmi narayan technology"),".........1111111");

////! Example:-
function occ2(str) {
  var occurances = {};
  console.log(str.length, "......ssssssss");
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    if (element in occurances) {
      occurances[element] += 1;
    } else {
      occurances[element] = 1;
    }
  }
  return occurances;
}
// console.log(occ2("laxmi narayan technology"),".........22222222222");
// console.log(occ2("prakash ji hu"),".........22222222222");

////! Example:-
function occ3(str) {
  var occurances = {};
  console.log(str.length, "......ssssssss");
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    if (element in occurances) {
      occurances[element] += 1;
    } else {
      occurances[element] = 1;
    }
  }
  return occurances;
}
console.log(occ3("laxmi narayan technology"),".........333333333");
// console.log(occ3("prakash ji hu"),".........33333333");

////! Example:-
function occur(str) {
  var occurances = {};
  console.log(str.length, "......ssssssss");
  for (let element of str) {
    if (element in occurances) {
      occurances[element] += 1;
    } else {
      occurances[element] = 1;
    }
  }
  return occurances;
}
// console.log(occur("laxmi narayan technology"),".........occur");
// console.log(occur("prakash kumar sahu"),".........occur");

////! Example:-
function occ4(str) {
  var occurances = {};
  console.log(str.length, "......ssssssss");
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    if (occurances.hasOwnProperty(element)) {
      occurances[element] += 1;
    } else {
      occurances[element] = 1;
    }
  }
  return occurances;
}
// console.log(occ4("laxmi narayan technology"),".........44444444");
// console.log(occ4("prakash ji hu"),".........44444444");
