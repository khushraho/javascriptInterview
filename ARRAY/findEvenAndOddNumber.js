/**
 * !Example1:-how to find the even or add number in a given  array:-
 */
const numbers = [1, 2, 3, 89, 8, 9, 12, 16];
//find evenNumbers
const evenNumbers=numbers.filter((item)=>{
    return item%2===0
})
console.log(evenNumbers);
//find oddNumbers
const oddNumbers=numbers.filter((item)=>{
    return item%2!==0
})
console.log(oddNumbers);
console.log(numbers);