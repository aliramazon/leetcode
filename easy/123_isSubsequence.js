/* Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code? */

const isSubsequence = (src, target) => {
    if (src.length > target.length) return false;
    if (src === target) return true;
    let i = 0,
        j = 0;

    while (i < src.length && j < target.length) {
        if (src[i] === target[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i === src.length;
};

const isSubsequenceRecursive = (src, target) => {
    if (src.length > target.length) return false;
    if (src === target) return true;

    const iterate = (i, j) => {
        if (i === src.length) return true;
        if (j === target.length) return false;

        if (src[i] === target[j]) {
            i++;
        }
        j++;
        return iterate(i, j);
    };
    return iterate(0, 0);
};