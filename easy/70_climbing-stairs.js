/* 
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// const climbStairs = (n) => {
//     let memo = {};
//     const climb = (n) => {
//         if (n <= 2) return n;
//         if (!memo[n]) {
//             memo[n] = climb(n - 1) + climb(n - 2);
//         }
//         return memo[n];
//     };

//     return climb(n);
// };

const climbStairs = (n) => {
    let base = { 1: 1, 2: 2 };
    let prev = 2,
        prevPrev = 1,
        current;

    for (let i = 3; i <= n; i++) {
        current = prev + prevPrev;
        [prev, prevPrev] = [current, prev];
    }

    return n <= 2 ? base[n] : current;
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));
