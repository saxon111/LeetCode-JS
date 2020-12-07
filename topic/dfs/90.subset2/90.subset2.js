var subsetsWithDup = function (nums) {
  const res = [];
  if (nums === null) return res;
  nums.sort((a, b) => a - b);
  const dfs = (idx, subset) => {
    res.push(subset.slice());
    for (let i = idx; i < nums.length; i++) {
      if (i !== 0 && nums[i] === nums[i - 1] && i > idx) {
        continue;
      }
      subset.push(nums[i]);
      dfs(i + 1, subset);
      subset.pop();
    }
  };
  dfs(0, []);
  return res;
};
