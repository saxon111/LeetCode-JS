/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(2);
  for (let i = 0; i <= 1; i++) {
    dp[i] = new Array(n + 1);
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        dp[i % 2][j] = 0;
        continue;
      }
      dp[i % 2][j] = Math.max(dp[i % 2][j - 1], dp[(i - 1) % 2][j]);
      if (text1[i - 1] === text2[j - 1]) {
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
      }
    }
  }
  return dp[m % 2][n];
};
