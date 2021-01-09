/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  const sort = (a, b) => {
    return b[0] === a[0] ? b[1] - a[1] : a[0] - b[0];
  };
  envelopes.sort(sort);

  const len = envelopes.length;
  const dp = new Array(len).fill(1);

  let res = 0;
  for (let i = 0; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][1] > envelopes[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};
