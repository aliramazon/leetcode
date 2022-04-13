/* Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

Example 1:
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
 

Constraints:
0 <= low <= high <= 10^9 */

// 1 - 10 => 10 - 1 + 1 => 10 => 1, 3, 5, 7, 9
// 1 - 11 => 11 - 1 + 1 => 1, 3, 5, 7, 9, 11

const countOddNumbers = (low, high) => {
    let count = 0;
    let range = high - low + 1;
    if (range % 2 === 0) return range / 2;
    count = Math.floor(range / 2);
    if (low % 2 !== 0 || high % 2 !== 0) {
        count++;
    }
    return count;
};
