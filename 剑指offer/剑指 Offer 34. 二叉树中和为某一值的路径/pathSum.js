var pathSum = function (root, sum) {
  const res = [];
  const path = [];
  const dfs = (root, s) => {
    if (!root) {
      return;
    }
    s -= root.val;
    path.push(root.val);
    if (s === 0 && !root.left && !root.right) {
      res.push(path.slice());
    }
    dfs(root.left, s, path);
    dfs(root.right, s, path);
    path.pop();
  };

  dfs(root, sum);
  return res;
};
