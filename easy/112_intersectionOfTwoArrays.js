/* Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once? */

const intersect = (nums1, nums2) => {
    let smaller, larger;
    if (nums1.length < nums2.length) {
        smaller = nums1;
        larger = nums2;
    } else {
        smaller = nums2;
        larger = nums1;
    }

    const countSmaller = {};
    const result = [];
    for (let num of smaller) {
        if (countSmaller[num]) {
            countSmaller[num]++;
        } else {
            countSmaller[num] = 1;
        }
    }

    for (let num of larger) {
        if (countSmaller[num] > 0) {
            result.push(num);
            countSmaller[num]--;
        }
    }
    return result;
};

const intersect1 = (nums1, nums2) => {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            i++;
        }
    }
    return result;
};

let nums1 = [1, 2, 3, 3, 4, 6, 6, 8, 9, 10, 10];
let nums2 = [2, 3, 3, 8, 10, 10, 10];
console.log(intersect1(nums1, nums2));
