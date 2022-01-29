/* 
Given a positive integer num, write a function which returns True if num is a perfect square else False.
Follow up: Do not use any built-in library function such as sqrt.


Example 1:
Input: num = 16
Output: true

Example 2:
Input: num = 14
Output: false
 

Constraints:
1 <= num <= 2^31 - 1
Accepted
326,964
Submissions
764,079
*/

const isPerfectSquare = (num) => {
    if (num === 1) return true;
    let min = 2;
    let max = num / 2;
    let guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        let square = guess * guess;
        if (square === num) {
            return true;
        } else if (square > num) {
            max = guess - 1;
        } else {
            min = guess + 1;
        }
    }
    return false;
};
