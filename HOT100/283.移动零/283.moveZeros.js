// 思路一，如果只能交换，不能直接写
var moveZeroes = function (nums) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
  }
  return nums;
};


// 思路二
var moveZeroes = function (nums) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[left] = nums[i];
      if (i !== left) {
        nums[i] = 0;
      }
      left++;
    }
  }
  return nums;
};


// 思路三 写的次数最小
var moveZeroes = function (nums) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== left) {
        nums[left] = nums[i];
      }
      left++;
    }
  }
  while (left < nums.length) {
    if (nums[left] !== 0) {
      nums[left] = 0;
    }
    left++;
  }
  return nums;
};
