/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:
n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1
Follow-up: Could you solve the problem in linear time and in O(1) space? 
*/

const majorityElement = (nums) => {
    const numCounter = {};
    let majorElement = nums[0];

    for (let num of nums) {
        if (!numCounter[num]) {
            numCounter[num] = 1;
        } else {
            numCounter[num]++;
        }
        if (numCounter[majorElement] < numCounter[num]) {
            majorElement = num;
        }
    }

    return majorElement;
};

const majorityElementBoyerMoore = (nums) => {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
        if (count === 0) candidate = num;
        count += num === candidate ? 1 : -1;
    }

    return candidate;
};
