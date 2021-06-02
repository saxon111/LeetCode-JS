/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  if (s.length <= 1) return s.length;
  const n = s.length;
  const dp = Array.from(new Array(n), () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1] ? 2 : 1;
  }
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1;
      dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      if (s[i] === s[j]) {
        dp[i][j] = Math.max(dp[i][j], dp[i + 1][j - 1] + 2);
      }
    }
  }
  return dp[0][n - 1];
};
