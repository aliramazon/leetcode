/* 
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0

Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

const firstUniqChar = (str) => {
    let hash = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!hash[char] && hash[char] !== 0) {
            hash[char] = 1;
        } else if (hash[char] || hash[char] === 0) {
            hash[char]++;
        }
    }

    for (let j = 0; j < str.length; j++) {
        let char = str[j];
        if (hash[char] === 1) {
            return j;
        }
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("lovel"));
