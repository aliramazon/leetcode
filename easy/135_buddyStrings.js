/* Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 
Example 1:
Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Example 2:
Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal

Example 3:
Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
 

Constraints:
1 <= s.length, goal.length <= 2 * 104
s and goal consist of lowercase letters. */

const buddyStrings = (s, goal) => {
    if (s.length !== goal.length) return false;
    let indices = [];
    const chars = {};

    if (s === goal) {
        for (let i = 0; i < s.length; i++) {
            if (chars[s[i]]) {
                chars[s[i]]++;
                if (chars[s[i]] === 2) return true;
            } else {
                chars[s[i]] = 1;
            }
        }
        return false;
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== goal[i]) {
                indices.push(i);
            }
            if (indices.length > 2) return false;
        }

        if (indices.length === 1) return false;
    }
    const [first, second] = indices;

    return s[first] === goal[second] && s[second] === goal[first];
};
