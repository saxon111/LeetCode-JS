/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s === null || s.length <= 1) return s;

  const n = s.length;
  const dp = Array.from(new Array(n), () => new Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  let start = 0;
  let longest = 1;
  for (i = 0; i < n - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    if (dp[i][i + 1]) {
      longest = 2;
      start = i;
    }
  }
  for (len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1;
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      if (dp[i][j] && len > longest) {
        start = i;
        longest = len;
      }
    }
  }
  return s.substring(start, start + longest);
};
