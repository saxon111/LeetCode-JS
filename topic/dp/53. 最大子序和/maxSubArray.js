/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  const dp = new Array(n);
  let pre = nums[0];
  let res = nums[0];
  for (let i = 1; i < n; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    res = Math.max(res, pre);
  }
  return res;
};
