//
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  if (s.length === 1) return 1;
  // s[i] !== s[i - 1] dp[i - 1]

  const len = s.length;
  // const dp = new Array(len).fill(1)
  let res = 0;
  let temp = 0;
  for (let i = 0; i < len; i++) {
    let j = i - 1;
    while (j >= 0 && s[i] !== s[j]) {
      j--;
    }
    temp = temp < i - j ? temp + 1 : i - j;
    res = Math.max(temp, res);
  }
  return res;
};

//
var lengthOfLongestSubstring = function (s) {
  let map = {};
  let left = 0;
  return s.split("").reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
};
