var maxValue = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }
  return dp[m][n];
};
