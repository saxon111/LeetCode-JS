/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
  const dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(6 * n + 1).fill(0);
  }

  for (let i = 1; i <= 6; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= 6 * i; j++) {
      for (let cur = 1; cur <= 6; cur++) {
        if (j <= cur) {
          break;
        }
        dp[i][j] += dp[i - 1][j - cur];
      }
    }
  }

  const res = [];
  const all = Math.pow(6, n);

  for (let i = n; i <= 6 * n; i++) {
    res.push(dp[n][i] / all);
  }
  return res;
};
