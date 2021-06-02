/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (!s || s.length === 0) return 0;
  const n = s.length;
  let max = 0;
  const dp = new Array(n).fill(0);
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")") {
      if (s[i - 1] === "(") {
        if (i - 2 > 0) {
          dp[i] = dp[i - 2] + 2;
        } else {
          dp[i] = 2;
        }
      } else if (i - 1 - dp[i - 1] >= 0 && s[i - 1 - dp[i - 1]] === "(") {
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - 2 - dp[i - 1]] : 0) + 2;
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
