/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array.from(new Array(m), () => new Array(n).fill(0));
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "0") {
        continue;
      }
      dp[i][j] = j === 0 ? 1 : dp[i][j - 1] + 1;
      let width = dp[i][j];
      let area = width;
      for (let k = i - 1; k >= 0; k--) {
        width = Math.min(width, dp[k][j]);
        area = Math.max(area, width * (i - k + 1));
      }
      res = Math.max(area, res);
    }
  }
  return res;
};
