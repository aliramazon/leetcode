/* Given an integer n and an integer array rounds. We have a circular track which consists of n sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]

Return an array of the most visited sectors sorted in ascending order.

Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).

Example 1:
Input: n = 4, rounds = [1,3,1,2]
Output: [1,2]
Explanation: The marathon starts at sector 1. The order of the visited sectors is as follows:
1 --> 2 --> 3 (end of round 1) --> 4 --> 1 (end of round 2) --> 2 (end of round 3 and the marathon)
We can see that both sectors 1 and 2 are visited twice and they are the most visited sectors. Sectors 3 and 4 are visited only once.

Example 2:
Input: n = 2, rounds = [2,1,2,1,2,1,2,1,2]
Output: [2]

Example 3:
Input: n = 7, rounds = [1,3,5,7]
Output: [1,2,3,4,5,6,7]
 

Constraints:
2 <= n <= 100
1 <= m <= 100
rounds.length == m + 1
1 <= rounds[i] <= n
rounds[i] != rounds[i + 1] for 0 <= i < m */

// find most visited sector in circular track

const mostVisited = (n, rounds) => {
    const count = {};
    for (let i = 0; i < rounds.length - 1; i++) {
        let prev = i === 0 ? rounds[i] : rounds[i] + 1;
        let next = rounds[i + 1];
        if (prev <= next) {
            while (prev <= next) {
                count[prev] ? count[prev]++ : (count[prev] = 1);
                prev++;
            }

            if (prev > next) continue;
        }
        j = prev;
        while (j <= n) {
            count[j] ? count[j]++ : (count[j] = 1);
            j++;
        }
        let k = 1;
        while (k <= next) {
            count[k] ? count[k]++ : (count[k] = 1);
            k++;
        }
    }

    let max = rounds[0];

    for (let key in count) {
        if (count[key] > count[max]) {
            max = key;
        }
    }

    return Object.keys(count)
        .filter((key) => count[key] === count[max])
        .sort((a, b) => a - b);
};

const mostVisited1 = (n, rounds) => {
    const first = rounds[0];
    const last = rounds[rounds.length - 1];

    const result = [];

    if (first <= last) {
        for (let i = first; i <= last; i++) result.push(i);
    } else {
        for (let i = 1; i <= last; i++) result.push(i);
        for (let i = first; i <= n; i++) result.push(i);
    }

    return result;
};

console.log(mostVisited(7, [1, 3, 5, 7]));
console.log(mostVisited(6, [4, 5]));
console.log(mostVisited(4, [1, 3, 2])); // 1,2,3,4,1,2
