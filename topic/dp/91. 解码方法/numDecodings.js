/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function (s) {
  if (s.length === 0 || +s[0] === 0) return 0;

  const n = s.length;
  const dp = new Array(3).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    dp[i % 3] = 0;
    if (s[i - 1] !== "0") {
      dp[i % 3] += dp[(i - 1) % 3];
    }
    if ((i >= 2 && s[i - 2] === "1") || (s[i - 2] === "2" && +s[i - 1] <= 6)) {
      dp[i % 3] += dp[(i - 2) % 3];
    }
  }
  return dp[n % 3];
};
