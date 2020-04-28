/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Takes in an array of any length and computes the maximum number of combinations for the numbers in the array
// We're looking at how each integer can be arranged, all possible arrangements
// How do we know when we've reached the maximum arrangements? Do we set bounds?
// We would need to factor in the length of the array, and use a known formula for calculating permutations
/*
Loop?
X = length of the array
Y = Position of the integers within the array
Z = Positioning the integers such that a new combination is made
Generating a new array with new combination
Reversing the array at the end of the computation, when all the integers are in reverse order the function stops
*/

var permute = function (nums) {
    let result = [];
    let combo = nums.reduce()
};


console.log(permute([1,2,3]))