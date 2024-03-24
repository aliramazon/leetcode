/* 
Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

Example 1:
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
Output: 3

Example 2:
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
Output: 1
 

Constraints:
1 <= wordsDict.length <= 3 * 104
1 <= wordsDict[i].length <= 10
wordsDict[i] consists of lowercase English letters.
word1 and word2 are in wordsDict.
word1 != word2
*/

const shortestDistance = (words, word1, word2) => {
    let w1 = -1,
        w2 = -1;
    let minDistance = words.length;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word === word1) {
            w1 = i;
        } else if (word === word2) {
            w2 = i;
        }

        if (w1 !== -1 && w2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(w1 - w2));
        }
    }
    return minDistance;
};
