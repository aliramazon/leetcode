/* Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:
Input: n = 3
Output: false

Constraints:

-231 <= n <= 231 - 1
 
Follow up: Could you solve it without loops/recursion? */

const isPowerOfTwo = (number) => {
    if (number === 0) return false;
    while (number % 2 === 0) {
        number = number / 2;
    }

    return number === 1;
};

console.log(isPowerOfTwo(13));
console.log(isPowerOfTwo(14));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(1024));
