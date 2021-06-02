/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return 0;
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(2);
  for (let i = 0; i < 2; i++) {
    dp[i] = new Array(n);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[0][0] = grid[0][0];
        continue;
      }
      if (i === 0) {
        dp[i % 2][j] = dp[i % 2][j - 1] + grid[i][j];
        continue;
      }

      if (j === 0) {
        dp[i % 2][j] = dp[(i - 1) % 2][j] + grid[i][j];
        continue;
      }
      dp[i % 2][j] =
        Math.min(dp[(i - 1) % 2][j], dp[i % 2][j - 1]) + grid[i][j];
    }
  }
  return dp[(m - 1) % 2][n - 1];
};
