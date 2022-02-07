/* 
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Example 2:
Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Example 3:
Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
 

Constraints:
2 <= arr.length <= 105
-106 <= arr[i] <= 106
*/

const minimumAbsDifference = (nums) => {
    nums.sort((a, b) => a - b);
    let minDiff = nums[1] - nums[0];
    let result = [];

    for (let i = 0; i < nums.length - 1; i++) {
        let currentDif = nums[i + 1] - nums[i];
        let [current, next] = [nums[i], [nums[i + 1]]];
        if (minDiff > currentDif) {
            minDiff = currentDif;
            result = [];
            result.push([current, next]);
        } else if (minDiff === currentDif) {
            result.push([current, next]);
        }
    }
    return result;
};

const getMinAndMax = (nums) => {
    let min = nums[0],
        max = nums[0];
    for (let num of nums) {
        if (min > num) min = num;
        if (max < num) max = num;
    }
    return [min, max];
};
const minimumAbsDifference1 = (nums) => {
    const [min, max] = getMinAndMax(nums);
    let shift = min < 0 ? Math.abs(min) : 0;
    let line = Array(max - min + 1).fill(0);
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        line[nums[i] + shift] = 1;
    }

    let prev = min + shift;
    let minDiff = max - min;

    for (let i = prev + 1; i < line.length; i++) {
        if (line[i] === 0) continue;
        let currentDif = i - prev;
        if (minDiff === currentDif) {
            result.push([prev - shift, i - shift]);
        } else if (minDiff > currentDif) {
            result = [];
            minDiff = currentDif;
            result.push([prev - shift, i - shift]);
        }
        prev = i;
    }
    return result;
};
console.log(minimumAbsDifference1([40, 11, 26, 27, -20]));
console.log(minimumAbsDifference1([4, 2, 1, 3]));
console.log(minimumAbsDifference1([3, 8, -10, 23, 19, -4, -14, 27]));
