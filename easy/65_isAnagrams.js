/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let sCharCounter = {};

    for (let char of s) {
        if (sCharCounter[char]) {
            sCharCounter[char]++;
        } else {
            sCharCounter[char] = 1;
        }
    }

    for (let char of t) {
        if (sCharCounter[char]) {
            sCharCounter[char]--;
        } else {
            return false;
        }
    }
    return true;
};
