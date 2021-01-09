/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const len = nums.length;
  if (len <= 1) return len;
  const dp = new Array(len).fill(1);
  const counts = new Array(len).fill(1);

  let longest = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[i] <= dp[j]) {
          dp[i] = dp[j] + 1;
          counts[i] = counts[j];
        } else if (dp[i] === dp[j] + 1) {
          counts[i] += counts[j];
        }
      }
    }
    longest = Math.max(longest, dp[i]);
  }

  let res = 0;
  for (let i = 0; i < len; i++) {
    if (dp[i] === longest) {
      res += counts[i];
    }
  }
  return res;
};
