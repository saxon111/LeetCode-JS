// 解法一: 自顶向下，记忆化递归
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const help = (n) => {
    if (n === 2) return 1;
    if (memo[n]) {
      return memo[n];
    }
    let res = -Infinity;
    for (let i = 1; i < n; i++) {
      res = Math.max(res, Math.max(i * (n - i), i * help(n - i)));
    }
    memo[n] = res;
    return res;
  };
  const memo = new Array(n + 1).fill(0);
  return help(n);
};

//解法二: 自底向上，动态规划
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[2] = 1;
  for (let i = 3; i < n + 1; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
};
