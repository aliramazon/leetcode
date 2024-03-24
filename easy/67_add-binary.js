/* 
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:
1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

const addBinary = (a, b) => {
    let result = [];
    let carry = 0;
    let max = Math.max(a.length, b.length);
    let i = a.length - 1;
    let j = b.length - 1;

    while (result.length < max) {
        let bitA = a[i] ? a[i].charCodeAt() % 48 : 0;
        let bitB = b[j] ? b[j].charCodeAt() % 48 : 0;
        let sum = bitA + bitB + carry;

        if (sum === 1) {
            result.push(1);
            carry = 0;
        } else if (sum === 0) {
            result.push(0);
        } else if (sum === 2) {
            result.push(0);
            carry = 1;
        } else if (sum === 3) {
            result.push(1);
        }
        i--;
        j--;
    }
    if (carry === 1) result.push(1);
    return result.reverse().join("");
};
