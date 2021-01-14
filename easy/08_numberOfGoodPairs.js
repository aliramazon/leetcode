/* 
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0
 
Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

*/

const numIdenticalPairs = (nums) => {
    const hash = {};
    let sum = 0;

    for (let num of nums) {
        if (hash[num] || hash[num] === 0) {
            hash[num] = hash[num] + 1;
            sum = sum + hash[num];
        } else {
            hash[num] = 0;
        }
    }
    return sum;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
