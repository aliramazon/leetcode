/* 
Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.


Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 
Constraints:
0 <= x <= 231 - 1
*/

const sqrt = (num) => {
    if (num < 2) return num;
    let min = 2;
    let max = num / 2;
    let guess;

    while (min < max) {
        guess = Math.floor((min + max) / 2);
        let square = guess * guess;
        if (square === num) {
            return guess;
        } else if (square > num) {
            max = guess - 1;
        } else {
            min = guess + 1;
        }
    }
    return min - 1;
};
console.log(sqrt(2));
console.log(sqrt(3));
console.log(sqrt(4));
console.log(sqrt(5));
console.log(sqrt(6));
console.log(sqrt(7));
console.log(sqrt(8));
console.log(sqrt(9));
console.log(sqrt(10));
console.log(sqrt(15));
console.log(sqrt(16));
console.log(sqrt(256));
console.log(sqrt(255));
