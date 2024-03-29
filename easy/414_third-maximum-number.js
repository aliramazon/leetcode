/* Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
 

Constraints:
1 <= nums.length <= 104
-2^31 <= nums[i] <= 2^31 - 1 */

const thirdMax = (nums) => {
    let [biggest1, biggest2, biggest3] = [null, null, null];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num === biggest1 || num === biggest2) continue;
        if (biggest1 === null || biggest1 < num) {
            biggest3 = biggest2;
            biggest2 = biggest1;
            biggest1 = num;
        } else if (biggest2 === null || biggest2 < num) {
            biggest3 = biggest2;
            biggest2 = num;
        } else if (biggest3 === null || biggest3 < num) {
            biggest3 = num;
        }
    }

    if (biggest2 === null || biggest3 === null) return biggest1;

    return biggest3;
};
