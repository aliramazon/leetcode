/* 
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
Input: arr = [1,2]
Output: false

Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 
Constraints:
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

*/

const uniqueOccurrences = (nums) => {
    const count = {};
    let map = new Map();

    for (let num of nums) {
        let charCount = count[num];
        count[num] = charCount ? charCount + 1 : 1;
    }

    for (let key in count) {
        if (map.has(count[key])) {
            return false;
        } else {
            map.set(count[key], 1);
        }
    }
    return true;
};
