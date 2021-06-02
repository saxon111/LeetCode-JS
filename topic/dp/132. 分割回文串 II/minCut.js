/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const n = s.length;
  const isValidate = (str) => {
    const len = str.length;
    const arr = new Array(len);
    for (let i = 0; i < len; i++) {
      arr[i] = new Array(len).fill(false);
    }
    for (let mid = 0; mid < len; mid++) {
      let i = mid;
      let j = mid;
      while (i >= 0 && j < len && s[i] === s[j]) {
        arr[i][j] = true;
        i--;
        j++;
      }
      i = mid - 1;
      j = mid;
      while (i >= 0 && j < len && s[i] === s[j]) {
        arr[i][j] = true;
        i--;
        j++;
      }
    }
    return arr;
  };
  const validate = isValidate(s);
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  // dp[i] = dp[j] + 1  s[j, i - 1]
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      // const str = s.substring(j, i)
      if (validate[j][i - 1]) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }
  return dp[n] - 1;
};
