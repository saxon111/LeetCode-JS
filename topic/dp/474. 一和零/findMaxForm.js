/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const T = strs.length;
  const counts0 = new Array(T).fill(0);
  const counts1 = new Array(T).fill(0);

  for (let i in strs) {
    for (let s of strs[i]) {
      if (s === "0") {
        counts0[i] += 1;
      } else if (s === "1") {
        counts1[i] += 1;
      }
    }
  }

  const dp = new Array(T + 1);
  for (let i = 0; i <= T; i++) {
    dp[i] = new Array(m + 1);
  }
  for (let i = 0; i <= T; i++) {
    for (let j = 0; j <= m; j++) {
      dp[i][j] = new Array(n + 1);
    }
  }

  for (let i = 0; i <= T; i++) {
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        if (i === 0) {
          dp[i][j][k] = 0;
          continue;
        }
        dp[i][j][k] = dp[i - 1][j][k];
        if (j >= counts0[i - 1] && k >= counts1[i - 1]) {
          dp[i][j][k] = Math.max(
            dp[i][j][k],
            dp[i - 1][j - counts0[i - 1]][k - counts1[i - 1]] + 1
          );
        }
      }
    }
  }
  let res = 0;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      res = Math.max(res, dp[T][i][j]);
    }
  }
  return res;
};
