// dp
var lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len === 0 || len === 1) return len;
  const dp = new Array(len).fill(1);
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(dp[i], res);
  }
  return res;
};

//greedy+binary search
var lengthOfLIS = function (nums) {
  let res = 1;
  if (nums === null || nums.length === 0) return 0;

  const firstGTE = (nums, r, target) => {
    let l = 1;
    while (l + 1 < r) {
      const mid = l + ((r - l) >> 1);
      if (nums[mid] > target) {
        r = mid;
      } else {
        l = mid;
      }
    }
    if (nums[l] >= target) {
      return l;
    }
    return r;
  };
  const len = nums.length;
  const d = new Array(len + 1);
  d[res] = nums[0];

  for (let i = 1; i < len; i++) {
    if (nums[i] > d[res]) {
      d[++res] = nums[i];
    } else {
      const pos = firstGTE(d, res, nums[i]);
      d[pos] = nums[i];
    }
  }
  return res;
};
