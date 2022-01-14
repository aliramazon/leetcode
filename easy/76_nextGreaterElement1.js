/* 
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
 

Constraints:
1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 104
All integers in nums1 and nums2 are unique.
All the integers of nums1 also appear in nums2.

Follow up: Could you find an O(nums1.length + nums2.length) solution?
*/

const findGreaterElement = (idx, nums) => {
    for (let i = idx + 1; i < nums.length; i++) {
        if (nums[idx] < nums[i]) {
            return nums[i];
        }
    }
    return -1;
};

const nextGreaterElement1BrutForce = (nums1, nums2) => {
    let set = new Set(nums1);
    let map = new Map();
    let result = [];

    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i];
        if (set.has(num)) {
            map.set(num, i);
        }
    }

    for (let num of nums1) {
        let idx = map.get(num);
        if (idx || idx === 0) {
            result.push(findGreaterElement(idx, nums2));
        }
    }

    return result;
};

const nextGreaterElementOptimized = (nums1, nums2) => {
    let map = new Map();
    let stack = [];
    let result = [];

    for (let i = 0; i < nums2.length; i++) {
        let num2 = nums2[i];
        while (stack.length > 0 && num2 > stack[stack.length - 1]) {
            map.set(stack.pop(), num2);
        }
        stack.push(num2);
    }
    console.log(map);

    for (let j = 0; j < nums1.length; j++) {
        let num1 = nums1[j];
        let greaterElement = map.get(num1);
        result.push(greaterElement ? greaterElement : -1);
    }
    return result;
};

console.log(nextGreaterElementOptimized([4, 1, 2], [1, 3, 4, 2]));
