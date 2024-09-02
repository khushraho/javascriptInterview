////? Example:-Given an array of integers nums and and integer target, return indicates of the two numbers such that tey add up to target:-
////? Inputs: nums=[4,3,67,7],target 70;
////? Output: [1,2] (because nums[1]+nums[2]===target 70,we return [1,2]
////? Inputs: nums=[9,3,4,9,7],target 12;
////? Output: [0,1]

////! Example1:-
function addTwo(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }


    }
}
console.log(addTwo([4, 3, 67, 7], 70)); //[1,2]
console.log(addTwo([9,3,4,9,7], 12)); //[0,1]
