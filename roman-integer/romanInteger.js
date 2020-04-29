/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
For example, two is written as II in Roman numeral, just two one 's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.However, the numeral
for four is not IIII.Instead, the number four is written as IV.Because the one is before the five we subtract it making four.The same principle applies to the number nine, which is written as IX.There are six instances where subtraction is used:

    I can be placed before V(5) and X(10) to make 4 and 9.
X can be placed before L(50) and C(100) to make 40 and 90.
C can be placed before D(500) and M(1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.Input is guaranteed to be within the range from 1 to 3999.
*/

// var romanToInt = function (s) {
//     if (s === null) return -1;
//     var num = charToInt(str1.charAt(0))
//     var charToInt = function (c) {

//     }
// };

// Concise with ES6

// const myMap = new Map();
// myMap.set('I', 1);
// myMap.set('V', 5);
// myMap.set('X', 10);
// myMap.set('L', 50);
// myMap.set('C', 100);
// myMap.set('D', 500);
// myMap.set('M', 1000);

// var romanToInt = function (s) {
//     var result = 0;
//     if (s) {
//         var s1 = s.split('');
//         s1.forEach(function (e, i) {
//             result += myMap.get(e) < myMap.get(s1[i + 1]) ? -myMap.get(e) : myMap.get(e); // used ternary oprator with '-' where required
//         });
//     }
//     return result; //move it outside loop
// }
// console.log(romanToInt('MCMXVI'));
// console.log(romanToInt('V'));
// console.log(romanToInt('VII'));

// ES5 Naive Solution

// function roman_to_Int(str1) {
//     if (str1 == null) return -1;
//     var num = char_to_int(str1.charAt(0));
//     var pre, curr;

//     for (var i = 1; i < str1.length; i++) {
//         curr = char_to_int(str1.charAt(i));
//         pre = char_to_int(str1.charAt(i - 1));
//         if (curr <= pre) {
//             num += curr;
//         } else {
//             num = num - pre * 2 + curr;
//         }
//     }

//     return num;
// }

// function char_to_int(c) {
//     switch (c) {
//         case 'I':
//             return 1;
//         case 'V':
//             return 5;
//         case 'X':
//             return 10;
//         case 'L':
//             return 50;
//         case 'C':
//             return 100;
//         case 'D':
//             return 500;
//         case 'M':
//             return 1000;
//         default:
//             return -1;
//     }
// }

// console.log(roman_to_Int('XX'))

const values = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10]
    /*....*/
]);

function romanToInt(string) {
    let result = 0,
        current, previous = 0;
    for (const char of string.split("").reverse()) {
        current = values.get(char);
        if (current >= previous) {
            result += current;
        } else {
            result -= current;
        }
        previous = current;
    }
    return result;
}

console.log(romanToInt('I'));
console.log(romanToInt('II'));
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('V'));
console.log(romanToInt('VI'));
console.log(romanToInt('VII'));
console.log(romanToInt('VIII'));
console.log(romanToInt('IX'));
console.log(romanToInt('X'));
console.log(romanToInt('XI'));
console.log(romanToInt('XII'));
console.log(romanToInt('XIII'));
console.log(romanToInt('XIV'));
console.log(romanToInt('XV'));
console.log(romanToInt('XVI'));
console.log(romanToInt('XVII'));
console.log(romanToInt('XVIII'));
console.log(romanToInt('XIX'));
console.log(romanToInt('XX'));