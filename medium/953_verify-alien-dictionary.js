/*
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*/
const isSorted = (currentWord, nextWord, numberedOrder) => {
    if (numberedOrder[currentWord[0]] < numberedOrder[nextWord[0]]) {
        return true;
    } else if (numberedOrder[currentWord[0]] > numberedOrder[nextWord[0]]) {
        return false;
    }
    for (let i = 0; i < currentWord.length; i++) {
        let nextWordChar = nextWord[i];
        let currentWordChar = currentWord[i];
        if (nextWordChar === undefined) {
            if (currentWord.slice(0, i) === nextWord) {
                return false;
            } else {
                return true;
            }
        }

        if (numberedOrder[currentWordChar] > numberedOrder[nextWordChar]) {
            return false;
        }
    }

    return true;
};

const isAlienDictSorted = (words, order) => {
    let numberedOrder = {};

    for (let i = 0; i < order.length; i++) {
        let letter = order[i];
        numberedOrder[letter] = i;
    }

    for (let i = 0; i < words.length - 1; i++) {
        let current = words[i];
        let next = words[i + 1];

        if (!isSorted(current, next, numberedOrder)) {
            return false;
        }
    }

    return true;
};

let dict = ["apple", "app"];
let order = "abcdefghijklmnopqrstuvwxyz";

console.log(isAlienDictSorted(dict, order));
