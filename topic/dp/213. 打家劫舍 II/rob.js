/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  pre1 = nums[0];
  cur1 = Math.max(nums[0], nums[1]);

  pre2 = nums[1];
  cur2 = Math.max(nums[1], nums[2]);

  for (let i = 2; i < nums.length - 1; i++) {
    let temp = cur1;
    cur1 = Math.max(pre1 + nums[i], cur1);
    pre1 = temp;
  }

  for (let i = 3; i < nums.length; i++) {
    let temp = cur2;
    cur2 = Math.max(pre2 + nums[i], cur2);
    pre2 = temp;
  }

  return Math.max(cur1, cur2);
};
