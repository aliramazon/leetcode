/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/

// ""

const longestCommonPrefix = (strs) => {
    let hash = {};
    let longestPrefix = "";

    const countSeq = (str, hash) => {
        for (let i = 0; i < str.length; i++) {
            let prefix = str.slice(0, i + 1);
            if (!hash[prefix]) {
                hash[prefix] = 1;
            } else {
                hash[prefix]++;
            }
        }
    };

    for (let str of strs) {
        countSeq(str, hash);
    }

    console.log(hash);

    for (let j = 0; j < strs[0].length; j++) {
        let prefix = strs[0].slice(0, j + 1);
        if (hash[prefix] === strs.length) {
            longestPrefix = prefix;
        } else {
            return longestPrefix;
        }
    }

    return longestPrefix;
};

const longestCommonPrefix1 = (strs) => {
    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) {
                return str.slice(0, i);
            }
        }
    }

    return strs[0];
};

let strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix1(strs));
