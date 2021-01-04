/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  const repeat = new Set();
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }
    if (repeat.has(nums[i])) {
      return false;
    }
    repeat.add(nums[i]);
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
  }
  return max - min < 5;
};
