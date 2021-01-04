/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const helper = (arr, target, flag) => {
    // flag = true 找第一个，false找最后一个
    let start = 0,
      end = arr.length - 1;
    while (start + 1 < end) {
      const mid = start + ((end - start) >> 1);
      if (flag) {
        if (nums[mid] >= target) {
          end = mid;
        } else {
          start = mid;
        }
      } else {
        if (nums[mid] > target) {
          end = mid;
        } else {
          start = mid;
        }
      }
    }
    if (flag) {
      if (nums[start] === target) {
        return start;
      }
      if (nums[end] === target) {
        return end;
      }
      return -1;
    } else {
      if (nums[end] === target) {
        return end;
      }
      if (nums[start] === target) {
        return start;
      }
      return -1;
    }
  };
  const start = helper(nums, target, true);
  const end = helper(nums, target, false);
  if (start === -1 && end === -1) return 0;
  return end - start + 1;
};
