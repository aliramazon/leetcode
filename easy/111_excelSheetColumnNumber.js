/* 
Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701
 

Constraints:
1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].

 */

const orderOfLetter = (letter) => {
    return 26 - (90 % letter.charCodeAt());
};

const titleToNumber = (columnTitle) => {
    let columnNumber = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let exponent = columnTitle.length - i - 1;
        columnNumber += orderOfLetter(columnTitle[i]) * Math.pow(26, exponent);
    }
    return columnNumber;
};

const titleToNumber1 = (columnTitle) => {
    let columnNumber = 0;
    let exponent;

    for (let i = 0; i < columnTitle.length; i++) {
        exponent = columnTitle.length - i - 1;
        columnNumber +=
            ((columnTitle[i].charCodeAt() + 26) % 90) * 26 ** exponent;
    }
    return columnNumber;
};
