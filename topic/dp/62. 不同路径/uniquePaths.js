/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from(new Array(2), () => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[0][0] = 1;
        continue;
      }
      if (i === 0) {
        dp[0][j] = 1;
        continue;
      }
      if (j === 0) {
        dp[i % 2][0] = 1;
        continue;
      }
      dp[i % 2][j] = dp[(i - 1) % 2][j] + dp[i % 2][j - 1];
    }
  }
  return dp[(m - 1) % 2][n - 1];
};
