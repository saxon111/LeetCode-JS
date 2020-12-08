// 思路一: 动态规划
const longestPalindrome = (s) => {
  if (s === null || s.length <= 1) return s;
  const n = s.length;
  const dp = new Array(n);

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(false);
  }
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  let start = 0,
    longest = 1;

  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    if (dp[i][i + 1]) {
      start = i;
      longest = 2;
    }
  }

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n + 1 - len; i++) {
      // [i....i + len - 1] i + len - 1 < n i < n + 1 - len
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

//思路2: 中心线扩展

const longestPalindrome = (s) => {
  if (s === null || s.length <= 1) return s;

  let longest = "";

  const getPalindrome = (s, left, right) => {
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) {
        break;
      }
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  };

  for (let i = 0; i < s.length; i++) {
    const addPalindrome = getPalindrome(s, i, i);
    if (longest.length < addPalindrome.length) {
      longest = addPalindrome;
    }
    const evenPalindrome = getPalindrome(s, i, i + 1);
    if (longest.length < evenPalindrome.length) {
      longest = evenPalindrome;
    }
  }
  return longest;
};
