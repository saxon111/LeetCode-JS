/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const numStr = String(num);
  const len = numStr.length;
  const dp = new Array(len);
  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    const numTwo = +numStr.substring(i - 1, i + 1);
    if (i === 1) {
      dp[i] = numTwo > 25 ? 1 : 2;
      continue;
    }
    dp[i] = dp[i - 1];
    if (numTwo <= 25 && numTwo >= 10) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[len - 1];
};
