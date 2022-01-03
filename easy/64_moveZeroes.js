/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

 

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
 

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

Follow up: Could you minimize the total number of operations done?
*/

const moveZeroes = (nums) => {
    let zeroCounter = 0;
    let nonZeros = [];

    for (let num of nums) {
        if (num === 0) {
            zeroCounter++;
        } else {
            nonZeros.push(num);
        }
    }
    for (let i = 0; i < nonZeros.length; i++) {
        if (nums[i] !== nonZeros[i]) {
            nums[i] = nonZeros[i];
        }
    }

    for (let i = nums.length - zeroCounter; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};

const moveZeroes1 = (nums) => {
    let mid = 0;
    let current = 0;

    while (current < nums.length) {
        if (nums[current] !== 0) {
            [nums[mid], nums[current]] = [nums[current], nums[mid]];
            mid++;
        }
        current++;
    }
    return nums;
};

const moveZeroes2 = (nums) => {
    let zeroValueIdx = 0;
    let current = 0;

    while (current < nums.length) {
        if (nums[current] !== 0) {
            nums[zeroValueIdx] = nums[current];
            zeroValueIdx++;
        }
        current++;
    }

    for (let i = zeroValueIdx; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeroes2([0, 1, 0, 3, 12]));
