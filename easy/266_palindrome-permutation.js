/* Given a string s, return true if a permutation of the string could form a palindrome.

 
Example 1:
Input: s = "code"
Output: false

Example 2:
Input: s = "aab"
Output: true

Example 3:
Input: s = "carerac"
Output: true
 

Constraints:

1 <= s.length <= 5000
s consists of only lowercase English letters. */

const canPermutatePalindrome = (string) => {
    const count = {};
    let countOdds = 0;
    for (let char of string) {
        if (!count[char]) {
            count[char] = 1;
        } else {
            count[char]--;
        }

        count[char] === 1 ? countOdds++ : countOdds--;
    }

    return countOdds <= 1;
};