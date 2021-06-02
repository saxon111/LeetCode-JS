/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from(new Array(2), () => new Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
        continue;
      }
      if (i === 0) {
        dp[0][j] = obstacleGrid[i][j] === 0 ? dp[0][j - 1] : 0;
        continue;
      }
      if (j === 0) {
        dp[i % 2][0] = obstacleGrid[i][j] === 0 ? dp[(i - 1) % 2][0] : 0;
        continue;
      }
      dp[i % 2][j] =
        obstacleGrid[i][j] === 0 ? dp[(i - 1) % 2][j] + dp[i % 2][j - 1] : 0;
    }
  }
  return dp[(m - 1) % 2][n - 1];
};
