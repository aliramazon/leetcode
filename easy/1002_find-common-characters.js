/* Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.


Example 1:
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:
Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 

Constraints:
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters. */

const commonChars = (words) => {
    let arrayHash = [];
    let result = [];
    let lastIdx;

    for (let i = 0; i < words.length; i++) {
        arrayHash[i] = {};
        for (let j = 0; j < words[i].length; j++) {
            let char = words[i][j];
            if (arrayHash[i][char]) {
                arrayHash[i][char]++;
            } else {
                arrayHash[i][char] = 1;
            }
        }
    }

    for (let i = 0; i < words[0].length; i++) {
        let char = words[0][i];
        for (let j = 0; j < arrayHash.length; j++) {
            if (!arrayHash[j][char] || arrayHash[j][char] < 0) {
                break;
            } else {
                arrayHash[j][char]--;
                lastIdx = j;
            }
        }
        if (lastIdx === arrayHash.length - 1) {
            result.push(char);
        }
    }
    return result;
};
