/* Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

*/

const mergeTwoSortedArray = (arr1, arr2) => {
    let mergedArr = [];
    let length = arr1.length + arr2.length;
    let i = 0,
        j = 0;

    while (mergedArr.length < length) {
        if (arr1[i] < arr2[j] || arr2.length === j) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    return mergedArr;
};

let arr1 = [0],
    arr2 = [1];

let arr10 = [],
    arr20 = [0];

let arr100 = [1, 2, 18, 23, 90],
    arr200 = [4, 6, 19, 34];

console.log(mergeTwoSortedArray(arr1, arr2));
console.log(mergeTwoSortedArray(arr10, arr20));
console.log(mergeTwoSortedArray(arr100, arr200));
