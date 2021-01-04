/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  if (target <= 2) return [];
  const res = [];
  let left = 1,
    right = 2,
    sum = 3;
  while (left < target / 2) {
    if (sum < target) {
      right++;
      sum += right;
    } else if (sum > target) {
      left++;
      sum -= left - 1;
    } else {
      const arr = [];
      for (let i = left; i <= right; i++) {
        arr.push(i);
      }
      res.push(arr);
      sum -= left;
      left++;
      right++;
      sum += right;
    }
  }
  return res;
};
