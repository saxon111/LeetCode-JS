// 思路1:

var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return max;
};

// 思路2:双指针
var maxArea = function (height) {
  let max = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    const cur = Math.min(height[right], height[left]) * (right - left);
    if (height[right] > height[left]) {
      left++;
    } else {
      right--;
    }
    max = Math.max(max, cur);
  }
  return max;
};
