/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const len = nums.length;
  let pre = nums[0];
  let cur = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    let temp = cur;
    cur = Math.max(pre + nums[i], cur);
    pre = temp;
  }

  return cur;
};
