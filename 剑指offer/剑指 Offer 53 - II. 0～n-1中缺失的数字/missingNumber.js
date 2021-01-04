/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let start = 0,
    end = nums.length - 1;
  while (start + 1 < end) {
    const mid = start + ((end - start) >> 1);
    if (nums[mid] === mid) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (nums[start] !== start) {
    return start;
  }
  if (nums[end] !== end) {
    return end;
  }
  return end + 1;
};
