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

console.log(minimumAbsDifference([40, 11, 26, 27, -20]));
