/* Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

Example 1:

Input: s = "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: s = "aeiou"
Output: ""
 

Constraints:

1 <= s.length <= 1000
s consists of only lowercase English letters.

*/

const removeVovelsFromString = (string) => {
    const vovels = ["a", "e", "i", "o", "u"];
    let result = "";

    for (let i = 0; i < string.length; i++) {
        if (vovels.indexOf(string[i]) === -1) {
            result += string[i];
        }
    }
    return result;
};

console.log(removeVovelsFromString("hello"));
