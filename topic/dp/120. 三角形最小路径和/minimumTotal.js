/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const m = triangle.length;
    dp = triangle;
    // dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + nums[i][j]
    for (let i = m - 1; i >= 0; i--) {
      for (let j = triangle[i].length - 1; j >= 0; j--) {
        if (i === m - 1) {
          dp[i][j] = triangle[i][j];
          continue;
        }
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
    return dp[0][0];
  };
  