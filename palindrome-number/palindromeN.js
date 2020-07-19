// Determine whether an integer is a palindrome when it reads the same backward and forward

// could a queue work for this? if the value of the head and tail are the same it is most likely a palindrome

function findPalindrome (num) {
  if (num < 0) return false;
  let reversed = 0, num2 = num;
  while (num2 > 0) {
    const lastDigit = num2 % 10;
    reversed = (reversed * 10) + lastDigit;
    num2 = (num2 / 10) | 0;
  }
  return num === reversed;
};

console.log(findPalindrome(121));
