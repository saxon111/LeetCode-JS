/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  if (nums.length === 0) return 0;
  const n = nums.length;
  const val = new Array(n + 2).fill(1);
  const dp = Array.from(new Array(n + 2), () => new Array(n + 2).fill(0));
  for (let i = 1; i <= n; i++) {
    val[i] = nums[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 2; j < n + 2; j++) {
      for (let k = i + 1; k < j; k++) {
        let sum = dp[i][k] + dp[k][j] + val[i] * val[k] * val[j];
        dp[i][j] = Math.max(sum, dp[i][j]);
      }
    }
  }
  return dp[0][n + 1];
};
