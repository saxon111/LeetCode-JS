/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length === 0) return 0;
  const n = prices.length;
  if (k > n / 2) {
    let ans = 0;
    for (let i = 0; i < n - 1; i++) {
      if (prices[i + 1] - prices[i] > 0) {
        ans += prices[i + 1] - prices[i];
      }
    }
    return ans;
  }
  const dp = new Array(2);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(2 * k + 1);
  }
  for (let i = 0; i < 2 * k + 1; i++) {
    dp[0][i] = -Infinity;
  }
  dp[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    dp[i % 2][0] = 0;
    for (let j = 1; j < 2 * k + 1; j++) {
      dp[i % 2][j] = Math.max(
        dp[(i - 1) % 2][j - 1] + (j % 2 === 0 ? 1 : -1) * prices[i - 1],
        dp[(i - 1) % 2][j]
      );
    }
  }
  let res = 0;
  for (let i = 0; i < 2 * k + 1; i++) {
    res = Math.max(res, dp[n % 2][i]);
  }
  return res;
};
