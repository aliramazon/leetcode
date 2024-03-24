/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. */

const canConstruct = (ransomNote, magazine) => {
    if (ransomNote.length > magazine.length) return false;
    if (ransomNote === magazine) return true;
    const count = {};
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i];
        if (count[char] === 0 || !count[char]) {
            return false;
        } else {
            count[char]--;
        }
    }
    return true;
};
