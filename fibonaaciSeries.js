////! Example1:- how to create fibonacci series in javascript thapa Technical
////? The fibonnaci sequence is integer sequence where the first two terms are 0 and 1 after that the next terms is defined as the sum of the previous two terms 0,1,1,2,3,5,8,13,21
////! example1:-----------
let a = 0;
let b = 1;
let temp = 0;
for (let i = 0; i <= 10; i++) {
  temp = a + b;
  a = b;
  b = temp;
//   console.log(temp, "......temp");
}

//! example2:-----------
let x = 0;
let y = 1;
for (let temps = 0; temps <100; temps++) {
  temps = x + y;
  x = y;
  y = temps;
//   console.log(temps,".....temps");
}

//! example2:Roadsidecoder-----------
function fib(n){
    const arr=[0,1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-1]+arr[i-2])
    }

return arr[n];
return arr;
return arr.join(", ");
}
console.log(fib(3));