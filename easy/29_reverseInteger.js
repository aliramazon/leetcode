/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1

*/

const reverseInteger = (x) => {
    let stringX = x.toString();
    let reversedChars = [];

    for (let i = stringX.length - 1; i >= 0; i--) {
        let char = stringX[i];
        reversedChars.push(char);
    }

    let reversedInt = parseInt(reversedChars.join(""));
    let finalResult = Math.abs(x) === x ? reversedInt : reversedInt * -1;

    if (finalResult >= 2 ** 31 * -1 && finalResult <= 2 ** 31 - 1)
        return finalResult;
    return 0;
};

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));
console.log(reverseInteger(0));
