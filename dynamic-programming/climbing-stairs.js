// 70. Climbing Stairs
// Easy
// https://leetcode.com/problems/climbing-stairs/

//* You are climbing a staircase. It takes n steps to reach the top.
//* Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * * Example 1:
 * * Input: n = 2
 * * Output: 2

* * Example 2:
* * Input: n = 3
* * Output: 3

*/

function climbStairs(n) {
  if (n === 1) {
      return 1; // basecase
  }
  let dp = new Array(n + 1); // create array to store the number of ways to reach each step
  dp[1] = 1; // there is 1 way to reach the first step
  dp[2] = 2; // there are 2 ways to reach the second step: two single steps or one double step

  for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]; // the number of ways to reach the ith step is the sum of the ways to reach (i-1)th and (i-2)th steps
  }

  return dp[n]; // return # of ways to reach nth step
}
