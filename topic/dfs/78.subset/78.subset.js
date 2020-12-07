// 思路一:

const subsets = function (nums) {
  const res = [];
  if (nums === null) {
    return res;
  }
  dfs(nums, 0, [], res);
  return res;
};

// 递归的定义
const dfs = function (nums, index, subset, results) {
  // 递归的出口
  if (index === nums.length) {
    results.push(subset.slice());
    return;
  }
  // 递归的拆解
  // 选 nums[index]
  subset.push(nums[index]);
  dfs(nums, index + 1, subset, results);
  // 不选 nums[index]
  subset.pop();
  dfs(nums, index + 1, subset, results);
};

// 思路二:

const subsets2 = function (nums) {
  const res = [];

  const dfs = (idx, subset) => {
    res.push(subset.slice());
    for (let i = idx; i < nums.length; i++) {
      subset.push(nums[i]);
      dfs(i + 1, subset);
      subset.pop();
    }
  };
  dfs(0, []);
  return res;
};
