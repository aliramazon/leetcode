/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([])]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

const isValidParentheses = (parentheses) => {
    const stack = [];
    const dictionary = {
        "}": "{",
        "]": "[",
        ")": "(",
    };

    for (let i = 0; i < parentheses.length; i++) {
        const item = parentheses[i];

        if (Object.values(dictionary).includes(item)) {
            stack.push(item);
        } else if (Object.keys(dictionary).includes(item)) {
            let lastOpen = stack.pop();
            if (lastOpen !== dictionary[item]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValidParentheses("(1)"));
console.log(isValidParentheses("()[45]{1244}"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("()["));
console.log(isValidParentheses("([])]"));
console.log(isValidParentheses("{[111]344}"));
console.log(isValidParentheses("123}"));

// Valid Curly Braces
const isValidCurlyBraces = (curlyBraces) => {
    const stack = [];
    for (let i = 0; i < curlyBraces.length; i++) {
        const brace = curlyBraces[i];

        if (brace === "{") {
            stack.push(brace);
        } else {
            let lastOpen = stack.pop();
            if (lastOpen === undefined) return false;
        }
    }
    return stack.length === 0;
};

console.log(isValidCurlyBraces("{{}{{}"));
console.log(isValidCurlyBraces("{{}"));
console.log(isValidCurlyBraces("{{}}"));
console.log(isValidCurlyBraces("{}"));
console.log(isValidCurlyBraces("{"));
console.log(isValidCurlyBraces("{{"));
console.log(isValidCurlyBraces("}"));
