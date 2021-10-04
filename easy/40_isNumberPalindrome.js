/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:

Input: x = -101
Output: false
 

Constraints:

-2^31 <= x <= 2^31 - 1 
Follow up: Could you solve it without converting the integer to a string?

*/

const isNumberPalindrome = (num) => {
    let revertedNumber = 0;

    if (num < 0 || (num % 10 === 0 && num !== 0)) return false;

    while (num > revertedNumber) {
        revertedNumber = revertedNumber * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return num === revertedNumber || num === Math.floor(revertedNumber / 10);
};

const isNumberPalindromeRecursion = (num) => {
    if (num < 0 || (num % 10 === 0 && num !== 0)) return false;

    const revert = (revertedNumber) => {
        if (revertedNumber > num || revertedNumber === num) {
            return revertedNumber;
        }
        revertedNumber = revertedNumber * 10 + (num % 10);
        num = Math.floor(num / 10);
        return revert(revertedNumber);
    };

    let revertedHalfNumber = revert(0);

    return (
        num === revertedHalfNumber ||
        num === Math.floor(revertedHalfNumber / 10)
    );
};

console.log(isNumberPalindrome1(121211));
