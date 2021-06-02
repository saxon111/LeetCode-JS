/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // dp[i][j]
  if (s.length === 0) return 0;
  const n = s.length;
  let res = 0;
  for (let mid = 0; mid < n; mid++) {
    let i = mid;
    let j = mid;
    while (i >= 0 && j < n && s[i] === s[j]) {
      i--;
      j++;
      res++;
    }
    i = mid;
    j = mid + 1;
    while (i >= 0 && j < n && s[i] === s[j]) {
      i--;
      j++;
      res++;
    }
  }
  return res;
};
