var threeSum = function (nums) {
  let res = [];
  if (nums === null || nums.length < 3) return res;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1,
      k = nums.length - 1;
    let target = -nums[i];
    while (j < k) {
      let cur = nums[j] + nums[k];
      if (cur < target) {
        j++;
      } else if (cur > target) {
        k--;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return res;
};
