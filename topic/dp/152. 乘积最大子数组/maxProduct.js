/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const maxTmp = max;
    max = Math.max(max * nums[i], nums[i], min * nums[i]);
    min = Math.min(maxTmp * nums[i], nums[i], min * nums[i]);
    ans = Math.max(max, ans);
  }
  return ans;
};
