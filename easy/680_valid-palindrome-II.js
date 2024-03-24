/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:

Input: s = "aba"
Output: true

Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.

*/

const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
const validPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        let left = i;
        let right = str.length - 1 - i;

        if (str[left] !== str[right]) {
            let slicedStr1 = str.slice(0, left) + str.slice(left + 1);
            let slicedStr2 = str.slice(0, right) + str.slice(right + 1);

            return isPalindrome(slicedStr1) || isPalindrome(slicedStr2);
        }
    }
    return true;
};

console.log(
    validPalindrome(
        "pidbliassaqozokmtgahluruufwbjdtayuhbxwoicviygilgzduudzgligyviciowxbhuyatdjbwfuurulhagtmkozoqassailbdip"
    )
);

console.log(validPalindrome("aba"));
