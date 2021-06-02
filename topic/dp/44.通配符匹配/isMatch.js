var isMatch = function (s, p) {
  let n = s.length;
  let m = p.length;
  let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= m; j++) {
    if (p[j - 1] == "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == "?") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == "*") {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }
  return dp[n][m];
};
