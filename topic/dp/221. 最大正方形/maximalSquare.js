/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array.from(new Array(2), () => new Array(n));
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== "1") {
        dp[i % 2][j] = 0;
        continue;
      }
      dp[i % 2][j] = 1;
      if (i > 0 && j > 0) {
        dp[i % 2][j] =
          Math.min(
            dp[i % 2][j - 1],
            dp[(i - 1) % 2][j],
            dp[(i - 1) % 2][j - 1]
          ) + 1;
      }
      res = Math.max(res, dp[i % 2][j] * dp[i % 2][j]);
    }
  }
  return res;
};
