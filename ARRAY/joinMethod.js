//// Example:-How to Convert an Array into a String without Commas in JavaScript?
////Example:-
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const str = arr.join('');
// console.log(str);
// Output: 'abcde'

////Example1:-
// const arr = ['a', undefined, null, 'b'];
// const str = arr.join('');
// console.log(str);
// // Output: 'ab'

////Example2:-
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const str = arr.join(' ');
// console.log(str);
// Output: 'a b c d e'

////Example3:-
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const str = arr.join();
// console.log(str);
// // Output: 'a,b,c,d,e'

// ////Example4:-
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const withCommas = arr.join(', ');
// console.log(withCommas);
// // // Output: 'a, b, c, d, e'

// const withHyphens = arr.join('-');
// console.log(withHyphens);
// // //Output: 'a-b-c-d-e'

// const spaceWithHyphens = arr.join('- ');
// console.log(spaceWithHyphens);
// // // Output: 'a- b- c- d- e '
// const withDoubleHyphens = arr.join('--');
// console.log(withDoubleHyphens);
// // // Output: 'a--b--c--d--e '