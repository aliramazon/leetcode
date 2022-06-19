/* Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

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
Input: columnNumber = 1
Output: "A"

Example 2:
Input: columnNumber = 28
Output: "AB"

Example 3:
Input: columnNumber = 701
Output: "ZY"
 

Constraints:
1 <= columnNumber <= 2^31 - 1 */

const convertToTitle = (number) => {
    let columnTitle = [];
    let columnNumber;
    let exponent = 0;

    while (number > 0) {
        let power = 26 ** exponent;
        let rest = Math.floor(number / power);
        columnNumber = rest % 26 === 0 ? 26 : rest % 26;
        columnTitle.unshift(String.fromCharCode(64 + columnNumber));
        number = number - power * columnNumber;
        exponent++;
    }
    return columnTitle.join("");
};
