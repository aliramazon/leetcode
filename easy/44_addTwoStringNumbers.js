/*Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 

Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.
*/

const addTwoStrings = (num1, num2) => {
    let carry = 0;
    let total = [];
    let digit1,
        digit2,
        i = num1.length - 1,
        j = num2.length - 1;

    while (i >= 0 || j >= 0) {
        digit1 = num1[i] ? parseInt(num1[i]) : 0;
        digit2 = num2[j] ? parseInt(num2[j]) : 0;

        let sum = digit1 + digit2 + carry;
        total.push(sum % 10);
        sum > 9 ? (carry = 1) : (carry = 0);

        if (i >= 0) {
            i--;
        }
        if (j >= 0) {
            j--;
        }
    }
    if (carry === 1) total.push(carry);

    return total.reverse().join("");
};

console.log(addTwoStrings("9333852702227987", "85731737104263"));
console.log(addTwoStrings("0", "9"));
console.log(addTwoStrings("456", "77"));
