/* Given a string num which represents an integer, return true if num is a strobogrammatic number.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Example 1:
Input: num = "69"
Output: true

Example 2:
Input: num = "88"
Output: true

Example 3:
Input: num = "962"
Output: false
 

Constraints:
1 <= num.length <= 50
num consists of only digits.
num does not contain any leading zeros except for zero itself. */

const isStrobogrammatic = (num) => {
    const dic = {
        1: "1",
        0: "0",
        6: "9",
        8: "8",
        9: "6"
    };
    let mid = Math.floor(num.length / 2) - 1;

    for (let i = num.length - 1; i > mid; i--) {
        let digit = num[i];
        if (!dic[digit] && dic[digit] !== 0) {
            return false;
        }
        if (dic[digit] !== num[num.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isStrobogrammatic("69"));
console.log(isStrobogrammatic("666662299999"));
