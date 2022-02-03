/* 
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

Example 2:
Input: nums = [1,2,3,4]
Output: 24

Example 3:
Input: nums = [-1,-2,-3]
Output: -6
 

Constraints:
3 <= nums.length <= 104
-1000 <= nums[i] <= 1000
*/

const maximumProduct = (nums) => {
    let firstMax = null;
    let secondMax = null;
    let thirdMax = null;
    let firstMin = null;
    let secondMin = null;

    for (let num of nums) {
        if (firstMax === null || firstMax < num) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = num;
        } else if (secondMax === null || secondMax < num) {
            thirdMax = secondMax;
            secondMax = num;
        } else if (thirdMax === null || thirdMax < num) {
            thirdMax = num;
        }

        if (firstMin === null || firstMin > num) {
            secondMin = firstMin;
            firstMin = num;
        } else if (secondMin === null || secondMin > num) {
            secondMin = num;
        }
    }
    let firstOption = firstMin * secondMin * firstMax;
    let secondOption = firstMax * secondMax * thirdMax;

    return firstOption > secondOption ? firstOption : secondOption;
};
