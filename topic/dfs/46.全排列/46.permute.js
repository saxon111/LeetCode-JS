const dfs = (nums, path, visited, res) => {
  if (path.length === nums.length) {
    res.push(path.slice());
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }
    path.push(nums[i]);
    visited[i] = true;
    dfs(nums, path, visited, res);
    path.pop();
    visited[i] = false;
  }
};
var permute = function (nums) {
  const res = [];
  const visited = new Array(nums.length).fill(false);
  dfs(nums, [], visited, res);
  return res;
};
