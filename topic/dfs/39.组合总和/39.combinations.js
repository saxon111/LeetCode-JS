const combinationSum = (candidates, target) => {
  const res = [];
  const dfs = (idx, combine, sum) => {
    if (sum >= target) {
      if (sum === target) {
        res.push(combine.slice());
      }
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      combine.push(candidates[i]); // 做选择
      dfs(i, combine, sum + candidates[i]);
      combine.pop(); // 撤销选择
    }
  };
  dfs(0, [], 0);

  return res;
};
