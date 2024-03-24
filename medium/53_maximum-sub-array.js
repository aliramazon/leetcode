/* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:

Input: nums = [1]
Output: 1

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

const largestSubArraySum = function (nums) {
    let sum = 0;
    let largestSubSum = 0;
    let largestNumber = nums[0];

    for (let num of nums) {
        if (largestNumber < num) {
            largestNumber = num;
        }
        if (sum + num < 0) {
            sum = 0;
            continue;
        }

        sum += num;

        if (largestSubSum < sum) {
            largestSubSum = sum;
        }
    }
    return largestNumber <= 0 ? largestNumber : largestSubSum;
};

console.log(largestSubArraySum([1]));
console.log(largestSubArraySum([5, 4, -1, 7, 8]));
console.log(largestSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(largestSubArraySum([-2, -3, -4, -9, 1]));
console.log(largestSubArraySum([-1, -2]));
console.log(largestSubArraySum([0]));
