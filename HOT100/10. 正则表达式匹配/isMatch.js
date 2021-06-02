/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length;
  const n = p.length;
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
        continue;
      }
      if (j === 0) {
        dp[i][j] = false;
        continue;
      }
      dp[i][j] = false;
      if (p[j - 1] !== "*") {
        if (i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === ".")) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      } else {
        if (j > 1) {
          dp[i][j] = dp[i][j - 2];
        }
        if (i > 0 && j > 1 && (s[i - 1] === p[j - 2] || p[j - 2] === ".")) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }
  return dp[m][n];
};
