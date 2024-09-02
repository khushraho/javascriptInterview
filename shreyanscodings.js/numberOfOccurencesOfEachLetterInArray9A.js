////! Example1:-
function occ1(arr) {
    let occurances1 = {};
    console.log(arr.length, "......ssssssss");
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        // if (element in occurances1) {
        //     occurances1[element] += 1;
        // } else {
        //     occurances1[element] = 1;
        // }
        occurances1[element] = (occurances1[element] || 0) + 1;
    }
    return occurances1;
        
}
let array1 = [
    2,
    4,
    5,
    6,
    "hello",
    "hellos",
    "world",
    "hello",
    "hello",
    3,
    2,
    4,
    4,
    5,
    6,
    4,
    34,
    43,
    3,
    4,
];
console.log(occ1(array1), ".........array1");
////! Example2:-

function occ2(arr) {
    let occurances2 = {};
    console.log(arr.length, "......ssssssss");
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (typeof element === "number") {
            if (element in occurances2) {
                occurances2[element] += 1;
            } else {
                occurances2[element] = 1;
            }
        }
    }
    return occurances2;
}
let array2 = [
    2,
    4,
    5,
    6,
    "hello",
    "hellos",
    "world",
    "hello",
    "hello",
    3,
    2,
    4,
    4,
    5,
    6,
    4,
    34,
    43,
    3,
    4,
];
// console.log(occ2(array2), ".........array2");

////! Example3:-
function occ3(arr) {
    var occurances3 = [];
    let tempObj = {}; // To track occurrences
    console.log(arr.length, "......ssssssss");
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element in tempObj) {
            tempObj[element] += 1;
        } else {
            tempObj[element] = 1;
        }
    }
    for (let key in tempObj) {
        occurances3.push({ [key]: tempObj[key] });
    }
    return occurances3;
}
let array3 = [
    4,
    5,
    6,
    3,
    4,
    4,
    5,
    6,
    4,
    "hello",
    "hello",
    "world",
    34,
    43,
    3,
    4,
];
// console.log(occ3(array3), ".........array3");

// ////! Example4:-
function occ4(arr) {
    var occurances4 = [];
    let tempObj = {}; // To track occurrences

    console.log(arr.length, "......ssssssss");
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (typeof element === "number") {
            if (element in tempObj) {
                tempObj[element] += 1;
            } else {
                tempObj[element] = 1;
            }
        }
    }
    for (let key in tempObj) {
        occurances4.push({ [key]: tempObj[key] });
    }
    return occurances4;
}
let array4 = [
    4,
    5,
    6,
    3,
    4,
    4,
    5,
    6,
    4,
    "hello",
    "hello",
    "world",
    34,
    43,
    3,
    4,
];
// console.log(occ4(array4), ".........array4");
