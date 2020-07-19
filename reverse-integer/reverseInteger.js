/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows. 
*/
// 2^32 signed is actually 2^31 with the binary representation of 0x7FFFFFFF as seen in other solutions

//  First Solution
// var reverse = function (x) {
//     var isNegative = false;
//     if (x < 0) {
//         isNegative = true;
//         x *= -1;
//     };
//     var reverseX = parseInt(String(x).split('').reverse((a, b) => a - b).join(''));
//     if (reverseX > Math.pow(2, 31)) {
//         return 0;
//     }
//     if (isNegative) {
//         return -1 * reverseX
//     } else {
//         return reverseX;
//     }
// };

// Name argument n instead of x, as that latter is commonly used for decimal numbers 
function reverse(n) {
    var reverseN = +String(Math.abs(n)).split('').reverse().join('');
    
    if (reverseN > 0x7FFFFFFF) {
        return 0;
    }
   
    return n < 0 ? -reverseN : reverseN;
};

console.log(reverse(-123));
console.log(reverse(1563847412));